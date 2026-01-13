import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceTranslationWhereUniqueInputObjectSchema as ServiceTranslationWhereUniqueInputObjectSchema } from './ServiceTranslationWhereUniqueInput.schema';
import { ServiceTranslationUpdateWithoutServiceInputObjectSchema as ServiceTranslationUpdateWithoutServiceInputObjectSchema } from './ServiceTranslationUpdateWithoutServiceInput.schema';
import { ServiceTranslationUncheckedUpdateWithoutServiceInputObjectSchema as ServiceTranslationUncheckedUpdateWithoutServiceInputObjectSchema } from './ServiceTranslationUncheckedUpdateWithoutServiceInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => ServiceTranslationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ServiceTranslationUpdateWithoutServiceInputObjectSchema),
        z.lazy(
          () =>
            ServiceTranslationUncheckedUpdateWithoutServiceInputObjectSchema,
        ),
      ]),
    })
    .strict();
export const ServiceTranslationUpdateWithWhereUniqueWithoutServiceInputObjectSchema: z.ZodType<Prisma.ServiceTranslationUpdateWithWhereUniqueWithoutServiceInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationUpdateWithWhereUniqueWithoutServiceInput>;
export const ServiceTranslationUpdateWithWhereUniqueWithoutServiceInputObjectZodSchema =
  makeSchema();
