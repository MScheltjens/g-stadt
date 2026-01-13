import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategorySelectObjectSchema as ServiceCategorySelectObjectSchema } from './objects/ServiceCategorySelect.schema';
import { ServiceCategoryUpdateManyMutationInputObjectSchema as ServiceCategoryUpdateManyMutationInputObjectSchema } from './objects/ServiceCategoryUpdateManyMutationInput.schema';
import { ServiceCategoryWhereInputObjectSchema as ServiceCategoryWhereInputObjectSchema } from './objects/ServiceCategoryWhereInput.schema';

export const ServiceCategoryUpdateManyAndReturnSchema: z.ZodType<Prisma.ServiceCategoryUpdateManyAndReturnArgs> =
  z
    .object({
      select: ServiceCategorySelectObjectSchema.optional(),
      data: ServiceCategoryUpdateManyMutationInputObjectSchema,
      where: ServiceCategoryWhereInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryUpdateManyAndReturnArgs>;

export const ServiceCategoryUpdateManyAndReturnZodSchema = z
  .object({
    select: ServiceCategorySelectObjectSchema.optional(),
    data: ServiceCategoryUpdateManyMutationInputObjectSchema,
    where: ServiceCategoryWhereInputObjectSchema.optional(),
  })
  .strict();
