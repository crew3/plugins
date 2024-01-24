import z from 'zod'

export const validator = z.object({
  rpcUrl: z.string(),
  nftContractAddress: z.string(),
  tokenId: z.number(),
  chainId: z.number(),
})
