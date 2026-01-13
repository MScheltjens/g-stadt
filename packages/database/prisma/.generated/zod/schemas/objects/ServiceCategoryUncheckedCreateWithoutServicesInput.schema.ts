import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryTranslationUncheckedCreateNestedManyWithoutCategoryInputObjectSchema as ServiceCategoryTranslationUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './ServiceCategoryTranslationUncheckedCreateNestedManyWithoutCategoryInput.schema';

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
            ServiceCategoryTranslationUncheckedCreateNestedManyWithoutCategoryInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const ServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema: z.ZodType<Prisma.ServiceCategoryUncheckedCreateWithoutServicesInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryUncheckedCreateWithoutServicesInput>;
export const ServiceCategoryUncheckedCreateWithoutServicesInputObjectZodSchema =
  makeSchema();
