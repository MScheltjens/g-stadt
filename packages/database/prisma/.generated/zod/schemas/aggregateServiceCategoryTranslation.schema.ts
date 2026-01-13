import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategoryTranslationOrderByWithRelationInputObjectSchema as ServiceCategoryTranslationOrderByWithRelationInputObjectSchema } from './objects/ServiceCategoryTranslationOrderByWithRelationInput.schema';
import { ServiceCategoryTranslationWhereInputObjectSchema as ServiceCategoryTranslationWhereInputObjectSchema } from './objects/ServiceCategoryTranslationWhereInput.schema';
import { ServiceCategoryTranslationWhereUniqueInputObjectSchema as ServiceCategoryTranslationWhereUniqueInputObjectSchema } from './objects/ServiceCategoryTranslationWhereUniqueInput.schema';
import { ServiceCategoryTranslationCountAggregateInputObjectSchema as ServiceCategoryTranslationCountAggregateInputObjectSchema } from './objects/ServiceCategoryTranslationCountAggregateInput.schema';
import { ServiceCategoryTranslationMinAggregateInputObjectSchema as ServiceCategoryTranslationMinAggregateInputObjectSchema } from './objects/ServiceCategoryTranslationMinAggregateInput.schema';
import { ServiceCategoryTranslationMaxAggregateInputObjectSchema as ServiceCategoryTranslationMaxAggregateInputObjectSchema } from './objects/ServiceCategoryTranslationMaxAggregateInput.schema';

export const ServiceCategoryTranslationAggregateSchema: z.ZodType<Prisma.ServiceCategoryTranslationAggregateArgs> =
  z
    .object({
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
      _count: z
        .union([
          z.literal(true),
          ServiceCategoryTranslationCountAggregateInputObjectSchema,
        ])
        .optional(),
      _min: ServiceCategoryTranslationMinAggregateInputObjectSchema.optional(),
      _max: ServiceCategoryTranslationMaxAggregateInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationAggregateArgs>;

export const ServiceCategoryTranslationAggregateZodSchema = z
  .object({
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
