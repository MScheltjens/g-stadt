import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ServiceCategoryCountOrderByAggregateInputObjectSchema as ServiceCategoryCountOrderByAggregateInputObjectSchema } from './ServiceCategoryCountOrderByAggregateInput.schema';
import { ServiceCategoryAvgOrderByAggregateInputObjectSchema as ServiceCategoryAvgOrderByAggregateInputObjectSchema } from './ServiceCategoryAvgOrderByAggregateInput.schema';
import { ServiceCategoryMaxOrderByAggregateInputObjectSchema as ServiceCategoryMaxOrderByAggregateInputObjectSchema } from './ServiceCategoryMaxOrderByAggregateInput.schema';
import { ServiceCategoryMinOrderByAggregateInputObjectSchema as ServiceCategoryMinOrderByAggregateInputObjectSchema } from './ServiceCategoryMinOrderByAggregateInput.schema';
import { ServiceCategorySumOrderByAggregateInputObjectSchema as ServiceCategorySumOrderByAggregateInputObjectSchema } from './ServiceCategorySumOrderByAggregateInput.schema';

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      code: SortOrderSchema.optional(),
      order: SortOrderSchema.optional(),
      isActive: SortOrderSchema.optional(),
      _count: z
        .lazy(() => ServiceCategoryCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => ServiceCategoryAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => ServiceCategoryMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => ServiceCategoryMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => ServiceCategorySumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();
export const ServiceCategoryOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ServiceCategoryOrderByWithAggregationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryOrderByWithAggregationInput>;
export const ServiceCategoryOrderByWithAggregationInputObjectZodSchema =
  makeSchema();
