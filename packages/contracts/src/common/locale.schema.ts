import { SUPPORTED_LOCALES } from '@kwh/constants';
import { z } from 'zod';

export const LocaleSchema = z.enum(SUPPORTED_LOCALES); // Add other supported locales as needed

export type Locale = z.infer<typeof LocaleSchema>;
