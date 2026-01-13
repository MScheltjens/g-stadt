import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereInputObjectSchema as ServiceWhereInputObjectSchema } from './ServiceWhereInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => ServiceWhereInputObjectSchema).optional(),
    })
    .strict();
export const ServiceCategoryCountOutputTypeCountServicesArgsObjectSchema =
  makeSchema();
export const ServiceCategoryCountOutputTypeCountServicesArgsObjectZodSchema =
  makeSchema();
