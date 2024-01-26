import z from 'zod'

export const validator = z.object({
  expectedAmount: z.number(),
})
