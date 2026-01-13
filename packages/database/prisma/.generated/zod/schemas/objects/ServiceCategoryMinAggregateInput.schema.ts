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
export const ServiceCategoryMinAggregateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryMinAggregateInputType> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryMinAggregateInputType>;
export const ServiceCategoryMinAggregateInputObjectZodSchema = makeSchema();
