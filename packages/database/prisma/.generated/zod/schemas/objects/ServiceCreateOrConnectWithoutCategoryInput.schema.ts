import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInputObjectSchema as ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema';
import { ServiceCreateWithoutCategoryInputObjectSchema as ServiceCreateWithoutCategoryInputObjectSchema } from './ServiceCreateWithoutCategoryInput.schema';
import { ServiceUncheckedCreateWithoutCategoryInputObjectSchema as ServiceUncheckedCreateWithoutCategoryInputObjectSchema } from './ServiceUncheckedCreateWithoutCategoryInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => ServiceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ServiceCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => ServiceUncheckedCreateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();
export const ServiceCreateOrConnectWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ServiceCreateOrConnectWithoutCategoryInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateOrConnectWithoutCategoryInput>;
export const ServiceCreateOrConnectWithoutCategoryInputObjectZodSchema =
  makeSchema();
