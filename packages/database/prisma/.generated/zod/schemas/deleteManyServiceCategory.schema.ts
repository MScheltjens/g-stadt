import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategoryWhereInputObjectSchema as ServiceCategoryWhereInputObjectSchema } from './objects/ServiceCategoryWhereInput.schema';

export const ServiceCategoryDeleteManySchema: z.ZodType<Prisma.ServiceCategoryDeleteManyArgs> =
  z
    .object({ where: ServiceCategoryWhereInputObjectSchema.optional() })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryDeleteManyArgs>;

export const ServiceCategoryDeleteManyZodSchema = z
  .object({ where: ServiceCategoryWhereInputObjectSchema.optional() })
  .strict();
