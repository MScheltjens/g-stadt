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
export const RefreshTokenMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RefreshTokenMinOrderByAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.RefreshTokenMinOrderByAggregateInput>;
export const RefreshTokenMinOrderByAggregateInputObjectZodSchema = makeSchema();
