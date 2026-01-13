import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ServiceCategoryTranslationUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema as ServiceCategoryTranslationUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './ServiceCategoryTranslationUncheckedUpdateManyWithoutCategoryNestedInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      code: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
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
      translations: z
        .lazy(
          () =>
            ServiceCategoryTranslationUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const ServiceCategoryUncheckedUpdateWithoutServicesInputObjectSchema: z.ZodType<Prisma.ServiceCategoryUncheckedUpdateWithoutServicesInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryUncheckedUpdateWithoutServicesInput>;
export const ServiceCategoryUncheckedUpdateWithoutServicesInputObjectZodSchema =
  makeSchema();
