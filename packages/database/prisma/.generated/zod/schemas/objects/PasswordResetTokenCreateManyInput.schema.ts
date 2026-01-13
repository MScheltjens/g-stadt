import * as z from 'zod';
import type { Prisma } from '@prisma/client';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      tokenHash: z.string(),
      expiresAt: z.coerce.date(),
    })
    .strict();
export const PasswordResetTokenCreateManyInputObjectSchema: z.ZodType<Prisma.PasswordResetTokenCreateManyInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PasswordResetTokenCreateManyInput>;
export const PasswordResetTokenCreateManyInputObjectZodSchema = makeSchema();
