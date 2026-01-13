import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceUpdateManyMutationInputObjectSchema as ServiceUpdateManyMutationInputObjectSchema } from './objects/ServiceUpdateManyMutationInput.schema';
import { ServiceWhereInputObjectSchema as ServiceWhereInputObjectSchema } from './objects/ServiceWhereInput.schema';

export const ServiceUpdateManySchema: z.ZodType<Prisma.ServiceUpdateManyArgs> =
  z
    .object({
      data: ServiceUpdateManyMutationInputObjectSchema,
      where: ServiceWhereInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceUpdateManyArgs>;

export const ServiceUpdateManyZodSchema = z
  .object({
    data: ServiceUpdateManyMutationInputObjectSchema,
    where: ServiceWhereInputObjectSchema.optional(),
  })
  .strict();
