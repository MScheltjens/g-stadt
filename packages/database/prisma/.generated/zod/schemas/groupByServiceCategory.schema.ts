import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategoryWhereInputObjectSchema as ServiceCategoryWhereInputObjectSchema } from './objects/ServiceCategoryWhereInput.schema';
import { ServiceCategoryOrderByWithAggregationInputObjectSchema as ServiceCategoryOrderByWithAggregationInputObjectSchema } from './objects/ServiceCategoryOrderByWithAggregationInput.schema';
import { ServiceCategoryScalarWhereWithAggregatesInputObjectSchema as ServiceCategoryScalarWhereWithAggregatesInputObjectSchema } from './objects/ServiceCategoryScalarWhereWithAggregatesInput.schema';
import { ServiceCategoryScalarFieldEnumSchema } from './enums/ServiceCategoryScalarFieldEnum.schema';
import { ServiceCategoryCountAggregateInputObjectSchema as ServiceCategoryCountAggregateInputObjectSchema } from './objects/ServiceCategoryCountAggregateInput.schema';
import { ServiceCategoryMinAggregateInputObjectSchema as ServiceCategoryMinAggregateInputObjectSchema } from './objects/ServiceCategoryMinAggregateInput.schema';
import { ServiceCategoryMaxAggregateInputObjectSchema as ServiceCategoryMaxAggregateInputObjectSchema } from './objects/ServiceCategoryMaxAggregateInput.schema';
import { ServiceCategoryAvgAggregateInputObjectSchema as ServiceCategoryAvgAggregateInputObjectSchema } from './objects/ServiceCategoryAvgAggregateInput.schema';
import { ServiceCategorySumAggregateInputObjectSchema as ServiceCategorySumAggregateInputObjectSchema } from './objects/ServiceCategorySumAggregateInput.schema';

export const ServiceCategoryGroupBySchema: z.ZodType<Prisma.ServiceCategoryGroupByArgs> =
  z
    .object({
      where: ServiceCategoryWhereInputObjectSchema.optional(),
      orderBy: z
        .union([
          ServiceCategoryOrderByWithAggregationInputObjectSchema,
          ServiceCategoryOrderByWithAggregationInputObjectSchema.array(),
        ])
        .optional(),
      having:
        ServiceCategoryScalarWhereWithAggregatesInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      by: z.array(ServiceCategoryScalarFieldEnumSchema),
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
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryGroupByArgs>;

export const ServiceCategoryGroupByZodSchema = z
  .object({
    where: ServiceCategoryWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        ServiceCategoryOrderByWithAggregationInputObjectSchema,
        ServiceCategoryOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having:
      ServiceCategoryScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(ServiceCategoryScalarFieldEnumSchema),
    _count: z
      .union([z.literal(true), ServiceCategoryCountAggregateInputObjectSchema])
      .optional(),
    _min: ServiceCategoryMinAggregateInputObjectSchema.optional(),
    _max: ServiceCategoryMaxAggregateInputObjectSchema.optional(),
    _avg: ServiceCategoryAvgAggregateInputObjectSchema.optional(),
    _sum: ServiceCategorySumAggregateInputObjectSchema.optional(),
  })
  .strict();
