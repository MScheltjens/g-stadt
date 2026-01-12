// Define supported locales as a constant array

export const LOCALES = ['en', 'fr', 'de'] as const;

export type Locale = (typeof LOCALES)[number];
