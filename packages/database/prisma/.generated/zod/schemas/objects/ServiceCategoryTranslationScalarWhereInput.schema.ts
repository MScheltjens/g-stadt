import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumLocaleFilterObjectSchema as EnumLocaleFilterObjectSchema } from './EnumLocaleFilter.schema';
import { LocaleSchema } from '../enums/Locale.schema';

const servicecategorytranslationscalarwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => ServiceCategoryTranslationScalarWhereInputObjectSchema),
        z
          .lazy(() => ServiceCategoryTranslationScalarWhereInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ServiceCategoryTranslationScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ServiceCategoryTranslationScalarWhereInputObjectSchema),
        z
          .lazy(() => ServiceCategoryTranslationScalarWhereInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    categoryId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    locale: z
      .union([z.lazy(() => EnumLocaleFilterObjectSchema), LocaleSchema])
      .optional(),
    label: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    slug: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();
export const ServiceCategoryTranslationScalarWhereInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationScalarWhereInput> =
  servicecategorytranslationscalarwhereinputSchema as unknown as z.ZodType<Prisma.ServiceCategoryTranslationScalarWhereInput>;
export const ServiceCategoryTranslationScalarWhereInputObjectZodSchema =
  servicecategorytranslationscalarwhereinputSchema;
