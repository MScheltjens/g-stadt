import * as z from 'zod';
export const PasswordResetTokenUpsertResultSchema = z.object({
  id: z.string(),
  userId: z.string(),
  tokenHash: z.string(),
  expiresAt: z.date(),
  user: z.unknown(),
});
