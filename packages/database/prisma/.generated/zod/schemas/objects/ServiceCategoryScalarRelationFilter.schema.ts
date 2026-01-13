import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryWhereInputObjectSchema as ServiceCategoryWhereInputObjectSchema } from './ServiceCategoryWhereInput.schema';

const makeSchema = () =>
  z
    .object({
      is: z.lazy(() => ServiceCategoryWhereInputObjectSchema).optional(),
      isNot: z.lazy(() => ServiceCategoryWhereInputObjectSchema).optional(),
    })
    .strict();
export const ServiceCategoryScalarRelationFilterObjectSchema: z.ZodType<Prisma.ServiceCategoryScalarRelationFilter> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryScalarRelationFilter>;
export const ServiceCategoryScalarRelationFilterObjectZodSchema = makeSchema();
