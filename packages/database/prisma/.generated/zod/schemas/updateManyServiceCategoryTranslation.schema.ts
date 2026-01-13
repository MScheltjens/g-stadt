import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategoryTranslationUpdateManyMutationInputObjectSchema as ServiceCategoryTranslationUpdateManyMutationInputObjectSchema } from './objects/ServiceCategoryTranslationUpdateManyMutationInput.schema';
import { ServiceCategoryTranslationWhereInputObjectSchema as ServiceCategoryTranslationWhereInputObjectSchema } from './objects/ServiceCategoryTranslationWhereInput.schema';

export const ServiceCategoryTranslationUpdateManySchema: z.ZodType<Prisma.ServiceCategoryTranslationUpdateManyArgs> =
  z
    .object({
      data: ServiceCategoryTranslationUpdateManyMutationInputObjectSchema,
      where: ServiceCategoryTranslationWhereInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationUpdateManyArgs>;

export const ServiceCategoryTranslationUpdateManyZodSchema = z
  .object({
    data: ServiceCategoryTranslationUpdateManyMutationInputObjectSchema,
    where: ServiceCategoryTranslationWhereInputObjectSchema.optional(),
  })
  .strict();
