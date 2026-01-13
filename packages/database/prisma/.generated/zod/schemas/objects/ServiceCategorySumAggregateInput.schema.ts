import * as z from 'zod';
import type { Prisma } from '@prisma/client';

const makeSchema = () =>
  z
    .object({
      order: z.literal(true).optional(),
    })
    .strict();
export const ServiceCategorySumAggregateInputObjectSchema: z.ZodType<Prisma.ServiceCategorySumAggregateInputType> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategorySumAggregateInputType>;
export const ServiceCategorySumAggregateInputObjectZodSchema = makeSchema();
