import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryArgsObjectSchema as ServiceCategoryArgsObjectSchema } from './ServiceCategoryArgs.schema';
import { ServiceTranslationFindManySchema as ServiceTranslationFindManySchema } from '../findManyServiceTranslation.schema';
import { ServiceCountOutputTypeArgsObjectSchema as ServiceCountOutputTypeArgsObjectSchema } from './ServiceCountOutputTypeArgs.schema';

const makeSchema = () =>
  z
    .object({
      category: z
        .union([z.boolean(), z.lazy(() => ServiceCategoryArgsObjectSchema)])
        .optional(),
      translations: z
        .union([z.boolean(), z.lazy(() => ServiceTranslationFindManySchema)])
        .optional(),
      _count: z
        .union([
          z.boolean(),
          z.lazy(() => ServiceCountOutputTypeArgsObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const ServiceIncludeObjectSchema: z.ZodType<Prisma.ServiceInclude> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceInclude>;
export const ServiceIncludeObjectZodSchema = makeSchema();
