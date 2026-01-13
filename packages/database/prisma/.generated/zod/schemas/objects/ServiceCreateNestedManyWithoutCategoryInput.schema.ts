import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateWithoutCategoryInputObjectSchema as ServiceCreateWithoutCategoryInputObjectSchema } from './ServiceCreateWithoutCategoryInput.schema';
import { ServiceUncheckedCreateWithoutCategoryInputObjectSchema as ServiceUncheckedCreateWithoutCategoryInputObjectSchema } from './ServiceUncheckedCreateWithoutCategoryInput.schema';
import { ServiceCreateOrConnectWithoutCategoryInputObjectSchema as ServiceCreateOrConnectWithoutCategoryInputObjectSchema } from './ServiceCreateOrConnectWithoutCategoryInput.schema';
import { ServiceCreateManyCategoryInputEnvelopeObjectSchema as ServiceCreateManyCategoryInputEnvelopeObjectSchema } from './ServiceCreateManyCategoryInputEnvelope.schema';
import { ServiceWhereUniqueInputObjectSchema as ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema';

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
      createMany: z
        .lazy(() => ServiceCreateManyCategoryInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ServiceWhereUniqueInputObjectSchema),
          z.lazy(() => ServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();
export const ServiceCreateNestedManyWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ServiceCreateNestedManyWithoutCategoryInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateNestedManyWithoutCategoryInput>;
export const ServiceCreateNestedManyWithoutCategoryInputObjectZodSchema =
  makeSchema();
