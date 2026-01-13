import * as z from 'zod';
import type { Prisma } from '@prisma/client';

const makeSchema = () =>
  z
    .object({
      order: z.literal(true).optional(),
    })
    .strict();
export const ServiceCategoryAvgAggregateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryAvgAggregateInputType> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryAvgAggregateInputType>;
export const ServiceCategoryAvgAggregateInputObjectZodSchema = makeSchema();
