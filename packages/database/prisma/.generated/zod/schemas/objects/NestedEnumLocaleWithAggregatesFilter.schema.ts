import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocaleSchema } from '../enums/Locale.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumLocaleFilterObjectSchema as NestedEnumLocaleFilterObjectSchema } from './NestedEnumLocaleFilter.schema';

const nestedenumlocalewithaggregatesfilterSchema = z
  .object({
    equals: LocaleSchema.optional(),
    in: LocaleSchema.array().optional(),
    notIn: LocaleSchema.array().optional(),
    not: z
      .union([
        LocaleSchema,
        z.lazy(() => NestedEnumLocaleWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumLocaleFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumLocaleFilterObjectSchema).optional(),
  })
  .strict();
export const NestedEnumLocaleWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumLocaleWithAggregatesFilter> =
  nestedenumlocalewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumLocaleWithAggregatesFilter>;
export const NestedEnumLocaleWithAggregatesFilterObjectZodSchema =
  nestedenumlocalewithaggregatesfilterSchema;
