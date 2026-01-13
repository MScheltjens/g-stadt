import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCountOutputTypeCountTranslationsArgsObjectSchema as ServiceCountOutputTypeCountTranslationsArgsObjectSchema } from './ServiceCountOutputTypeCountTranslationsArgs.schema';

const makeSchema = () =>
  z
    .object({
      translations: z
        .union([
          z.boolean(),
          z.lazy(() => ServiceCountOutputTypeCountTranslationsArgsObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const ServiceCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ServiceCountOutputTypeSelect> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCountOutputTypeSelect>;
export const ServiceCountOutputTypeSelectObjectZodSchema = makeSchema();
