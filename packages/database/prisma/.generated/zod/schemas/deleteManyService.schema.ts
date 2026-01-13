import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceWhereInputObjectSchema as ServiceWhereInputObjectSchema } from './objects/ServiceWhereInput.schema';

export const ServiceDeleteManySchema: z.ZodType<Prisma.ServiceDeleteManyArgs> =
  z
    .object({ where: ServiceWhereInputObjectSchema.optional() })
    .strict() as unknown as z.ZodType<Prisma.ServiceDeleteManyArgs>;

export const ServiceDeleteManyZodSchema = z
  .object({ where: ServiceWhereInputObjectSchema.optional() })
  .strict();
