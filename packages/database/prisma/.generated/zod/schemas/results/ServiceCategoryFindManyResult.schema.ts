import * as z from 'zod';
export const ServiceCategoryFindManyResultSchema = z.object({
  data: z.array(
    z.object({
      id: z.string(),
      code: z.string(),
      order: z.number().int(),
      isActive: z.boolean(),
      services: z.array(z.unknown()),
      translations: z.array(z.unknown()),
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
