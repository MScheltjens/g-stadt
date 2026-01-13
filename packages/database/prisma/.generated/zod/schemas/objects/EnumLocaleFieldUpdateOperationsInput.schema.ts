import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocaleSchema } from '../enums/Locale.schema';

const makeSchema = () =>
  z
    .object({
      set: LocaleSchema.optional(),
    })
    .strict();
export const EnumLocaleFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumLocaleFieldUpdateOperationsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.EnumLocaleFieldUpdateOperationsInput>;
export const EnumLocaleFieldUpdateOperationsInputObjectZodSchema = makeSchema();
