'use client';

import { NextIntlClientProvider } from '@repo/i18n/next-intl';
import { AuthProvider } from './auth-provider';
import { JwtPayload } from '@repo/contracts';
import { Locale } from '@repo/constants';
import { messages } from '@repo/i18n';

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
