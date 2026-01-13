import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceSelectObjectSchema as ServiceSelectObjectSchema } from './objects/ServiceSelect.schema';
import { ServiceIncludeObjectSchema as ServiceIncludeObjectSchema } from './objects/ServiceInclude.schema';
import { ServiceWhereUniqueInputObjectSchema as ServiceWhereUniqueInputObjectSchema } from './objects/ServiceWhereUniqueInput.schema';
import { ServiceCreateInputObjectSchema as ServiceCreateInputObjectSchema } from './objects/ServiceCreateInput.schema';
import { ServiceUncheckedCreateInputObjectSchema as ServiceUncheckedCreateInputObjectSchema } from './objects/ServiceUncheckedCreateInput.schema';
import { ServiceUpdateInputObjectSchema as ServiceUpdateInputObjectSchema } from './objects/ServiceUpdateInput.schema';
import { ServiceUncheckedUpdateInputObjectSchema as ServiceUncheckedUpdateInputObjectSchema } from './objects/ServiceUncheckedUpdateInput.schema';

export const ServiceUpsertOneSchema: z.ZodType<Prisma.ServiceUpsertArgs> = z
  .object({
    select: ServiceSelectObjectSchema.optional(),
    include: ServiceIncludeObjectSchema.optional(),
    where: ServiceWhereUniqueInputObjectSchema,
    create: z.union([
      ServiceCreateInputObjectSchema,
      ServiceUncheckedCreateInputObjectSchema,
    ]),
    update: z.union([
      ServiceUpdateInputObjectSchema,
      ServiceUncheckedUpdateInputObjectSchema,
    ]),
  })
  .strict() as unknown as z.ZodType<Prisma.ServiceUpsertArgs>;

export const ServiceUpsertOneZodSchema = z
  .object({
    select: ServiceSelectObjectSchema.optional(),
    include: ServiceIncludeObjectSchema.optional(),
    where: ServiceWhereUniqueInputObjectSchema,
    create: z.union([
      ServiceCreateInputObjectSchema,
      ServiceUncheckedCreateInputObjectSchema,
    ]),
    update: z.union([
      ServiceUpdateInputObjectSchema,
      ServiceUncheckedUpdateInputObjectSchema,
    ]),
  })
  .strict();
