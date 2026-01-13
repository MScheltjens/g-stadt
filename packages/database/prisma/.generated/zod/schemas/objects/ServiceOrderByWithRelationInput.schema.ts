import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ServiceCategoryOrderByWithRelationInputObjectSchema as ServiceCategoryOrderByWithRelationInputObjectSchema } from './ServiceCategoryOrderByWithRelationInput.schema';
import { ServiceTranslationOrderByRelationAggregateInputObjectSchema as ServiceTranslationOrderByRelationAggregateInputObjectSchema } from './ServiceTranslationOrderByRelationAggregateInput.schema';

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      categoryId: SortOrderSchema.optional(),
      icon: SortOrderSchema.optional(),
      externalUrl: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      order: SortOrderSchema.optional(),
      isActive: SortOrderSchema.optional(),
      requiresAuth: SortOrderSchema.optional(),
      role: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      category: z
        .lazy(() => ServiceCategoryOrderByWithRelationInputObjectSchema)
        .optional(),
      translations: z
        .lazy(() => ServiceTranslationOrderByRelationAggregateInputObjectSchema)
        .optional(),
    })
    .strict();
export const ServiceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ServiceOrderByWithRelationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceOrderByWithRelationInput>;
export const ServiceOrderByWithRelationInputObjectZodSchema = makeSchema();
