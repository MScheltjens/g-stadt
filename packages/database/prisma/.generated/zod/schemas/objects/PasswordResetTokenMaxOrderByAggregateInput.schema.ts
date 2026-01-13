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
export const PasswordResetTokenMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PasswordResetTokenMaxOrderByAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PasswordResetTokenMaxOrderByAggregateInput>;
export const PasswordResetTokenMaxOrderByAggregateInputObjectZodSchema =
  makeSchema();
