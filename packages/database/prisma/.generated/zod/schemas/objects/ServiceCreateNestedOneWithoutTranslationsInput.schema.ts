import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateWithoutTranslationsInputObjectSchema as ServiceCreateWithoutTranslationsInputObjectSchema } from './ServiceCreateWithoutTranslationsInput.schema';
import { ServiceUncheckedCreateWithoutTranslationsInputObjectSchema as ServiceUncheckedCreateWithoutTranslationsInputObjectSchema } from './ServiceUncheckedCreateWithoutTranslationsInput.schema';
import { ServiceCreateOrConnectWithoutTranslationsInputObjectSchema as ServiceCreateOrConnectWithoutTranslationsInputObjectSchema } from './ServiceCreateOrConnectWithoutTranslationsInput.schema';
import { ServiceWhereUniqueInputObjectSchema as ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema';

const makeSchema = () =>
  z
    .object({
      create: z
        .union([
          z.lazy(() => ServiceCreateWithoutTranslationsInputObjectSchema),
          z.lazy(
            () => ServiceUncheckedCreateWithoutTranslationsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ServiceCreateOrConnectWithoutTranslationsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ServiceWhereUniqueInputObjectSchema).optional(),
    })
    .strict();
export const ServiceCreateNestedOneWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.ServiceCreateNestedOneWithoutTranslationsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateNestedOneWithoutTranslationsInput>;
export const ServiceCreateNestedOneWithoutTranslationsInputObjectZodSchema =
  makeSchema();
