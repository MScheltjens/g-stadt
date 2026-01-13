import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RefreshTokenFindManySchema as RefreshTokenFindManySchema } from '../findManyRefreshToken.schema';
import { PasswordResetTokenFindManySchema as PasswordResetTokenFindManySchema } from '../findManyPasswordResetToken.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

const makeSchema = () =>
  z
    .object({
      id: z.boolean().optional(),
      email: z.boolean().optional(),
      passwordHash: z.boolean().optional(),
      role: z.boolean().optional(),
      isVerified: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      refreshTokens: z
        .union([z.boolean(), z.lazy(() => RefreshTokenFindManySchema)])
        .optional(),
      passwordResetTokens: z
        .union([z.boolean(), z.lazy(() => PasswordResetTokenFindManySchema)])
        .optional(),
      _count: z
        .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
        .optional(),
    })
    .strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> =
  makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
