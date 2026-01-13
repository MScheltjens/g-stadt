import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceArgsObjectSchema as ServiceArgsObjectSchema } from './ServiceArgs.schema';

const makeSchema = () =>
  z
    .object({
      service: z
        .union([z.boolean(), z.lazy(() => ServiceArgsObjectSchema)])
        .optional(),
    })
    .strict();
export const ServiceTranslationIncludeObjectSchema: z.ZodType<Prisma.ServiceTranslationInclude> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationInclude>;
export const ServiceTranslationIncludeObjectZodSchema = makeSchema();
