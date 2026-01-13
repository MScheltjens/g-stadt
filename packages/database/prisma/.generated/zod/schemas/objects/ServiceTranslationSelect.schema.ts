import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceArgsObjectSchema as ServiceArgsObjectSchema } from './ServiceArgs.schema';

const makeSchema = () =>
  z
    .object({
      id: z.boolean().optional(),
      serviceId: z.boolean().optional(),
      locale: z.boolean().optional(),
      title: z.boolean().optional(),
      description: z.boolean().optional(),
      slug: z.boolean().optional(),
      service: z
        .union([z.boolean(), z.lazy(() => ServiceArgsObjectSchema)])
        .optional(),
    })
    .strict();
export const ServiceTranslationSelectObjectSchema: z.ZodType<Prisma.ServiceTranslationSelect> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationSelect>;
export const ServiceTranslationSelectObjectZodSchema = makeSchema();
