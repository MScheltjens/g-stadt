import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryArgsObjectSchema as ServiceCategoryArgsObjectSchema } from './ServiceCategoryArgs.schema';
import { ServiceTranslationFindManySchema as ServiceTranslationFindManySchema } from '../findManyServiceTranslation.schema';
import { ServiceCountOutputTypeArgsObjectSchema as ServiceCountOutputTypeArgsObjectSchema } from './ServiceCountOutputTypeArgs.schema';

const makeSchema = () =>
  z
    .object({
      id: z.boolean().optional(),
      categoryId: z.boolean().optional(),
      category: z
        .union([z.boolean(), z.lazy(() => ServiceCategoryArgsObjectSchema)])
        .optional(),
      icon: z.boolean().optional(),
      externalUrl: z.boolean().optional(),
      order: z.boolean().optional(),
      isActive: z.boolean().optional(),
      requiresAuth: z.boolean().optional(),
      role: z.boolean().optional(),
      translations: z
        .union([z.boolean(), z.lazy(() => ServiceTranslationFindManySchema)])
        .optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      _count: z
        .union([
          z.boolean(),
          z.lazy(() => ServiceCountOutputTypeArgsObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const ServiceSelectObjectSchema: z.ZodType<Prisma.ServiceSelect> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceSelect>;
export const ServiceSelectObjectZodSchema = makeSchema();
