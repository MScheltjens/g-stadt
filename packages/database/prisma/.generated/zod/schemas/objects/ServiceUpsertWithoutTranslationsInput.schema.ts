import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceUpdateWithoutTranslationsInputObjectSchema as ServiceUpdateWithoutTranslationsInputObjectSchema } from './ServiceUpdateWithoutTranslationsInput.schema';
import { ServiceUncheckedUpdateWithoutTranslationsInputObjectSchema as ServiceUncheckedUpdateWithoutTranslationsInputObjectSchema } from './ServiceUncheckedUpdateWithoutTranslationsInput.schema';
import { ServiceCreateWithoutTranslationsInputObjectSchema as ServiceCreateWithoutTranslationsInputObjectSchema } from './ServiceCreateWithoutTranslationsInput.schema';
import { ServiceUncheckedCreateWithoutTranslationsInputObjectSchema as ServiceUncheckedCreateWithoutTranslationsInputObjectSchema } from './ServiceUncheckedCreateWithoutTranslationsInput.schema';
import { ServiceWhereInputObjectSchema as ServiceWhereInputObjectSchema } from './ServiceWhereInput.schema';

const makeSchema = () =>
  z
    .object({
      update: z.union([
        z.lazy(() => ServiceUpdateWithoutTranslationsInputObjectSchema),
        z.lazy(
          () => ServiceUncheckedUpdateWithoutTranslationsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ServiceCreateWithoutTranslationsInputObjectSchema),
        z.lazy(
          () => ServiceUncheckedCreateWithoutTranslationsInputObjectSchema,
        ),
      ]),
      where: z.lazy(() => ServiceWhereInputObjectSchema).optional(),
    })
    .strict();
export const ServiceUpsertWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.ServiceUpsertWithoutTranslationsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceUpsertWithoutTranslationsInput>;
export const ServiceUpsertWithoutTranslationsInputObjectZodSchema =
  makeSchema();
