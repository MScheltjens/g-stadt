import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceTranslationSelectObjectSchema as ServiceTranslationSelectObjectSchema } from './objects/ServiceTranslationSelect.schema';
import { ServiceTranslationIncludeObjectSchema as ServiceTranslationIncludeObjectSchema } from './objects/ServiceTranslationInclude.schema';
import { ServiceTranslationWhereUniqueInputObjectSchema as ServiceTranslationWhereUniqueInputObjectSchema } from './objects/ServiceTranslationWhereUniqueInput.schema';
import { ServiceTranslationCreateInputObjectSchema as ServiceTranslationCreateInputObjectSchema } from './objects/ServiceTranslationCreateInput.schema';
import { ServiceTranslationUncheckedCreateInputObjectSchema as ServiceTranslationUncheckedCreateInputObjectSchema } from './objects/ServiceTranslationUncheckedCreateInput.schema';
import { ServiceTranslationUpdateInputObjectSchema as ServiceTranslationUpdateInputObjectSchema } from './objects/ServiceTranslationUpdateInput.schema';
import { ServiceTranslationUncheckedUpdateInputObjectSchema as ServiceTranslationUncheckedUpdateInputObjectSchema } from './objects/ServiceTranslationUncheckedUpdateInput.schema';

export const ServiceTranslationUpsertOneSchema: z.ZodType<Prisma.ServiceTranslationUpsertArgs> =
  z
    .object({
      select: ServiceTranslationSelectObjectSchema.optional(),
      include: ServiceTranslationIncludeObjectSchema.optional(),
      where: ServiceTranslationWhereUniqueInputObjectSchema,
      create: z.union([
        ServiceTranslationCreateInputObjectSchema,
        ServiceTranslationUncheckedCreateInputObjectSchema,
      ]),
      update: z.union([
        ServiceTranslationUpdateInputObjectSchema,
        ServiceTranslationUncheckedUpdateInputObjectSchema,
      ]),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceTranslationUpsertArgs>;

export const ServiceTranslationUpsertOneZodSchema = z
  .object({
    select: ServiceTranslationSelectObjectSchema.optional(),
    include: ServiceTranslationIncludeObjectSchema.optional(),
    where: ServiceTranslationWhereUniqueInputObjectSchema,
    create: z.union([
      ServiceTranslationCreateInputObjectSchema,
      ServiceTranslationUncheckedCreateInputObjectSchema,
    ]),
    update: z.union([
      ServiceTranslationUpdateInputObjectSchema,
      ServiceTranslationUncheckedUpdateInputObjectSchema,
    ]),
  })
  .strict();
