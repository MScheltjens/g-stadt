import * as z from 'zod';
import type { Prisma } from '@prisma/client';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      tokenHash: z.string(),
      expiresAt: z.coerce.date(),
    })
    .strict();
export const PasswordResetTokenCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.PasswordResetTokenCreateWithoutUserInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PasswordResetTokenCreateWithoutUserInput>;
export const PasswordResetTokenCreateWithoutUserInputObjectZodSchema =
  makeSchema();
