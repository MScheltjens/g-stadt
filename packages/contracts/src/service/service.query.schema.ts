import { z } from 'zod';

import { LocaleSchema } from '../routing/locale.schema';

/* =========================
   QUERY
   ========================= */

export const ServiceListQuerySchema = z.object({
  locale: LocaleSchema.default('en'),
});

export type ServiceListQuery = z.infer<typeof ServiceListQuerySchema>;
