import assert from "http-assert";
import { singleton } from "tsyringe";

import { AuthService, Protected } from "@src/auth/services/auth.service";
import { AuthTokenService } from "@src/auth/services/auth-token/auth-token.service";
import { UserRepository } from "@src/user/repositories";
import { GetUserParams } from "@src/user/routes/get-anonymous-user/get-anonymous-user.router";
import { AnonymousUserResponseOutput } from "@src/user/schemas/user.schema";
import {
  StaleAnonymousUsersCleanerOptions,
  StaleAnonymousUsersCleanerService
} from "@src/user/services/stale-anonymous-users-cleaner/stale-anonymous-users-cleaner.service";

@singleton()
export class UserController {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly authService: AuthService,
    private readonly anonymousUserAuthService: AuthTokenService,
    private readonly staleAnonymousUsersCleanerService: StaleAnonymousUsersCleanerService
  ) {}

  async create(): Promise<AnonymousUserResponseOutput> {
    const user = await this.userRepository.create();
    return {
      data: user,
      token: this.anonymousUserAuthService.signTokenFor({ id: user.id })
    };
  }

  @Protected([{ action: "read", subject: "User" }])
  async getById({ id }: GetUserParams): Promise<AnonymousUserResponseOutput> {
    const user = await this.userRepository.accessibleBy(this.authService.ability, "read").findById(id);

    assert(user, 404);

    return { data: user };
  }

  async cleanUpStaleAnonymousUsers(options: StaleAnonymousUsersCleanerOptions) {
    await this.staleAnonymousUsersCleanerService.cleanUpStaleAnonymousUsers(options);
  }
}
