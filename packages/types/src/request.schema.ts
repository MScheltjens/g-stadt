import { z } from 'zod';
import { LocaleSchema } from './generated';

export const LocaleQuerySchema = z.object({
  locale: LocaleSchema.default('en'),
});

export const SlugParamSchema = z.object({
  slug: z.string().min(1),
});
