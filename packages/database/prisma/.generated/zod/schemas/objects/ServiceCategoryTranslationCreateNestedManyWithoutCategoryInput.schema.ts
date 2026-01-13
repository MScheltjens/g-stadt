import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryTranslationCreateWithoutCategoryInputObjectSchema as ServiceCategoryTranslationCreateWithoutCategoryInputObjectSchema } from './ServiceCategoryTranslationCreateWithoutCategoryInput.schema';
import { ServiceCategoryTranslationUncheckedCreateWithoutCategoryInputObjectSchema as ServiceCategoryTranslationUncheckedCreateWithoutCategoryInputObjectSchema } from './ServiceCategoryTranslationUncheckedCreateWithoutCategoryInput.schema';
import { ServiceCategoryTranslationCreateOrConnectWithoutCategoryInputObjectSchema as ServiceCategoryTranslationCreateOrConnectWithoutCategoryInputObjectSchema } from './ServiceCategoryTranslationCreateOrConnectWithoutCategoryInput.schema';
import { ServiceCategoryTranslationCreateManyCategoryInputEnvelopeObjectSchema as ServiceCategoryTranslationCreateManyCategoryInputEnvelopeObjectSchema } from './ServiceCategoryTranslationCreateManyCategoryInputEnvelope.schema';
import { ServiceCategoryTranslationWhereUniqueInputObjectSchema as ServiceCategoryTranslationWhereUniqueInputObjectSchema } from './ServiceCategoryTranslationWhereUniqueInput.schema';

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
      createMany: z
        .lazy(
          () =>
            ServiceCategoryTranslationCreateManyCategoryInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => ServiceCategoryTranslationWhereUniqueInputObjectSchema),
          z
            .lazy(() => ServiceCategoryTranslationWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();
export const ServiceCategoryTranslationCreateNestedManyWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationCreateNestedManyWithoutCategoryInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationCreateNestedManyWithoutCategoryInput>;
export const ServiceCategoryTranslationCreateNestedManyWithoutCategoryInputObjectZodSchema =
  makeSchema();
