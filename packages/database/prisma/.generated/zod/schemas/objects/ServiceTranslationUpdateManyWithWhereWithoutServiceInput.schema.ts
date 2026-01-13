import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceTranslationScalarWhereInputObjectSchema as ServiceTranslationScalarWhereInputObjectSchema } from './ServiceTranslationScalarWhereInput.schema';
import { ServiceTranslationUpdateManyMutationInputObjectSchema as ServiceTranslationUpdateManyMutationInputObjectSchema } from './ServiceTranslationUpdateManyMutationInput.schema';
import { ServiceTranslationUncheckedUpdateManyWithoutServiceInputObjectSchema as ServiceTranslationUncheckedUpdateManyWithoutServiceInputObjectSchema } from './ServiceTranslationUncheckedUpdateManyWithoutServiceInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => ServiceTranslationScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ServiceTranslationUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ServiceTranslationUncheckedUpdateManyWithoutServiceInputObjectSchema,
        ),
      ]),
    })
    .strict();
export const ServiceTranslationUpdateManyWithWhereWithoutServiceInputObjectSchema: z.ZodType<Prisma.ServiceTranslationUpdateManyWithWhereWithoutServiceInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceTranslationUpdateManyWithWhereWithoutServiceInput>;
export const ServiceTranslationUpdateManyWithWhereWithoutServiceInputObjectZodSchema =
  makeSchema();
