import * as z from 'zod';
import type { Prisma } from '@prisma/client';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      tokenHash: z.string(),
      userId: z.string(),
      expiresAt: z.coerce.date(),
    })
    .strict();
export const RefreshTokenUncheckedCreateInputObjectSchema: z.ZodType<Prisma.RefreshTokenUncheckedCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.RefreshTokenUncheckedCreateInput>;
export const RefreshTokenUncheckedCreateInputObjectZodSchema = makeSchema();
