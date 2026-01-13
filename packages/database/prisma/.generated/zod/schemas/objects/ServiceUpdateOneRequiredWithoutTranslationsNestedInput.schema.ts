import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateWithoutTranslationsInputObjectSchema as ServiceCreateWithoutTranslationsInputObjectSchema } from './ServiceCreateWithoutTranslationsInput.schema';
import { ServiceUncheckedCreateWithoutTranslationsInputObjectSchema as ServiceUncheckedCreateWithoutTranslationsInputObjectSchema } from './ServiceUncheckedCreateWithoutTranslationsInput.schema';
import { ServiceCreateOrConnectWithoutTranslationsInputObjectSchema as ServiceCreateOrConnectWithoutTranslationsInputObjectSchema } from './ServiceCreateOrConnectWithoutTranslationsInput.schema';
import { ServiceUpsertWithoutTranslationsInputObjectSchema as ServiceUpsertWithoutTranslationsInputObjectSchema } from './ServiceUpsertWithoutTranslationsInput.schema';
import { ServiceWhereUniqueInputObjectSchema as ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema';
import { ServiceUpdateToOneWithWhereWithoutTranslationsInputObjectSchema as ServiceUpdateToOneWithWhereWithoutTranslationsInputObjectSchema } from './ServiceUpdateToOneWithWhereWithoutTranslationsInput.schema';
import { ServiceUpdateWithoutTranslationsInputObjectSchema as ServiceUpdateWithoutTranslationsInputObjectSchema } from './ServiceUpdateWithoutTranslationsInput.schema';
import { ServiceUncheckedUpdateWithoutTranslationsInputObjectSchema as ServiceUncheckedUpdateWithoutTranslationsInputObjectSchema } from './ServiceUncheckedUpdateWithoutTranslationsInput.schema';

const makeSchema = () =>
  z
    .object({
      create: z
        .union([
          z.lazy(() => ServiceCreateWithoutTranslationsInputObjectSchema),
          z.lazy(
            () => ServiceUncheckedCreateWithoutTranslationsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ServiceCreateOrConnectWithoutTranslationsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ServiceUpsertWithoutTranslationsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ServiceWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ServiceUpdateToOneWithWhereWithoutTranslationsInputObjectSchema,
          ),
          z.lazy(() => ServiceUpdateWithoutTranslationsInputObjectSchema),
          z.lazy(
            () => ServiceUncheckedUpdateWithoutTranslationsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();
export const ServiceUpdateOneRequiredWithoutTranslationsNestedInputObjectSchema: z.ZodType<Prisma.ServiceUpdateOneRequiredWithoutTranslationsNestedInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceUpdateOneRequiredWithoutTranslationsNestedInput>;
export const ServiceUpdateOneRequiredWithoutTranslationsNestedInputObjectZodSchema =
  makeSchema();
