import { z } from 'zod';
import { NewsCategorySchema } from './generated';

/**
 * NewsWithTranslation API Response Schema
 */
export const NewsWithTranslationSchema = z.object({
  id: z.string(),
  category: NewsCategorySchema,
  imageUrl: z.string().nullable(),
  published: z.boolean(),
  publishedAt: z.date().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  // Required translation fields
  title: z.string(),
  slug: z.string(),
  // Optional translation fields
  content: z.string().optional(),
  excerpt: z.string().optional(),
});

export type NewsWithTranslation = z.infer<typeof NewsWithTranslationSchema>;
