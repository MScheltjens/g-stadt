import { z } from 'zod';

/* =========================
   COMMON QUERY / PARAMS
   ========================= */

// Locale is extracted from the cookies (NEXT_LOCALE is set in the frontend, extracted in the backend)

export const SlugParamSchema = z.object({
  slug: z.string().min(1),
});

export type SlugParam = z.infer<typeof SlugParamSchema>;
