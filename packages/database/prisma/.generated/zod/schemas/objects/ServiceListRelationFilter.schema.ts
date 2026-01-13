import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereInputObjectSchema as ServiceWhereInputObjectSchema } from './ServiceWhereInput.schema';

const makeSchema = () =>
  z
    .object({
      every: z.lazy(() => ServiceWhereInputObjectSchema).optional(),
      some: z.lazy(() => ServiceWhereInputObjectSchema).optional(),
      none: z.lazy(() => ServiceWhereInputObjectSchema).optional(),
    })
    .strict();
export const ServiceListRelationFilterObjectSchema: z.ZodType<Prisma.ServiceListRelationFilter> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceListRelationFilter>;
export const ServiceListRelationFilterObjectZodSchema = makeSchema();
