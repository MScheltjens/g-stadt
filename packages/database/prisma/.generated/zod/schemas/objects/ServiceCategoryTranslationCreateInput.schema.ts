import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocaleSchema } from '../enums/Locale.schema';
import { ServiceCategoryCreateNestedOneWithoutTranslationsInputObjectSchema as ServiceCategoryCreateNestedOneWithoutTranslationsInputObjectSchema } from './ServiceCategoryCreateNestedOneWithoutTranslationsInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      locale: LocaleSchema,
      label: z.string(),
      slug: z.string(),
      category: z.lazy(
        () =>
          ServiceCategoryCreateNestedOneWithoutTranslationsInputObjectSchema,
      ),
    })
    .strict();
export const ServiceCategoryTranslationCreateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationCreateInput>;
export const ServiceCategoryTranslationCreateInputObjectZodSchema =
  makeSchema();
