import * as z from 'zod';
export const PasswordResetTokenUpdateResultSchema = z.nullable(
  z.object({
    id: z.string(),
    userId: z.string(),
    tokenHash: z.string(),
    expiresAt: z.date(),
    user: z.unknown(),
  }),
);
