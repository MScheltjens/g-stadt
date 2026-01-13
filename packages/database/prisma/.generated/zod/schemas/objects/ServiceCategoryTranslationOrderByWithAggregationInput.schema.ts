import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ServiceCategoryTranslationCountOrderByAggregateInputObjectSchema as ServiceCategoryTranslationCountOrderByAggregateInputObjectSchema } from './ServiceCategoryTranslationCountOrderByAggregateInput.schema';
import { ServiceCategoryTranslationMaxOrderByAggregateInputObjectSchema as ServiceCategoryTranslationMaxOrderByAggregateInputObjectSchema } from './ServiceCategoryTranslationMaxOrderByAggregateInput.schema';
import { ServiceCategoryTranslationMinOrderByAggregateInputObjectSchema as ServiceCategoryTranslationMinOrderByAggregateInputObjectSchema } from './ServiceCategoryTranslationMinOrderByAggregateInput.schema';

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      categoryId: SortOrderSchema.optional(),
      locale: SortOrderSchema.optional(),
      label: SortOrderSchema.optional(),
      slug: SortOrderSchema.optional(),
      _count: z
        .lazy(
          () =>
            ServiceCategoryTranslationCountOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _max: z
        .lazy(
          () => ServiceCategoryTranslationMaxOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _min: z
        .lazy(
          () => ServiceCategoryTranslationMinOrderByAggregateInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const ServiceCategoryTranslationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationOrderByWithAggregationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationOrderByWithAggregationInput>;
export const ServiceCategoryTranslationOrderByWithAggregationInputObjectZodSchema =
  makeSchema();
