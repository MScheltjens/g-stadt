import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceUncheckedCreateNestedManyWithoutCategoryInputObjectSchema as ServiceUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './ServiceUncheckedCreateNestedManyWithoutCategoryInput.schema';

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
    })
    .strict();
export const ServiceCategoryUncheckedCreateWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.ServiceCategoryUncheckedCreateWithoutTranslationsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryUncheckedCreateWithoutTranslationsInput>;
export const ServiceCategoryUncheckedCreateWithoutTranslationsInputObjectZodSchema =
  makeSchema();
