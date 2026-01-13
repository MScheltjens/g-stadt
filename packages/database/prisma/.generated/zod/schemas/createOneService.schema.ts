import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ServiceSelectObjectSchema as ServiceSelectObjectSchema } from './objects/ServiceSelect.schema';
import { ServiceIncludeObjectSchema as ServiceIncludeObjectSchema } from './objects/ServiceInclude.schema';
import { ServiceCreateInputObjectSchema as ServiceCreateInputObjectSchema } from './objects/ServiceCreateInput.schema';
import { ServiceUncheckedCreateInputObjectSchema as ServiceUncheckedCreateInputObjectSchema } from './objects/ServiceUncheckedCreateInput.schema';

export const ServiceCreateOneSchema: z.ZodType<Prisma.ServiceCreateArgs> = z
  .object({
    select: ServiceSelectObjectSchema.optional(),
    include: ServiceIncludeObjectSchema.optional(),
    data: z.union([
      ServiceCreateInputObjectSchema,
      ServiceUncheckedCreateInputObjectSchema,
    ]),
  })
  .strict() as unknown as z.ZodType<Prisma.ServiceCreateArgs>;

export const ServiceCreateOneZodSchema = z
  .object({
    select: ServiceSelectObjectSchema.optional(),
    include: ServiceIncludeObjectSchema.optional(),
    data: z.union([
      ServiceCreateInputObjectSchema,
      ServiceUncheckedCreateInputObjectSchema,
    ]),
  })
  .strict();
