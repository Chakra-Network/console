import type { QueryKey, UseQueryOptions } from "react-query";
import { useMutation, useQuery, useQueryClient } from "react-query";
import type { ApiManagedWalletOutput } from "@akashnetwork/http-sdk";

import { managedWalletHttpService } from "@src/services/managed-wallet-http/managed-wallet-http.service";

const MANAGED_WALLET = "MANAGED_WALLET";

export function useManagedWalletQuery(userId?: string, options?: Omit<UseQueryOptions<ApiManagedWalletOutput | undefined>, "queryKey" | "queryFn">) {
  return useQuery(
    [MANAGED_WALLET, userId || ""] as QueryKey,
    async () => {
      if (userId) {
        return await managedWalletHttpService.getWallet(userId);
      }
    },
    {
      enabled: !!userId,
      staleTime: Infinity,
      ...options
    }
  );
}

export function useCreateManagedWalletMutation() {
  const queryClient = useQueryClient();
  return useMutation(async (userId: string) => await managedWalletHttpService.createWallet(userId), {
    onSuccess: response => {
      queryClient.setQueryData([MANAGED_WALLET, response.userId], () => response);
    }
  });
}
