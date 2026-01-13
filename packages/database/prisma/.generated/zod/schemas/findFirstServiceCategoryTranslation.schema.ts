import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategoryTranslationIncludeObjectSchema as ServiceCategoryTranslationIncludeObjectSchema } from './objects/ServiceCategoryTranslationInclude.schema';
import { ServiceCategoryTranslationOrderByWithRelationInputObjectSchema as ServiceCategoryTranslationOrderByWithRelationInputObjectSchema } from './objects/ServiceCategoryTranslationOrderByWithRelationInput.schema';
import { ServiceCategoryTranslationWhereInputObjectSchema as ServiceCategoryTranslationWhereInputObjectSchema } from './objects/ServiceCategoryTranslationWhereInput.schema';
import { ServiceCategoryTranslationWhereUniqueInputObjectSchema as ServiceCategoryTranslationWhereUniqueInputObjectSchema } from './objects/ServiceCategoryTranslationWhereUniqueInput.schema';
import { ServiceCategoryTranslationScalarFieldEnumSchema } from './enums/ServiceCategoryTranslationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ServiceCategoryTranslationFindFirstSelectSchema: z.ZodType<Prisma.ServiceCategoryTranslationSelect> =
  z
    .object({
      id: z.boolean().optional(),
      categoryId: z.boolean().optional(),
      locale: z.boolean().optional(),
      label: z.boolean().optional(),
      slug: z.boolean().optional(),
      category: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationSelect>;

export const ServiceCategoryTranslationFindFirstSelectZodSchema = z
  .object({
    id: z.boolean().optional(),
    categoryId: z.boolean().optional(),
    locale: z.boolean().optional(),
    label: z.boolean().optional(),
    slug: z.boolean().optional(),
    category: z.boolean().optional(),
  })
  .strict();

export const ServiceCategoryTranslationFindFirstSchema: z.ZodType<Prisma.ServiceCategoryTranslationFindFirstArgs> =
  z
    .object({
      select: ServiceCategoryTranslationFindFirstSelectSchema.optional(),
      include: z.lazy(() =>
        ServiceCategoryTranslationIncludeObjectSchema.optional(),
      ),
      orderBy: z
        .union([
          ServiceCategoryTranslationOrderByWithRelationInputObjectSchema,
          ServiceCategoryTranslationOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: ServiceCategoryTranslationWhereInputObjectSchema.optional(),
      cursor: ServiceCategoryTranslationWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ServiceCategoryTranslationScalarFieldEnumSchema,
          ServiceCategoryTranslationScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationFindFirstArgs>;

export const ServiceCategoryTranslationFindFirstZodSchema = z
  .object({
    select: ServiceCategoryTranslationFindFirstSelectSchema.optional(),
    include: z.lazy(() =>
      ServiceCategoryTranslationIncludeObjectSchema.optional(),
    ),
    orderBy: z
      .union([
        ServiceCategoryTranslationOrderByWithRelationInputObjectSchema,
        ServiceCategoryTranslationOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: ServiceCategoryTranslationWhereInputObjectSchema.optional(),
    cursor: ServiceCategoryTranslationWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        ServiceCategoryTranslationScalarFieldEnumSchema,
        ServiceCategoryTranslationScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict();
