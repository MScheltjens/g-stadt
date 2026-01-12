import { z } from 'zod';
import { ServiceCategorySchema } from './generated';

/**
 * ServiceWithTranslation API Response Schema
 */
export const ServiceWithTranslationSchema = z.object({
  id: z.string(),
  category: ServiceCategorySchema,
  icon: z.string(),
  order: z.number().optional(),
  requiresAuth: z.boolean().optional(),
  link: z.string().nullable().optional(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  // Required translation fields
  title: z.string(),
  slug: z.string(),
  // Optional translation fields
  description: z.string().nullable().optional(),
});

export type ServiceWithTranslation = z.infer<
  typeof ServiceWithTranslationSchema
>;
