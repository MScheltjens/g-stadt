import * as z from 'zod';
export const RefreshTokenAggregateResultSchema = z.object({
  _count: z
    .object({
      id: z.number(),
      tokenHash: z.number(),
      userId: z.number(),
      user: z.number(),
      expiresAt: z.number(),
    })
    .optional(),
  _min: z
    .object({
      id: z.string().nullable(),
      tokenHash: z.string().nullable(),
      userId: z.string().nullable(),
      expiresAt: z.date().nullable(),
    })
    .nullable()
    .optional(),
  _max: z
    .object({
      id: z.string().nullable(),
      tokenHash: z.string().nullable(),
      userId: z.string().nullable(),
      expiresAt: z.date().nullable(),
    })
    .nullable()
    .optional(),
});
