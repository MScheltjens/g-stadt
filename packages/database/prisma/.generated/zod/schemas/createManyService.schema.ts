import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCreateManyInputObjectSchema as ServiceCreateManyInputObjectSchema } from './objects/ServiceCreateManyInput.schema';

export const ServiceCreateManySchema: z.ZodType<Prisma.ServiceCreateManyArgs> =
  z
    .object({
      data: z.union([
        ServiceCreateManyInputObjectSchema,
        z.array(ServiceCreateManyInputObjectSchema),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCreateManyArgs>;

export const ServiceCreateManyZodSchema = z
  .object({
    data: z.union([
      ServiceCreateManyInputObjectSchema,
      z.array(ServiceCreateManyInputObjectSchema),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();
