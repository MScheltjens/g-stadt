import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategoryTranslationOrderByWithRelationInputObjectSchema as ServiceCategoryTranslationOrderByWithRelationInputObjectSchema } from './objects/ServiceCategoryTranslationOrderByWithRelationInput.schema';
import { ServiceCategoryTranslationWhereInputObjectSchema as ServiceCategoryTranslationWhereInputObjectSchema } from './objects/ServiceCategoryTranslationWhereInput.schema';
import { ServiceCategoryTranslationWhereUniqueInputObjectSchema as ServiceCategoryTranslationWhereUniqueInputObjectSchema } from './objects/ServiceCategoryTranslationWhereUniqueInput.schema';
import { ServiceCategoryTranslationCountAggregateInputObjectSchema as ServiceCategoryTranslationCountAggregateInputObjectSchema } from './objects/ServiceCategoryTranslationCountAggregateInput.schema';

export const ServiceCategoryTranslationCountSchema: z.ZodType<Prisma.ServiceCategoryTranslationCountArgs> =
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
      select: z
        .union([
          z.literal(true),
          ServiceCategoryTranslationCountAggregateInputObjectSchema,
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationCountArgs>;

export const ServiceCategoryTranslationCountZodSchema = z
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
    select: z
      .union([
        z.literal(true),
        ServiceCategoryTranslationCountAggregateInputObjectSchema,
      ])
      .optional(),
  })
  .strict();
