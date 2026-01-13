import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ServiceUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema as ServiceUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './ServiceUncheckedUpdateManyWithoutCategoryNestedInput.schema';
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
      services: z
        .lazy(
          () =>
            ServiceUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema,
        )
        .optional(),
      translations: z
        .lazy(
          () =>
            ServiceCategoryTranslationUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const ServiceCategoryUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryUncheckedUpdateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryUncheckedUpdateInput>;
export const ServiceCategoryUncheckedUpdateInputObjectZodSchema = makeSchema();
