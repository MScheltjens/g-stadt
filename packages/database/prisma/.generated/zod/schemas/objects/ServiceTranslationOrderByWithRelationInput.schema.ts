import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ServiceOrderByWithRelationInputObjectSchema as ServiceOrderByWithRelationInputObjectSchema } from './ServiceOrderByWithRelationInput.schema';

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      serviceId: SortOrderSchema.optional(),
      locale: SortOrderSchema.optional(),
      title: SortOrderSchema.optional(),
      description: SortOrderSchema.optional(),
      slug: SortOrderSchema.optional(),
      service: z
        .lazy(() => ServiceOrderByWithRelationInputObjectSchema)
        .optional(),
    })
    .strict();
export const ServiceTranslationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ServiceTranslationOrderByWithRelationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationOrderByWithRelationInput>;
export const ServiceTranslationOrderByWithRelationInputObjectZodSchema =
  makeSchema();
