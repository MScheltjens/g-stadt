import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereInputObjectSchema as ServiceWhereInputObjectSchema } from './ServiceWhereInput.schema';

const makeSchema = () =>
  z
    .object({
      is: z.lazy(() => ServiceWhereInputObjectSchema).optional(),
      isNot: z.lazy(() => ServiceWhereInputObjectSchema).optional(),
    })
    .strict();
export const ServiceScalarRelationFilterObjectSchema: z.ZodType<Prisma.ServiceScalarRelationFilter> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceScalarRelationFilter>;
export const ServiceScalarRelationFilterObjectZodSchema = makeSchema();
