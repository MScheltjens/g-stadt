import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategorySelectObjectSchema as ServiceCategorySelectObjectSchema } from './objects/ServiceCategorySelect.schema';
import { ServiceCategoryIncludeObjectSchema as ServiceCategoryIncludeObjectSchema } from './objects/ServiceCategoryInclude.schema';
import { ServiceCategoryCreateInputObjectSchema as ServiceCategoryCreateInputObjectSchema } from './objects/ServiceCategoryCreateInput.schema';
import { ServiceCategoryUncheckedCreateInputObjectSchema as ServiceCategoryUncheckedCreateInputObjectSchema } from './objects/ServiceCategoryUncheckedCreateInput.schema';

export const ServiceCategoryCreateOneSchema: z.ZodType<Prisma.ServiceCategoryCreateArgs> =
  z
    .object({
      select: ServiceCategorySelectObjectSchema.optional(),
      include: ServiceCategoryIncludeObjectSchema.optional(),
      data: z.union([
        ServiceCategoryCreateInputObjectSchema,
        ServiceCategoryUncheckedCreateInputObjectSchema,
      ]),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryCreateArgs>;

export const ServiceCategoryCreateOneZodSchema = z
  .object({
    select: ServiceCategorySelectObjectSchema.optional(),
    include: ServiceCategoryIncludeObjectSchema.optional(),
    data: z.union([
      ServiceCategoryCreateInputObjectSchema,
      ServiceCategoryUncheckedCreateInputObjectSchema,
    ]),
  })
  .strict();
