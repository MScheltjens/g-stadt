import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryArgsObjectSchema as ServiceCategoryArgsObjectSchema } from './ServiceCategoryArgs.schema';

const makeSchema = () =>
  z
    .object({
      id: z.boolean().optional(),
      categoryId: z.boolean().optional(),
      locale: z.boolean().optional(),
      label: z.boolean().optional(),
      slug: z.boolean().optional(),
      category: z
        .union([z.boolean(), z.lazy(() => ServiceCategoryArgsObjectSchema)])
        .optional(),
    })
    .strict();
export const ServiceCategoryTranslationSelectObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationSelect> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationSelect>;
export const ServiceCategoryTranslationSelectObjectZodSchema = makeSchema();
