import { z } from 'zod';

import { LocaleSchema } from '../common/locale.schema.js';

// Service Translation schema //

export const ServiceTranslationSchema = z.object({
  locale: LocaleSchema,
  title: z.string(),
  description: z.string(),
  slug: z.string(), // legacy combined slug
  categorySlug: z.string(),
  serviceSlug: z.string(),
});

export type ServiceTranslation = z.infer<typeof ServiceTranslationSchema>;

export const ServiceBaseSchema = z.object({
  id: z.uuid(),
  categoryId: z.uuid(),
  externalUrl: z.string().nullable().optional(),
  order: z.number(),
  isActive: z.boolean(),
  requiresAuth: z.boolean().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export type ServiceBase = z.infer<typeof ServiceBaseSchema>;
// Service with translations key schema //

export const ServiceWithTranslationsSchema = ServiceBaseSchema.extend({
  translations: z.array(ServiceTranslationSchema),
});

export type ServiceWithTranslations = z.infer<
  typeof ServiceWithTranslationsSchema
>;

// Service list response schema with flattened translations //

export const ServiceListResponseSchema = z.array(
  ServiceBaseSchema.extend({
    ...ServiceTranslationSchema.shape,
  }),
);

export const ServiceListPaginatedResponseSchema = z.object({
  items: ServiceListResponseSchema,
  total: z.number().int().nonnegative(),
  page: z.number().int().min(1),
  limit: z.number().int().min(1),
});

export type ServiceListPaginatedResponse = z.infer<
  typeof ServiceListPaginatedResponseSchema
>;
