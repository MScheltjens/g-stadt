import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
  z
    .object({
      order: SortOrderSchema.optional(),
    })
    .strict();
export const ServiceCategoryAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryAvgOrderByAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryAvgOrderByAggregateInput>;
export const ServiceCategoryAvgOrderByAggregateInputObjectZodSchema =
  makeSchema();
