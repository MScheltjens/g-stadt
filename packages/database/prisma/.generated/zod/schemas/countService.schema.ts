import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceOrderByWithRelationInputObjectSchema as ServiceOrderByWithRelationInputObjectSchema } from './objects/ServiceOrderByWithRelationInput.schema';
import { ServiceWhereInputObjectSchema as ServiceWhereInputObjectSchema } from './objects/ServiceWhereInput.schema';
import { ServiceWhereUniqueInputObjectSchema as ServiceWhereUniqueInputObjectSchema } from './objects/ServiceWhereUniqueInput.schema';
import { ServiceCountAggregateInputObjectSchema as ServiceCountAggregateInputObjectSchema } from './objects/ServiceCountAggregateInput.schema';

export const ServiceCountSchema: z.ZodType<Prisma.ServiceCountArgs> = z
  .object({
    orderBy: z
      .union([
        ServiceOrderByWithRelationInputObjectSchema,
        ServiceOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: ServiceWhereInputObjectSchema.optional(),
    cursor: ServiceWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    select: z
      .union([z.literal(true), ServiceCountAggregateInputObjectSchema])
      .optional(),
  })
  .strict() as unknown as z.ZodType<Prisma.ServiceCountArgs>;

export const ServiceCountZodSchema = z
  .object({
    orderBy: z
      .union([
        ServiceOrderByWithRelationInputObjectSchema,
        ServiceOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: ServiceWhereInputObjectSchema.optional(),
    cursor: ServiceWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    select: z
      .union([z.literal(true), ServiceCountAggregateInputObjectSchema])
      .optional(),
  })
  .strict();
