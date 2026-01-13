import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceCategoryIncludeObjectSchema as ServiceCategoryIncludeObjectSchema } from './objects/ServiceCategoryInclude.schema';
import { ServiceCategoryOrderByWithRelationInputObjectSchema as ServiceCategoryOrderByWithRelationInputObjectSchema } from './objects/ServiceCategoryOrderByWithRelationInput.schema';
import { ServiceCategoryWhereInputObjectSchema as ServiceCategoryWhereInputObjectSchema } from './objects/ServiceCategoryWhereInput.schema';
import { ServiceCategoryWhereUniqueInputObjectSchema as ServiceCategoryWhereUniqueInputObjectSchema } from './objects/ServiceCategoryWhereUniqueInput.schema';
import { ServiceCategoryScalarFieldEnumSchema } from './enums/ServiceCategoryScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ServiceCategoryFindManySelectSchema: z.ZodType<Prisma.ServiceCategorySelect> =
  z
    .object({
      id: z.boolean().optional(),
      code: z.boolean().optional(),
      order: z.boolean().optional(),
      isActive: z.boolean().optional(),
      services: z.boolean().optional(),
      translations: z.boolean().optional(),
      _count: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategorySelect>;

export const ServiceCategoryFindManySelectZodSchema = z
  .object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    order: z.boolean().optional(),
    isActive: z.boolean().optional(),
    services: z.boolean().optional(),
    translations: z.boolean().optional(),
    _count: z.boolean().optional(),
  })
  .strict();

export const ServiceCategoryFindManySchema: z.ZodType<Prisma.ServiceCategoryFindManyArgs> =
  z
    .object({
      select: ServiceCategoryFindManySelectSchema.optional(),
      include: z.lazy(() => ServiceCategoryIncludeObjectSchema.optional()),
      orderBy: z
        .union([
          ServiceCategoryOrderByWithRelationInputObjectSchema,
          ServiceCategoryOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: ServiceCategoryWhereInputObjectSchema.optional(),
      cursor: ServiceCategoryWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ServiceCategoryScalarFieldEnumSchema,
          ServiceCategoryScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceCategoryFindManyArgs>;

export const ServiceCategoryFindManyZodSchema = z
  .object({
    select: ServiceCategoryFindManySelectSchema.optional(),
    include: z.lazy(() => ServiceCategoryIncludeObjectSchema.optional()),
    orderBy: z
      .union([
        ServiceCategoryOrderByWithRelationInputObjectSchema,
        ServiceCategoryOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: ServiceCategoryWhereInputObjectSchema.optional(),
    cursor: ServiceCategoryWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        ServiceCategoryScalarFieldEnumSchema,
        ServiceCategoryScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict();
