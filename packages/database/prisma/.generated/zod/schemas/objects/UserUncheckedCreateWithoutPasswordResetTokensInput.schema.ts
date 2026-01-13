import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { RefreshTokenUncheckedCreateNestedManyWithoutUserInputObjectSchema as RefreshTokenUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './RefreshTokenUncheckedCreateNestedManyWithoutUserInput.schema';

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
        .lazy(
          () =>
            RefreshTokenUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const UserUncheckedCreateWithoutPasswordResetTokensInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutPasswordResetTokensInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutPasswordResetTokensInput>;
export const UserUncheckedCreateWithoutPasswordResetTokensInputObjectZodSchema =
  makeSchema();
