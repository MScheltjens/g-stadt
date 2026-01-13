import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceSelectObjectSchema as ServiceSelectObjectSchema } from './objects/ServiceSelect.schema';
import { ServiceUpdateManyMutationInputObjectSchema as ServiceUpdateManyMutationInputObjectSchema } from './objects/ServiceUpdateManyMutationInput.schema';
import { ServiceWhereInputObjectSchema as ServiceWhereInputObjectSchema } from './objects/ServiceWhereInput.schema';

export const ServiceUpdateManyAndReturnSchema: z.ZodType<Prisma.ServiceUpdateManyAndReturnArgs> =
  z
    .object({
      select: ServiceSelectObjectSchema.optional(),
      data: ServiceUpdateManyMutationInputObjectSchema,
      where: ServiceWhereInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceUpdateManyAndReturnArgs>;

export const ServiceUpdateManyAndReturnZodSchema = z
  .object({
    select: ServiceSelectObjectSchema.optional(),
    data: ServiceUpdateManyMutationInputObjectSchema,
    where: ServiceWhereInputObjectSchema.optional(),
  })
  .strict();
