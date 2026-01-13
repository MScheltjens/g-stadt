import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceTranslationWhereInputObjectSchema as ServiceTranslationWhereInputObjectSchema } from './objects/ServiceTranslationWhereInput.schema';
import { ServiceTranslationOrderByWithAggregationInputObjectSchema as ServiceTranslationOrderByWithAggregationInputObjectSchema } from './objects/ServiceTranslationOrderByWithAggregationInput.schema';
import { ServiceTranslationScalarWhereWithAggregatesInputObjectSchema as ServiceTranslationScalarWhereWithAggregatesInputObjectSchema } from './objects/ServiceTranslationScalarWhereWithAggregatesInput.schema';
import { ServiceTranslationScalarFieldEnumSchema } from './enums/ServiceTranslationScalarFieldEnum.schema';
import { ServiceTranslationCountAggregateInputObjectSchema as ServiceTranslationCountAggregateInputObjectSchema } from './objects/ServiceTranslationCountAggregateInput.schema';
import { ServiceTranslationMinAggregateInputObjectSchema as ServiceTranslationMinAggregateInputObjectSchema } from './objects/ServiceTranslationMinAggregateInput.schema';
import { ServiceTranslationMaxAggregateInputObjectSchema as ServiceTranslationMaxAggregateInputObjectSchema } from './objects/ServiceTranslationMaxAggregateInput.schema';

export const ServiceTranslationGroupBySchema: z.ZodType<Prisma.ServiceTranslationGroupByArgs> =
  z
    .object({
      where: ServiceTranslationWhereInputObjectSchema.optional(),
      orderBy: z
        .union([
          ServiceTranslationOrderByWithAggregationInputObjectSchema,
          ServiceTranslationOrderByWithAggregationInputObjectSchema.array(),
        ])
        .optional(),
      having:
        ServiceTranslationScalarWhereWithAggregatesInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      by: z.array(ServiceTranslationScalarFieldEnumSchema),
      _count: z
        .union([
          z.literal(true),
          ServiceTranslationCountAggregateInputObjectSchema,
        ])
        .optional(),
      _min: ServiceTranslationMinAggregateInputObjectSchema.optional(),
      _max: ServiceTranslationMaxAggregateInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceTranslationGroupByArgs>;

export const ServiceTranslationGroupByZodSchema = z
  .object({
    where: ServiceTranslationWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        ServiceTranslationOrderByWithAggregationInputObjectSchema,
        ServiceTranslationOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having:
      ServiceTranslationScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(ServiceTranslationScalarFieldEnumSchema),
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
