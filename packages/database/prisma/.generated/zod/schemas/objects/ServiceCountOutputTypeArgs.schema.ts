import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCountOutputTypeSelectObjectSchema as ServiceCountOutputTypeSelectObjectSchema } from './ServiceCountOutputTypeSelect.schema';

const makeSchema = () =>
  z
    .object({
      select: z.lazy(() => ServiceCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict();
export const ServiceCountOutputTypeArgsObjectSchema = makeSchema();
export const ServiceCountOutputTypeArgsObjectZodSchema = makeSchema();
