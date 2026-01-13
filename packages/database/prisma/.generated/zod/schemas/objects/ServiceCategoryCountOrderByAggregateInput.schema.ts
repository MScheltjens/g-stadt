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
export const ServiceCategoryCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryCountOrderByAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryCountOrderByAggregateInput>;
export const ServiceCategoryCountOrderByAggregateInputObjectZodSchema =
  makeSchema();
