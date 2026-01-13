import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
  z
    .object({
      order: SortOrderSchema.optional(),
    })
    .strict();
export const ServiceCategorySumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServiceCategorySumOrderByAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategorySumOrderByAggregateInput>;
export const ServiceCategorySumOrderByAggregateInputObjectZodSchema =
  makeSchema();
