import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategorySelectObjectSchema as ServiceCategorySelectObjectSchema } from './objects/ServiceCategorySelect.schema';
import { ServiceCategoryIncludeObjectSchema as ServiceCategoryIncludeObjectSchema } from './objects/ServiceCategoryInclude.schema';
import { ServiceCategoryUpdateInputObjectSchema as ServiceCategoryUpdateInputObjectSchema } from './objects/ServiceCategoryUpdateInput.schema';
import { ServiceCategoryUncheckedUpdateInputObjectSchema as ServiceCategoryUncheckedUpdateInputObjectSchema } from './objects/ServiceCategoryUncheckedUpdateInput.schema';
import { ServiceCategoryWhereUniqueInputObjectSchema as ServiceCategoryWhereUniqueInputObjectSchema } from './objects/ServiceCategoryWhereUniqueInput.schema';

export const ServiceCategoryUpdateOneSchema: z.ZodType<Prisma.ServiceCategoryUpdateArgs> =
  z
    .object({
      select: ServiceCategorySelectObjectSchema.optional(),
      include: ServiceCategoryIncludeObjectSchema.optional(),
      data: z.union([
        ServiceCategoryUpdateInputObjectSchema,
        ServiceCategoryUncheckedUpdateInputObjectSchema,
      ]),
      where: ServiceCategoryWhereUniqueInputObjectSchema,
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryUpdateArgs>;

export const ServiceCategoryUpdateOneZodSchema = z
  .object({
    select: ServiceCategorySelectObjectSchema.optional(),
    include: ServiceCategoryIncludeObjectSchema.optional(),
    data: z.union([
      ServiceCategoryUpdateInputObjectSchema,
      ServiceCategoryUncheckedUpdateInputObjectSchema,
    ]),
    where: ServiceCategoryWhereUniqueInputObjectSchema,
  })
  .strict();
