import { z } from 'zod';

import {
  ServiceSchema,
  ServiceTranslationSchema,
  ServiceCategorySchema,
  ServiceCategoryTranslationSchema,
} from './generated';

/**
 * ============================
 * Service Category (API)
 * ============================
 * Minimal, navigation-safe, localized
 */
export const ServiceCategoryResponseSchema = z.object({
  // base category
  id: ServiceCategorySchema.shape.id,
  order: ServiceCategorySchema.shape.order,

  // translation
  locale: ServiceCategoryTranslationSchema.shape.locale,
  label: ServiceCategoryTranslationSchema.shape.label,
  slug: ServiceCategoryTranslationSchema.shape.slug,
});

export type ServiceCategoryResponse = z.infer<
  typeof ServiceCategoryResponseSchema
>;

/**
 * ============================
 * Service (API)
 * ============================
 * Localized service representation
 */
export const ServiceResponseSchema = z.object({
  // base service
  id: ServiceSchema.shape.id,
  categoryId: ServiceSchema.shape.categoryId,
  order: ServiceSchema.shape.order,

  // translation
  locale: ServiceTranslationSchema.shape.locale,
  title: ServiceTranslationSchema.shape.title,
  description: ServiceTranslationSchema.shape.description,
  slug: ServiceTranslationSchema.shape.slug,
});

export type ServiceResponse = z.infer<typeof ServiceResponseSchema>;

/**
 * ============================
 * Services grouped by category
 * ============================
 * Used for navigation & pages
 */
export const ServicesByCategorySchema = z.object({
  category: ServiceCategoryResponseSchema,
  services: z.array(ServiceResponseSchema),
});

export type ServicesByCategoryResponse = z.infer<
  typeof ServicesByCategorySchema
>;
