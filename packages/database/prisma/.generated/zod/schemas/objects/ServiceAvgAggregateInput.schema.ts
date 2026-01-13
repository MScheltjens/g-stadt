import * as z from 'zod';
import type { Prisma } from '@prisma/client';

const makeSchema = () =>
  z
    .object({
      order: z.literal(true).optional(),
    })
    .strict();
export const ServiceAvgAggregateInputObjectSchema: z.ZodType<Prisma.ServiceAvgAggregateInputType> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceAvgAggregateInputType>;
export const ServiceAvgAggregateInputObjectZodSchema = makeSchema();
