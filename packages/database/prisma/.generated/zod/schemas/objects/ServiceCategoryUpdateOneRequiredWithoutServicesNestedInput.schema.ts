import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryCreateWithoutServicesInputObjectSchema as ServiceCategoryCreateWithoutServicesInputObjectSchema } from './ServiceCategoryCreateWithoutServicesInput.schema';
import { ServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema as ServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema } from './ServiceCategoryUncheckedCreateWithoutServicesInput.schema';
import { ServiceCategoryCreateOrConnectWithoutServicesInputObjectSchema as ServiceCategoryCreateOrConnectWithoutServicesInputObjectSchema } from './ServiceCategoryCreateOrConnectWithoutServicesInput.schema';
import { ServiceCategoryUpsertWithoutServicesInputObjectSchema as ServiceCategoryUpsertWithoutServicesInputObjectSchema } from './ServiceCategoryUpsertWithoutServicesInput.schema';
import { ServiceCategoryWhereUniqueInputObjectSchema as ServiceCategoryWhereUniqueInputObjectSchema } from './ServiceCategoryWhereUniqueInput.schema';
import { ServiceCategoryUpdateToOneWithWhereWithoutServicesInputObjectSchema as ServiceCategoryUpdateToOneWithWhereWithoutServicesInputObjectSchema } from './ServiceCategoryUpdateToOneWithWhereWithoutServicesInput.schema';
import { ServiceCategoryUpdateWithoutServicesInputObjectSchema as ServiceCategoryUpdateWithoutServicesInputObjectSchema } from './ServiceCategoryUpdateWithoutServicesInput.schema';
import { ServiceCategoryUncheckedUpdateWithoutServicesInputObjectSchema as ServiceCategoryUncheckedUpdateWithoutServicesInputObjectSchema } from './ServiceCategoryUncheckedUpdateWithoutServicesInput.schema';

const makeSchema = () =>
  z
    .object({
      create: z
        .union([
          z.lazy(() => ServiceCategoryCreateWithoutServicesInputObjectSchema),
          z.lazy(
            () =>
              ServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => ServiceCategoryCreateOrConnectWithoutServicesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => ServiceCategoryUpsertWithoutServicesInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => ServiceCategoryWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ServiceCategoryUpdateToOneWithWhereWithoutServicesInputObjectSchema,
          ),
          z.lazy(() => ServiceCategoryUpdateWithoutServicesInputObjectSchema),
          z.lazy(
            () =>
              ServiceCategoryUncheckedUpdateWithoutServicesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();
export const ServiceCategoryUpdateOneRequiredWithoutServicesNestedInputObjectSchema: z.ZodType<Prisma.ServiceCategoryUpdateOneRequiredWithoutServicesNestedInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryUpdateOneRequiredWithoutServicesNestedInput>;
export const ServiceCategoryUpdateOneRequiredWithoutServicesNestedInputObjectZodSchema =
  makeSchema();
