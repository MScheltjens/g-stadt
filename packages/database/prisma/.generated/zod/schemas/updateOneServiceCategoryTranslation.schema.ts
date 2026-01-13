import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategoryTranslationSelectObjectSchema as ServiceCategoryTranslationSelectObjectSchema } from './objects/ServiceCategoryTranslationSelect.schema';
import { ServiceCategoryTranslationIncludeObjectSchema as ServiceCategoryTranslationIncludeObjectSchema } from './objects/ServiceCategoryTranslationInclude.schema';
import { ServiceCategoryTranslationUpdateInputObjectSchema as ServiceCategoryTranslationUpdateInputObjectSchema } from './objects/ServiceCategoryTranslationUpdateInput.schema';
import { ServiceCategoryTranslationUncheckedUpdateInputObjectSchema as ServiceCategoryTranslationUncheckedUpdateInputObjectSchema } from './objects/ServiceCategoryTranslationUncheckedUpdateInput.schema';
import { ServiceCategoryTranslationWhereUniqueInputObjectSchema as ServiceCategoryTranslationWhereUniqueInputObjectSchema } from './objects/ServiceCategoryTranslationWhereUniqueInput.schema';

export const ServiceCategoryTranslationUpdateOneSchema: z.ZodType<Prisma.ServiceCategoryTranslationUpdateArgs> =
  z
    .object({
      select: ServiceCategoryTranslationSelectObjectSchema.optional(),
      include: ServiceCategoryTranslationIncludeObjectSchema.optional(),
      data: z.union([
        ServiceCategoryTranslationUpdateInputObjectSchema,
        ServiceCategoryTranslationUncheckedUpdateInputObjectSchema,
      ]),
      where: ServiceCategoryTranslationWhereUniqueInputObjectSchema,
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationUpdateArgs>;

export const ServiceCategoryTranslationUpdateOneZodSchema = z
  .object({
    select: ServiceCategoryTranslationSelectObjectSchema.optional(),
    include: ServiceCategoryTranslationIncludeObjectSchema.optional(),
    data: z.union([
      ServiceCategoryTranslationUpdateInputObjectSchema,
      ServiceCategoryTranslationUncheckedUpdateInputObjectSchema,
    ]),
    where: ServiceCategoryTranslationWhereUniqueInputObjectSchema,
  })
  .strict();
