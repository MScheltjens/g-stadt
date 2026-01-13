import { z } from 'zod';

export const LocaleSchema = z.enum(['en', 'fr', 'de']);
export type Locale = z.infer<typeof LocaleSchema>;
