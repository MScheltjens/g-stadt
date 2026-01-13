import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInputObjectSchema as ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema';
import { ServiceUpdateWithoutCategoryInputObjectSchema as ServiceUpdateWithoutCategoryInputObjectSchema } from './ServiceUpdateWithoutCategoryInput.schema';
import { ServiceUncheckedUpdateWithoutCategoryInputObjectSchema as ServiceUncheckedUpdateWithoutCategoryInputObjectSchema } from './ServiceUncheckedUpdateWithoutCategoryInput.schema';
import { ServiceCreateWithoutCategoryInputObjectSchema as ServiceCreateWithoutCategoryInputObjectSchema } from './ServiceCreateWithoutCategoryInput.schema';
import { ServiceUncheckedCreateWithoutCategoryInputObjectSchema as ServiceUncheckedCreateWithoutCategoryInputObjectSchema } from './ServiceUncheckedCreateWithoutCategoryInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => ServiceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ServiceUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => ServiceUncheckedUpdateWithoutCategoryInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ServiceCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => ServiceUncheckedCreateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();
export const ServiceUpsertWithWhereUniqueWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ServiceUpsertWithWhereUniqueWithoutCategoryInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceUpsertWithWhereUniqueWithoutCategoryInput>;
export const ServiceUpsertWithWhereUniqueWithoutCategoryInputObjectZodSchema =
  makeSchema();
