import createIntlMiddleware from '@repo/i18n/middleware';
import { routing, authRoutes, protectedRoutes } from '@repo/i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Get all localized pathname variations for a given route
 * @param pathname - The base pathname (e.g., '/login')
 * @returns Array of all localized versions
 */
function getLocalizedPathnames(pathname: string): string[] {
  const pathnameConfig =
    routing.pathnames[pathname as keyof typeof routing.pathnames];
  if (!pathnameConfig || typeof pathnameConfig === 'string') {
    return [pathname];
  }
  return Object.values(pathnameConfig);
}

/**
 * Check if a pathname matches any of the localized versions of the given routes
 */
function matchesLocalizedRoute(pathname: string, routes: string[]): boolean {
  return routes.some((route) => {
    const localizedPaths = getLocalizedPathnames(route);
    return localizedPaths.some((localizedPath) =>
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
  const accessToken = req.cookies.get('accessToken')?.value;
  const { pathname } = req.nextUrl;

  // Extract locale and pathname without locale prefix
  const segments = pathname.split('/').filter(Boolean);
  const locale = routing.locales.includes(segments[0] as any)
    ? segments[0]
    : routing.defaultLocale;
  const pathnameWithoutLocale = '/' + segments.slice(1).join('/') || '/';

  // Redirect authenticated users away from auth pages to dashboard
  if (accessToken && matchesLocalizedRoute(pathnameWithoutLocale, authRoutes)) {
    const dashboardPath = routing.pathnames['/dashboard'];
    const localizedDashboard =
      typeof dashboardPath === 'string'
        ? dashboardPath
        : dashboardPath[locale as keyof typeof dashboardPath];
    return NextResponse.redirect(
      new URL(`/${locale}${localizedDashboard}`, req.url),
    );
  }

  // Redirect unauthenticated users from protected routes to login
  if (
    !accessToken &&
    matchesLocalizedRoute(pathnameWithoutLocale, protectedRoutes)
  ) {
    const loginPath = routing.pathnames['/login'];
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
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
