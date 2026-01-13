import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumRoleFilterObjectSchema as EnumRoleFilterObjectSchema } from './EnumRoleFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { RefreshTokenListRelationFilterObjectSchema as RefreshTokenListRelationFilterObjectSchema } from './RefreshTokenListRelationFilter.schema';
import { PasswordResetTokenListRelationFilterObjectSchema as PasswordResetTokenListRelationFilterObjectSchema } from './PasswordResetTokenListRelationFilter.schema';

const userwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    passwordHash: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    role: z
      .union([z.lazy(() => EnumRoleFilterObjectSchema), RoleSchema])
      .optional(),
    isVerified: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    refreshTokens: z
      .lazy(() => RefreshTokenListRelationFilterObjectSchema)
      .optional(),
    passwordResetTokens: z
      .lazy(() => PasswordResetTokenListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> =
  userwhereinputSchema as unknown as z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectZodSchema = userwhereinputSchema;
