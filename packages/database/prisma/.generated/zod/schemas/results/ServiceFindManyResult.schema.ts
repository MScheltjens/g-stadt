import * as z from 'zod';
export const ServiceFindManyResultSchema = z.object({
  data: z.array(
    z.object({
      id: z.string(),
      categoryId: z.string(),
      category: z.unknown(),
      icon: z.string(),
      externalUrl: z.string().optional(),
      order: z.number().int(),
      isActive: z.boolean(),
      requiresAuth: z.boolean(),
      role: z.unknown().optional(),
      translations: z.array(z.unknown()),
      createdAt: z.date(),
      updatedAt: z.date(),
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
