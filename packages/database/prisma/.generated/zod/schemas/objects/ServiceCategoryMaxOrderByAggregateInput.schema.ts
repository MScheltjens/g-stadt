import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      code: SortOrderSchema.optional(),
      order: SortOrderSchema.optional(),
      isActive: SortOrderSchema.optional(),
    })
    .strict();
export const ServiceCategoryMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryMaxOrderByAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryMaxOrderByAggregateInput>;
export const ServiceCategoryMaxOrderByAggregateInputObjectZodSchema =
  makeSchema();
