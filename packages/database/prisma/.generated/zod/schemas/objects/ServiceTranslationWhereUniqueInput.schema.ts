import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceTranslationServiceIdLocaleCompoundUniqueInputObjectSchema as ServiceTranslationServiceIdLocaleCompoundUniqueInputObjectSchema } from './ServiceTranslationServiceIdLocaleCompoundUniqueInput.schema';
import { ServiceTranslationLocaleSlugCompoundUniqueInputObjectSchema as ServiceTranslationLocaleSlugCompoundUniqueInputObjectSchema } from './ServiceTranslationLocaleSlugCompoundUniqueInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      serviceId_locale: z
        .lazy(
          () =>
            ServiceTranslationServiceIdLocaleCompoundUniqueInputObjectSchema,
        )
        .optional(),
      locale_slug: z
        .lazy(() => ServiceTranslationLocaleSlugCompoundUniqueInputObjectSchema)
        .optional(),
    })
    .strict();
export const ServiceTranslationWhereUniqueInputObjectSchema: z.ZodType<Prisma.ServiceTranslationWhereUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationWhereUniqueInput>;
export const ServiceTranslationWhereUniqueInputObjectZodSchema = makeSchema();
