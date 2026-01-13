import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceTranslationWhereUniqueInputObjectSchema as ServiceTranslationWhereUniqueInputObjectSchema } from './ServiceTranslationWhereUniqueInput.schema';
import { ServiceTranslationCreateWithoutServiceInputObjectSchema as ServiceTranslationCreateWithoutServiceInputObjectSchema } from './ServiceTranslationCreateWithoutServiceInput.schema';
import { ServiceTranslationUncheckedCreateWithoutServiceInputObjectSchema as ServiceTranslationUncheckedCreateWithoutServiceInputObjectSchema } from './ServiceTranslationUncheckedCreateWithoutServiceInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => ServiceTranslationWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ServiceTranslationCreateWithoutServiceInputObjectSchema),
        z.lazy(
          () =>
            ServiceTranslationUncheckedCreateWithoutServiceInputObjectSchema,
        ),
      ]),
    })
    .strict();
export const ServiceTranslationCreateOrConnectWithoutServiceInputObjectSchema: z.ZodType<Prisma.ServiceTranslationCreateOrConnectWithoutServiceInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationCreateOrConnectWithoutServiceInput>;
export const ServiceTranslationCreateOrConnectWithoutServiceInputObjectZodSchema =
  makeSchema();
