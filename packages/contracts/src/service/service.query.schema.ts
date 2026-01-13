import { z } from 'zod';
import { LocaleSchema } from '../i18n/locale.schema.js';

/* =========================
   QUERY
   ========================= */

export const ServiceListQuerySchema = z.object({
  locale: LocaleSchema.default('en'),
});

export type ServiceListQuery = z.infer<typeof ServiceListQuerySchema>;
