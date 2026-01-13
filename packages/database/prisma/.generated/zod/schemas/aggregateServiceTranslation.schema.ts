import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceTranslationOrderByWithRelationInputObjectSchema as ServiceTranslationOrderByWithRelationInputObjectSchema } from './objects/ServiceTranslationOrderByWithRelationInput.schema';
import { ServiceTranslationWhereInputObjectSchema as ServiceTranslationWhereInputObjectSchema } from './objects/ServiceTranslationWhereInput.schema';
import { ServiceTranslationWhereUniqueInputObjectSchema as ServiceTranslationWhereUniqueInputObjectSchema } from './objects/ServiceTranslationWhereUniqueInput.schema';
import { ServiceTranslationCountAggregateInputObjectSchema as ServiceTranslationCountAggregateInputObjectSchema } from './objects/ServiceTranslationCountAggregateInput.schema';
import { ServiceTranslationMinAggregateInputObjectSchema as ServiceTranslationMinAggregateInputObjectSchema } from './objects/ServiceTranslationMinAggregateInput.schema';
import { ServiceTranslationMaxAggregateInputObjectSchema as ServiceTranslationMaxAggregateInputObjectSchema } from './objects/ServiceTranslationMaxAggregateInput.schema';

export const ServiceTranslationAggregateSchema: z.ZodType<Prisma.ServiceTranslationAggregateArgs> =
  z
    .object({
      orderBy: z
        .union([
          ServiceTranslationOrderByWithRelationInputObjectSchema,
          ServiceTranslationOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: ServiceTranslationWhereInputObjectSchema.optional(),
      cursor: ServiceTranslationWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      _count: z
        .union([
          z.literal(true),
          ServiceTranslationCountAggregateInputObjectSchema,
        ])
        .optional(),
      _min: ServiceTranslationMinAggregateInputObjectSchema.optional(),
      _max: ServiceTranslationMaxAggregateInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceTranslationAggregateArgs>;

export const ServiceTranslationAggregateZodSchema = z
  .object({
    orderBy: z
      .union([
        ServiceTranslationOrderByWithRelationInputObjectSchema,
        ServiceTranslationOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: ServiceTranslationWhereInputObjectSchema.optional(),
    cursor: ServiceTranslationWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([
        z.literal(true),
        ServiceTranslationCountAggregateInputObjectSchema,
      ])
      .optional(),
    _min: ServiceTranslationMinAggregateInputObjectSchema.optional(),
    _max: ServiceTranslationMaxAggregateInputObjectSchema.optional(),
  })
  .strict();
