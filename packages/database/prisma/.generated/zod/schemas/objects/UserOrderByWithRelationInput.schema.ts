import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RefreshTokenOrderByRelationAggregateInputObjectSchema as RefreshTokenOrderByRelationAggregateInputObjectSchema } from './RefreshTokenOrderByRelationAggregateInput.schema';
import { PasswordResetTokenOrderByRelationAggregateInputObjectSchema as PasswordResetTokenOrderByRelationAggregateInputObjectSchema } from './PasswordResetTokenOrderByRelationAggregateInput.schema';

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      email: SortOrderSchema.optional(),
      passwordHash: SortOrderSchema.optional(),
      role: SortOrderSchema.optional(),
      isVerified: SortOrderSchema.optional(),
      createdAt: SortOrderSchema.optional(),
      refreshTokens: z
        .lazy(() => RefreshTokenOrderByRelationAggregateInputObjectSchema)
        .optional(),
      passwordResetTokens: z
        .lazy(() => PasswordResetTokenOrderByRelationAggregateInputObjectSchema)
        .optional(),
    })
    .strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
