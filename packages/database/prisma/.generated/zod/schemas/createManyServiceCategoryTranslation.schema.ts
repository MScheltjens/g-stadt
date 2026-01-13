import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategoryTranslationCreateManyInputObjectSchema as ServiceCategoryTranslationCreateManyInputObjectSchema } from './objects/ServiceCategoryTranslationCreateManyInput.schema';

export const ServiceCategoryTranslationCreateManySchema: z.ZodType<Prisma.ServiceCategoryTranslationCreateManyArgs> =
  z
    .object({
      data: z.union([
        ServiceCategoryTranslationCreateManyInputObjectSchema,
        z.array(ServiceCategoryTranslationCreateManyInputObjectSchema),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationCreateManyArgs>;

export const ServiceCategoryTranslationCreateManyZodSchema = z
  .object({
    data: z.union([
      ServiceCategoryTranslationCreateManyInputObjectSchema,
      z.array(ServiceCategoryTranslationCreateManyInputObjectSchema),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();
