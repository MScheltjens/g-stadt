import * as z from 'zod';
import type { Prisma } from '@prisma/client';

const makeSchema = () =>
  z
    .object({
      id: z.literal(true).optional(),
      categoryId: z.literal(true).optional(),
      locale: z.literal(true).optional(),
      label: z.literal(true).optional(),
      slug: z.literal(true).optional(),
    })
    .strict();
export const ServiceCategoryTranslationMinAggregateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationMinAggregateInputType> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationMinAggregateInputType>;
export const ServiceCategoryTranslationMinAggregateInputObjectZodSchema =
  makeSchema();
