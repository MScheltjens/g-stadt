import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocaleSchema } from '../enums/Locale.schema';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      locale: LocaleSchema,
      title: z.string(),
      description: z.string(),
      slug: z.string(),
    })
    .strict();
export const ServiceTranslationCreateWithoutServiceInputObjectSchema: z.ZodType<Prisma.ServiceTranslationCreateWithoutServiceInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationCreateWithoutServiceInput>;
export const ServiceTranslationCreateWithoutServiceInputObjectZodSchema =
  makeSchema();
