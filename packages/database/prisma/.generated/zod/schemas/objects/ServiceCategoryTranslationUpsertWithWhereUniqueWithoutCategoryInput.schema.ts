import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryTranslationWhereUniqueInputObjectSchema as ServiceCategoryTranslationWhereUniqueInputObjectSchema } from './ServiceCategoryTranslationWhereUniqueInput.schema';
import { ServiceCategoryTranslationUpdateWithoutCategoryInputObjectSchema as ServiceCategoryTranslationUpdateWithoutCategoryInputObjectSchema } from './ServiceCategoryTranslationUpdateWithoutCategoryInput.schema';
import { ServiceCategoryTranslationUncheckedUpdateWithoutCategoryInputObjectSchema as ServiceCategoryTranslationUncheckedUpdateWithoutCategoryInputObjectSchema } from './ServiceCategoryTranslationUncheckedUpdateWithoutCategoryInput.schema';
import { ServiceCategoryTranslationCreateWithoutCategoryInputObjectSchema as ServiceCategoryTranslationCreateWithoutCategoryInputObjectSchema } from './ServiceCategoryTranslationCreateWithoutCategoryInput.schema';
import { ServiceCategoryTranslationUncheckedCreateWithoutCategoryInputObjectSchema as ServiceCategoryTranslationUncheckedCreateWithoutCategoryInputObjectSchema } from './ServiceCategoryTranslationUncheckedCreateWithoutCategoryInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(
        () => ServiceCategoryTranslationWhereUniqueInputObjectSchema,
      ),
      update: z.union([
        z.lazy(
          () =>
            ServiceCategoryTranslationUpdateWithoutCategoryInputObjectSchema,
        ),
        z.lazy(
          () =>
            ServiceCategoryTranslationUncheckedUpdateWithoutCategoryInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            ServiceCategoryTranslationCreateWithoutCategoryInputObjectSchema,
        ),
        z.lazy(
          () =>
            ServiceCategoryTranslationUncheckedCreateWithoutCategoryInputObjectSchema,
        ),
      ]),
    })
    .strict();
export const ServiceCategoryTranslationUpsertWithWhereUniqueWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationUpsertWithWhereUniqueWithoutCategoryInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationUpsertWithWhereUniqueWithoutCategoryInput>;
export const ServiceCategoryTranslationUpsertWithWhereUniqueWithoutCategoryInputObjectZodSchema =
  makeSchema();
