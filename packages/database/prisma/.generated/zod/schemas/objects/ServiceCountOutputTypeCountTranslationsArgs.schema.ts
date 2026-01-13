import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceTranslationWhereInputObjectSchema as ServiceTranslationWhereInputObjectSchema } from './ServiceTranslationWhereInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => ServiceTranslationWhereInputObjectSchema).optional(),
    })
    .strict();
export const ServiceCountOutputTypeCountTranslationsArgsObjectSchema =
  makeSchema();
export const ServiceCountOutputTypeCountTranslationsArgsObjectZodSchema =
  makeSchema();
