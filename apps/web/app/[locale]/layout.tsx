import type { Metadata } from 'next';
import { hasLocale, Locale } from '@repo/i18n';
import { getTranslations } from '@repo/i18n/server';
import { Providers } from '@/components/providers';
import { routing } from '@repo/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from '@repo/i18n/server';
import { getUser } from '@/lib/auth';
import { Navbar } from '@/components/navbar';

import '@repo/ui/globals.css';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'metadata',
  });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }));
};

export default async function LocaleLayout({
  children,
  params,
  auth,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
  auth?: React.ReactNode;
}>) {
  const lang = (await params).locale as Locale;

  if (!hasLocale(routing.locales, lang)) {
    notFound();
  }
  // Enable static rendering for this page
  setRequestLocale(lang);

  // Get current user for auth context
  const user = await getUser();

  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        <Providers locale={lang} initialUser={user}>
          <Navbar locale={lang} />
          {children}
          {auth}
        </Providers>
      </body>
    </html>
  );
}
