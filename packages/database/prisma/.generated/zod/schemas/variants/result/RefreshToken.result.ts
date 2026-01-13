import * as z from 'zod';
// prettier-ignore
export const RefreshTokenResultSchema = z.object({
    id: z.string(),
    tokenHash: z.string(),
    userId: z.string(),
    user: z.unknown(),
    expiresAt: z.date()
}).strict();

export type RefreshTokenResultType = z.infer<typeof RefreshTokenResultSchema>;
