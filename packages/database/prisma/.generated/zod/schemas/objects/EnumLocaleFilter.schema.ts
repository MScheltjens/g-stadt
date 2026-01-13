import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocaleSchema } from '../enums/Locale.schema';
import { NestedEnumLocaleFilterObjectSchema as NestedEnumLocaleFilterObjectSchema } from './NestedEnumLocaleFilter.schema';

const makeSchema = () =>
  z
    .object({
      equals: LocaleSchema.optional(),
      in: LocaleSchema.array().optional(),
      notIn: LocaleSchema.array().optional(),
      not: z
        .union([LocaleSchema, z.lazy(() => NestedEnumLocaleFilterObjectSchema)])
        .optional(),
    })
    .strict();
export const EnumLocaleFilterObjectSchema: z.ZodType<Prisma.EnumLocaleFilter> =
  makeSchema() as unknown as z.ZodType<Prisma.EnumLocaleFilter>;
export const EnumLocaleFilterObjectZodSchema = makeSchema();
