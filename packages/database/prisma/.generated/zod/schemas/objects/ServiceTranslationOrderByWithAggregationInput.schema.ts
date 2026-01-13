import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ServiceTranslationCountOrderByAggregateInputObjectSchema as ServiceTranslationCountOrderByAggregateInputObjectSchema } from './ServiceTranslationCountOrderByAggregateInput.schema';
import { ServiceTranslationMaxOrderByAggregateInputObjectSchema as ServiceTranslationMaxOrderByAggregateInputObjectSchema } from './ServiceTranslationMaxOrderByAggregateInput.schema';
import { ServiceTranslationMinOrderByAggregateInputObjectSchema as ServiceTranslationMinOrderByAggregateInputObjectSchema } from './ServiceTranslationMinOrderByAggregateInput.schema';

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      serviceId: SortOrderSchema.optional(),
      locale: SortOrderSchema.optional(),
      title: SortOrderSchema.optional(),
      description: SortOrderSchema.optional(),
      slug: SortOrderSchema.optional(),
      _count: z
        .lazy(() => ServiceTranslationCountOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => ServiceTranslationMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => ServiceTranslationMinOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();
export const ServiceTranslationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ServiceTranslationOrderByWithAggregationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationOrderByWithAggregationInput>;
export const ServiceTranslationOrderByWithAggregationInputObjectZodSchema =
  makeSchema();
