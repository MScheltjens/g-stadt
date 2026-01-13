import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { PasswordResetTokenUncheckedCreateNestedManyWithoutUserInputObjectSchema as PasswordResetTokenUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      email: z.string(),
      passwordHash: z.string(),
      role: RoleSchema.optional(),
      isVerified: z.boolean().optional(),
      createdAt: z.coerce.date().optional(),
      passwordResetTokens: z
        .lazy(
          () =>
            PasswordResetTokenUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const UserUncheckedCreateWithoutRefreshTokensInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutRefreshTokensInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutRefreshTokensInput>;
export const UserUncheckedCreateWithoutRefreshTokensInputObjectZodSchema =
  makeSchema();
