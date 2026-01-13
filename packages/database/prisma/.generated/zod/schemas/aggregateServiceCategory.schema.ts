import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategoryOrderByWithRelationInputObjectSchema as ServiceCategoryOrderByWithRelationInputObjectSchema } from './objects/ServiceCategoryOrderByWithRelationInput.schema';
import { ServiceCategoryWhereInputObjectSchema as ServiceCategoryWhereInputObjectSchema } from './objects/ServiceCategoryWhereInput.schema';
import { ServiceCategoryWhereUniqueInputObjectSchema as ServiceCategoryWhereUniqueInputObjectSchema } from './objects/ServiceCategoryWhereUniqueInput.schema';
import { ServiceCategoryCountAggregateInputObjectSchema as ServiceCategoryCountAggregateInputObjectSchema } from './objects/ServiceCategoryCountAggregateInput.schema';
import { ServiceCategoryMinAggregateInputObjectSchema as ServiceCategoryMinAggregateInputObjectSchema } from './objects/ServiceCategoryMinAggregateInput.schema';
import { ServiceCategoryMaxAggregateInputObjectSchema as ServiceCategoryMaxAggregateInputObjectSchema } from './objects/ServiceCategoryMaxAggregateInput.schema';
import { ServiceCategoryAvgAggregateInputObjectSchema as ServiceCategoryAvgAggregateInputObjectSchema } from './objects/ServiceCategoryAvgAggregateInput.schema';
import { ServiceCategorySumAggregateInputObjectSchema as ServiceCategorySumAggregateInputObjectSchema } from './objects/ServiceCategorySumAggregateInput.schema';

export const ServiceCategoryAggregateSchema: z.ZodType<Prisma.ServiceCategoryAggregateArgs> =
  z
    .object({
      orderBy: z
        .union([
          ServiceCategoryOrderByWithRelationInputObjectSchema,
          ServiceCategoryOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: ServiceCategoryWhereInputObjectSchema.optional(),
      cursor: ServiceCategoryWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      _count: z
        .union([
          z.literal(true),
          ServiceCategoryCountAggregateInputObjectSchema,
        ])
        .optional(),
      _min: ServiceCategoryMinAggregateInputObjectSchema.optional(),
      _max: ServiceCategoryMaxAggregateInputObjectSchema.optional(),
      _avg: ServiceCategoryAvgAggregateInputObjectSchema.optional(),
      _sum: ServiceCategorySumAggregateInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryAggregateArgs>;

export const ServiceCategoryAggregateZodSchema = z
  .object({
    orderBy: z
      .union([
        ServiceCategoryOrderByWithRelationInputObjectSchema,
        ServiceCategoryOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: ServiceCategoryWhereInputObjectSchema.optional(),
    cursor: ServiceCategoryWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), ServiceCategoryCountAggregateInputObjectSchema])
      .optional(),
    _min: ServiceCategoryMinAggregateInputObjectSchema.optional(),
    _max: ServiceCategoryMaxAggregateInputObjectSchema.optional(),
    _avg: ServiceCategoryAvgAggregateInputObjectSchema.optional(),
    _sum: ServiceCategorySumAggregateInputObjectSchema.optional(),
  })
  .strict();
