import { AuthzHttpService, BalanceHttpService, DepositDeploymentGrant } from "@akashnetwork/http-sdk";
import { LoggerService } from "@akashnetwork/logging";
import { singleton } from "tsyringe";

import { BatchSigningClientService, ExecDepositDeploymentMsgOptions, RpcMessageService } from "@src/billing/services";
import { BlockHttpService } from "@src/chain/services/block-http/block-http.service";
import { InjectSentry, Sentry } from "@src/core/providers/sentry.provider";
import { SentryEventService } from "@src/core/services/sentry-event/sentry-event.service";
import { TopUpSummarizer } from "@src/deployment/lib/top-up-summarizer/top-up-summarizer";
import { DrainingDeploymentService } from "@src/deployment/services/draining-deployment/draining-deployment.service";
import { TopUpCustodialBalanceService } from "@src/deployment/services/top-up-custodial-balance/top-up-custodial-balance.service";
import { TopUpToolsService } from "@src/deployment/services/top-up-tools/top-up-tools.service";
import { DeploymentsRefiller, TopUpDeploymentsOptions } from "@src/deployment/types/deployments-refiller";

interface Balances {
  denom: string;
  feesLimit: number;
  deploymentLimit: number;
  balance: number;
  feesBalance?: number;
}

interface TopUpSummary {
  deploymentCount: number;
  minPredictedClosedHeight: number;
  maxPredictedClosedHeight: number;
  insufficientBalanceCount: number;
}

@singleton()
export class TopUpCustodialDeploymentsService implements DeploymentsRefiller {
  private readonly CONCURRENCY = 10;

  private readonly MIN_FEES_AVAILABLE = 5000;

  private readonly logger = LoggerService.forContext(TopUpCustodialDeploymentsService.name);

  constructor(
    private readonly topUpToolsService: TopUpToolsService,
    private readonly authzHttpService: AuthzHttpService,
    private readonly balanceHttpService: BalanceHttpService,
    private readonly drainingDeploymentService: DrainingDeploymentService,
    private readonly rpcClientService: RpcMessageService,
    private readonly blockHttpService: BlockHttpService,
    @InjectSentry() private readonly sentry: Sentry,
    private readonly sentryEventService: SentryEventService
  ) {}

  async topUpDeployments(options: TopUpDeploymentsOptions) {
    const summarizer = new TopUpSummarizer();
    summarizer.set("startBlockHeight", await this.blockHttpService.getCurrentHeight());

    const topUpAllCustodialDeployments = this.topUpToolsService.pairs.map(async ({ wallet, client }) => {
      const address = await wallet.getFirstAddress();
      await this.authzHttpService.paginateDepositDeploymentGrants({ grantee: address, limit: this.CONCURRENCY }, async grants => {
        await Promise.all(grants.map(async grant => this.topUpForGrant(grant, client, options, summarizer)));
      });
    });
    await Promise.all(topUpAllCustodialDeployments);

    summarizer.set("endBlockHeight", await this.blockHttpService.getCurrentHeight());

    const summary = summarizer.summarize();
    this.logger.info({ event: "TOP_UP_SUMMARY", summary, dryRun: options.dryRun });

    if (summary.walletsTopUpErrorCount || summary.deploymentTopUpErrorCount) {
      const eventId = this.sentry.captureEvent(this.sentryEventService.toEvent({ message: "Top up deployments error", summary }));
      this.logger.debug({ event: "SENTRY_EVENT_REPORTED", eventId });
    }
  }

  private async topUpForGrant(
    grant: DepositDeploymentGrant,
    client: BatchSigningClientService,
    options: TopUpDeploymentsOptions,
    summary: TopUpSummarizer
  ): Promise<TopUpSummary> {
    summary.inc("walletsCount");
    const owner = grant.granter;
    const { grantee } = grant;
    const drainingDeployments = await this.drainingDeploymentService.findDeployments(owner, grant.authorization.spend_limit.denom);
    summary.inc("deploymentCount", drainingDeployments.length);

    if (!drainingDeployments.length) {
      return;
    }

    const balancesService = new TopUpCustodialBalanceService(await this.collectWalletBalances(grant));
    let hasTopUp = false;
    let hasError = false;

    for (const { dseq, denom, blockRate, predictedClosedHeight } of drainingDeployments) {
      const amount = await this.calculateTopUpAmount(blockRate, balancesService.balances);

      if (!this.canTopUp(amount, balancesService.balances)) {
        this.logger.info({ event: "INSUFFICIENT_BALANCE", granter: owner, grantee, balances: balancesService.balances });
        summary.inc("insufficientBalanceCount");
        break;
      }

      balancesService.recordTx(amount, this.MIN_FEES_AVAILABLE);
      const topUpParams = {
        dseq,
        amount,
        denom,
        owner,
        grantee
      };
      const logParams = { params: { topUpParams, masterWallet: grantee }, dryRun: options.dryRun };

      try {
        await this.topUpDeployment(topUpParams, client, options);

        hasTopUp = true;
        summary.inc("deploymentTopUpCount");
        summary.ensurePredictedClosedHeight(predictedClosedHeight);

        this.logger.info({ event: "TOP_UP_SUCCESS", ...logParams });
      } catch (error) {
        this.logger.error({ event: "TOP_UP_DEPLOYMENT_ERROR", message: error.message, stack: error.stack, ...logParams });
        summary.inc("deploymentTopUpErrorCount");
        hasError = true;
      }
    }

    if (hasTopUp) {
      summary.inc("walletsTopUpCount");
    }

    if (hasError) {
      summary.inc("walletsTopUpErrorCount");
    }
  }

  private async collectWalletBalances(grant: DepositDeploymentGrant): Promise<Balances> {
    const denom = grant.authorization.spend_limit.denom;
    const deploymentLimit = parseFloat(grant.authorization.spend_limit.amount);

    const feesLimit = await this.retrieveFeesLimit(grant.granter, grant.grantee);
    const [{ amount: balance }, feesBalance] = await Promise.all([
      this.balanceHttpService.getBalance(grant.granter, denom),
      denom !== "uakt" && this.balanceHttpService.getBalance(grant.granter, "uakt")
    ]);

    return {
      denom,
      feesLimit,
      deploymentLimit,
      balance,
      feesBalance: feesBalance?.amount
    };
  }

  private async retrieveFeesLimit(granter: string, grantee: string) {
    const feesAllowance = await this.authzHttpService.getFeeAllowanceForGranterAndGrantee(granter, grantee);
    const feesSpendLimit = feesAllowance.allowance.spend_limit.find(limit => limit.denom === "uakt");

    return feesSpendLimit ? parseFloat(feesSpendLimit.amount) : 0;
  }

  private async calculateTopUpAmount(blockRate: number, balances: Balances) {
    const amount = await this.drainingDeploymentService.calculateTopUpAmount({ blockRate });

    if (balances.denom === "uakt") {
      const smallestAmount = Math.min(amount, balances.deploymentLimit - this.MIN_FEES_AVAILABLE, balances.balance - this.MIN_FEES_AVAILABLE);
      return Math.max(smallestAmount, 0);
    }

    return Math.min(amount, balances.deploymentLimit, balances.balance);
  }

  private canTopUp(amount: number, balances: Balances) {
    if (!amount) {
      return false;
    }

    const hasSufficientDeploymentLimit = amount <= balances.deploymentLimit;
    const hasSufficientFeesLimit = balances.feesLimit >= this.MIN_FEES_AVAILABLE;
    const hasSufficientFeesBalance = typeof balances.feesBalance === "undefined" || balances.feesBalance >= this.MIN_FEES_AVAILABLE;
    const hasSufficientBalance = balances.balance >= (balances.denom === "uakt" ? amount + this.MIN_FEES_AVAILABLE : amount);

    return hasSufficientDeploymentLimit && hasSufficientFeesLimit && hasSufficientFeesBalance && hasSufficientBalance;
  }

  async topUpDeployment({ grantee, ...messageInput }: ExecDepositDeploymentMsgOptions, client: BatchSigningClientService, options: TopUpDeploymentsOptions) {
    const message = this.rpcClientService.getExecDepositDeploymentMsg({ grantee, ...messageInput });

    if (!options.dryRun) {
      await client.executeTx([message], { fee: { granter: messageInput.owner } });
    }
  }
}
