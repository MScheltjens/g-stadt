import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategoryOrderByWithRelationInputObjectSchema as ServiceCategoryOrderByWithRelationInputObjectSchema } from './objects/ServiceCategoryOrderByWithRelationInput.schema';
import { ServiceCategoryWhereInputObjectSchema as ServiceCategoryWhereInputObjectSchema } from './objects/ServiceCategoryWhereInput.schema';
import { ServiceCategoryWhereUniqueInputObjectSchema as ServiceCategoryWhereUniqueInputObjectSchema } from './objects/ServiceCategoryWhereUniqueInput.schema';
import { ServiceCategoryCountAggregateInputObjectSchema as ServiceCategoryCountAggregateInputObjectSchema } from './objects/ServiceCategoryCountAggregateInput.schema';

export const ServiceCategoryCountSchema: z.ZodType<Prisma.ServiceCategoryCountArgs> =
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
      select: z
        .union([
          z.literal(true),
          ServiceCategoryCountAggregateInputObjectSchema,
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryCountArgs>;

export const ServiceCategoryCountZodSchema = z
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
    select: z
      .union([z.literal(true), ServiceCategoryCountAggregateInputObjectSchema])
      .optional(),
  })
  .strict();
