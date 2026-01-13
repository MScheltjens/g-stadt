import * as z from 'zod';
import type { Prisma } from '@prisma/client';

const makeSchema = () =>
  z
    .object({
      order: z.literal(true).optional(),
    })
    .strict();
export const ServiceSumAggregateInputObjectSchema: z.ZodType<Prisma.ServiceSumAggregateInputType> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceSumAggregateInputType>;
export const ServiceSumAggregateInputObjectZodSchema = makeSchema();
