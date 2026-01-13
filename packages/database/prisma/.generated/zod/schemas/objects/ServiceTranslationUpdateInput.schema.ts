import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LocaleSchema } from '../enums/Locale.schema';
import { EnumLocaleFieldUpdateOperationsInputObjectSchema as EnumLocaleFieldUpdateOperationsInputObjectSchema } from './EnumLocaleFieldUpdateOperationsInput.schema';
import { ServiceUpdateOneRequiredWithoutTranslationsNestedInputObjectSchema as ServiceUpdateOneRequiredWithoutTranslationsNestedInputObjectSchema } from './ServiceUpdateOneRequiredWithoutTranslationsNestedInput.schema';

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
      title: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      description: z
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
      service: z
        .lazy(
          () =>
            ServiceUpdateOneRequiredWithoutTranslationsNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const ServiceTranslationUpdateInputObjectSchema: z.ZodType<Prisma.ServiceTranslationUpdateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationUpdateInput>;
export const ServiceTranslationUpdateInputObjectZodSchema = makeSchema();
