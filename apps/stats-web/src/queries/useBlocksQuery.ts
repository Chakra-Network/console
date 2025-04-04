import type { QueryKey, UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { QueryKeys } from "./queryKeys"; // eslint-disable-line import-x/no-cycle

import { ApiUrlService } from "@/lib/apiUtils";
import type { Block } from "@/types";

async function getBlocks(limit: number): Promise<Block[]> {
  const response = await axios.get(ApiUrlService.blocks(limit));
  return response.data;
}

export function useBlocks(limit: number, options?: Omit<UseQueryOptions<Block[], Error, any, QueryKey>, "queryKey" | "queryFn">) {
  return useQuery<Block[], Error>({
    queryKey: QueryKeys.getBlocksKey(limit),
    queryFn: () => getBlocks(limit),
    ...options
  });
}
