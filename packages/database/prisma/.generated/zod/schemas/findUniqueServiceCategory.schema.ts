import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategorySelectObjectSchema as ServiceCategorySelectObjectSchema } from './objects/ServiceCategorySelect.schema';
import { ServiceCategoryIncludeObjectSchema as ServiceCategoryIncludeObjectSchema } from './objects/ServiceCategoryInclude.schema';
import { ServiceCategoryWhereUniqueInputObjectSchema as ServiceCategoryWhereUniqueInputObjectSchema } from './objects/ServiceCategoryWhereUniqueInput.schema';

export const ServiceCategoryFindUniqueSchema: z.ZodType<Prisma.ServiceCategoryFindUniqueArgs> =
  z
    .object({
      select: ServiceCategorySelectObjectSchema.optional(),
      include: ServiceCategoryIncludeObjectSchema.optional(),
      where: ServiceCategoryWhereUniqueInputObjectSchema,
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryFindUniqueArgs>;

export const ServiceCategoryFindUniqueZodSchema = z
  .object({
    select: ServiceCategorySelectObjectSchema.optional(),
    include: ServiceCategoryIncludeObjectSchema.optional(),
    where: ServiceCategoryWhereUniqueInputObjectSchema,
  })
  .strict();
