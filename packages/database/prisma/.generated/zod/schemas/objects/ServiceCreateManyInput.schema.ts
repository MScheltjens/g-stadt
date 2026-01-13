import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      categoryId: z.string(),
      icon: z.string(),
      externalUrl: z.string().optional().nullable(),
      order: z.number().int().optional(),
      isActive: z.boolean().optional(),
      requiresAuth: z.boolean().optional(),
      role: RoleSchema.optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();
export const ServiceCreateManyInputObjectSchema: z.ZodType<Prisma.ServiceCreateManyInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateManyInput>;
export const ServiceCreateManyInputObjectZodSchema = makeSchema();
