import { DEFAULT_LOCALE, LOCALES, ROUTE_PATHNAMES } from '@repo/constants';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: Object.values(LOCALES),
  defaultLocale: DEFAULT_LOCALE,
  localeDetection: true,
  localePrefix: 'as-needed',
  pathnames: ROUTE_PATHNAMES,
});
