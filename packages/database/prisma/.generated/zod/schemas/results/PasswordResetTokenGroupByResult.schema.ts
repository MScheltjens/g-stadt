import * as z from 'zod';
export const PasswordResetTokenGroupByResultSchema = z.array(
  z.object({
    id: z.string(),
    userId: z.string(),
    tokenHash: z.string(),
    expiresAt: z.date(),
    _count: z
      .object({
        id: z.number(),
        userId: z.number(),
        tokenHash: z.number(),
        expiresAt: z.number(),
        user: z.number(),
      })
      .optional(),
    _min: z
      .object({
        id: z.string().nullable(),
        userId: z.string().nullable(),
        tokenHash: z.string().nullable(),
        expiresAt: z.date().nullable(),
      })
      .nullable()
      .optional(),
    _max: z
      .object({
        id: z.string().nullable(),
        userId: z.string().nullable(),
        tokenHash: z.string().nullable(),
        expiresAt: z.date().nullable(),
      })
      .nullable()
      .optional(),
  }),
);
