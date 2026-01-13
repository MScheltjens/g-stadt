import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ServiceCountOrderByAggregateInputObjectSchema as ServiceCountOrderByAggregateInputObjectSchema } from './ServiceCountOrderByAggregateInput.schema';
import { ServiceAvgOrderByAggregateInputObjectSchema as ServiceAvgOrderByAggregateInputObjectSchema } from './ServiceAvgOrderByAggregateInput.schema';
import { ServiceMaxOrderByAggregateInputObjectSchema as ServiceMaxOrderByAggregateInputObjectSchema } from './ServiceMaxOrderByAggregateInput.schema';
import { ServiceMinOrderByAggregateInputObjectSchema as ServiceMinOrderByAggregateInputObjectSchema } from './ServiceMinOrderByAggregateInput.schema';
import { ServiceSumOrderByAggregateInputObjectSchema as ServiceSumOrderByAggregateInputObjectSchema } from './ServiceSumOrderByAggregateInput.schema';

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      categoryId: SortOrderSchema.optional(),
      icon: SortOrderSchema.optional(),
      externalUrl: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      order: SortOrderSchema.optional(),
      isActive: SortOrderSchema.optional(),
      requiresAuth: SortOrderSchema.optional(),
      role: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      _count: z
        .lazy(() => ServiceCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => ServiceAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => ServiceMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => ServiceMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => ServiceSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();
export const ServiceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ServiceOrderByWithAggregationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceOrderByWithAggregationInput>;
export const ServiceOrderByWithAggregationInputObjectZodSchema = makeSchema();
