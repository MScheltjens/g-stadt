import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocaleSchema } from '../enums/Locale.schema';

const makeSchema = () =>
  z
    .object({
      categoryId: z.string(),
      locale: LocaleSchema,
    })
    .strict();
export const ServiceCategoryTranslationCategoryIdLocaleCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationCategoryIdLocaleCompoundUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationCategoryIdLocaleCompoundUniqueInput>;
export const ServiceCategoryTranslationCategoryIdLocaleCompoundUniqueInputObjectZodSchema =
  makeSchema();
