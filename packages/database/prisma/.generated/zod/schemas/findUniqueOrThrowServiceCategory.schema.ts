import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategorySelectObjectSchema as ServiceCategorySelectObjectSchema } from './objects/ServiceCategorySelect.schema';
import { ServiceCategoryIncludeObjectSchema as ServiceCategoryIncludeObjectSchema } from './objects/ServiceCategoryInclude.schema';
import { ServiceCategoryWhereUniqueInputObjectSchema as ServiceCategoryWhereUniqueInputObjectSchema } from './objects/ServiceCategoryWhereUniqueInput.schema';

export const ServiceCategoryFindUniqueOrThrowSchema: z.ZodType<Prisma.ServiceCategoryFindUniqueOrThrowArgs> =
  z
    .object({
      select: ServiceCategorySelectObjectSchema.optional(),
      include: ServiceCategoryIncludeObjectSchema.optional(),
      where: ServiceCategoryWhereUniqueInputObjectSchema,
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryFindUniqueOrThrowArgs>;

export const ServiceCategoryFindUniqueOrThrowZodSchema = z
  .object({
    select: ServiceCategorySelectObjectSchema.optional(),
    include: ServiceCategoryIncludeObjectSchema.optional(),
    where: ServiceCategoryWhereUniqueInputObjectSchema,
  })
  .strict();
