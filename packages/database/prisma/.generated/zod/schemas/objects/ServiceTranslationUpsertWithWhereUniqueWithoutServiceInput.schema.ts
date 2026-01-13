import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceTranslationWhereUniqueInputObjectSchema as ServiceTranslationWhereUniqueInputObjectSchema } from './ServiceTranslationWhereUniqueInput.schema';
import { ServiceTranslationUpdateWithoutServiceInputObjectSchema as ServiceTranslationUpdateWithoutServiceInputObjectSchema } from './ServiceTranslationUpdateWithoutServiceInput.schema';
import { ServiceTranslationUncheckedUpdateWithoutServiceInputObjectSchema as ServiceTranslationUncheckedUpdateWithoutServiceInputObjectSchema } from './ServiceTranslationUncheckedUpdateWithoutServiceInput.schema';
import { ServiceTranslationCreateWithoutServiceInputObjectSchema as ServiceTranslationCreateWithoutServiceInputObjectSchema } from './ServiceTranslationCreateWithoutServiceInput.schema';
import { ServiceTranslationUncheckedCreateWithoutServiceInputObjectSchema as ServiceTranslationUncheckedCreateWithoutServiceInputObjectSchema } from './ServiceTranslationUncheckedCreateWithoutServiceInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => ServiceTranslationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ServiceTranslationUpdateWithoutServiceInputObjectSchema),
        z.lazy(
          () =>
            ServiceTranslationUncheckedUpdateWithoutServiceInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ServiceTranslationCreateWithoutServiceInputObjectSchema),
        z.lazy(
          () =>
            ServiceTranslationUncheckedCreateWithoutServiceInputObjectSchema,
        ),
      ]),
    })
    .strict();
export const ServiceTranslationUpsertWithWhereUniqueWithoutServiceInputObjectSchema: z.ZodType<Prisma.ServiceTranslationUpsertWithWhereUniqueWithoutServiceInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationUpsertWithWhereUniqueWithoutServiceInput>;
export const ServiceTranslationUpsertWithWhereUniqueWithoutServiceInputObjectZodSchema =
  makeSchema();
