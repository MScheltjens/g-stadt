import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumLocaleFilterObjectSchema as EnumLocaleFilterObjectSchema } from './EnumLocaleFilter.schema';
import { LocaleSchema } from '../enums/Locale.schema';
import { ServiceCategoryScalarRelationFilterObjectSchema as ServiceCategoryScalarRelationFilterObjectSchema } from './ServiceCategoryScalarRelationFilter.schema';
import { ServiceCategoryWhereInputObjectSchema as ServiceCategoryWhereInputObjectSchema } from './ServiceCategoryWhereInput.schema';

const servicecategorytranslationwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => ServiceCategoryTranslationWhereInputObjectSchema),
        z.lazy(() => ServiceCategoryTranslationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ServiceCategoryTranslationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ServiceCategoryTranslationWhereInputObjectSchema),
        z.lazy(() => ServiceCategoryTranslationWhereInputObjectSchema).array(),
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
    category: z
      .union([
        z.lazy(() => ServiceCategoryScalarRelationFilterObjectSchema),
        z.lazy(() => ServiceCategoryWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();
export const ServiceCategoryTranslationWhereInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationWhereInput> =
  servicecategorytranslationwhereinputSchema as unknown as z.ZodType<Prisma.ServiceCategoryTranslationWhereInput>;
export const ServiceCategoryTranslationWhereInputObjectZodSchema =
  servicecategorytranslationwhereinputSchema;
