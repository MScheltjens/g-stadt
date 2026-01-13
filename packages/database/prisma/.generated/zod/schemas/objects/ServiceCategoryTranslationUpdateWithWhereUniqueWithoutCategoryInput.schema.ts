import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryTranslationWhereUniqueInputObjectSchema as ServiceCategoryTranslationWhereUniqueInputObjectSchema } from './ServiceCategoryTranslationWhereUniqueInput.schema';
import { ServiceCategoryTranslationUpdateWithoutCategoryInputObjectSchema as ServiceCategoryTranslationUpdateWithoutCategoryInputObjectSchema } from './ServiceCategoryTranslationUpdateWithoutCategoryInput.schema';
import { ServiceCategoryTranslationUncheckedUpdateWithoutCategoryInputObjectSchema as ServiceCategoryTranslationUncheckedUpdateWithoutCategoryInputObjectSchema } from './ServiceCategoryTranslationUncheckedUpdateWithoutCategoryInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(
        () => ServiceCategoryTranslationWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            ServiceCategoryTranslationUpdateWithoutCategoryInputObjectSchema,
        ),
        z.lazy(
          () =>
            ServiceCategoryTranslationUncheckedUpdateWithoutCategoryInputObjectSchema,
        ),
      ]),
    })
    .strict();
export const ServiceCategoryTranslationUpdateWithWhereUniqueWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationUpdateWithWhereUniqueWithoutCategoryInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationUpdateWithWhereUniqueWithoutCategoryInput>;
export const ServiceCategoryTranslationUpdateWithWhereUniqueWithoutCategoryInputObjectZodSchema =
  makeSchema();
