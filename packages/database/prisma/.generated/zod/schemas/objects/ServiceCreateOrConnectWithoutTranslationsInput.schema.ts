import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInputObjectSchema as ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema';
import { ServiceCreateWithoutTranslationsInputObjectSchema as ServiceCreateWithoutTranslationsInputObjectSchema } from './ServiceCreateWithoutTranslationsInput.schema';
import { ServiceUncheckedCreateWithoutTranslationsInputObjectSchema as ServiceUncheckedCreateWithoutTranslationsInputObjectSchema } from './ServiceUncheckedCreateWithoutTranslationsInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => ServiceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ServiceCreateWithoutTranslationsInputObjectSchema),
        z.lazy(
          () => ServiceUncheckedCreateWithoutTranslationsInputObjectSchema,
        ),
      ]),
    })
    .strict();
export const ServiceCreateOrConnectWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.ServiceCreateOrConnectWithoutTranslationsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateOrConnectWithoutTranslationsInput>;
export const ServiceCreateOrConnectWithoutTranslationsInputObjectZodSchema =
  makeSchema();
