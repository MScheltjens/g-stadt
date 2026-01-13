import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutPasswordResetTokensInputObjectSchema as UserCreateNestedOneWithoutPasswordResetTokensInputObjectSchema } from './UserCreateNestedOneWithoutPasswordResetTokensInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      tokenHash: z.string(),
      expiresAt: z.coerce.date(),
      user: z.lazy(
        () => UserCreateNestedOneWithoutPasswordResetTokensInputObjectSchema,
      ),
    })
    .strict();
export const PasswordResetTokenCreateInputObjectSchema: z.ZodType<Prisma.PasswordResetTokenCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PasswordResetTokenCreateInput>;
export const PasswordResetTokenCreateInputObjectZodSchema = makeSchema();
