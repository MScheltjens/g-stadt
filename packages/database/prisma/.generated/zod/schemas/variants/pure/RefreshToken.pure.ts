import * as z from 'zod';
// prettier-ignore
export const RefreshTokenModelSchema = z.object({
    id: z.string(),
    tokenHash: z.string(),
    userId: z.string(),
    user: z.unknown(),
    expiresAt: z.date()
}).strict();

export type RefreshTokenPureType = z.infer<typeof RefreshTokenModelSchema>;
