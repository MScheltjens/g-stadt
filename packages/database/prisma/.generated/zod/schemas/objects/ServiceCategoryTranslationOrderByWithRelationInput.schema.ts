import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ServiceCategoryOrderByWithRelationInputObjectSchema as ServiceCategoryOrderByWithRelationInputObjectSchema } from './ServiceCategoryOrderByWithRelationInput.schema';

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      categoryId: SortOrderSchema.optional(),
      locale: SortOrderSchema.optional(),
      label: SortOrderSchema.optional(),
      slug: SortOrderSchema.optional(),
      category: z
        .lazy(() => ServiceCategoryOrderByWithRelationInputObjectSchema)
        .optional(),
    })
    .strict();
export const ServiceCategoryTranslationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationOrderByWithRelationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationOrderByWithRelationInput>;
export const ServiceCategoryTranslationOrderByWithRelationInputObjectZodSchema =
  makeSchema();
