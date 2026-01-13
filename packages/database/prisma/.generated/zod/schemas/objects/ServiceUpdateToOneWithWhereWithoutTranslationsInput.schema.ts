import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereInputObjectSchema as ServiceWhereInputObjectSchema } from './ServiceWhereInput.schema';
import { ServiceUpdateWithoutTranslationsInputObjectSchema as ServiceUpdateWithoutTranslationsInputObjectSchema } from './ServiceUpdateWithoutTranslationsInput.schema';
import { ServiceUncheckedUpdateWithoutTranslationsInputObjectSchema as ServiceUncheckedUpdateWithoutTranslationsInputObjectSchema } from './ServiceUncheckedUpdateWithoutTranslationsInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => ServiceWhereInputObjectSchema).optional(),
      data: z.union([
        z.lazy(() => ServiceUpdateWithoutTranslationsInputObjectSchema),
        z.lazy(
          () => ServiceUncheckedUpdateWithoutTranslationsInputObjectSchema,
        ),
      ]),
    })
    .strict();
export const ServiceUpdateToOneWithWhereWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.ServiceUpdateToOneWithWhereWithoutTranslationsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceUpdateToOneWithWhereWithoutTranslationsInput>;
export const ServiceUpdateToOneWithWhereWithoutTranslationsInputObjectZodSchema =
  makeSchema();
