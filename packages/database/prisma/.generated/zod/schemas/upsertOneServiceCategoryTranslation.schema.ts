import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategoryTranslationSelectObjectSchema as ServiceCategoryTranslationSelectObjectSchema } from './objects/ServiceCategoryTranslationSelect.schema';
import { ServiceCategoryTranslationIncludeObjectSchema as ServiceCategoryTranslationIncludeObjectSchema } from './objects/ServiceCategoryTranslationInclude.schema';
import { ServiceCategoryTranslationWhereUniqueInputObjectSchema as ServiceCategoryTranslationWhereUniqueInputObjectSchema } from './objects/ServiceCategoryTranslationWhereUniqueInput.schema';
import { ServiceCategoryTranslationCreateInputObjectSchema as ServiceCategoryTranslationCreateInputObjectSchema } from './objects/ServiceCategoryTranslationCreateInput.schema';
import { ServiceCategoryTranslationUncheckedCreateInputObjectSchema as ServiceCategoryTranslationUncheckedCreateInputObjectSchema } from './objects/ServiceCategoryTranslationUncheckedCreateInput.schema';
import { ServiceCategoryTranslationUpdateInputObjectSchema as ServiceCategoryTranslationUpdateInputObjectSchema } from './objects/ServiceCategoryTranslationUpdateInput.schema';
import { ServiceCategoryTranslationUncheckedUpdateInputObjectSchema as ServiceCategoryTranslationUncheckedUpdateInputObjectSchema } from './objects/ServiceCategoryTranslationUncheckedUpdateInput.schema';

export const ServiceCategoryTranslationUpsertOneSchema: z.ZodType<Prisma.ServiceCategoryTranslationUpsertArgs> =
  z
    .object({
      select: ServiceCategoryTranslationSelectObjectSchema.optional(),
      include: ServiceCategoryTranslationIncludeObjectSchema.optional(),
      where: ServiceCategoryTranslationWhereUniqueInputObjectSchema,
      create: z.union([
        ServiceCategoryTranslationCreateInputObjectSchema,
        ServiceCategoryTranslationUncheckedCreateInputObjectSchema,
      ]),
      update: z.union([
        ServiceCategoryTranslationUpdateInputObjectSchema,
        ServiceCategoryTranslationUncheckedUpdateInputObjectSchema,
      ]),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationUpsertArgs>;

export const ServiceCategoryTranslationUpsertOneZodSchema = z
  .object({
    select: ServiceCategoryTranslationSelectObjectSchema.optional(),
    include: ServiceCategoryTranslationIncludeObjectSchema.optional(),
    where: ServiceCategoryTranslationWhereUniqueInputObjectSchema,
    create: z.union([
      ServiceCategoryTranslationCreateInputObjectSchema,
      ServiceCategoryTranslationUncheckedCreateInputObjectSchema,
    ]),
    update: z.union([
      ServiceCategoryTranslationUpdateInputObjectSchema,
      ServiceCategoryTranslationUncheckedUpdateInputObjectSchema,
    ]),
  })
  .strict();
