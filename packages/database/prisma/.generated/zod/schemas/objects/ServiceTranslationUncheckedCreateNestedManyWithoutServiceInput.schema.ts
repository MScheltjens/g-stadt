import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceTranslationCreateWithoutServiceInputObjectSchema as ServiceTranslationCreateWithoutServiceInputObjectSchema } from './ServiceTranslationCreateWithoutServiceInput.schema';
import { ServiceTranslationUncheckedCreateWithoutServiceInputObjectSchema as ServiceTranslationUncheckedCreateWithoutServiceInputObjectSchema } from './ServiceTranslationUncheckedCreateWithoutServiceInput.schema';
import { ServiceTranslationCreateOrConnectWithoutServiceInputObjectSchema as ServiceTranslationCreateOrConnectWithoutServiceInputObjectSchema } from './ServiceTranslationCreateOrConnectWithoutServiceInput.schema';
import { ServiceTranslationCreateManyServiceInputEnvelopeObjectSchema as ServiceTranslationCreateManyServiceInputEnvelopeObjectSchema } from './ServiceTranslationCreateManyServiceInputEnvelope.schema';
import { ServiceTranslationWhereUniqueInputObjectSchema as ServiceTranslationWhereUniqueInputObjectSchema } from './ServiceTranslationWhereUniqueInput.schema';

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
      createMany: z
        .lazy(
          () => ServiceTranslationCreateManyServiceInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => ServiceTranslationWhereUniqueInputObjectSchema),
          z.lazy(() => ServiceTranslationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();
export const ServiceTranslationUncheckedCreateNestedManyWithoutServiceInputObjectSchema: z.ZodType<Prisma.ServiceTranslationUncheckedCreateNestedManyWithoutServiceInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationUncheckedCreateNestedManyWithoutServiceInput>;
export const ServiceTranslationUncheckedCreateNestedManyWithoutServiceInputObjectZodSchema =
  makeSchema();
