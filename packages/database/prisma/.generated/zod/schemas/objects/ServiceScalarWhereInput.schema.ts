import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumRoleNullableFilterObjectSchema as EnumRoleNullableFilterObjectSchema } from './EnumRoleNullableFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

const servicescalarwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => ServiceScalarWhereInputObjectSchema),
        z.lazy(() => ServiceScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ServiceScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ServiceScalarWhereInputObjectSchema),
        z.lazy(() => ServiceScalarWhereInputObjectSchema).array(),
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
  })
  .strict();
export const ServiceScalarWhereInputObjectSchema: z.ZodType<Prisma.ServiceScalarWhereInput> =
  servicescalarwhereinputSchema as unknown as z.ZodType<Prisma.ServiceScalarWhereInput>;
export const ServiceScalarWhereInputObjectZodSchema =
  servicescalarwhereinputSchema;
