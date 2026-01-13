import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceTranslationWhereInputObjectSchema as ServiceTranslationWhereInputObjectSchema } from './ServiceTranslationWhereInput.schema';

const makeSchema = () =>
  z
    .object({
      every: z.lazy(() => ServiceTranslationWhereInputObjectSchema).optional(),
      some: z.lazy(() => ServiceTranslationWhereInputObjectSchema).optional(),
      none: z.lazy(() => ServiceTranslationWhereInputObjectSchema).optional(),
    })
    .strict();
export const ServiceTranslationListRelationFilterObjectSchema: z.ZodType<Prisma.ServiceTranslationListRelationFilter> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationListRelationFilter>;
export const ServiceTranslationListRelationFilterObjectZodSchema = makeSchema();
