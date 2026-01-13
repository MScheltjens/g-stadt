import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateWithoutCategoryInputObjectSchema as ServiceCreateWithoutCategoryInputObjectSchema } from './ServiceCreateWithoutCategoryInput.schema';
import { ServiceUncheckedCreateWithoutCategoryInputObjectSchema as ServiceUncheckedCreateWithoutCategoryInputObjectSchema } from './ServiceUncheckedCreateWithoutCategoryInput.schema';
import { ServiceCreateOrConnectWithoutCategoryInputObjectSchema as ServiceCreateOrConnectWithoutCategoryInputObjectSchema } from './ServiceCreateOrConnectWithoutCategoryInput.schema';
import { ServiceUpsertWithWhereUniqueWithoutCategoryInputObjectSchema as ServiceUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './ServiceUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { ServiceCreateManyCategoryInputEnvelopeObjectSchema as ServiceCreateManyCategoryInputEnvelopeObjectSchema } from './ServiceCreateManyCategoryInputEnvelope.schema';
import { ServiceWhereUniqueInputObjectSchema as ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema';
import { ServiceUpdateWithWhereUniqueWithoutCategoryInputObjectSchema as ServiceUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './ServiceUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { ServiceUpdateManyWithWhereWithoutCategoryInputObjectSchema as ServiceUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './ServiceUpdateManyWithWhereWithoutCategoryInput.schema';
import { ServiceScalarWhereInputObjectSchema as ServiceScalarWhereInputObjectSchema } from './ServiceScalarWhereInput.schema';

const makeSchema = () =>
  z
    .object({
      create: z
        .union([
          z.lazy(() => ServiceCreateWithoutCategoryInputObjectSchema),
          z.lazy(() => ServiceCreateWithoutCategoryInputObjectSchema).array(),
          z.lazy(() => ServiceUncheckedCreateWithoutCategoryInputObjectSchema),
          z
            .lazy(() => ServiceUncheckedCreateWithoutCategoryInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ServiceCreateOrConnectWithoutCategoryInputObjectSchema),
          z
            .lazy(() => ServiceCreateOrConnectWithoutCategoryInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ServiceUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServiceUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ServiceCreateManyCategoryInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ServiceWhereUniqueInputObjectSchema),
          z.lazy(() => ServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ServiceWhereUniqueInputObjectSchema),
          z.lazy(() => ServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ServiceWhereUniqueInputObjectSchema),
          z.lazy(() => ServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ServiceWhereUniqueInputObjectSchema),
          z.lazy(() => ServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ServiceUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ServiceUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ServiceUpdateManyWithWhereWithoutCategoryInputObjectSchema,
          ),
          z
            .lazy(
              () => ServiceUpdateManyWithWhereWithoutCategoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ServiceScalarWhereInputObjectSchema),
          z.lazy(() => ServiceScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();
export const ServiceUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema: z.ZodType<Prisma.ServiceUncheckedUpdateManyWithoutCategoryNestedInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceUncheckedUpdateManyWithoutCategoryNestedInput>;
export const ServiceUncheckedUpdateManyWithoutCategoryNestedInputObjectZodSchema =
  makeSchema();
