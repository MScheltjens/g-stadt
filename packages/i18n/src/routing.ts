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
    '/login': {
      en: '/login',
      de: '/anmelden',
      fr: '/connexion',
    },
    '/register': {
      en: '/register',
      de: '/registrieren',
      fr: '/inscription',
    },
    '/dashboard': {
      en: '/dashboard',
      de: '/dashboard',
      fr: '/tableau-de-bord',
    },
    '/profile': {
      en: '/profile',
      de: '/profil',
      fr: '/profil',
    },
    '/settings': {
      en: '/settings',
      de: '/einstellungen',
      fr: '/parametres',
    },
  },
});

export const apiAuthPrefix = '/api/auth';

/**
 * Authentication routes (requires NOT being authenticated)
 * These are the English pathnames - use with routing.pathnames for localized versions
 */
export const authRoutes = ['/login', '/register'];

/**
 * Protected routes (requires authentication)
 * These are the English pathnames - use with routing.pathnames for localized versions
 */
export const protectedRoutes = ['/dashboard', '/profile', '/settings'];

/**
 * Public routes (no authentication required)
 */
export const publicRoutes = ['/'];

/**
 * Default redirect after login
 */
export const DEFAULT_LOGIN_REDIRECT = '/dashboard';
