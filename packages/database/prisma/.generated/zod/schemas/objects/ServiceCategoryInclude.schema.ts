import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceFindManySchema as ServiceFindManySchema } from '../findManyService.schema';
import { ServiceCategoryTranslationFindManySchema as ServiceCategoryTranslationFindManySchema } from '../findManyServiceCategoryTranslation.schema';
import { ServiceCategoryCountOutputTypeArgsObjectSchema as ServiceCategoryCountOutputTypeArgsObjectSchema } from './ServiceCategoryCountOutputTypeArgs.schema';

const makeSchema = () =>
  z
    .object({
      services: z
        .union([z.boolean(), z.lazy(() => ServiceFindManySchema)])
        .optional(),
      translations: z
        .union([
          z.boolean(),
          z.lazy(() => ServiceCategoryTranslationFindManySchema),
        ])
        .optional(),
      _count: z
        .union([
          z.boolean(),
          z.lazy(() => ServiceCategoryCountOutputTypeArgsObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const ServiceCategoryIncludeObjectSchema: z.ZodType<Prisma.ServiceCategoryInclude> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryInclude>;
export const ServiceCategoryIncludeObjectZodSchema = makeSchema();
