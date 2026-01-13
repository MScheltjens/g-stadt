import * as z from 'zod';
import type { Prisma } from '@prisma/client';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      code: z.string(),
      order: z.number().int().optional(),
      isActive: z.boolean().optional(),
    })
    .strict();
export const ServiceCategoryCreateManyInputObjectSchema: z.ZodType<Prisma.ServiceCategoryCreateManyInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryCreateManyInput>;
export const ServiceCategoryCreateManyInputObjectZodSchema = makeSchema();
