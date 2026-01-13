import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceTranslationUpdateManyMutationInputObjectSchema as ServiceTranslationUpdateManyMutationInputObjectSchema } from './objects/ServiceTranslationUpdateManyMutationInput.schema';
import { ServiceTranslationWhereInputObjectSchema as ServiceTranslationWhereInputObjectSchema } from './objects/ServiceTranslationWhereInput.schema';

export const ServiceTranslationUpdateManySchema: z.ZodType<Prisma.ServiceTranslationUpdateManyArgs> =
  z
    .object({
      data: ServiceTranslationUpdateManyMutationInputObjectSchema,
      where: ServiceTranslationWhereInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceTranslationUpdateManyArgs>;

export const ServiceTranslationUpdateManyZodSchema = z
  .object({
    data: ServiceTranslationUpdateManyMutationInputObjectSchema,
    where: ServiceTranslationWhereInputObjectSchema.optional(),
  })
  .strict();
