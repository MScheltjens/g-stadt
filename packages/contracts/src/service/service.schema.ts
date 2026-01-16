import { z } from 'zod';

import { RoleSchema } from '../auth/role.schema';
import { LocaleSchema } from '../routing/locale.schema';

/* =========================
   TRANSLATIONS
   ========================= */

export const ServiceTranslationSchema = z.object({
  locale: LocaleSchema,
  title: z.string(),
  description: z.string(),
  slug: z.string(),
});

export type ServiceTranslation = z.infer<typeof ServiceTranslationSchema>;

/* =========================
   SERVICE RESPONSE
   ========================= */

export const ServiceSchema = z.object({
  id: z.uuid(),
  icon: z.string(),
  externalUrl: z.string().url().nullable(),
  requiresAuth: z.boolean(),
  role: RoleSchema.nullable(),
  translations: z.array(ServiceTranslationSchema),
});

export type Service = z.infer<typeof ServiceSchema>;
