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
export const PasswordResetTokenCreateManyUserInputObjectSchema: z.ZodType<Prisma.PasswordResetTokenCreateManyUserInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PasswordResetTokenCreateManyUserInput>;
export const PasswordResetTokenCreateManyUserInputObjectZodSchema =
  makeSchema();
