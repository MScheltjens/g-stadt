import { z } from 'zod';
import { ServiceCategorySchema } from './generated';

/**
 * ServiceWithTranslation API Response Schema
 */
export const ServiceWithTranslationSchema = z.object({
  id: z.string(),
  category: ServiceCategorySchema,
  icon: z.string(),
  link: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  // Required translation fields
  title: z.string(),
  slug: z.string(),
  // Optional translation fields
  description: z.string().optional(),
});

export type ServiceWithTranslation = z.infer<
  typeof ServiceWithTranslationSchema
>;
