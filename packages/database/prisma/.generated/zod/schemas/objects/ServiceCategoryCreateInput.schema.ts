import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateNestedManyWithoutCategoryInputObjectSchema as ServiceCreateNestedManyWithoutCategoryInputObjectSchema } from './ServiceCreateNestedManyWithoutCategoryInput.schema';
import { ServiceCategoryTranslationCreateNestedManyWithoutCategoryInputObjectSchema as ServiceCategoryTranslationCreateNestedManyWithoutCategoryInputObjectSchema } from './ServiceCategoryTranslationCreateNestedManyWithoutCategoryInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      code: z.string(),
      order: z.number().int().optional(),
      isActive: z.boolean().optional(),
      services: z
        .lazy(() => ServiceCreateNestedManyWithoutCategoryInputObjectSchema)
        .optional(),
      translations: z
        .lazy(
          () =>
            ServiceCategoryTranslationCreateNestedManyWithoutCategoryInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const ServiceCategoryCreateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryCreateInput>;
export const ServiceCategoryCreateInputObjectZodSchema = makeSchema();
