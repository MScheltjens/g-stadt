import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceTranslationCreateWithoutServiceInputObjectSchema as ServiceTranslationCreateWithoutServiceInputObjectSchema } from './ServiceTranslationCreateWithoutServiceInput.schema';
import { ServiceTranslationUncheckedCreateWithoutServiceInputObjectSchema as ServiceTranslationUncheckedCreateWithoutServiceInputObjectSchema } from './ServiceTranslationUncheckedCreateWithoutServiceInput.schema';
import { ServiceTranslationCreateOrConnectWithoutServiceInputObjectSchema as ServiceTranslationCreateOrConnectWithoutServiceInputObjectSchema } from './ServiceTranslationCreateOrConnectWithoutServiceInput.schema';
import { ServiceTranslationUpsertWithWhereUniqueWithoutServiceInputObjectSchema as ServiceTranslationUpsertWithWhereUniqueWithoutServiceInputObjectSchema } from './ServiceTranslationUpsertWithWhereUniqueWithoutServiceInput.schema';
import { ServiceTranslationCreateManyServiceInputEnvelopeObjectSchema as ServiceTranslationCreateManyServiceInputEnvelopeObjectSchema } from './ServiceTranslationCreateManyServiceInputEnvelope.schema';
import { ServiceTranslationWhereUniqueInputObjectSchema as ServiceTranslationWhereUniqueInputObjectSchema } from './ServiceTranslationWhereUniqueInput.schema';
import { ServiceTranslationUpdateWithWhereUniqueWithoutServiceInputObjectSchema as ServiceTranslationUpdateWithWhereUniqueWithoutServiceInputObjectSchema } from './ServiceTranslationUpdateWithWhereUniqueWithoutServiceInput.schema';
import { ServiceTranslationUpdateManyWithWhereWithoutServiceInputObjectSchema as ServiceTranslationUpdateManyWithWhereWithoutServiceInputObjectSchema } from './ServiceTranslationUpdateManyWithWhereWithoutServiceInput.schema';
import { ServiceTranslationScalarWhereInputObjectSchema as ServiceTranslationScalarWhereInputObjectSchema } from './ServiceTranslationScalarWhereInput.schema';

const makeSchema = () =>
  z
    .object({
      create: z
        .union([
          z.lazy(() => ServiceTranslationCreateWithoutServiceInputObjectSchema),
          z
            .lazy(() => ServiceTranslationCreateWithoutServiceInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              ServiceTranslationUncheckedCreateWithoutServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServiceTranslationUncheckedCreateWithoutServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ServiceTranslationCreateOrConnectWithoutServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServiceTranslationCreateOrConnectWithoutServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ServiceTranslationUpsertWithWhereUniqueWithoutServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServiceTranslationUpsertWithWhereUniqueWithoutServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => ServiceTranslationCreateManyServiceInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => ServiceTranslationWhereUniqueInputObjectSchema),
          z.lazy(() => ServiceTranslationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ServiceTranslationWhereUniqueInputObjectSchema),
          z.lazy(() => ServiceTranslationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ServiceTranslationWhereUniqueInputObjectSchema),
          z.lazy(() => ServiceTranslationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ServiceTranslationWhereUniqueInputObjectSchema),
          z.lazy(() => ServiceTranslationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ServiceTranslationUpdateWithWhereUniqueWithoutServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServiceTranslationUpdateWithWhereUniqueWithoutServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ServiceTranslationUpdateManyWithWhereWithoutServiceInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServiceTranslationUpdateManyWithWhereWithoutServiceInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ServiceTranslationScalarWhereInputObjectSchema),
          z.lazy(() => ServiceTranslationScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();
export const ServiceTranslationUncheckedUpdateManyWithoutServiceNestedInputObjectSchema: z.ZodType<Prisma.ServiceTranslationUncheckedUpdateManyWithoutServiceNestedInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationUncheckedUpdateManyWithoutServiceNestedInput>;
export const ServiceTranslationUncheckedUpdateManyWithoutServiceNestedInputObjectZodSchema =
  makeSchema();
