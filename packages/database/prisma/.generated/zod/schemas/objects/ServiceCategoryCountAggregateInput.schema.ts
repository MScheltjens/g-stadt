import * as z from 'zod';
import type { Prisma } from '@prisma/client';

const makeSchema = () =>
  z
    .object({
      id: z.literal(true).optional(),
      code: z.literal(true).optional(),
      order: z.literal(true).optional(),
      isActive: z.literal(true).optional(),
      _all: z.literal(true).optional(),
    })
    .strict();
export const ServiceCategoryCountAggregateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryCountAggregateInputType> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryCountAggregateInputType>;
export const ServiceCategoryCountAggregateInputObjectZodSchema = makeSchema();
