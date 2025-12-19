import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'de', 'fr'],

  // Used when no locale matches
  defaultLocale: 'de',
  localeDetection: true,

  // Pathnames with translations
  pathnames: {
    '/': '/',
  },
});

export const apiAuthPrefix = '/api/auth';
// export const authRoutes = [
//   '/auth/login',
//   '/auth/register',
//   '/auth/forgot-password',
//   '/auth/reset-password',
// ];

export const publicRoutes = ['/'];

// export const DEFAULT_LOGIN_REDIRECT = '/';
