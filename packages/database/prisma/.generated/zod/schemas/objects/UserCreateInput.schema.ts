import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { RefreshTokenCreateNestedManyWithoutUserInputObjectSchema as RefreshTokenCreateNestedManyWithoutUserInputObjectSchema } from './RefreshTokenCreateNestedManyWithoutUserInput.schema';
import { PasswordResetTokenCreateNestedManyWithoutUserInputObjectSchema as PasswordResetTokenCreateNestedManyWithoutUserInputObjectSchema } from './PasswordResetTokenCreateNestedManyWithoutUserInput.schema';

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
      passwordResetTokens: z
        .lazy(
          () => PasswordResetTokenCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = makeSchema();
