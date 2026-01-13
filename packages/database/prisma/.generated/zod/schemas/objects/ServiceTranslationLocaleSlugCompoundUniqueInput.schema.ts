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
export const ServiceTranslationLocaleSlugCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ServiceTranslationLocaleSlugCompoundUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationLocaleSlugCompoundUniqueInput>;
export const ServiceTranslationLocaleSlugCompoundUniqueInputObjectZodSchema =
  makeSchema();
