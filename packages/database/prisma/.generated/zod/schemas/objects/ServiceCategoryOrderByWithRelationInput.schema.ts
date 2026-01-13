import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ServiceOrderByRelationAggregateInputObjectSchema as ServiceOrderByRelationAggregateInputObjectSchema } from './ServiceOrderByRelationAggregateInput.schema';
import { ServiceCategoryTranslationOrderByRelationAggregateInputObjectSchema as ServiceCategoryTranslationOrderByRelationAggregateInputObjectSchema } from './ServiceCategoryTranslationOrderByRelationAggregateInput.schema';

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      code: SortOrderSchema.optional(),
      order: SortOrderSchema.optional(),
      isActive: SortOrderSchema.optional(),
      services: z
        .lazy(() => ServiceOrderByRelationAggregateInputObjectSchema)
        .optional(),
      translations: z
        .lazy(
          () =>
            ServiceCategoryTranslationOrderByRelationAggregateInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const ServiceCategoryOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ServiceCategoryOrderByWithRelationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryOrderByWithRelationInput>;
export const ServiceCategoryOrderByWithRelationInputObjectZodSchema =
  makeSchema();
