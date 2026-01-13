import * as z from 'zod';
import type { Prisma } from '@prisma/client';

const makeSchema = () =>
  z
    .object({
      id: z.literal(true).optional(),
      code: z.literal(true).optional(),
      order: z.literal(true).optional(),
      isActive: z.literal(true).optional(),
    })
    .strict();
export const ServiceCategoryMaxAggregateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryMaxAggregateInputType> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryMaxAggregateInputType>;
export const ServiceCategoryMaxAggregateInputObjectZodSchema = makeSchema();
