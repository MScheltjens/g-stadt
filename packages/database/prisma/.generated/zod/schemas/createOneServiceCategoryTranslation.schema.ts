import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategoryTranslationSelectObjectSchema as ServiceCategoryTranslationSelectObjectSchema } from './objects/ServiceCategoryTranslationSelect.schema';
import { ServiceCategoryTranslationIncludeObjectSchema as ServiceCategoryTranslationIncludeObjectSchema } from './objects/ServiceCategoryTranslationInclude.schema';
import { ServiceCategoryTranslationCreateInputObjectSchema as ServiceCategoryTranslationCreateInputObjectSchema } from './objects/ServiceCategoryTranslationCreateInput.schema';
import { ServiceCategoryTranslationUncheckedCreateInputObjectSchema as ServiceCategoryTranslationUncheckedCreateInputObjectSchema } from './objects/ServiceCategoryTranslationUncheckedCreateInput.schema';

export const ServiceCategoryTranslationCreateOneSchema: z.ZodType<Prisma.ServiceCategoryTranslationCreateArgs> =
  z
    .object({
      select: ServiceCategoryTranslationSelectObjectSchema.optional(),
      include: ServiceCategoryTranslationIncludeObjectSchema.optional(),
      data: z.union([
        ServiceCategoryTranslationCreateInputObjectSchema,
        ServiceCategoryTranslationUncheckedCreateInputObjectSchema,
      ]),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationCreateArgs>;

export const ServiceCategoryTranslationCreateOneZodSchema = z
  .object({
    select: ServiceCategoryTranslationSelectObjectSchema.optional(),
    include: ServiceCategoryTranslationIncludeObjectSchema.optional(),
    data: z.union([
      ServiceCategoryTranslationCreateInputObjectSchema,
      ServiceCategoryTranslationUncheckedCreateInputObjectSchema,
    ]),
  })
  .strict();
