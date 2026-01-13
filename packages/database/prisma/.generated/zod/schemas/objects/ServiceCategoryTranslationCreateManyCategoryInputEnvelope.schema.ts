import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryTranslationCreateManyCategoryInputObjectSchema as ServiceCategoryTranslationCreateManyCategoryInputObjectSchema } from './ServiceCategoryTranslationCreateManyCategoryInput.schema';

const makeSchema = () =>
  z
    .object({
      data: z.union([
        z.lazy(
          () => ServiceCategoryTranslationCreateManyCategoryInputObjectSchema,
        ),
        z
          .lazy(
            () => ServiceCategoryTranslationCreateManyCategoryInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();
export const ServiceCategoryTranslationCreateManyCategoryInputEnvelopeObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationCreateManyCategoryInputEnvelope> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationCreateManyCategoryInputEnvelope>;
export const ServiceCategoryTranslationCreateManyCategoryInputEnvelopeObjectZodSchema =
  makeSchema();
