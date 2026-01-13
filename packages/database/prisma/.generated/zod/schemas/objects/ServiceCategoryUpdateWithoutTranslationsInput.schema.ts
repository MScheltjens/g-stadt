import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ServiceUpdateManyWithoutCategoryNestedInputObjectSchema as ServiceUpdateManyWithoutCategoryNestedInputObjectSchema } from './ServiceUpdateManyWithoutCategoryNestedInput.schema';

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
        .lazy(() => ServiceUpdateManyWithoutCategoryNestedInputObjectSchema)
        .optional(),
    })
    .strict();
export const ServiceCategoryUpdateWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.ServiceCategoryUpdateWithoutTranslationsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryUpdateWithoutTranslationsInput>;
export const ServiceCategoryUpdateWithoutTranslationsInputObjectZodSchema =
  makeSchema();
