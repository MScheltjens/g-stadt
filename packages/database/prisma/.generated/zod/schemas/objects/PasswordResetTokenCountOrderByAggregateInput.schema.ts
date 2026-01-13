import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      userId: SortOrderSchema.optional(),
      tokenHash: SortOrderSchema.optional(),
      expiresAt: SortOrderSchema.optional(),
    })
    .strict();
export const PasswordResetTokenCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PasswordResetTokenCountOrderByAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PasswordResetTokenCountOrderByAggregateInput>;
export const PasswordResetTokenCountOrderByAggregateInputObjectZodSchema =
  makeSchema();
