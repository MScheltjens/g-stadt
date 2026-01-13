import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategoryTranslationWhereInputObjectSchema as ServiceCategoryTranslationWhereInputObjectSchema } from './objects/ServiceCategoryTranslationWhereInput.schema';
import { ServiceCategoryTranslationOrderByWithAggregationInputObjectSchema as ServiceCategoryTranslationOrderByWithAggregationInputObjectSchema } from './objects/ServiceCategoryTranslationOrderByWithAggregationInput.schema';
import { ServiceCategoryTranslationScalarWhereWithAggregatesInputObjectSchema as ServiceCategoryTranslationScalarWhereWithAggregatesInputObjectSchema } from './objects/ServiceCategoryTranslationScalarWhereWithAggregatesInput.schema';
import { ServiceCategoryTranslationScalarFieldEnumSchema } from './enums/ServiceCategoryTranslationScalarFieldEnum.schema';
import { ServiceCategoryTranslationCountAggregateInputObjectSchema as ServiceCategoryTranslationCountAggregateInputObjectSchema } from './objects/ServiceCategoryTranslationCountAggregateInput.schema';
import { ServiceCategoryTranslationMinAggregateInputObjectSchema as ServiceCategoryTranslationMinAggregateInputObjectSchema } from './objects/ServiceCategoryTranslationMinAggregateInput.schema';
import { ServiceCategoryTranslationMaxAggregateInputObjectSchema as ServiceCategoryTranslationMaxAggregateInputObjectSchema } from './objects/ServiceCategoryTranslationMaxAggregateInput.schema';

export const ServiceCategoryTranslationGroupBySchema: z.ZodType<Prisma.ServiceCategoryTranslationGroupByArgs> =
  z
    .object({
      where: ServiceCategoryTranslationWhereInputObjectSchema.optional(),
      orderBy: z
        .union([
          ServiceCategoryTranslationOrderByWithAggregationInputObjectSchema,
          ServiceCategoryTranslationOrderByWithAggregationInputObjectSchema.array(),
        ])
        .optional(),
      having:
        ServiceCategoryTranslationScalarWhereWithAggregatesInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      by: z.array(ServiceCategoryTranslationScalarFieldEnumSchema),
      _count: z
        .union([
          z.literal(true),
          ServiceCategoryTranslationCountAggregateInputObjectSchema,
        ])
        .optional(),
      _min: ServiceCategoryTranslationMinAggregateInputObjectSchema.optional(),
      _max: ServiceCategoryTranslationMaxAggregateInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationGroupByArgs>;

export const ServiceCategoryTranslationGroupByZodSchema = z
  .object({
    where: ServiceCategoryTranslationWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        ServiceCategoryTranslationOrderByWithAggregationInputObjectSchema,
        ServiceCategoryTranslationOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having:
      ServiceCategoryTranslationScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(ServiceCategoryTranslationScalarFieldEnumSchema),
    _count: z
      .union([
        z.literal(true),
        ServiceCategoryTranslationCountAggregateInputObjectSchema,
      ])
      .optional(),
    _min: ServiceCategoryTranslationMinAggregateInputObjectSchema.optional(),
    _max: ServiceCategoryTranslationMaxAggregateInputObjectSchema.optional(),
  })
  .strict();
