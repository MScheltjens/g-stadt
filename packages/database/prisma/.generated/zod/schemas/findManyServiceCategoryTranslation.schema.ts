import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategoryTranslationIncludeObjectSchema as ServiceCategoryTranslationIncludeObjectSchema } from './objects/ServiceCategoryTranslationInclude.schema';
import { ServiceCategoryTranslationOrderByWithRelationInputObjectSchema as ServiceCategoryTranslationOrderByWithRelationInputObjectSchema } from './objects/ServiceCategoryTranslationOrderByWithRelationInput.schema';
import { ServiceCategoryTranslationWhereInputObjectSchema as ServiceCategoryTranslationWhereInputObjectSchema } from './objects/ServiceCategoryTranslationWhereInput.schema';
import { ServiceCategoryTranslationWhereUniqueInputObjectSchema as ServiceCategoryTranslationWhereUniqueInputObjectSchema } from './objects/ServiceCategoryTranslationWhereUniqueInput.schema';
import { ServiceCategoryTranslationScalarFieldEnumSchema } from './enums/ServiceCategoryTranslationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ServiceCategoryTranslationFindManySelectSchema: z.ZodType<Prisma.ServiceCategoryTranslationSelect> =
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

export const ServiceCategoryTranslationFindManySelectZodSchema = z
  .object({
    id: z.boolean().optional(),
    categoryId: z.boolean().optional(),
    locale: z.boolean().optional(),
    label: z.boolean().optional(),
    slug: z.boolean().optional(),
    category: z.boolean().optional(),
  })
  .strict();

export const ServiceCategoryTranslationFindManySchema: z.ZodType<Prisma.ServiceCategoryTranslationFindManyArgs> =
  z
    .object({
      select: ServiceCategoryTranslationFindManySelectSchema.optional(),
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
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationFindManyArgs>;

export const ServiceCategoryTranslationFindManyZodSchema = z
  .object({
    select: ServiceCategoryTranslationFindManySelectSchema.optional(),
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
