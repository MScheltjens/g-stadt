import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateManyCategoryInputObjectSchema as ServiceCreateManyCategoryInputObjectSchema } from './ServiceCreateManyCategoryInput.schema';

const makeSchema = () =>
  z
    .object({
      data: z.union([
        z.lazy(() => ServiceCreateManyCategoryInputObjectSchema),
        z.lazy(() => ServiceCreateManyCategoryInputObjectSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();
export const ServiceCreateManyCategoryInputEnvelopeObjectSchema: z.ZodType<Prisma.ServiceCreateManyCategoryInputEnvelope> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateManyCategoryInputEnvelope>;
export const ServiceCreateManyCategoryInputEnvelopeObjectZodSchema =
  makeSchema();
