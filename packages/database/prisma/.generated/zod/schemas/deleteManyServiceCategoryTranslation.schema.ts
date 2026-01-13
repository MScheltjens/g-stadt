import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategoryTranslationWhereInputObjectSchema as ServiceCategoryTranslationWhereInputObjectSchema } from './objects/ServiceCategoryTranslationWhereInput.schema';

export const ServiceCategoryTranslationDeleteManySchema: z.ZodType<Prisma.ServiceCategoryTranslationDeleteManyArgs> =
  z
    .object({
      where: ServiceCategoryTranslationWhereInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationDeleteManyArgs>;

export const ServiceCategoryTranslationDeleteManyZodSchema = z
  .object({
    where: ServiceCategoryTranslationWhereInputObjectSchema.optional(),
  })
  .strict();
