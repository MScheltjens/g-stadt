import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceTranslationSelectObjectSchema as ServiceTranslationSelectObjectSchema } from './objects/ServiceTranslationSelect.schema';
import { ServiceTranslationIncludeObjectSchema as ServiceTranslationIncludeObjectSchema } from './objects/ServiceTranslationInclude.schema';
import { ServiceTranslationWhereUniqueInputObjectSchema as ServiceTranslationWhereUniqueInputObjectSchema } from './objects/ServiceTranslationWhereUniqueInput.schema';

export const ServiceTranslationDeleteOneSchema: z.ZodType<Prisma.ServiceTranslationDeleteArgs> =
  z
    .object({
      select: ServiceTranslationSelectObjectSchema.optional(),
      include: ServiceTranslationIncludeObjectSchema.optional(),
      where: ServiceTranslationWhereUniqueInputObjectSchema,
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceTranslationDeleteArgs>;

export const ServiceTranslationDeleteOneZodSchema = z
  .object({
    select: ServiceTranslationSelectObjectSchema.optional(),
    include: ServiceTranslationIncludeObjectSchema.optional(),
    where: ServiceTranslationWhereUniqueInputObjectSchema,
  })
  .strict();
