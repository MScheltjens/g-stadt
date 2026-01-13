import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceTranslationIncludeObjectSchema as ServiceTranslationIncludeObjectSchema } from './objects/ServiceTranslationInclude.schema';
import { ServiceTranslationOrderByWithRelationInputObjectSchema as ServiceTranslationOrderByWithRelationInputObjectSchema } from './objects/ServiceTranslationOrderByWithRelationInput.schema';
import { ServiceTranslationWhereInputObjectSchema as ServiceTranslationWhereInputObjectSchema } from './objects/ServiceTranslationWhereInput.schema';
import { ServiceTranslationWhereUniqueInputObjectSchema as ServiceTranslationWhereUniqueInputObjectSchema } from './objects/ServiceTranslationWhereUniqueInput.schema';
import { ServiceTranslationScalarFieldEnumSchema } from './enums/ServiceTranslationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ServiceTranslationFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ServiceTranslationSelect> =
  z
    .object({
      id: z.boolean().optional(),
      serviceId: z.boolean().optional(),
      locale: z.boolean().optional(),
      title: z.boolean().optional(),
      description: z.boolean().optional(),
      slug: z.boolean().optional(),
      service: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceTranslationSelect>;

export const ServiceTranslationFindFirstOrThrowSelectZodSchema = z
  .object({
    id: z.boolean().optional(),
    serviceId: z.boolean().optional(),
    locale: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    slug: z.boolean().optional(),
    service: z.boolean().optional(),
  })
  .strict();

export const ServiceTranslationFindFirstOrThrowSchema: z.ZodType<Prisma.ServiceTranslationFindFirstOrThrowArgs> =
  z
    .object({
      select: ServiceTranslationFindFirstOrThrowSelectSchema.optional(),
      include: z.lazy(() => ServiceTranslationIncludeObjectSchema.optional()),
      orderBy: z
        .union([
          ServiceTranslationOrderByWithRelationInputObjectSchema,
          ServiceTranslationOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: ServiceTranslationWhereInputObjectSchema.optional(),
      cursor: ServiceTranslationWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ServiceTranslationScalarFieldEnumSchema,
          ServiceTranslationScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ServiceTranslationFindFirstOrThrowArgs>;

export const ServiceTranslationFindFirstOrThrowZodSchema = z
  .object({
    select: ServiceTranslationFindFirstOrThrowSelectSchema.optional(),
    include: z.lazy(() => ServiceTranslationIncludeObjectSchema.optional()),
    orderBy: z
      .union([
        ServiceTranslationOrderByWithRelationInputObjectSchema,
        ServiceTranslationOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: ServiceTranslationWhereInputObjectSchema.optional(),
    cursor: ServiceTranslationWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        ServiceTranslationScalarFieldEnumSchema,
        ServiceTranslationScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict();
