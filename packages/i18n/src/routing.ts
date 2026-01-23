import {
  DEFAULT_LOCALE,
  ROUTE_PATHNAMES,
  SUPPORTED_LOCALES,
} from '@invicity/constants';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: SUPPORTED_LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localeDetection: true,
  localePrefix: 'as-needed',
  pathnames: ROUTE_PATHNAMES,
});
