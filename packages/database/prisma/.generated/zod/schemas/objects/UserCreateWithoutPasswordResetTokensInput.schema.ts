import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { RefreshTokenCreateNestedManyWithoutUserInputObjectSchema as RefreshTokenCreateNestedManyWithoutUserInputObjectSchema } from './RefreshTokenCreateNestedManyWithoutUserInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      passwordHash: z.string(),
      role: RoleSchema.optional(),
      isVerified: z.boolean().optional(),
      createdAt: z.coerce.date().optional(),
      refreshTokens: z
        .lazy(() => RefreshTokenCreateNestedManyWithoutUserInputObjectSchema)
        .optional(),
    })
    .strict();
export const UserCreateWithoutPasswordResetTokensInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutPasswordResetTokensInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutPasswordResetTokensInput>;
export const UserCreateWithoutPasswordResetTokensInputObjectZodSchema =
  makeSchema();
