'use client';

import { Locale } from '@invicity/constants';
import { JwtPayload } from '@invicity/contracts';
import { MESSAGES, NextIntlClientProvider } from '@invicity/i18n';

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
        messages={MESSAGES[locale]}
        timeZone={'Europe/Berlin'}
      >
        {children}
      </NextIntlClientProvider>
    </AuthProvider>
  );
}
