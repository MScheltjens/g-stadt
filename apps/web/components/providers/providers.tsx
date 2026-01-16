'use client';

import { Locale } from '@repo/constants';
import { JwtPayload } from '@repo/contracts';
import { messages } from '@repo/i18n';
import { NextIntlClientProvider } from '@repo/i18n/next-intl';

import { AuthProvider } from './auth-provider';

export function Providers({
  children,
  locale,
  initialUser,
}: {
  children: React.ReactNode;
  locale: Locale;
  initialUser: JwtPayload | null;
}) {
  return (
    <AuthProvider initialUser={initialUser}>
      <NextIntlClientProvider
        locale={locale}
        messages={messages[locale]}
        timeZone={'Europe/Berlin'}
      >
        {children}
      </NextIntlClientProvider>
    </AuthProvider>
  );
}
