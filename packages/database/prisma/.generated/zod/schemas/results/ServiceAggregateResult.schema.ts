import * as z from 'zod';
export const ServiceAggregateResultSchema = z.object({
  _count: z
    .object({
      id: z.number(),
      categoryId: z.number(),
      category: z.number(),
      icon: z.number(),
      externalUrl: z.number(),
      order: z.number(),
      isActive: z.number(),
      requiresAuth: z.number(),
      role: z.number(),
      translations: z.number(),
      createdAt: z.number(),
      updatedAt: z.number(),
    })
    .optional(),
  _sum: z
    .object({
      order: z.number().nullable(),
    })
    .nullable()
    .optional(),
  _avg: z
    .object({
      order: z.number().nullable(),
    })
    .nullable()
    .optional(),
  _min: z
    .object({
      id: z.string().nullable(),
      categoryId: z.string().nullable(),
      icon: z.string().nullable(),
      externalUrl: z.string().nullable(),
      order: z.number().int().nullable(),
      createdAt: z.date().nullable(),
      updatedAt: z.date().nullable(),
    })
    .nullable()
    .optional(),
  _max: z
    .object({
      id: z.string().nullable(),
      categoryId: z.string().nullable(),
      icon: z.string().nullable(),
      externalUrl: z.string().nullable(),
      order: z.number().int().nullable(),
      createdAt: z.date().nullable(),
      updatedAt: z.date().nullable(),
    })
    .nullable()
    .optional(),
});
