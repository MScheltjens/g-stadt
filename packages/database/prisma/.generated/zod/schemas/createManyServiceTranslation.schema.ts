import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceTranslationCreateManyInputObjectSchema as ServiceTranslationCreateManyInputObjectSchema } from './objects/ServiceTranslationCreateManyInput.schema';

export const ServiceTranslationCreateManySchema: z.ZodType<Prisma.ServiceTranslationCreateManyArgs> =
  z
    .object({
      data: z.union([
        ServiceTranslationCreateManyInputObjectSchema,
        z.array(ServiceTranslationCreateManyInputObjectSchema),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceTranslationCreateManyArgs>;

export const ServiceTranslationCreateManyZodSchema = z
  .object({
    data: z.union([
      ServiceTranslationCreateManyInputObjectSchema,
      z.array(ServiceTranslationCreateManyInputObjectSchema),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();
