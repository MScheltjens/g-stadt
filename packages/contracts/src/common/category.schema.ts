import { CATEGORYTYPE } from '@kwh/constants';
import { z } from 'zod';

import { LocaleSchema } from '../routing/locale.schema.js';

// Category type schema
export const CategoryTypeSchema = z.enum([
  CATEGORYTYPE.service,
  CATEGORYTYPE.contact,
]);

export type CategoryType = z.infer<typeof CategoryTypeSchema>;

//  Category query schema
export const CategoryQuerySchema = z.object({
  type: z.optional(CategoryTypeSchema),
});

export type CategoryQuery = z.infer<typeof CategoryQuerySchema>;

// Category translation schema

export const CategoryTranslationSchema = z.object({
  locale: LocaleSchema,
  label: z.string(),
  slug: z.string(),
});

export type CategoryTranslation = z.infer<typeof CategoryTranslationSchema>;

// Category schema

export const CategoryResponseSchema = z.object({
  id: z.uuid(),
  code: z.string(),
  type: CategoryTypeSchema,
  order: z.number(),
  isActive: z.literal(true),
  translations: z.array(CategoryTranslationSchema),
});

export type CategoryResponse = z.infer<typeof CategoryResponseSchema>;

// Category list schema
export const CategoryListResponseSchema = CategoryResponseSchema.array();

export type CategoryListResponse = z.infer<typeof CategoryListResponseSchema>;
