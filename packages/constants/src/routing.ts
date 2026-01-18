import type { Locale } from './locales.js';

// routing constants used across the application

export const ITEM = '[itemSlug]';
export const CATEGORY = '[categorySlug]';

export const ROUTES = {
  HOME: '/',
  SIGNIN: '/sign-in',
  SIGNOUT: '/sign-out',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  SERVICES: '/services',
  SERVICES_CATEGORY: `/services/${CATEGORY}`,
  SERVICES_ITEM: `/services/${CATEGORY}/${ITEM}`,
  CONTACT: '/contact',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  NEWS: '/news',
  NEWS_CATEGORY: `/news/${CATEGORY}`,
  NEWS_ITEM: `/news/${CATEGORY}/${ITEM}`,
  EVENTS: '/events',
  EVENTS_CATEGORY: `/events/${CATEGORY}`,
  EVENTS_ITEM: `/events/${CATEGORY}/${ITEM}`,
} as const;

export const ROUTE_PATHNAMES = {
  [ROUTES.HOME]: '/',
  [ROUTES.SIGNIN]: {
    en: '/sign-in',
    de: '/anmelden',
    fr: '/connexion',
  },
  [ROUTES.SIGNOUT]: {
    en: '/sign-out',
    de: '/abmelden',
    fr: '/deconnexion',
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
  [ROUTES.SERVICES_CATEGORY]: {
    en: '/services/[categorySlug]',
    de: '/dienstleistungen/[categorySlug]',
    fr: '/services/[categorySlug]',
  },
  [ROUTES.CONTACT]: {
    en: '/contact',
    de: '/kontakt',
    fr: '/contact',
  },
  [ROUTES.SERVICES_ITEM]: {
    en: '/services/[categorySlug]/[itemSlug]',
    de: '/dienstleistungen/[categorySlug]/[itemSlug]',
    fr: '/services/[categorySlug]/[itemSlug]',
  },
  [ROUTES.NEWS]: {
    en: '/news',
    de: '/nachrichten',
    fr: '/actualites',
  },
  [ROUTES.NEWS_CATEGORY]: {
    en: '/news/[categorySlug]',
    de: '/nachrichten/[categorySlug]',
    fr: '/actualites/[categorySlug]',
  },
  [ROUTES.NEWS_ITEM]: {
    en: '/news/[categorySlug]/[itemSlug]',
    de: '/nachrichten/[categorySlug]/[itemSlug]',
    fr: '/actualites/[categorySlug]/[itemSlug]',
  },
  [ROUTES.EVENTS]: {
    en: '/events',
    de: '/veranstaltungen',
    fr: '/evenements',
  },
  [ROUTES.EVENTS_CATEGORY]: {
    en: '/events/[categorySlug]',
    de: '/veranstaltungen/[categorySlug]',
    fr: '/evenements/[categorySlug]',
  },
  [ROUTES.EVENTS_ITEM]: {
    en: '/events/[categorySlug]/[itemSlug]',
    de: '/veranstaltungen/[categorySlug]/[itemSlug]',
    fr: '/evenements/[categorySlug]/[itemSlug]',
  },
} as const;

export const API_AUTH_PREFIX = '/api/auth';

export const CATEGORY_SLUG_ROUTES = [
  ROUTES.SERVICES_CATEGORY,
  ROUTES.NEWS_CATEGORY,
  ROUTES.EVENTS_CATEGORY,
];

export const ITEM_SLUG_ROUTES = [
  ROUTES.SERVICES_ITEM,
  ROUTES.NEWS_ITEM,
  ROUTES.EVENTS_ITEM,
];

export const PUBLIC_ROUTES = [
  ROUTES.HOME,
  ROUTES.CONTACT,
  ROUTES.SERVICES,
  ROUTES.NEWS,
  ROUTES.EVENTS,
  ...CATEGORY_SLUG_ROUTES,
  ...ITEM_SLUG_ROUTES,
];
export const PROTECTED_ROUTES = [ROUTES.DASHBOARD];
export const AUTH_ROUTES = [ROUTES.SIGNIN, ROUTES.SIGNOUT, ROUTES.REGISTER];
export const DEFAULT_LOGIN_REDIRECT = ROUTES.DASHBOARD;
export const TOP_NAV_ROUTES = [ROUTES.HOME, ROUTES.SERVICES, ROUTES.CONTACT];

// All valid route keys (for pathnames, route arrays, etc.)
export type Pathname = keyof typeof ROUTE_PATHNAMES;

// Type for arrays of route keys (e.g., AUTH_ROUTES, PROTECTED_ROUTES)
export type Pathnames = Pathname[];

//
export type LocalizedPathnames = Record<Locale, string>;
