import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocaleSchema } from '../enums/Locale.schema';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      serviceId: z.string(),
      locale: LocaleSchema,
      title: z.string(),
      description: z.string(),
      slug: z.string(),
    })
    .strict();
export const ServiceTranslationCreateManyInputObjectSchema: z.ZodType<Prisma.ServiceTranslationCreateManyInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationCreateManyInput>;
export const ServiceTranslationCreateManyInputObjectZodSchema = makeSchema();
