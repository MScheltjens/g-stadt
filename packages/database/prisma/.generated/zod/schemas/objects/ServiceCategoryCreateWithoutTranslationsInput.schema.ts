import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateNestedManyWithoutCategoryInputObjectSchema as ServiceCreateNestedManyWithoutCategoryInputObjectSchema } from './ServiceCreateNestedManyWithoutCategoryInput.schema';

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
    })
    .strict();
export const ServiceCategoryCreateWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.ServiceCategoryCreateWithoutTranslationsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryCreateWithoutTranslationsInput>;
export const ServiceCategoryCreateWithoutTranslationsInputObjectZodSchema =
  makeSchema();
