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
export const RefreshTokenCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.RefreshTokenCreateWithoutUserInput> =
  makeSchema() as unknown as z.ZodType<Prisma.RefreshTokenCreateWithoutUserInput>;
export const RefreshTokenCreateWithoutUserInputObjectZodSchema = makeSchema();
