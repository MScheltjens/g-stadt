import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceIncludeObjectSchema as ServiceIncludeObjectSchema } from './objects/ServiceInclude.schema';
import { ServiceOrderByWithRelationInputObjectSchema as ServiceOrderByWithRelationInputObjectSchema } from './objects/ServiceOrderByWithRelationInput.schema';
import { ServiceWhereInputObjectSchema as ServiceWhereInputObjectSchema } from './objects/ServiceWhereInput.schema';
import { ServiceWhereUniqueInputObjectSchema as ServiceWhereUniqueInputObjectSchema } from './objects/ServiceWhereUniqueInput.schema';
import { ServiceScalarFieldEnumSchema } from './enums/ServiceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ServiceFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ServiceSelect> =
  z
    .object({
      id: z.boolean().optional(),
      categoryId: z.boolean().optional(),
      category: z.boolean().optional(),
      icon: z.boolean().optional(),
      externalUrl: z.boolean().optional(),
      order: z.boolean().optional(),
      isActive: z.boolean().optional(),
      requiresAuth: z.boolean().optional(),
      role: z.boolean().optional(),
      translations: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      _count: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceSelect>;

export const ServiceFindFirstOrThrowSelectZodSchema = z
  .object({
    id: z.boolean().optional(),
    categoryId: z.boolean().optional(),
    category: z.boolean().optional(),
    icon: z.boolean().optional(),
    externalUrl: z.boolean().optional(),
    order: z.boolean().optional(),
    isActive: z.boolean().optional(),
    requiresAuth: z.boolean().optional(),
    role: z.boolean().optional(),
    translations: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional(),
  })
  .strict();

export const ServiceFindFirstOrThrowSchema: z.ZodType<Prisma.ServiceFindFirstOrThrowArgs> =
  z
    .object({
      select: ServiceFindFirstOrThrowSelectSchema.optional(),
      include: z.lazy(() => ServiceIncludeObjectSchema.optional()),
      orderBy: z
        .union([
          ServiceOrderByWithRelationInputObjectSchema,
          ServiceOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: ServiceWhereInputObjectSchema.optional(),
      cursor: ServiceWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ServiceScalarFieldEnumSchema,
          ServiceScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceFindFirstOrThrowArgs>;

export const ServiceFindFirstOrThrowZodSchema = z
  .object({
    select: ServiceFindFirstOrThrowSelectSchema.optional(),
    include: z.lazy(() => ServiceIncludeObjectSchema.optional()),
    orderBy: z
      .union([
        ServiceOrderByWithRelationInputObjectSchema,
        ServiceOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: ServiceWhereInputObjectSchema.optional(),
    cursor: ServiceWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        ServiceScalarFieldEnumSchema,
        ServiceScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict();
