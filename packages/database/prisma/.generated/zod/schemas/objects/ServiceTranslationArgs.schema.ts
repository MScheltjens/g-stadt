import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceTranslationSelectObjectSchema as ServiceTranslationSelectObjectSchema } from './ServiceTranslationSelect.schema';
import { ServiceTranslationIncludeObjectSchema as ServiceTranslationIncludeObjectSchema } from './ServiceTranslationInclude.schema';

const makeSchema = () =>
  z
    .object({
      select: z.lazy(() => ServiceTranslationSelectObjectSchema).optional(),
      include: z.lazy(() => ServiceTranslationIncludeObjectSchema).optional(),
    })
    .strict();
export const ServiceTranslationArgsObjectSchema = makeSchema();
export const ServiceTranslationArgsObjectZodSchema = makeSchema();
