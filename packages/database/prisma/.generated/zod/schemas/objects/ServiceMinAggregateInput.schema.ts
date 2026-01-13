import * as z from 'zod';
import type { Prisma } from '@prisma/client';

const makeSchema = () =>
  z
    .object({
      id: z.literal(true).optional(),
      categoryId: z.literal(true).optional(),
      icon: z.literal(true).optional(),
      externalUrl: z.literal(true).optional(),
      order: z.literal(true).optional(),
      isActive: z.literal(true).optional(),
      requiresAuth: z.literal(true).optional(),
      role: z.literal(true).optional(),
      createdAt: z.literal(true).optional(),
      updatedAt: z.literal(true).optional(),
    })
    .strict();
export const ServiceMinAggregateInputObjectSchema: z.ZodType<Prisma.ServiceMinAggregateInputType> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceMinAggregateInputType>;
export const ServiceMinAggregateInputObjectZodSchema = makeSchema();
