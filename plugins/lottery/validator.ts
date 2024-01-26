import z from 'zod'

export const validator = z.object({
  odds: z.number()
})
