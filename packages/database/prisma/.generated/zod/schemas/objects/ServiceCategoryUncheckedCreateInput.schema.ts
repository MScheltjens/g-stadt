import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceUncheckedCreateNestedManyWithoutCategoryInputObjectSchema as ServiceUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './ServiceUncheckedCreateNestedManyWithoutCategoryInput.schema';
import { ServiceCategoryTranslationUncheckedCreateNestedManyWithoutCategoryInputObjectSchema as ServiceCategoryTranslationUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './ServiceCategoryTranslationUncheckedCreateNestedManyWithoutCategoryInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      code: z.string(),
      order: z.number().int().optional(),
      isActive: z.boolean().optional(),
      services: z
        .lazy(
          () =>
            ServiceUncheckedCreateNestedManyWithoutCategoryInputObjectSchema,
        )
        .optional(),
      translations: z
        .lazy(
          () =>
            ServiceCategoryTranslationUncheckedCreateNestedManyWithoutCategoryInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const ServiceCategoryUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryUncheckedCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryUncheckedCreateInput>;
export const ServiceCategoryUncheckedCreateInputObjectZodSchema = makeSchema();
