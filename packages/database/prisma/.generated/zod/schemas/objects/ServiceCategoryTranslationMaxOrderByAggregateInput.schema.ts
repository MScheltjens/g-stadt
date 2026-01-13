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
export const ServiceCategoryTranslationMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationMaxOrderByAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationMaxOrderByAggregateInput>;
export const ServiceCategoryTranslationMaxOrderByAggregateInputObjectZodSchema =
  makeSchema();
