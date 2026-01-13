import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategoryUpdateManyMutationInputObjectSchema as ServiceCategoryUpdateManyMutationInputObjectSchema } from './objects/ServiceCategoryUpdateManyMutationInput.schema';
import { ServiceCategoryWhereInputObjectSchema as ServiceCategoryWhereInputObjectSchema } from './objects/ServiceCategoryWhereInput.schema';

export const ServiceCategoryUpdateManySchema: z.ZodType<Prisma.ServiceCategoryUpdateManyArgs> =
  z
    .object({
      data: ServiceCategoryUpdateManyMutationInputObjectSchema,
      where: ServiceCategoryWhereInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryUpdateManyArgs>;

export const ServiceCategoryUpdateManyZodSchema = z
  .object({
    data: ServiceCategoryUpdateManyMutationInputObjectSchema,
    where: ServiceCategoryWhereInputObjectSchema.optional(),
  })
  .strict();
