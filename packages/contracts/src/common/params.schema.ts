import { z } from 'zod';
import { LocaleSchema } from '../i18n/locale.schema.js';

/* =========================
   COMMON QUERY / PARAMS
   ========================= */

export const LocaleQuerySchema = z.object({
  locale: LocaleSchema.default('en'),
});

export type LocaleQuery = z.infer<typeof LocaleQuerySchema>;

export const SlugParamSchema = z.object({
  slug: z.string().min(1),
});

export type SlugParam = z.infer<typeof SlugParamSchema>;
