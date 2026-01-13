import * as z from 'zod';
export const ServiceTranslationFindManyResultSchema = z.object({
  data: z.array(
    z.object({
      id: z.string(),
      serviceId: z.string(),
      locale: z.unknown(),
      title: z.string(),
      description: z.string(),
      slug: z.string(),
      service: z.unknown(),
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
