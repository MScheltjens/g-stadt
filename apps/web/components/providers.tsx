'use client';

import { Locale, messages, NextIntlClientProvider } from '@repo/i18n';

export const Providers = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) => (
  <NextIntlClientProvider
    locale={locale}
    messages={messages[locale]}
    timeZone={'Europe/Berlin'}
  >
    {children}
  </NextIntlClientProvider>
);
