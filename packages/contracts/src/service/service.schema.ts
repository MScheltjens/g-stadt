import { z } from 'zod';

import { RoleSchema } from '../auth/role.schema.js';
import { LocaleSchema } from '../routing/locale.schema.js';

//// BASE SCHEMAS ////

// Service Translation schema //

export const ServiceTranslationSchema = z.object({
  locale: LocaleSchema,
  title: z.string(),
  description: z.string(),
  slug: z.string(),
});

export type ServiceTranslation = z.infer<typeof ServiceTranslationSchema>;

// Service base schema //

export const ServiceBaseSchema = z.object({
  id: z.uuid(),
  externalUrl: z.url().nullable().optional(),
  requiresAuth: z.boolean(),
  role: RoleSchema.nullable().optional(),
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

export type ServiceListResponse = z.infer<typeof ServiceListResponseSchema>;
