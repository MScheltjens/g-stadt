import * as z from 'zod';
// prettier-ignore
export const PasswordResetTokenModelSchema = z.object({
    id: z.string(),
    userId: z.string(),
    tokenHash: z.string(),
    expiresAt: z.date(),
    user: z.unknown()
}).strict();

export type PasswordResetTokenPureType = z.infer<
  typeof PasswordResetTokenModelSchema
>;
