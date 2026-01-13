import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      userId: SortOrderSchema.optional(),
      tokenHash: SortOrderSchema.optional(),
      expiresAt: SortOrderSchema.optional(),
      user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    })
    .strict();
export const PasswordResetTokenOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PasswordResetTokenOrderByWithRelationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PasswordResetTokenOrderByWithRelationInput>;
export const PasswordResetTokenOrderByWithRelationInputObjectZodSchema =
  makeSchema();
