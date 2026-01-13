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
export const RefreshTokenCreateManyInputObjectSchema: z.ZodType<Prisma.RefreshTokenCreateManyInput> =
  makeSchema() as unknown as z.ZodType<Prisma.RefreshTokenCreateManyInput>;
export const RefreshTokenCreateManyInputObjectZodSchema = makeSchema();
