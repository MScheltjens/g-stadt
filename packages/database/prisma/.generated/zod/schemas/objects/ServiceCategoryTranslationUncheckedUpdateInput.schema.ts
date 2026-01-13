import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LocaleSchema } from '../enums/Locale.schema';
import { EnumLocaleFieldUpdateOperationsInputObjectSchema as EnumLocaleFieldUpdateOperationsInputObjectSchema } from './EnumLocaleFieldUpdateOperationsInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      categoryId: z
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
    })
    .strict();
export const ServiceCategoryTranslationUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationUncheckedUpdateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationUncheckedUpdateInput>;
export const ServiceCategoryTranslationUncheckedUpdateInputObjectZodSchema =
  makeSchema();
