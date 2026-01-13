import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceTranslationSelectObjectSchema as ServiceTranslationSelectObjectSchema } from './objects/ServiceTranslationSelect.schema';
import { ServiceTranslationCreateManyInputObjectSchema as ServiceTranslationCreateManyInputObjectSchema } from './objects/ServiceTranslationCreateManyInput.schema';

export const ServiceTranslationCreateManyAndReturnSchema: z.ZodType<Prisma.ServiceTranslationCreateManyAndReturnArgs> =
  z
    .object({
      select: ServiceTranslationSelectObjectSchema.optional(),
      data: z.union([
        ServiceTranslationCreateManyInputObjectSchema,
        z.array(ServiceTranslationCreateManyInputObjectSchema),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceTranslationCreateManyAndReturnArgs>;

export const ServiceTranslationCreateManyAndReturnZodSchema = z
  .object({
    select: ServiceTranslationSelectObjectSchema.optional(),
    data: z.union([
      ServiceTranslationCreateManyInputObjectSchema,
      z.array(ServiceTranslationCreateManyInputObjectSchema),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();
