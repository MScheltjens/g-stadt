import { DEFAULT_TIMEZONE, TIMEZONES } from '@invicity/constants';

import deMessages from './messages/de.json';
import enMessages from './messages/en.json';
import frMessages from './messages/fr.json';
import { routing } from './routing';

export const messages = {
  en: enMessages,
  de: deMessages,
  fr: frMessages,
} as const;

export function getTimezoneForLocale(
  locale: (typeof routing.locales)[number],
): string {
  return TIMEZONES[locale] ?? DEFAULT_TIMEZONE;
}
