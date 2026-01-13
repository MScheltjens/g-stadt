import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryWhereInputObjectSchema as ServiceCategoryWhereInputObjectSchema } from './ServiceCategoryWhereInput.schema';
import { ServiceCategoryUpdateWithoutServicesInputObjectSchema as ServiceCategoryUpdateWithoutServicesInputObjectSchema } from './ServiceCategoryUpdateWithoutServicesInput.schema';
import { ServiceCategoryUncheckedUpdateWithoutServicesInputObjectSchema as ServiceCategoryUncheckedUpdateWithoutServicesInputObjectSchema } from './ServiceCategoryUncheckedUpdateWithoutServicesInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => ServiceCategoryWhereInputObjectSchema).optional(),
      data: z.union([
        z.lazy(() => ServiceCategoryUpdateWithoutServicesInputObjectSchema),
        z.lazy(
          () => ServiceCategoryUncheckedUpdateWithoutServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();
export const ServiceCategoryUpdateToOneWithWhereWithoutServicesInputObjectSchema: z.ZodType<Prisma.ServiceCategoryUpdateToOneWithWhereWithoutServicesInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryUpdateToOneWithWhereWithoutServicesInput>;
export const ServiceCategoryUpdateToOneWithWhereWithoutServicesInputObjectZodSchema =
  makeSchema();
