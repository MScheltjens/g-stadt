import * as z from 'zod';
// prettier-ignore
export const PasswordResetTokenResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    tokenHash: z.string(),
    expiresAt: z.date(),
    user: z.unknown()
}).strict();

export type PasswordResetTokenResultType = z.infer<
  typeof PasswordResetTokenResultSchema
>;
