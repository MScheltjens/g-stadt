import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceSelectObjectSchema as ServiceSelectObjectSchema } from './objects/ServiceSelect.schema';
import { ServiceCreateManyInputObjectSchema as ServiceCreateManyInputObjectSchema } from './objects/ServiceCreateManyInput.schema';

export const ServiceCreateManyAndReturnSchema: z.ZodType<Prisma.ServiceCreateManyAndReturnArgs> =
  z
    .object({
      select: ServiceSelectObjectSchema.optional(),
      data: z.union([
        ServiceCreateManyInputObjectSchema,
        z.array(ServiceCreateManyInputObjectSchema),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCreateManyAndReturnArgs>;

export const ServiceCreateManyAndReturnZodSchema = z
  .object({
    select: ServiceSelectObjectSchema.optional(),
    data: z.union([
      ServiceCreateManyInputObjectSchema,
      z.array(ServiceCreateManyInputObjectSchema),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();
