import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceTranslationSelectObjectSchema as ServiceTranslationSelectObjectSchema } from './objects/ServiceTranslationSelect.schema';
import { ServiceTranslationIncludeObjectSchema as ServiceTranslationIncludeObjectSchema } from './objects/ServiceTranslationInclude.schema';
import { ServiceTranslationCreateInputObjectSchema as ServiceTranslationCreateInputObjectSchema } from './objects/ServiceTranslationCreateInput.schema';
import { ServiceTranslationUncheckedCreateInputObjectSchema as ServiceTranslationUncheckedCreateInputObjectSchema } from './objects/ServiceTranslationUncheckedCreateInput.schema';

export const ServiceTranslationCreateOneSchema: z.ZodType<Prisma.ServiceTranslationCreateArgs> =
  z
    .object({
      select: ServiceTranslationSelectObjectSchema.optional(),
      include: ServiceTranslationIncludeObjectSchema.optional(),
      data: z.union([
        ServiceTranslationCreateInputObjectSchema,
        ServiceTranslationUncheckedCreateInputObjectSchema,
      ]),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceTranslationCreateArgs>;

export const ServiceTranslationCreateOneZodSchema = z
  .object({
    select: ServiceTranslationSelectObjectSchema.optional(),
    include: ServiceTranslationIncludeObjectSchema.optional(),
    data: z.union([
      ServiceTranslationCreateInputObjectSchema,
      ServiceTranslationUncheckedCreateInputObjectSchema,
    ]),
  })
  .strict();
