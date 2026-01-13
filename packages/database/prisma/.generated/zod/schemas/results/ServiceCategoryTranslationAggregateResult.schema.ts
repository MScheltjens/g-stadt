import * as z from 'zod';
export const ServiceCategoryTranslationAggregateResultSchema = z.object({
  _count: z
    .object({
      id: z.number(),
      categoryId: z.number(),
      locale: z.number(),
      label: z.number(),
      slug: z.number(),
      category: z.number(),
    })
    .optional(),
  _min: z
    .object({
      id: z.string().nullable(),
      categoryId: z.string().nullable(),
      label: z.string().nullable(),
      slug: z.string().nullable(),
    })
    .nullable()
    .optional(),
  _max: z
    .object({
      id: z.string().nullable(),
      categoryId: z.string().nullable(),
      label: z.string().nullable(),
      slug: z.string().nullable(),
    })
    .nullable()
    .optional(),
});
