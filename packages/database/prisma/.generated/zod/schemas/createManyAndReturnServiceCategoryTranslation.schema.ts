import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategoryTranslationSelectObjectSchema as ServiceCategoryTranslationSelectObjectSchema } from './objects/ServiceCategoryTranslationSelect.schema';
import { ServiceCategoryTranslationCreateManyInputObjectSchema as ServiceCategoryTranslationCreateManyInputObjectSchema } from './objects/ServiceCategoryTranslationCreateManyInput.schema';

export const ServiceCategoryTranslationCreateManyAndReturnSchema: z.ZodType<Prisma.ServiceCategoryTranslationCreateManyAndReturnArgs> =
  z
    .object({
      select: ServiceCategoryTranslationSelectObjectSchema.optional(),
      data: z.union([
        ServiceCategoryTranslationCreateManyInputObjectSchema,
        z.array(ServiceCategoryTranslationCreateManyInputObjectSchema),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationCreateManyAndReturnArgs>;

export const ServiceCategoryTranslationCreateManyAndReturnZodSchema = z
  .object({
    select: ServiceCategoryTranslationSelectObjectSchema.optional(),
    data: z.union([
      ServiceCategoryTranslationCreateManyInputObjectSchema,
      z.array(ServiceCategoryTranslationCreateManyInputObjectSchema),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();
