import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocaleSchema } from '../enums/Locale.schema';

const nestedenumlocalefilterSchema = z
  .object({
    equals: LocaleSchema.optional(),
    in: LocaleSchema.array().optional(),
    notIn: LocaleSchema.array().optional(),
    not: z
      .union([LocaleSchema, z.lazy(() => NestedEnumLocaleFilterObjectSchema)])
      .optional(),
  })
  .strict();
export const NestedEnumLocaleFilterObjectSchema: z.ZodType<Prisma.NestedEnumLocaleFilter> =
  nestedenumlocalefilterSchema as unknown as z.ZodType<Prisma.NestedEnumLocaleFilter>;
export const NestedEnumLocaleFilterObjectZodSchema =
  nestedenumlocalefilterSchema;
