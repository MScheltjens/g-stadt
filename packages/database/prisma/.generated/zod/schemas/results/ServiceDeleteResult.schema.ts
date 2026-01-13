import * as z from 'zod';
export const ServiceDeleteResultSchema = z.nullable(
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
);
