import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategoryCreateManyInputObjectSchema as ServiceCategoryCreateManyInputObjectSchema } from './objects/ServiceCategoryCreateManyInput.schema';

export const ServiceCategoryCreateManySchema: z.ZodType<Prisma.ServiceCategoryCreateManyArgs> =
  z
    .object({
      data: z.union([
        ServiceCategoryCreateManyInputObjectSchema,
        z.array(ServiceCategoryCreateManyInputObjectSchema),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryCreateManyArgs>;

export const ServiceCategoryCreateManyZodSchema = z
  .object({
    data: z.union([
      ServiceCategoryCreateManyInputObjectSchema,
      z.array(ServiceCategoryCreateManyInputObjectSchema),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();
