import type { Locale } from './locales';

// routing constants used across the application

export const ITEM_SLUG = '[item-slug]';
export const CATEGORY_SLUG = '[category-slug]';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  SERVICES: '/services',
  SERVICES_CATEGORY_SLUG: `/services/${CATEGORY_SLUG}`,
  SERVICES_ITEM_SLUG: `/services/${CATEGORY_SLUG}/${ITEM_SLUG}`,
  CONTACT: '/contact',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  NEWS: '/news',
  NEWS_CATEGORY_SLUG: `/news/${CATEGORY_SLUG}`,
  NEWS_ITEM_SLUG: `/news/${CATEGORY_SLUG}/${ITEM_SLUG}`,
  EVENTS: '/events',
  EVENTS_CATEGORY_SLUG: `/events/${CATEGORY_SLUG}`,
  EVENTS_ITEM_SLUG: `/events/${CATEGORY_SLUG}/${ITEM_SLUG}`,
} as const;

export const ROUTE_PATHNAMES = {
  [ROUTES.HOME]: '/',
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
  [ROUTES.SERVICES_CATEGORY_SLUG]: {
    en: '/services/[category-slug]',
    de: '/dienstleistungen/[category-slug]',
    fr: '/services/[category-slug]',
  },
  [ROUTES.CONTACT]: {
    en: '/contact',
    de: '/kontakt',
    fr: '/contact',
  },
  [ROUTES.SERVICES_ITEM_SLUG]: {
    en: '/services/[category-slug]/[item-slug]',
    de: '/dienstleistungen/[category-slug]/[item-slug]',
    fr: '/services/[category-slug]/[item-slug]',
  },
  [ROUTES.NEWS]: {
    en: '/news',
    de: '/nachrichten',
    fr: '/actualites',
  },
  [ROUTES.NEWS_CATEGORY_SLUG]: {
    en: '/news/[category-slug]',
    de: '/nachrichten/[category-slug]',
    fr: '/actualites/[category-slug]',
  },
  [ROUTES.NEWS_ITEM_SLUG]: {
    en: '/news/[category-slug]/[item-slug]',
    de: '/nachrichten/[category-slug]/[item-slug]',
    fr: '/actualites/[category-slug]/[item-slug]',
  },
  [ROUTES.EVENTS]: {
    en: '/events',
    de: '/veranstaltungen',
    fr: '/evenements',
  },
  [ROUTES.EVENTS_CATEGORY_SLUG]: {
    en: '/events/[category-slug]',
    de: '/veranstaltungen/[category-slug]',
    fr: '/evenements/[category-slug]',
  },
  [ROUTES.EVENTS_ITEM_SLUG]: {
    en: '/events/[category-slug]/[item-slug]',
    de: '/veranstaltungen/[category-slug]/[item-slug]',
    fr: '/evenements/[category-slug]/[item-slug]',
  },
} as const;

export const API_AUTH_PREFIX = '/api/auth';

export const CATEGORY_SLUG_ROUTES = [
  ROUTES.SERVICES_CATEGORY_SLUG,
  ROUTES.NEWS_CATEGORY_SLUG,
  ROUTES.EVENTS_CATEGORY_SLUG,
];

export const ITEM_SLUG_ROUTES = [
  ROUTES.SERVICES_ITEM_SLUG,
  ROUTES.NEWS_ITEM_SLUG,
  ROUTES.EVENTS_ITEM_SLUG,
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
export const PROTECTED_ROUTES = [ROUTES.DASHBOARD] as const;
export const AUTH_ROUTES = [ROUTES.LOGIN, ROUTES.REGISTER] as const;
export const DEFAULT_LOGIN_REDIRECT = ROUTES.DASHBOARD;
export const TOP_NAV_ROUTES = [
  ROUTES.HOME,
  ROUTES.SERVICES,
  ROUTES.CONTACT,
] as const;

export const NAV_ROUTES = [
  {
    label: 'services',
    href: ROUTES.SERVICES,
    icon: 'ExclamationCircle',
  },
  { label: 'contact', href: ROUTES.CONTACT, icon: 'Mail' },
] as const;

// routing types //

// All valid route keys (for pathnames, route arrays, etc.)
export type Pathname = keyof typeof ROUTE_PATHNAMES;

// Type for arrays of route keys (e.g., AUTH_ROUTES, PROTECTED_ROUTES)
export type Pathnames = Pathname[];

//
export type LocalizedPathnames = Record<Locale, string>;
