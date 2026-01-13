import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryWhereUniqueInputObjectSchema as ServiceCategoryWhereUniqueInputObjectSchema } from './ServiceCategoryWhereUniqueInput.schema';
import { ServiceCategoryCreateWithoutTranslationsInputObjectSchema as ServiceCategoryCreateWithoutTranslationsInputObjectSchema } from './ServiceCategoryCreateWithoutTranslationsInput.schema';
import { ServiceCategoryUncheckedCreateWithoutTranslationsInputObjectSchema as ServiceCategoryUncheckedCreateWithoutTranslationsInputObjectSchema } from './ServiceCategoryUncheckedCreateWithoutTranslationsInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => ServiceCategoryWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ServiceCategoryCreateWithoutTranslationsInputObjectSchema),
        z.lazy(
          () =>
            ServiceCategoryUncheckedCreateWithoutTranslationsInputObjectSchema,
        ),
      ]),
    })
    .strict();
export const ServiceCategoryCreateOrConnectWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.ServiceCategoryCreateOrConnectWithoutTranslationsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryCreateOrConnectWithoutTranslationsInput>;
export const ServiceCategoryCreateOrConnectWithoutTranslationsInputObjectZodSchema =
  makeSchema();
