import * as z from 'zod';
export const RefreshTokenFindUniqueResultSchema = z.nullable(
  z.object({
    id: z.string(),
    tokenHash: z.string(),
    userId: z.string(),
    user: z.unknown(),
    expiresAt: z.date(),
  }),
);
