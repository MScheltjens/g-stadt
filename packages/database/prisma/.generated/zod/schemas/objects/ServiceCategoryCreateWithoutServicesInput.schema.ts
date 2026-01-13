import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryTranslationCreateNestedManyWithoutCategoryInputObjectSchema as ServiceCategoryTranslationCreateNestedManyWithoutCategoryInputObjectSchema } from './ServiceCategoryTranslationCreateNestedManyWithoutCategoryInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      code: z.string(),
      order: z.number().int().optional(),
      isActive: z.boolean().optional(),
      translations: z
        .lazy(
          () =>
            ServiceCategoryTranslationCreateNestedManyWithoutCategoryInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const ServiceCategoryCreateWithoutServicesInputObjectSchema: z.ZodType<Prisma.ServiceCategoryCreateWithoutServicesInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryCreateWithoutServicesInput>;
export const ServiceCategoryCreateWithoutServicesInputObjectZodSchema =
  makeSchema();
