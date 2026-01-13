import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocaleSchema } from '../enums/Locale.schema';

const makeSchema = () =>
  z
    .object({
      serviceId: z.string(),
      locale: LocaleSchema,
    })
    .strict();
export const ServiceTranslationServiceIdLocaleCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ServiceTranslationServiceIdLocaleCompoundUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationServiceIdLocaleCompoundUniqueInput>;
export const ServiceTranslationServiceIdLocaleCompoundUniqueInputObjectZodSchema =
  makeSchema();
