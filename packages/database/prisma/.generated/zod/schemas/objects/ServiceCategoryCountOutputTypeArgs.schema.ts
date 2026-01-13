import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryCountOutputTypeSelectObjectSchema as ServiceCategoryCountOutputTypeSelectObjectSchema } from './ServiceCategoryCountOutputTypeSelect.schema';

const makeSchema = () =>
  z
    .object({
      select: z
        .lazy(() => ServiceCategoryCountOutputTypeSelectObjectSchema)
        .optional(),
    })
    .strict();
export const ServiceCategoryCountOutputTypeArgsObjectSchema = makeSchema();
export const ServiceCategoryCountOutputTypeArgsObjectZodSchema = makeSchema();
