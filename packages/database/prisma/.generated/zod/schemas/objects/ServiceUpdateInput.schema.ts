import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { NullableEnumRoleFieldUpdateOperationsInputObjectSchema as NullableEnumRoleFieldUpdateOperationsInputObjectSchema } from './NullableEnumRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ServiceCategoryUpdateOneRequiredWithoutServicesNestedInputObjectSchema as ServiceCategoryUpdateOneRequiredWithoutServicesNestedInputObjectSchema } from './ServiceCategoryUpdateOneRequiredWithoutServicesNestedInput.schema';
import { ServiceTranslationUpdateManyWithoutServiceNestedInputObjectSchema as ServiceTranslationUpdateManyWithoutServiceNestedInputObjectSchema } from './ServiceTranslationUpdateManyWithoutServiceNestedInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      icon: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      externalUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      order: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      isActive: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      requiresAuth: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      role: z
        .union([
          RoleSchema,
          z.lazy(() => NullableEnumRoleFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      category: z
        .lazy(
          () =>
            ServiceCategoryUpdateOneRequiredWithoutServicesNestedInputObjectSchema,
        )
        .optional(),
      translations: z
        .lazy(
          () =>
            ServiceTranslationUpdateManyWithoutServiceNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const ServiceUpdateInputObjectSchema: z.ZodType<Prisma.ServiceUpdateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceUpdateInput>;
export const ServiceUpdateInputObjectZodSchema = makeSchema();
