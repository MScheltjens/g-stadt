import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCountOutputTypeCountRefreshTokensArgsObjectSchema as UserCountOutputTypeCountRefreshTokensArgsObjectSchema } from './UserCountOutputTypeCountRefreshTokensArgs.schema';
import { UserCountOutputTypeCountPasswordResetTokensArgsObjectSchema as UserCountOutputTypeCountPasswordResetTokensArgsObjectSchema } from './UserCountOutputTypeCountPasswordResetTokensArgs.schema';

const makeSchema = () =>
  z
    .object({
      refreshTokens: z
        .union([
          z.boolean(),
          z.lazy(() => UserCountOutputTypeCountRefreshTokensArgsObjectSchema),
        ])
        .optional(),
      passwordResetTokens: z
        .union([
          z.boolean(),
          z.lazy(
            () => UserCountOutputTypeCountPasswordResetTokensArgsObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> =
  makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
