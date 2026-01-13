export const LOCALES = {
  en: 'en',
  de: 'de',
  fr: 'fr',
} as const;

export type Locale = (typeof LOCALES)[keyof typeof LOCALES];

export const DEFAULT_LOCALE: Locale = 'en';
