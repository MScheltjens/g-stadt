import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
  z
    .object({
      order: SortOrderSchema.optional(),
    })
    .strict();
export const ServiceAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServiceAvgOrderByAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceAvgOrderByAggregateInput>;
export const ServiceAvgOrderByAggregateInputObjectZodSchema = makeSchema();
