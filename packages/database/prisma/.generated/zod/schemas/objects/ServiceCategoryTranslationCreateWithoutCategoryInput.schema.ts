import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocaleSchema } from '../enums/Locale.schema';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      locale: LocaleSchema,
      label: z.string(),
      slug: z.string(),
    })
    .strict();
export const ServiceCategoryTranslationCreateWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationCreateWithoutCategoryInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationCreateWithoutCategoryInput>;
export const ServiceCategoryTranslationCreateWithoutCategoryInputObjectZodSchema =
  makeSchema();
