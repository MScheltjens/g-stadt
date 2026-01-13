import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryTranslationCreateWithoutCategoryInputObjectSchema as ServiceCategoryTranslationCreateWithoutCategoryInputObjectSchema } from './ServiceCategoryTranslationCreateWithoutCategoryInput.schema';
import { ServiceCategoryTranslationUncheckedCreateWithoutCategoryInputObjectSchema as ServiceCategoryTranslationUncheckedCreateWithoutCategoryInputObjectSchema } from './ServiceCategoryTranslationUncheckedCreateWithoutCategoryInput.schema';
import { ServiceCategoryTranslationCreateOrConnectWithoutCategoryInputObjectSchema as ServiceCategoryTranslationCreateOrConnectWithoutCategoryInputObjectSchema } from './ServiceCategoryTranslationCreateOrConnectWithoutCategoryInput.schema';
import { ServiceCategoryTranslationUpsertWithWhereUniqueWithoutCategoryInputObjectSchema as ServiceCategoryTranslationUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './ServiceCategoryTranslationUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { ServiceCategoryTranslationCreateManyCategoryInputEnvelopeObjectSchema as ServiceCategoryTranslationCreateManyCategoryInputEnvelopeObjectSchema } from './ServiceCategoryTranslationCreateManyCategoryInputEnvelope.schema';
import { ServiceCategoryTranslationWhereUniqueInputObjectSchema as ServiceCategoryTranslationWhereUniqueInputObjectSchema } from './ServiceCategoryTranslationWhereUniqueInput.schema';
import { ServiceCategoryTranslationUpdateWithWhereUniqueWithoutCategoryInputObjectSchema as ServiceCategoryTranslationUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './ServiceCategoryTranslationUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { ServiceCategoryTranslationUpdateManyWithWhereWithoutCategoryInputObjectSchema as ServiceCategoryTranslationUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './ServiceCategoryTranslationUpdateManyWithWhereWithoutCategoryInput.schema';
import { ServiceCategoryTranslationScalarWhereInputObjectSchema as ServiceCategoryTranslationScalarWhereInputObjectSchema } from './ServiceCategoryTranslationScalarWhereInput.schema';

const makeSchema = () =>
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              ServiceCategoryTranslationCreateWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServiceCategoryTranslationCreateWithoutCategoryInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              ServiceCategoryTranslationUncheckedCreateWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServiceCategoryTranslationUncheckedCreateWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ServiceCategoryTranslationCreateOrConnectWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServiceCategoryTranslationCreateOrConnectWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ServiceCategoryTranslationUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServiceCategoryTranslationUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            ServiceCategoryTranslationCreateManyCategoryInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => ServiceCategoryTranslationWhereUniqueInputObjectSchema),
          z
            .lazy(() => ServiceCategoryTranslationWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ServiceCategoryTranslationWhereUniqueInputObjectSchema),
          z
            .lazy(() => ServiceCategoryTranslationWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ServiceCategoryTranslationWhereUniqueInputObjectSchema),
          z
            .lazy(() => ServiceCategoryTranslationWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ServiceCategoryTranslationWhereUniqueInputObjectSchema),
          z
            .lazy(() => ServiceCategoryTranslationWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ServiceCategoryTranslationUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServiceCategoryTranslationUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ServiceCategoryTranslationUpdateManyWithWhereWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServiceCategoryTranslationUpdateManyWithWhereWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ServiceCategoryTranslationScalarWhereInputObjectSchema),
          z
            .lazy(() => ServiceCategoryTranslationScalarWhereInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();
export const ServiceCategoryTranslationUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationUncheckedUpdateManyWithoutCategoryNestedInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationUncheckedUpdateManyWithoutCategoryNestedInput>;
export const ServiceCategoryTranslationUncheckedUpdateManyWithoutCategoryNestedInputObjectZodSchema =
  makeSchema();
