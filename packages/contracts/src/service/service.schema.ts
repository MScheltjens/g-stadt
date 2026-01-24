import { z } from 'zod';

import { RoleSchema } from '../auth/role.schema.js';
import { LocaleSchema } from '../routing/locale.schema.js';

/* =========================
   TRANSLATIONS
   ========================= */

// Service Translation schema

export const ServiceTranslationSchema = z.object({
  locale: LocaleSchema,
  title: z.string(),
  description: z.string(),
  slug: z.string(),
});

export type ServiceTranslation = z.infer<typeof ServiceTranslationSchema>;

// Service Category Translation schema

export const ServiceCategoryTranslationSchema = z.object({
  locale: LocaleSchema,
  label: z.string(),
  slug: z.string(),
});

export type ServiceCategoryTranslation = z.infer<
  typeof ServiceCategoryTranslationSchema
>;

/* =========================
    MAIN SCHEMAS
    ========================= */

// Service schema

export const ServiceSchema = z.object({
  id: z.uuid(),
  icon: z.string(),
  externalUrl: z.url().nullable(),
  requiresAuth: z.boolean(),
  role: RoleSchema.nullable(),
  translations: z.array(ServiceTranslationSchema),
});

export type Service = z.infer<typeof ServiceSchema>;

// One category with its services

export const ServiceCategoryResponseSchema = z.object({
  id: z.uuid(),
  code: z.string(),
  order: z.number(),
  isActive: z.boolean(),
  translations: z.array(ServiceCategoryTranslationSchema),
  services: z.array(ServiceSchema),
});

export type ServiceCategoryResponse = z.infer<
  typeof ServiceCategoryResponseSchema
>;

// All categories with their services (factory to avoid circular dependency)
import { CategoryResponseSchema } from '../common/category.schema.js';
export const ServicesByCategoryResponseSchema = z.array(
  CategoryResponseSchema.extend({
    type: z.literal('SERVICE'),
    services: z.array(ServiceSchema),
  }),
);

export type ServicesByCategoryResponse = z.infer<
  typeof ServicesByCategoryResponseSchema
>;

// Categories only
export const ServiceCategoriesResponseSchema = z.array(
  z.object({
    id: z.uuid(),
    code: z.string(),
    order: z.number(),
    isActive: z.boolean(),
    translations: z.array(ServiceCategoryTranslationSchema),
  }),
);

export type ServiceCategoriesResponse = z.infer<
  typeof ServiceCategoriesResponseSchema
>;

export const ServiceListResponseSchema = z.object({
  services: z.array(ServiceSchema),
  total: z.number(),
});

export type ServiceListResponse = z.infer<typeof ServiceListResponseSchema>;

// Query parameters for services listing in api
export const ServicesQuerySchema = z.object({
  page: z.number().int().min(1).default(1),
  pagesize: z.number().int().min(1).max(50).default(10),
  query: z.string().optional().default(''),
});

export type ServicesQuery = z.infer<typeof ServicesQuerySchema>;
