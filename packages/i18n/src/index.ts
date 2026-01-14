import { routing } from './routing';
import enMessages from './messages/en.json';
import deMessages from './messages/de.json';
import frMessages from './messages/fr.json';
import { TIMEZONES, DEFAULT_TIMEZONE } from '@repo/constants';

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
