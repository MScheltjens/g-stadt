import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryCountOutputTypeCountServicesArgsObjectSchema as ServiceCategoryCountOutputTypeCountServicesArgsObjectSchema } from './ServiceCategoryCountOutputTypeCountServicesArgs.schema';
import { ServiceCategoryCountOutputTypeCountTranslationsArgsObjectSchema as ServiceCategoryCountOutputTypeCountTranslationsArgsObjectSchema } from './ServiceCategoryCountOutputTypeCountTranslationsArgs.schema';

const makeSchema = () =>
  z
    .object({
      services: z
        .union([
          z.boolean(),
          z.lazy(
            () => ServiceCategoryCountOutputTypeCountServicesArgsObjectSchema,
          ),
        ])
        .optional(),
      translations: z
        .union([
          z.boolean(),
          z.lazy(
            () =>
              ServiceCategoryCountOutputTypeCountTranslationsArgsObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();
export const ServiceCategoryCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ServiceCategoryCountOutputTypeSelect> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryCountOutputTypeSelect>;
export const ServiceCategoryCountOutputTypeSelectObjectZodSchema = makeSchema();
