import type { Locale } from './locales';

// routing constants used across the application

export const SLUG = '[slug]';

export const ROUTES = {
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  SERVICES: '/services',
  SERVICES_SLUG: `/services/${SLUG}`,
  CONTACT: '/contact',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  NEWS: '/news',
  NEWS_SLUG: `/news/${SLUG}`,
  EVENTS: '/events',
  EVENTS_SLUG: `/events/${SLUG}`,
} as const;

export const ROUTE_PATHNAMES = {
  '/': '/',
  [ROUTES.LOGIN]: {
    en: '/login',
    de: '/anmelden',
    fr: '/connexion',
  },
  [ROUTES.REGISTER]: {
    en: '/register',
    de: '/registrieren',
    fr: '/inscription',
  },
  [ROUTES.DASHBOARD]: {
    en: '/dashboard',
    de: '/dashboard',
    fr: '/tableau-de-bord',
  },
  [ROUTES.SERVICES]: {
    en: '/services',
    de: '/dienstleistungen',
    fr: '/services',
  },
  [ROUTES.SERVICES_SLUG]: {
    en: '/services/[slug]',
    de: '/dienstleistungen/[slug]',
    fr: '/services/[slug]',
  },
  [ROUTES.CONTACT]: {
    en: '/contact',
    de: '/kontakt',
    fr: '/contact',
  },
} as const;

export const API_AUTH_PREFIX = '/api/auth';
export const AUTH_ROUTES = [ROUTES.LOGIN, ROUTES.REGISTER];
export const PROTECTED_ROUTES = [ROUTES.DASHBOARD];
export const PUBLIC_ROUTES = ['/'];
export const DEFAULT_LOGIN_REDIRECT = ROUTES.DASHBOARD;

// routing types //

// All valid route keys (for pathnames, route arrays, etc.)
export type Pathname = keyof typeof ROUTE_PATHNAMES;

// Type for arrays of route keys (e.g., AUTH_ROUTES, PROTECTED_ROUTES)
export type Pathnames = Pathname[];

//
export type LocalizedPathnames = Record<Locale, string>;
