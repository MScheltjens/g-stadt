import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryTranslationScalarWhereInputObjectSchema as ServiceCategoryTranslationScalarWhereInputObjectSchema } from './ServiceCategoryTranslationScalarWhereInput.schema';
import { ServiceCategoryTranslationUpdateManyMutationInputObjectSchema as ServiceCategoryTranslationUpdateManyMutationInputObjectSchema } from './ServiceCategoryTranslationUpdateManyMutationInput.schema';
import { ServiceCategoryTranslationUncheckedUpdateManyWithoutCategoryInputObjectSchema as ServiceCategoryTranslationUncheckedUpdateManyWithoutCategoryInputObjectSchema } from './ServiceCategoryTranslationUncheckedUpdateManyWithoutCategoryInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(
        () => ServiceCategoryTranslationScalarWhereInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () => ServiceCategoryTranslationUpdateManyMutationInputObjectSchema,
        ),
        z.lazy(
          () =>
            ServiceCategoryTranslationUncheckedUpdateManyWithoutCategoryInputObjectSchema,
        ),
      ]),
    })
    .strict();
export const ServiceCategoryTranslationUpdateManyWithWhereWithoutCategoryInputObjectSchema: z.ZodType<Prisma.ServiceCategoryTranslationUpdateManyWithWhereWithoutCategoryInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryTranslationUpdateManyWithWhereWithoutCategoryInput>;
export const ServiceCategoryTranslationUpdateManyWithWhereWithoutCategoryInputObjectZodSchema =
  makeSchema();
