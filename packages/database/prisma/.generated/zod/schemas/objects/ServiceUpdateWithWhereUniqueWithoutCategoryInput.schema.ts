import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInputObjectSchema as ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema';
import { ServiceUpdateWithoutCategoryInputObjectSchema as ServiceUpdateWithoutCategoryInputObjectSchema } from './ServiceUpdateWithoutCategoryInput.schema';
import { ServiceUncheckedUpdateWithoutCategoryInputObjectSchema as ServiceUncheckedUpdateWithoutCategoryInputObjectSchema } from './ServiceUncheckedUpdateWithoutCategoryInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => ServiceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ServiceUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => ServiceUncheckedUpdateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();
export const ServiceUpdateWithWhereUniqueWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ServiceUpdateWithWhereUniqueWithoutCategoryInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceUpdateWithWhereUniqueWithoutCategoryInput>;
export const ServiceUpdateWithWhereUniqueWithoutCategoryInputObjectZodSchema =
  makeSchema();
