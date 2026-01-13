import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceTranslationOrderByWithRelationInputObjectSchema as ServiceTranslationOrderByWithRelationInputObjectSchema } from './objects/ServiceTranslationOrderByWithRelationInput.schema';
import { ServiceTranslationWhereInputObjectSchema as ServiceTranslationWhereInputObjectSchema } from './objects/ServiceTranslationWhereInput.schema';
import { ServiceTranslationWhereUniqueInputObjectSchema as ServiceTranslationWhereUniqueInputObjectSchema } from './objects/ServiceTranslationWhereUniqueInput.schema';
import { ServiceTranslationCountAggregateInputObjectSchema as ServiceTranslationCountAggregateInputObjectSchema } from './objects/ServiceTranslationCountAggregateInput.schema';

export const ServiceTranslationCountSchema: z.ZodType<Prisma.ServiceTranslationCountArgs> =
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
      select: z
        .union([
          z.literal(true),
          ServiceTranslationCountAggregateInputObjectSchema,
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceTranslationCountArgs>;

export const ServiceTranslationCountZodSchema = z
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
    select: z
      .union([
        z.literal(true),
        ServiceTranslationCountAggregateInputObjectSchema,
      ])
      .optional(),
  })
  .strict();
