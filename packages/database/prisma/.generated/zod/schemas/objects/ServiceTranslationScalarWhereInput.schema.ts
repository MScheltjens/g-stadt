import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumLocaleFilterObjectSchema as EnumLocaleFilterObjectSchema } from './EnumLocaleFilter.schema';
import { LocaleSchema } from '../enums/Locale.schema';

const servicetranslationscalarwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => ServiceTranslationScalarWhereInputObjectSchema),
        z.lazy(() => ServiceTranslationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ServiceTranslationScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ServiceTranslationScalarWhereInputObjectSchema),
        z.lazy(() => ServiceTranslationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    serviceId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    locale: z
      .union([z.lazy(() => EnumLocaleFilterObjectSchema), LocaleSchema])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    slug: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();
export const ServiceTranslationScalarWhereInputObjectSchema: z.ZodType<Prisma.ServiceTranslationScalarWhereInput> =
  servicetranslationscalarwhereinputSchema as unknown as z.ZodType<Prisma.ServiceTranslationScalarWhereInput>;
export const ServiceTranslationScalarWhereInputObjectZodSchema =
  servicetranslationscalarwhereinputSchema;
