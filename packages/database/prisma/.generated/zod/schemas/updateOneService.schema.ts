import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceSelectObjectSchema as ServiceSelectObjectSchema } from './objects/ServiceSelect.schema';
import { ServiceIncludeObjectSchema as ServiceIncludeObjectSchema } from './objects/ServiceInclude.schema';
import { ServiceUpdateInputObjectSchema as ServiceUpdateInputObjectSchema } from './objects/ServiceUpdateInput.schema';
import { ServiceUncheckedUpdateInputObjectSchema as ServiceUncheckedUpdateInputObjectSchema } from './objects/ServiceUncheckedUpdateInput.schema';
import { ServiceWhereUniqueInputObjectSchema as ServiceWhereUniqueInputObjectSchema } from './objects/ServiceWhereUniqueInput.schema';

export const ServiceUpdateOneSchema: z.ZodType<Prisma.ServiceUpdateArgs> = z
  .object({
    select: ServiceSelectObjectSchema.optional(),
    include: ServiceIncludeObjectSchema.optional(),
    data: z.union([
      ServiceUpdateInputObjectSchema,
      ServiceUncheckedUpdateInputObjectSchema,
    ]),
    where: ServiceWhereUniqueInputObjectSchema,
  })
  .strict() as unknown as z.ZodType<Prisma.ServiceUpdateArgs>;

export const ServiceUpdateOneZodSchema = z
  .object({
    select: ServiceSelectObjectSchema.optional(),
    include: ServiceIncludeObjectSchema.optional(),
    data: z.union([
      ServiceUpdateInputObjectSchema,
      ServiceUncheckedUpdateInputObjectSchema,
    ]),
    where: ServiceWhereUniqueInputObjectSchema,
  })
  .strict();
