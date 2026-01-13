import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategoryTranslationSelectObjectSchema as ServiceCategoryTranslationSelectObjectSchema } from './objects/ServiceCategoryTranslationSelect.schema';
import { ServiceCategoryTranslationUpdateManyMutationInputObjectSchema as ServiceCategoryTranslationUpdateManyMutationInputObjectSchema } from './objects/ServiceCategoryTranslationUpdateManyMutationInput.schema';
import { ServiceCategoryTranslationWhereInputObjectSchema as ServiceCategoryTranslationWhereInputObjectSchema } from './objects/ServiceCategoryTranslationWhereInput.schema';

export const ServiceCategoryTranslationUpdateManyAndReturnSchema: z.ZodType<Prisma.ServiceCategoryTranslationUpdateManyAndReturnArgs> =
  z
    .object({
      select: ServiceCategoryTranslationSelectObjectSchema.optional(),
      data: ServiceCategoryTranslationUpdateManyMutationInputObjectSchema,
      where: ServiceCategoryTranslationWhereInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationUpdateManyAndReturnArgs>;

export const ServiceCategoryTranslationUpdateManyAndReturnZodSchema = z
  .object({
    select: ServiceCategoryTranslationSelectObjectSchema.optional(),
    data: ServiceCategoryTranslationUpdateManyMutationInputObjectSchema,
    where: ServiceCategoryTranslationWhereInputObjectSchema.optional(),
  })
  .strict();
