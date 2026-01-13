import * as z from 'zod';
import type { Prisma } from '@prisma/client';

const makeSchema = () =>
  z
    .object({
      id: z.literal(true).optional(),
      serviceId: z.literal(true).optional(),
      locale: z.literal(true).optional(),
      title: z.literal(true).optional(),
      description: z.literal(true).optional(),
      slug: z.literal(true).optional(),
      _all: z.literal(true).optional(),
    })
    .strict();
export const ServiceTranslationCountAggregateInputObjectSchema: z.ZodType<Prisma.ServiceTranslationCountAggregateInputType> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationCountAggregateInputType>;
export const ServiceTranslationCountAggregateInputObjectZodSchema =
  makeSchema();
