import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategoryTranslationSelectObjectSchema as ServiceCategoryTranslationSelectObjectSchema } from './objects/ServiceCategoryTranslationSelect.schema';
import { ServiceCategoryTranslationIncludeObjectSchema as ServiceCategoryTranslationIncludeObjectSchema } from './objects/ServiceCategoryTranslationInclude.schema';
import { ServiceCategoryTranslationWhereUniqueInputObjectSchema as ServiceCategoryTranslationWhereUniqueInputObjectSchema } from './objects/ServiceCategoryTranslationWhereUniqueInput.schema';

export const ServiceCategoryTranslationDeleteOneSchema: z.ZodType<Prisma.ServiceCategoryTranslationDeleteArgs> =
  z
    .object({
      select: ServiceCategoryTranslationSelectObjectSchema.optional(),
      include: ServiceCategoryTranslationIncludeObjectSchema.optional(),
      where: ServiceCategoryTranslationWhereUniqueInputObjectSchema,
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationDeleteArgs>;

export const ServiceCategoryTranslationDeleteOneZodSchema = z
  .object({
    select: ServiceCategoryTranslationSelectObjectSchema.optional(),
    include: ServiceCategoryTranslationIncludeObjectSchema.optional(),
    where: ServiceCategoryTranslationWhereUniqueInputObjectSchema,
  })
  .strict();
