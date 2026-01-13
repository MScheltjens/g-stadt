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
export const ServiceCategoryTranslationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationUncheckedCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationUncheckedCreateInput>;
export const ServiceCategoryTranslationUncheckedCreateInputObjectZodSchema =
  makeSchema();
