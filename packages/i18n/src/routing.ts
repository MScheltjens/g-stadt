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
    '/news': {
      en: '/news',
      de: '/nachrichten',
      fr: '/actualites',
    },
    '/news/[slug]': {
      en: '/news/[slug]',
      de: '/nachrichten/[slug]',
      fr: '/actualites/[slug]',
    },
    '/events': {
      en: '/events',
      de: '/veranstaltungen',
      fr: '/evenements',
    },
    '/events/[slug]': {
      en: '/events/[slug]',
      de: '/veranstaltungen/[slug]',
      fr: '/evenements/[slug]',
    },
    '/services': {
      en: '/services',
      de: '/dienstleistungen',
      fr: '/services',
    },
    '/services/[slug]': {
      en: '/services/[slug]',
      de: '/dienstleistungen/[slug]',
      fr: '/services/[slug]',
    },
    '/contact': {
      en: '/contact',
      de: '/kontakt',
      fr: '/contact',
    },
  },
});

export type Pathname = keyof typeof routing.pathnames;

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
