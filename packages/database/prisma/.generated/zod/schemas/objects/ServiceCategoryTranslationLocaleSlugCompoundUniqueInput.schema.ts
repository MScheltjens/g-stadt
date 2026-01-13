import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocaleSchema } from '../enums/Locale.schema';

const makeSchema = () =>
  z
    .object({
      locale: LocaleSchema,
      slug: z.string(),
    })
    .strict();
export const ServiceCategoryTranslationLocaleSlugCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationLocaleSlugCompoundUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationLocaleSlugCompoundUniqueInput>;
export const ServiceCategoryTranslationLocaleSlugCompoundUniqueInputObjectZodSchema =
  makeSchema();
