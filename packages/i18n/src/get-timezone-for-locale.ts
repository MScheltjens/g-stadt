import { DEFAULT_TIMEZONE, Locale, TIMEZONES } from '@invicity/constants';

export function getTimezoneForLocale(locale: Locale): string {
  return TIMEZONES[locale] ?? DEFAULT_TIMEZONE;
}
