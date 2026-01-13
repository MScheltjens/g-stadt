import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { ServiceCategoryCreateNestedOneWithoutServicesInputObjectSchema as ServiceCategoryCreateNestedOneWithoutServicesInputObjectSchema } from './ServiceCategoryCreateNestedOneWithoutServicesInput.schema';
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
      category: z.lazy(
        () => ServiceCategoryCreateNestedOneWithoutServicesInputObjectSchema,
      ),
      translations: z
        .lazy(
          () =>
            ServiceTranslationCreateNestedManyWithoutServiceInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const ServiceCreateInputObjectSchema: z.ZodType<Prisma.ServiceCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateInput>;
export const ServiceCreateInputObjectZodSchema = makeSchema();
