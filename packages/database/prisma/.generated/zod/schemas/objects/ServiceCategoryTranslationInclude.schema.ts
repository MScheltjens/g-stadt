import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryArgsObjectSchema as ServiceCategoryArgsObjectSchema } from './ServiceCategoryArgs.schema';

const makeSchema = () =>
  z
    .object({
      category: z
        .union([z.boolean(), z.lazy(() => ServiceCategoryArgsObjectSchema)])
        .optional(),
    })
    .strict();
export const ServiceCategoryTranslationIncludeObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationInclude> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationInclude>;
export const ServiceCategoryTranslationIncludeObjectZodSchema = makeSchema();
