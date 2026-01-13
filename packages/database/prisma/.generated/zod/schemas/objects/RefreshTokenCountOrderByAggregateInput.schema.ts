import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      tokenHash: SortOrderSchema.optional(),
      userId: SortOrderSchema.optional(),
      expiresAt: SortOrderSchema.optional(),
    })
    .strict();
export const RefreshTokenCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RefreshTokenCountOrderByAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.RefreshTokenCountOrderByAggregateInput>;
export const RefreshTokenCountOrderByAggregateInputObjectZodSchema =
  makeSchema();
