import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceTranslationSelectObjectSchema as ServiceTranslationSelectObjectSchema } from './objects/ServiceTranslationSelect.schema';
import { ServiceTranslationIncludeObjectSchema as ServiceTranslationIncludeObjectSchema } from './objects/ServiceTranslationInclude.schema';
import { ServiceTranslationUpdateInputObjectSchema as ServiceTranslationUpdateInputObjectSchema } from './objects/ServiceTranslationUpdateInput.schema';
import { ServiceTranslationUncheckedUpdateInputObjectSchema as ServiceTranslationUncheckedUpdateInputObjectSchema } from './objects/ServiceTranslationUncheckedUpdateInput.schema';
import { ServiceTranslationWhereUniqueInputObjectSchema as ServiceTranslationWhereUniqueInputObjectSchema } from './objects/ServiceTranslationWhereUniqueInput.schema';

export const ServiceTranslationUpdateOneSchema: z.ZodType<Prisma.ServiceTranslationUpdateArgs> =
  z
    .object({
      select: ServiceTranslationSelectObjectSchema.optional(),
      include: ServiceTranslationIncludeObjectSchema.optional(),
      data: z.union([
        ServiceTranslationUpdateInputObjectSchema,
        ServiceTranslationUncheckedUpdateInputObjectSchema,
      ]),
      where: ServiceTranslationWhereUniqueInputObjectSchema,
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceTranslationUpdateArgs>;

export const ServiceTranslationUpdateOneZodSchema = z
  .object({
    select: ServiceTranslationSelectObjectSchema.optional(),
    include: ServiceTranslationIncludeObjectSchema.optional(),
    data: z.union([
      ServiceTranslationUpdateInputObjectSchema,
      ServiceTranslationUncheckedUpdateInputObjectSchema,
    ]),
    where: ServiceTranslationWhereUniqueInputObjectSchema,
  })
  .strict();
