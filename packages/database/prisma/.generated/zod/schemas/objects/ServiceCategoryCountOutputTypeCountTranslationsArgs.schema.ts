import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryTranslationWhereInputObjectSchema as ServiceCategoryTranslationWhereInputObjectSchema } from './ServiceCategoryTranslationWhereInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z
        .lazy(() => ServiceCategoryTranslationWhereInputObjectSchema)
        .optional(),
    })
    .strict();
export const ServiceCategoryCountOutputTypeCountTranslationsArgsObjectSchema =
  makeSchema();
export const ServiceCategoryCountOutputTypeCountTranslationsArgsObjectZodSchema =
  makeSchema();
