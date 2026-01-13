import * as z from 'zod';
export const UserUpsertResultSchema = z.object({
  id: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  role: z.unknown(),
  isVerified: z.boolean(),
  createdAt: z.date(),
  refreshTokens: z.array(z.unknown()),
  passwordResetTokens: z.array(z.unknown()),
});
