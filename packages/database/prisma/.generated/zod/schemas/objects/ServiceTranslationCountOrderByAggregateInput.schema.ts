import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      serviceId: SortOrderSchema.optional(),
      locale: SortOrderSchema.optional(),
      title: SortOrderSchema.optional(),
      description: SortOrderSchema.optional(),
      slug: SortOrderSchema.optional(),
    })
    .strict();
export const ServiceTranslationCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServiceTranslationCountOrderByAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationCountOrderByAggregateInput>;
export const ServiceTranslationCountOrderByAggregateInputObjectZodSchema =
  makeSchema();
