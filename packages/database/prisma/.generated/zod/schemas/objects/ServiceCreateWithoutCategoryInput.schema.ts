import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { ServiceTranslationCreateNestedManyWithoutServiceInputObjectSchema as ServiceTranslationCreateNestedManyWithoutServiceInputObjectSchema } from './ServiceTranslationCreateNestedManyWithoutServiceInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      icon: z.string(),
      externalUrl: z.string().optional().nullable(),
      order: z.number().int().optional(),
      isActive: z.boolean().optional(),
      requiresAuth: z.boolean().optional(),
      role: RoleSchema.optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      translations: z
        .lazy(
          () =>
            ServiceTranslationCreateNestedManyWithoutServiceInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const ServiceCreateWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ServiceCreateWithoutCategoryInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateWithoutCategoryInput>;
export const ServiceCreateWithoutCategoryInputObjectZodSchema = makeSchema();
