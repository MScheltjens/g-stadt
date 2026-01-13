import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      categoryId: SortOrderSchema.optional(),
      locale: SortOrderSchema.optional(),
      label: SortOrderSchema.optional(),
      slug: SortOrderSchema.optional(),
    })
    .strict();
export const ServiceCategoryTranslationMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationMinOrderByAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationMinOrderByAggregateInput>;
export const ServiceCategoryTranslationMinOrderByAggregateInputObjectZodSchema =
  makeSchema();
