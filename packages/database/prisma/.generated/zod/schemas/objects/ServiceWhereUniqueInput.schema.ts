import * as z from 'zod';
import type { Prisma } from '@prisma/client';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
    })
    .strict();
export const ServiceWhereUniqueInputObjectSchema: z.ZodType<Prisma.ServiceWhereUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceWhereUniqueInput>;
export const ServiceWhereUniqueInputObjectZodSchema = makeSchema();
