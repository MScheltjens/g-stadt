import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryUpdateWithoutTranslationsInputObjectSchema as ServiceCategoryUpdateWithoutTranslationsInputObjectSchema } from './ServiceCategoryUpdateWithoutTranslationsInput.schema';
import { ServiceCategoryUncheckedUpdateWithoutTranslationsInputObjectSchema as ServiceCategoryUncheckedUpdateWithoutTranslationsInputObjectSchema } from './ServiceCategoryUncheckedUpdateWithoutTranslationsInput.schema';
import { ServiceCategoryCreateWithoutTranslationsInputObjectSchema as ServiceCategoryCreateWithoutTranslationsInputObjectSchema } from './ServiceCategoryCreateWithoutTranslationsInput.schema';
import { ServiceCategoryUncheckedCreateWithoutTranslationsInputObjectSchema as ServiceCategoryUncheckedCreateWithoutTranslationsInputObjectSchema } from './ServiceCategoryUncheckedCreateWithoutTranslationsInput.schema';
import { ServiceCategoryWhereInputObjectSchema as ServiceCategoryWhereInputObjectSchema } from './ServiceCategoryWhereInput.schema';

const makeSchema = () =>
  z
    .object({
      update: z.union([
        z.lazy(() => ServiceCategoryUpdateWithoutTranslationsInputObjectSchema),
        z.lazy(
          () =>
            ServiceCategoryUncheckedUpdateWithoutTranslationsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ServiceCategoryCreateWithoutTranslationsInputObjectSchema),
        z.lazy(
          () =>
            ServiceCategoryUncheckedCreateWithoutTranslationsInputObjectSchema,
        ),
      ]),
      where: z.lazy(() => ServiceCategoryWhereInputObjectSchema).optional(),
    })
    .strict();
export const ServiceCategoryUpsertWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.ServiceCategoryUpsertWithoutTranslationsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryUpsertWithoutTranslationsInput>;
export const ServiceCategoryUpsertWithoutTranslationsInputObjectZodSchema =
  makeSchema();
