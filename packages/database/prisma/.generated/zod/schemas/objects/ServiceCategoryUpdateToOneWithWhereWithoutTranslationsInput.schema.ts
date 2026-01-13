import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryWhereInputObjectSchema as ServiceCategoryWhereInputObjectSchema } from './ServiceCategoryWhereInput.schema';
import { ServiceCategoryUpdateWithoutTranslationsInputObjectSchema as ServiceCategoryUpdateWithoutTranslationsInputObjectSchema } from './ServiceCategoryUpdateWithoutTranslationsInput.schema';
import { ServiceCategoryUncheckedUpdateWithoutTranslationsInputObjectSchema as ServiceCategoryUncheckedUpdateWithoutTranslationsInputObjectSchema } from './ServiceCategoryUncheckedUpdateWithoutTranslationsInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => ServiceCategoryWhereInputObjectSchema).optional(),
      data: z.union([
        z.lazy(() => ServiceCategoryUpdateWithoutTranslationsInputObjectSchema),
        z.lazy(
          () =>
            ServiceCategoryUncheckedUpdateWithoutTranslationsInputObjectSchema,
        ),
      ]),
    })
    .strict();
export const ServiceCategoryUpdateToOneWithWhereWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.ServiceCategoryUpdateToOneWithWhereWithoutTranslationsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryUpdateToOneWithWhereWithoutTranslationsInput>;
export const ServiceCategoryUpdateToOneWithWhereWithoutTranslationsInputObjectZodSchema =
  makeSchema();
