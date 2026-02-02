import { CATEGORYTYPE } from '@kwh/constants';
import { z } from 'zod';

import { LocaleSchema } from '../routing/locale.schema.js';
import { ServiceListResponseSchema } from '../service/service.schema.js';

//// CATEGORY SCHEMAS ////

// Category type schema //

export const CategoryTypeSchema = z.enum([
  CATEGORYTYPE.service,
  CATEGORYTYPE.contact,
]);

export type CategoryType = z.infer<typeof CategoryTypeSchema>;

// Category translation schema //

export const CategoryTranslationSchema = z.object({
  locale: LocaleSchema,
  label: z.string(),
  slug: z.string(),
});

export type CategoryTranslation = z.infer<typeof CategoryTranslationSchema>;

// Category base schema //

export const CategoryBaseSchema = z.object({
  id: z.uuid(),
  code: z.string(),
  type: CategoryTypeSchema,
  order: z.number(),
  isActive: z.boolean(),
});

export type CategoryBase = z.infer<typeof CategoryBaseSchema>;

// Category with translations key schema //

export const CategoryWithTranslationsSchema = CategoryBaseSchema.extend({
  translations: z.array(CategoryTranslationSchema),
});

export type CategoryWithTranslations = z.infer<
  typeof CategoryWithTranslationsSchema
>;

//// RESPONSE SCHEMAS ////

// Category response schema with flattened translations //

export const CategoryResponseSchema = CategoryBaseSchema.extend({
  ...CategoryTranslationSchema.shape,
});

export type CategoryResponse = z.infer<typeof CategoryResponseSchema>;

// Category list response schema //

export const CategoryListResponseSchema = CategoryResponseSchema.array();

export type CategoryListResponse = z.infer<typeof CategoryListResponseSchema>;

// Category with services response schema //

export const CategoryWithServicesResponseSchema = CategoryResponseSchema.extend(
  {
    services: ServiceListResponseSchema, // Placeholder, replace with actual ServiceResponseSchema when needed
  },
);

export type CategoryWithServicesResponse = z.infer<
  typeof CategoryWithServicesResponseSchema
>;

// Category with services list response schema //

export const CategoryWithServicesListResponseSchema =
  CategoryWithServicesResponseSchema.array();

export type CategoryWithServicesListResponse = z.infer<
  typeof CategoryWithServicesListResponseSchema
>;

//// QUERY SCHEMAS ////

//  Category query schema
export const CategoryQuerySchema = z.object({
  type: z.optional(CategoryTypeSchema),
});

export type CategoryQuery = z.infer<typeof CategoryQuerySchema>;
