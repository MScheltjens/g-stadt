import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategorySelectObjectSchema as ServiceCategorySelectObjectSchema } from './objects/ServiceCategorySelect.schema';
import { ServiceCategoryIncludeObjectSchema as ServiceCategoryIncludeObjectSchema } from './objects/ServiceCategoryInclude.schema';
import { ServiceCategoryWhereUniqueInputObjectSchema as ServiceCategoryWhereUniqueInputObjectSchema } from './objects/ServiceCategoryWhereUniqueInput.schema';
import { ServiceCategoryCreateInputObjectSchema as ServiceCategoryCreateInputObjectSchema } from './objects/ServiceCategoryCreateInput.schema';
import { ServiceCategoryUncheckedCreateInputObjectSchema as ServiceCategoryUncheckedCreateInputObjectSchema } from './objects/ServiceCategoryUncheckedCreateInput.schema';
import { ServiceCategoryUpdateInputObjectSchema as ServiceCategoryUpdateInputObjectSchema } from './objects/ServiceCategoryUpdateInput.schema';
import { ServiceCategoryUncheckedUpdateInputObjectSchema as ServiceCategoryUncheckedUpdateInputObjectSchema } from './objects/ServiceCategoryUncheckedUpdateInput.schema';

export const ServiceCategoryUpsertOneSchema: z.ZodType<Prisma.ServiceCategoryUpsertArgs> =
  z
    .object({
      select: ServiceCategorySelectObjectSchema.optional(),
      include: ServiceCategoryIncludeObjectSchema.optional(),
      where: ServiceCategoryWhereUniqueInputObjectSchema,
      create: z.union([
        ServiceCategoryCreateInputObjectSchema,
        ServiceCategoryUncheckedCreateInputObjectSchema,
      ]),
      update: z.union([
        ServiceCategoryUpdateInputObjectSchema,
        ServiceCategoryUncheckedUpdateInputObjectSchema,
      ]),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryUpsertArgs>;

export const ServiceCategoryUpsertOneZodSchema = z
  .object({
    select: ServiceCategorySelectObjectSchema.optional(),
    include: ServiceCategoryIncludeObjectSchema.optional(),
    where: ServiceCategoryWhereUniqueInputObjectSchema,
    create: z.union([
      ServiceCategoryCreateInputObjectSchema,
      ServiceCategoryUncheckedCreateInputObjectSchema,
    ]),
    update: z.union([
      ServiceCategoryUpdateInputObjectSchema,
      ServiceCategoryUncheckedUpdateInputObjectSchema,
    ]),
  })
  .strict();
