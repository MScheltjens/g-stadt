import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LocaleSchema } from '../enums/Locale.schema';
import { EnumLocaleFieldUpdateOperationsInputObjectSchema as EnumLocaleFieldUpdateOperationsInputObjectSchema } from './EnumLocaleFieldUpdateOperationsInput.schema';
import { ServiceCategoryUpdateOneRequiredWithoutTranslationsNestedInputObjectSchema as ServiceCategoryUpdateOneRequiredWithoutTranslationsNestedInputObjectSchema } from './ServiceCategoryUpdateOneRequiredWithoutTranslationsNestedInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      locale: z
        .union([
          LocaleSchema,
          z.lazy(() => EnumLocaleFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      label: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      slug: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      category: z
        .lazy(
          () =>
            ServiceCategoryUpdateOneRequiredWithoutTranslationsNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const ServiceCategoryTranslationUpdateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationUpdateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationUpdateInput>;
export const ServiceCategoryTranslationUpdateInputObjectZodSchema =
  makeSchema();
