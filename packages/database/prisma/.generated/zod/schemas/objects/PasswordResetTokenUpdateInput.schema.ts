import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutPasswordResetTokensNestedInputObjectSchema as UserUpdateOneRequiredWithoutPasswordResetTokensNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      tokenHash: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      expiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      user: z
        .lazy(
          () =>
            UserUpdateOneRequiredWithoutPasswordResetTokensNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const PasswordResetTokenUpdateInputObjectSchema: z.ZodType<Prisma.PasswordResetTokenUpdateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PasswordResetTokenUpdateInput>;
export const PasswordResetTokenUpdateInputObjectZodSchema = makeSchema();
