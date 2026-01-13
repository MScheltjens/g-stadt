import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { EnumRoleNullableWithAggregatesFilterObjectSchema as EnumRoleNullableWithAggregatesFilterObjectSchema } from './EnumRoleNullableWithAggregatesFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

const servicescalarwherewithaggregatesinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => ServiceScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => ServiceScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ServiceScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ServiceScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => ServiceScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    categoryId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    icon: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    externalUrl: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    order: z
      .union([
        z.lazy(() => IntWithAggregatesFilterObjectSchema),
        z.number().int(),
      ])
      .optional(),
    isActive: z
      .union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
      .optional(),
    requiresAuth: z
      .union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
      .optional(),
    role: z
      .union([
        z.lazy(() => EnumRoleNullableWithAggregatesFilterObjectSchema),
        RoleSchema,
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional(),
  })
  .strict();
export const ServiceScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ServiceScalarWhereWithAggregatesInput> =
  servicescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ServiceScalarWhereWithAggregatesInput>;
export const ServiceScalarWhereWithAggregatesInputObjectZodSchema =
  servicescalarwherewithaggregatesinputSchema;
