import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryTranslationCategoryIdLocaleCompoundUniqueInputObjectSchema as ServiceCategoryTranslationCategoryIdLocaleCompoundUniqueInputObjectSchema } from './ServiceCategoryTranslationCategoryIdLocaleCompoundUniqueInput.schema';
import { ServiceCategoryTranslationLocaleSlugCompoundUniqueInputObjectSchema as ServiceCategoryTranslationLocaleSlugCompoundUniqueInputObjectSchema } from './ServiceCategoryTranslationLocaleSlugCompoundUniqueInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      categoryId_locale: z
        .lazy(
          () =>
            ServiceCategoryTranslationCategoryIdLocaleCompoundUniqueInputObjectSchema,
        )
        .optional(),
      locale_slug: z
        .lazy(
          () =>
            ServiceCategoryTranslationLocaleSlugCompoundUniqueInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const ServiceCategoryTranslationWhereUniqueInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationWhereUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationWhereUniqueInput>;
export const ServiceCategoryTranslationWhereUniqueInputObjectZodSchema =
  makeSchema();
