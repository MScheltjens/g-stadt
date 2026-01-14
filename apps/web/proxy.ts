import createIntlMiddleware from '@repo/i18n/middleware';
import { routing } from '@repo/i18n/routing';
import {
  AUTH_ROUTES,
  PROTECTED_ROUTES,
  Pathname,
  Pathnames,
  LocalizedPathnames,
} from '@repo/constants';
import { ROUTES } from '@repo/constants';
import { COOKIE_NAMES } from '@repo/constants';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Get all localized pathname variations for a given route
 * @param pathname - The base pathname (e.g., '/login')
 * @returns Array of all localized versions
 */
function getLocalizedPathnames(
  pathname: Pathname,
): LocalizedPathnames | string {
  const pathnameConfig =
    routing.pathnames[pathname as keyof typeof routing.pathnames];
  if (!pathnameConfig || typeof pathnameConfig === 'string') {
    return pathname;
  }
  return pathnameConfig as LocalizedPathnames;
}

/**
 * Check if a pathname matches any of the localized versions of the given routes
 */
function matchesLocalizedRoute(pathname: string, routes: Pathnames): boolean {
  return routes.some((route) => {
    const localized = getLocalizedPathnames(route);
    if (typeof localized === 'string') {
      return pathname.startsWith(localized);
    }
    return Object.values(localized).some((localizedPath) =>
      pathname.startsWith(localizedPath),
    );
  });
}

/**
 * Main proxy middleware that handles both internationalization and authentication
 *
 * This middleware chains together:
 * 1. Authentication checks (redirect if needed)
 * 2. Internationalization routing
 */
export function proxy(req: NextRequest) {
  const accessToken = req.cookies.get(COOKIE_NAMES.ACCESS_TOKEN)?.value;
  const { pathname } = req.nextUrl;

  // Extract locale and pathname without locale prefix
  const segments = pathname.split('/').filter(Boolean);
  const locale = routing.locales.includes(
    segments[0] as (typeof routing.locales)[number],
  )
    ? segments[0]
    : routing.defaultLocale;
  const pathnameWithoutLocale = '/' + segments.slice(1).join('/') || '/';

  // Redirect authenticated users away from auth pages to dashboard
  if (
    accessToken &&
    (AUTH_ROUTES as string[]).includes(pathnameWithoutLocale) &&
    matchesLocalizedRoute(pathnameWithoutLocale, AUTH_ROUTES)
  ) {
    const dashboardPath = routing.pathnames[ROUTES.DASHBOARD];
    const localizedDashboardPath =
      typeof dashboardPath === 'string'
        ? dashboardPath
        : dashboardPath[locale as keyof typeof dashboardPath];

    return NextResponse.redirect(
      new URL(`/${locale}${localizedDashboardPath}`, req.url),
    );
  }

  // Redirect unauthenticated users from protected routes to login
  if (
    !accessToken &&
    matchesLocalizedRoute(pathnameWithoutLocale, PROTECTED_ROUTES)
  ) {
    const loginPath = routing.pathnames[ROUTES.SIGNIN];
    const localizedLogin =
      typeof loginPath === 'string'
        ? loginPath
        : loginPath[locale as keyof typeof loginPath];
    return NextResponse.redirect(
      new URL(`/${locale}${localizedLogin}`, req.url),
    );
  }

  // Continue with internationalization middleware
  return createIntlMiddleware({ ...routing })(req);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};
