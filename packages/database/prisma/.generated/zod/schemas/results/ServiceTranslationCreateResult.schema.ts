import * as z from 'zod';
export const ServiceTranslationCreateResultSchema = z.object({
  id: z.string(),
  serviceId: z.string(),
  locale: z.unknown(),
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  service: z.unknown(),
});
