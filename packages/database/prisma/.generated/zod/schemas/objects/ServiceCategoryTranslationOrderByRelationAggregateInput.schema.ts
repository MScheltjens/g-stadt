import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
  z
    .object({
      _count: SortOrderSchema.optional(),
    })
    .strict();
export const ServiceCategoryTranslationOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationOrderByRelationAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationOrderByRelationAggregateInput>;
export const ServiceCategoryTranslationOrderByRelationAggregateInputObjectZodSchema =
  makeSchema();
