import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumRoleNullableFilterObjectSchema as EnumRoleNullableFilterObjectSchema } from './EnumRoleNullableFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ServiceCategoryScalarRelationFilterObjectSchema as ServiceCategoryScalarRelationFilterObjectSchema } from './ServiceCategoryScalarRelationFilter.schema';
import { ServiceCategoryWhereInputObjectSchema as ServiceCategoryWhereInputObjectSchema } from './ServiceCategoryWhereInput.schema';
import { ServiceTranslationListRelationFilterObjectSchema as ServiceTranslationListRelationFilterObjectSchema } from './ServiceTranslationListRelationFilter.schema';

const servicewhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => ServiceWhereInputObjectSchema),
        z.lazy(() => ServiceWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ServiceWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ServiceWhereInputObjectSchema),
        z.lazy(() => ServiceWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    categoryId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    icon: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    externalUrl: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    order: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
    isActive: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    requiresAuth: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    role: z
      .union([z.lazy(() => EnumRoleNullableFilterObjectSchema), RoleSchema])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    category: z
      .union([
        z.lazy(() => ServiceCategoryScalarRelationFilterObjectSchema),
        z.lazy(() => ServiceCategoryWhereInputObjectSchema),
      ])
      .optional(),
    translations: z
      .lazy(() => ServiceTranslationListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();
export const ServiceWhereInputObjectSchema: z.ZodType<Prisma.ServiceWhereInput> =
  servicewhereinputSchema as unknown as z.ZodType<Prisma.ServiceWhereInput>;
export const ServiceWhereInputObjectZodSchema = servicewhereinputSchema;
