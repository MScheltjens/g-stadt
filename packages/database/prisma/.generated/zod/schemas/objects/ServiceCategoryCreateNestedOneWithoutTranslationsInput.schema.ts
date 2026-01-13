import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryCreateWithoutTranslationsInputObjectSchema as ServiceCategoryCreateWithoutTranslationsInputObjectSchema } from './ServiceCategoryCreateWithoutTranslationsInput.schema';
import { ServiceCategoryUncheckedCreateWithoutTranslationsInputObjectSchema as ServiceCategoryUncheckedCreateWithoutTranslationsInputObjectSchema } from './ServiceCategoryUncheckedCreateWithoutTranslationsInput.schema';
import { ServiceCategoryCreateOrConnectWithoutTranslationsInputObjectSchema as ServiceCategoryCreateOrConnectWithoutTranslationsInputObjectSchema } from './ServiceCategoryCreateOrConnectWithoutTranslationsInput.schema';
import { ServiceCategoryWhereUniqueInputObjectSchema as ServiceCategoryWhereUniqueInputObjectSchema } from './ServiceCategoryWhereUniqueInput.schema';

const makeSchema = () =>
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ServiceCategoryCreateWithoutTranslationsInputObjectSchema,
          ),
          z.lazy(
            () =>
              ServiceCategoryUncheckedCreateWithoutTranslationsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            ServiceCategoryCreateOrConnectWithoutTranslationsInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => ServiceCategoryWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();
export const ServiceCategoryCreateNestedOneWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.ServiceCategoryCreateNestedOneWithoutTranslationsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryCreateNestedOneWithoutTranslationsInput>;
export const ServiceCategoryCreateNestedOneWithoutTranslationsInputObjectZodSchema =
  makeSchema();
