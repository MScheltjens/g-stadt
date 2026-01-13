import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceTranslationWhereInputObjectSchema as ServiceTranslationWhereInputObjectSchema } from './objects/ServiceTranslationWhereInput.schema';

export const ServiceTranslationDeleteManySchema: z.ZodType<Prisma.ServiceTranslationDeleteManyArgs> =
  z
    .object({ where: ServiceTranslationWhereInputObjectSchema.optional() })
    .strict() as unknown as z.ZodType<Prisma.ServiceTranslationDeleteManyArgs>;

export const ServiceTranslationDeleteManyZodSchema = z
  .object({ where: ServiceTranslationWhereInputObjectSchema.optional() })
  .strict();
