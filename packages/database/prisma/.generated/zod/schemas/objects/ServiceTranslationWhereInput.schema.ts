import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumLocaleFilterObjectSchema as EnumLocaleFilterObjectSchema } from './EnumLocaleFilter.schema';
import { LocaleSchema } from '../enums/Locale.schema';
import { ServiceScalarRelationFilterObjectSchema as ServiceScalarRelationFilterObjectSchema } from './ServiceScalarRelationFilter.schema';
import { ServiceWhereInputObjectSchema as ServiceWhereInputObjectSchema } from './ServiceWhereInput.schema';

const servicetranslationwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => ServiceTranslationWhereInputObjectSchema),
        z.lazy(() => ServiceTranslationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ServiceTranslationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ServiceTranslationWhereInputObjectSchema),
        z.lazy(() => ServiceTranslationWhereInputObjectSchema).array(),
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
    service: z
      .union([
        z.lazy(() => ServiceScalarRelationFilterObjectSchema),
        z.lazy(() => ServiceWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();
export const ServiceTranslationWhereInputObjectSchema: z.ZodType<Prisma.ServiceTranslationWhereInput> =
  servicetranslationwhereinputSchema as unknown as z.ZodType<Prisma.ServiceTranslationWhereInput>;
export const ServiceTranslationWhereInputObjectZodSchema =
  servicetranslationwhereinputSchema;
