import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceTranslationSelectObjectSchema as ServiceTranslationSelectObjectSchema } from './objects/ServiceTranslationSelect.schema';
import { ServiceTranslationUpdateManyMutationInputObjectSchema as ServiceTranslationUpdateManyMutationInputObjectSchema } from './objects/ServiceTranslationUpdateManyMutationInput.schema';
import { ServiceTranslationWhereInputObjectSchema as ServiceTranslationWhereInputObjectSchema } from './objects/ServiceTranslationWhereInput.schema';

export const ServiceTranslationUpdateManyAndReturnSchema: z.ZodType<Prisma.ServiceTranslationUpdateManyAndReturnArgs> =
  z
    .object({
      select: ServiceTranslationSelectObjectSchema.optional(),
      data: ServiceTranslationUpdateManyMutationInputObjectSchema,
      where: ServiceTranslationWhereInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceTranslationUpdateManyAndReturnArgs>;

export const ServiceTranslationUpdateManyAndReturnZodSchema = z
  .object({
    select: ServiceTranslationSelectObjectSchema.optional(),
    data: ServiceTranslationUpdateManyMutationInputObjectSchema,
    where: ServiceTranslationWhereInputObjectSchema.optional(),
  })
  .strict();
