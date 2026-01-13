import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EnumRoleFieldUpdateOperationsInputObjectSchema as EnumRoleFieldUpdateOperationsInputObjectSchema } from './EnumRoleFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInputObjectSchema as PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      passwordHash: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      role: z
        .union([
          RoleSchema,
          z.lazy(() => EnumRoleFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      isVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      passwordResetTokens: z
        .lazy(
          () =>
            PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const UserUncheckedUpdateWithoutRefreshTokensInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutRefreshTokensInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateWithoutRefreshTokensInput>;
export const UserUncheckedUpdateWithoutRefreshTokensInputObjectZodSchema =
  makeSchema();
