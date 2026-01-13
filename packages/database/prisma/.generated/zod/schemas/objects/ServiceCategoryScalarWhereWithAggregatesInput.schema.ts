import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';

const servicecategoryscalarwherewithaggregatesinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => ServiceCategoryScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => ServiceCategoryScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ServiceCategoryScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ServiceCategoryScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => ServiceCategoryScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    code: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    order: z
      .union([
        z.lazy(() => IntWithAggregatesFilterObjectSchema),
        z.number().int(),
      ])
      .optional(),
    isActive: z
      .union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
      .optional(),
  })
  .strict();
export const ServiceCategoryScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ServiceCategoryScalarWhereWithAggregatesInput> =
  servicecategoryscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ServiceCategoryScalarWhereWithAggregatesInput>;
export const ServiceCategoryScalarWhereWithAggregatesInputObjectZodSchema =
  servicecategoryscalarwherewithaggregatesinputSchema;
