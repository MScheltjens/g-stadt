import { routing } from './routing';

import enMessages from './messages/en.json';
import deMessages from './messages/de.json';
import frMessages from './messages/fr.json';

export const messages = {
  en: enMessages,
  de: deMessages,
  fr: frMessages,
} as const;

export const timezones = {
  en: 'America/New_York',
  de: 'Europe/Berlin',
  fr: 'Europe/Paris',
} as const;

export const DEFAULT_TIMEZONE = 'Europe/Berlin';

export function getTimezoneForLocale(
  locale: (typeof routing.locales)[number],
): string {
  return timezones[locale] ?? DEFAULT_TIMEZONE;
}
