import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryCreateWithoutTranslationsInputObjectSchema as ServiceCategoryCreateWithoutTranslationsInputObjectSchema } from './ServiceCategoryCreateWithoutTranslationsInput.schema';
import { ServiceCategoryUncheckedCreateWithoutTranslationsInputObjectSchema as ServiceCategoryUncheckedCreateWithoutTranslationsInputObjectSchema } from './ServiceCategoryUncheckedCreateWithoutTranslationsInput.schema';
import { ServiceCategoryCreateOrConnectWithoutTranslationsInputObjectSchema as ServiceCategoryCreateOrConnectWithoutTranslationsInputObjectSchema } from './ServiceCategoryCreateOrConnectWithoutTranslationsInput.schema';
import { ServiceCategoryUpsertWithoutTranslationsInputObjectSchema as ServiceCategoryUpsertWithoutTranslationsInputObjectSchema } from './ServiceCategoryUpsertWithoutTranslationsInput.schema';
import { ServiceCategoryWhereUniqueInputObjectSchema as ServiceCategoryWhereUniqueInputObjectSchema } from './ServiceCategoryWhereUniqueInput.schema';
import { ServiceCategoryUpdateToOneWithWhereWithoutTranslationsInputObjectSchema as ServiceCategoryUpdateToOneWithWhereWithoutTranslationsInputObjectSchema } from './ServiceCategoryUpdateToOneWithWhereWithoutTranslationsInput.schema';
import { ServiceCategoryUpdateWithoutTranslationsInputObjectSchema as ServiceCategoryUpdateWithoutTranslationsInputObjectSchema } from './ServiceCategoryUpdateWithoutTranslationsInput.schema';
import { ServiceCategoryUncheckedUpdateWithoutTranslationsInputObjectSchema as ServiceCategoryUncheckedUpdateWithoutTranslationsInputObjectSchema } from './ServiceCategoryUncheckedUpdateWithoutTranslationsInput.schema';

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
      upsert: z
        .lazy(() => ServiceCategoryUpsertWithoutTranslationsInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => ServiceCategoryWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ServiceCategoryUpdateToOneWithWhereWithoutTranslationsInputObjectSchema,
          ),
          z.lazy(
            () => ServiceCategoryUpdateWithoutTranslationsInputObjectSchema,
          ),
          z.lazy(
            () =>
              ServiceCategoryUncheckedUpdateWithoutTranslationsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();
export const ServiceCategoryUpdateOneRequiredWithoutTranslationsNestedInputObjectSchema: z.ZodType<Prisma.ServiceCategoryUpdateOneRequiredWithoutTranslationsNestedInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryUpdateOneRequiredWithoutTranslationsNestedInput>;
export const ServiceCategoryUpdateOneRequiredWithoutTranslationsNestedInputObjectZodSchema =
  makeSchema();
