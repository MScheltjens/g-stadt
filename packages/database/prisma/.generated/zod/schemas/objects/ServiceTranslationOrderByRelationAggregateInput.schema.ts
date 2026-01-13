import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
  z
    .object({
      _count: SortOrderSchema.optional(),
    })
    .strict();
export const ServiceTranslationOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ServiceTranslationOrderByRelationAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationOrderByRelationAggregateInput>;
export const ServiceTranslationOrderByRelationAggregateInputObjectZodSchema =
  makeSchema();
