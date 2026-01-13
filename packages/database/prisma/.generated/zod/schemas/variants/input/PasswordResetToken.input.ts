import * as z from 'zod';
// prettier-ignore
export const PasswordResetTokenInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    tokenHash: z.string(),
    expiresAt: z.date(),
    user: z.unknown()
}).strict();

export type PasswordResetTokenInputType = z.infer<
  typeof PasswordResetTokenInputSchema
>;
