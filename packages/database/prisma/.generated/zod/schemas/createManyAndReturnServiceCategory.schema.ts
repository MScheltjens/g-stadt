import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategorySelectObjectSchema as ServiceCategorySelectObjectSchema } from './objects/ServiceCategorySelect.schema';
import { ServiceCategoryCreateManyInputObjectSchema as ServiceCategoryCreateManyInputObjectSchema } from './objects/ServiceCategoryCreateManyInput.schema';

export const ServiceCategoryCreateManyAndReturnSchema: z.ZodType<Prisma.ServiceCategoryCreateManyAndReturnArgs> =
  z
    .object({
      select: ServiceCategorySelectObjectSchema.optional(),
      data: z.union([
        ServiceCategoryCreateManyInputObjectSchema,
        z.array(ServiceCategoryCreateManyInputObjectSchema),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryCreateManyAndReturnArgs>;

export const ServiceCategoryCreateManyAndReturnZodSchema = z
  .object({
    select: ServiceCategorySelectObjectSchema.optional(),
    data: z.union([
      ServiceCategoryCreateManyInputObjectSchema,
      z.array(ServiceCategoryCreateManyInputObjectSchema),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();
