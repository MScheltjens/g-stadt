import * as z from 'zod';
export const RefreshTokenGroupByResultSchema = z.array(
  z.object({
    id: z.string(),
    tokenHash: z.string(),
    userId: z.string(),
    expiresAt: z.date(),
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
  }),
);
