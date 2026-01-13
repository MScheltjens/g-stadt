import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocaleSchema } from '../enums/Locale.schema';
import { ServiceCreateNestedOneWithoutTranslationsInputObjectSchema as ServiceCreateNestedOneWithoutTranslationsInputObjectSchema } from './ServiceCreateNestedOneWithoutTranslationsInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      locale: LocaleSchema,
      title: z.string(),
      description: z.string(),
      slug: z.string(),
      service: z.lazy(
        () => ServiceCreateNestedOneWithoutTranslationsInputObjectSchema,
      ),
    })
    .strict();
export const ServiceTranslationCreateInputObjectSchema: z.ZodType<Prisma.ServiceTranslationCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationCreateInput>;
export const ServiceTranslationCreateInputObjectZodSchema = makeSchema();
