import createIntlMiddleware from '@repo/i18n/middleware';
import { routing } from '@repo/i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

export function proxy(req: NextRequest) {
  return createIntlMiddleware({ ...routing })(req);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
