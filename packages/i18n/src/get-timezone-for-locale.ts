import { DEFAULT_TIMEZONE, TIMEZONES } from '@invicity/constants';

import { routing } from './routing';

export function getTimezoneForLocale(
  locale: (typeof routing.locales)[number],
): string {
  return TIMEZONES[locale] ?? DEFAULT_TIMEZONE;
}
