import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocaleSchema } from '../enums/Locale.schema';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      categoryId: z.string(),
      locale: LocaleSchema,
      label: z.string(),
      slug: z.string(),
    })
    .strict();
export const ServiceCategoryTranslationCreateManyInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationCreateManyInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationCreateManyInput>;
export const ServiceCategoryTranslationCreateManyInputObjectZodSchema =
  makeSchema();
