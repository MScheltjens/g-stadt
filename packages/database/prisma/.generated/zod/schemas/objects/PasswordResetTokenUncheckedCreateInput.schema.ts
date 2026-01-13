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
export const PasswordResetTokenUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PasswordResetTokenUncheckedCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PasswordResetTokenUncheckedCreateInput>;
export const PasswordResetTokenUncheckedCreateInputObjectZodSchema =
  makeSchema();
