import {
  AUTH_ROUTES,
  COOKIE_NAMES,
  Locale,
  LocalizedPathnames,
  Pathname,
  Pathnames,
  PROTECTED_ROUTES,
  ROUTES,
} from '@invicity/constants';
import { routing } from '@invicity/i18n';
import createIntlMiddleware from '@invicity/i18n/middleware';
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
 * Attach NEXT_LOCALE cookie to a response
 */
function withLocaleCookie(
  response: NextResponse,
  locale: Locale,
): NextResponse {
  response.cookies.set('NEXT_LOCALE', locale, {
    path: '/',
    httpOnly: false, // required so Next.js i18n can read it
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });

  return response;
}

/**
 * Main proxy middleware that handles both internationalization and authentication
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

    const res = NextResponse.redirect(
      new URL(`/${locale}${localizedDashboardPath}`, req.url),
    );

    return withLocaleCookie(res, locale as Locale);
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

    const res = NextResponse.redirect(
      new URL(`/${locale}${localizedLogin}`, req.url),
    );

    return withLocaleCookie(res, locale as Locale);
  }

  // Continue with internationalization middleware
  const intlResponse = createIntlMiddleware({ ...routing })(req);
  return withLocaleCookie(intlResponse, locale as Locale);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};
