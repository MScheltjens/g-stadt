'use client';

import { Locale, messages, NextIntlClientProvider } from '@repo/i18n';
import { AuthProvider } from './providers/auth-provider';
import { JwtPayload } from '@repo/types';

export const Providers = ({
  children,
  locale,
  initialUser,
}: {
  children: React.ReactNode;
  locale: Locale;
  initialUser: JwtPayload | null;
}) => (
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
