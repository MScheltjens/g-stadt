import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryTranslationWhereInputObjectSchema as ServiceCategoryTranslationWhereInputObjectSchema } from './ServiceCategoryTranslationWhereInput.schema';

const makeSchema = () =>
  z
    .object({
      every: z
        .lazy(() => ServiceCategoryTranslationWhereInputObjectSchema)
        .optional(),
      some: z
        .lazy(() => ServiceCategoryTranslationWhereInputObjectSchema)
        .optional(),
      none: z
        .lazy(() => ServiceCategoryTranslationWhereInputObjectSchema)
        .optional(),
    })
    .strict();
export const ServiceCategoryTranslationListRelationFilterObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationListRelationFilter> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationListRelationFilter>;
export const ServiceCategoryTranslationListRelationFilterObjectZodSchema =
  makeSchema();
