import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      categoryId: SortOrderSchema.optional(),
      icon: SortOrderSchema.optional(),
      externalUrl: SortOrderSchema.optional(),
      order: SortOrderSchema.optional(),
      isActive: SortOrderSchema.optional(),
      requiresAuth: SortOrderSchema.optional(),
      role: SortOrderSchema.optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
    })
    .strict();
export const ServiceMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServiceMinOrderByAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceMinOrderByAggregateInput>;
export const ServiceMinOrderByAggregateInputObjectZodSchema = makeSchema();
