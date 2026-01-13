import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { ServiceListRelationFilterObjectSchema as ServiceListRelationFilterObjectSchema } from './ServiceListRelationFilter.schema';
import { ServiceCategoryTranslationListRelationFilterObjectSchema as ServiceCategoryTranslationListRelationFilterObjectSchema } from './ServiceCategoryTranslationListRelationFilter.schema';

const servicecategorywhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => ServiceCategoryWhereInputObjectSchema),
        z.lazy(() => ServiceCategoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ServiceCategoryWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ServiceCategoryWhereInputObjectSchema),
        z.lazy(() => ServiceCategoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    code: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    order: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
    isActive: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    services: z.lazy(() => ServiceListRelationFilterObjectSchema).optional(),
    translations: z
      .lazy(() => ServiceCategoryTranslationListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();
export const ServiceCategoryWhereInputObjectSchema: z.ZodType<Prisma.ServiceCategoryWhereInput> =
  servicecategorywhereinputSchema as unknown as z.ZodType<Prisma.ServiceCategoryWhereInput>;
export const ServiceCategoryWhereInputObjectZodSchema =
  servicecategorywhereinputSchema;
