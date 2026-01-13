import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { ServiceTranslationUncheckedCreateNestedManyWithoutServiceInputObjectSchema as ServiceTranslationUncheckedCreateNestedManyWithoutServiceInputObjectSchema } from './ServiceTranslationUncheckedCreateNestedManyWithoutServiceInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      categoryId: z.string(),
      icon: z.string(),
      externalUrl: z.string().optional().nullable(),
      order: z.number().int().optional(),
      isActive: z.boolean().optional(),
      requiresAuth: z.boolean().optional(),
      role: RoleSchema.optional().nullable(),
      createdAt: z.coerce.date().optional(),
      translations: z
        .lazy(
          () =>
            ServiceTranslationUncheckedCreateNestedManyWithoutServiceInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const ServiceUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ServiceUncheckedCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceUncheckedCreateInput>;
export const ServiceUncheckedCreateInputObjectZodSchema = makeSchema();
