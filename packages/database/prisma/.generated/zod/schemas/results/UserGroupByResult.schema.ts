import * as z from 'zod';
export const UserGroupByResultSchema = z.array(
  z.object({
    id: z.string(),
    email: z.string(),
    passwordHash: z.string(),
    isVerified: z.boolean(),
    createdAt: z.date(),
    _count: z
      .object({
        id: z.number(),
        email: z.number(),
        passwordHash: z.number(),
        role: z.number(),
        isVerified: z.number(),
        createdAt: z.number(),
        refreshTokens: z.number(),
        passwordResetTokens: z.number(),
      })
      .optional(),
    _min: z
      .object({
        id: z.string().nullable(),
        email: z.string().nullable(),
        passwordHash: z.string().nullable(),
        createdAt: z.date().nullable(),
      })
      .nullable()
      .optional(),
    _max: z
      .object({
        id: z.string().nullable(),
        email: z.string().nullable(),
        passwordHash: z.string().nullable(),
        createdAt: z.date().nullable(),
      })
      .nullable()
      .optional(),
  }),
);
