import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumLocaleWithAggregatesFilterObjectSchema as EnumLocaleWithAggregatesFilterObjectSchema } from './EnumLocaleWithAggregatesFilter.schema';
import { LocaleSchema } from '../enums/Locale.schema';

const servicetranslationscalarwherewithaggregatesinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(
          () => ServiceTranslationScalarWhereWithAggregatesInputObjectSchema,
        ),
        z
          .lazy(
            () => ServiceTranslationScalarWhereWithAggregatesInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ServiceTranslationScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(
          () => ServiceTranslationScalarWhereWithAggregatesInputObjectSchema,
        ),
        z
          .lazy(
            () => ServiceTranslationScalarWhereWithAggregatesInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    serviceId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    locale: z
      .union([
        z.lazy(() => EnumLocaleWithAggregatesFilterObjectSchema),
        LocaleSchema,
      ])
      .optional(),
    title: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    slug: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();
export const ServiceTranslationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ServiceTranslationScalarWhereWithAggregatesInput> =
  servicetranslationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ServiceTranslationScalarWhereWithAggregatesInput>;
export const ServiceTranslationScalarWhereWithAggregatesInputObjectZodSchema =
  servicetranslationscalarwherewithaggregatesinputSchema;
