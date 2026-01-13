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
export const RefreshTokenMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RefreshTokenMaxOrderByAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.RefreshTokenMaxOrderByAggregateInput>;
export const RefreshTokenMaxOrderByAggregateInputObjectZodSchema = makeSchema();
