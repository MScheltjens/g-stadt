'use client';

import { Locale, messages, NextIntlClientProvider } from '@repo/i18n';
import { AuthProvider } from './auth-provider';
import { JwtPayload } from '@repo/types';

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
