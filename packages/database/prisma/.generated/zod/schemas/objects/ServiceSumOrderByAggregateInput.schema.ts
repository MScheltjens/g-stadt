import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
  z
    .object({
      order: SortOrderSchema.optional(),
    })
    .strict();
export const ServiceSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServiceSumOrderByAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceSumOrderByAggregateInput>;
export const ServiceSumOrderByAggregateInputObjectZodSchema = makeSchema();
