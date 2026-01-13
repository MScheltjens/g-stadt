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
export const ServiceTranslationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ServiceTranslationUncheckedCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationUncheckedCreateInput>;
export const ServiceTranslationUncheckedCreateInputObjectZodSchema =
  makeSchema();
