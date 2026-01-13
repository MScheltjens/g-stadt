import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryTranslationWhereUniqueInputObjectSchema as ServiceCategoryTranslationWhereUniqueInputObjectSchema } from './ServiceCategoryTranslationWhereUniqueInput.schema';
import { ServiceCategoryTranslationCreateWithoutCategoryInputObjectSchema as ServiceCategoryTranslationCreateWithoutCategoryInputObjectSchema } from './ServiceCategoryTranslationCreateWithoutCategoryInput.schema';
import { ServiceCategoryTranslationUncheckedCreateWithoutCategoryInputObjectSchema as ServiceCategoryTranslationUncheckedCreateWithoutCategoryInputObjectSchema } from './ServiceCategoryTranslationUncheckedCreateWithoutCategoryInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(
        () => ServiceCategoryTranslationWhereUniqueInputObjectSchema,
      ),
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
export const ServiceCategoryTranslationCreateOrConnectWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationCreateOrConnectWithoutCategoryInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationCreateOrConnectWithoutCategoryInput>;
export const ServiceCategoryTranslationCreateOrConnectWithoutCategoryInputObjectZodSchema =
  makeSchema();
