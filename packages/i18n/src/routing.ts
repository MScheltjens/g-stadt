import { defineRouting } from 'next-intl/routing';
import { ROUTE_PATHNAMES, LOCALES, DEFAULT_LOCALE } from '@repo/constants';

export const routing = defineRouting({
  locales: Object.values(LOCALES),
  defaultLocale: DEFAULT_LOCALE,
  localeDetection: true,
  localePrefix: 'as-needed',
  pathnames: ROUTE_PATHNAMES,
});
