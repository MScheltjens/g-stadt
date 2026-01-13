import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumLocaleWithAggregatesFilterObjectSchema as EnumLocaleWithAggregatesFilterObjectSchema } from './EnumLocaleWithAggregatesFilter.schema';
import { LocaleSchema } from '../enums/Locale.schema';

const servicecategorytranslationscalarwherewithaggregatesinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(
          () =>
            ServiceCategoryTranslationScalarWhereWithAggregatesInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              ServiceCategoryTranslationScalarWhereWithAggregatesInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(
        () =>
          ServiceCategoryTranslationScalarWhereWithAggregatesInputObjectSchema,
      )
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(
          () =>
            ServiceCategoryTranslationScalarWhereWithAggregatesInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              ServiceCategoryTranslationScalarWhereWithAggregatesInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    categoryId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    locale: z
      .union([
        z.lazy(() => EnumLocaleWithAggregatesFilterObjectSchema),
        LocaleSchema,
      ])
      .optional(),
    label: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    slug: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();
export const ServiceCategoryTranslationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationScalarWhereWithAggregatesInput> =
  servicecategorytranslationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ServiceCategoryTranslationScalarWhereWithAggregatesInput>;
export const ServiceCategoryTranslationScalarWhereWithAggregatesInputObjectZodSchema =
  servicecategorytranslationscalarwherewithaggregatesinputSchema;
