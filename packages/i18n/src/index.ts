import { routing } from './routing';
import enMessages from './messages/en.json';
import deMessages from './messages/de.json';
import frMessages from './messages/fr.json';

export type Locale = (typeof routing.locales)[number];

export const messages = {
  en: enMessages,
  de: deMessages,
  fr: frMessages,
} as const;

// Timezone configuration
export const timezones = {
  en: 'America/New_York',
  de: 'Europe/Berlin',
  fr: 'Europe/Paris',
} as const;

// Default global timezone
export const DEFAULT_TIMEZONE = 'Europe/Berlin';

export const getTimezoneForLocale = (locale: Locale): string => {
  return timezones[locale] || DEFAULT_TIMEZONE;
};

export * from 'next-intl';
