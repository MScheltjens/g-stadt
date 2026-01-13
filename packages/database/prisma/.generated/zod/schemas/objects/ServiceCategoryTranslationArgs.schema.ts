import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryTranslationSelectObjectSchema as ServiceCategoryTranslationSelectObjectSchema } from './ServiceCategoryTranslationSelect.schema';
import { ServiceCategoryTranslationIncludeObjectSchema as ServiceCategoryTranslationIncludeObjectSchema } from './ServiceCategoryTranslationInclude.schema';

const makeSchema = () =>
  z
    .object({
      select: z
        .lazy(() => ServiceCategoryTranslationSelectObjectSchema)
        .optional(),
      include: z
        .lazy(() => ServiceCategoryTranslationIncludeObjectSchema)
        .optional(),
    })
    .strict();
export const ServiceCategoryTranslationArgsObjectSchema = makeSchema();
export const ServiceCategoryTranslationArgsObjectZodSchema = makeSchema();
