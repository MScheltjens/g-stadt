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
export const ServiceTranslationCreateManyServiceInputObjectSchema: z.ZodType<Prisma.ServiceTranslationCreateManyServiceInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationCreateManyServiceInput>;
export const ServiceTranslationCreateManyServiceInputObjectZodSchema =
  makeSchema();
