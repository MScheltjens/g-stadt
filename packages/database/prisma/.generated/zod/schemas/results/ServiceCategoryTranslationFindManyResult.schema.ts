import * as z from 'zod';
export const ServiceCategoryTranslationFindManyResultSchema = z.object({
  data: z.array(
    z.object({
      id: z.string(),
      categoryId: z.string(),
      locale: z.unknown(),
      label: z.string(),
      slug: z.string(),
      category: z.unknown(),
    }),
  ),
  pagination: z.object({
    page: z.number().int().min(1),
    pageSize: z.number().int().min(1),
    total: z.number().int().min(0),
    totalPages: z.number().int().min(0),
    hasNext: z.boolean(),
    hasPrev: z.boolean(),
  }),
});
