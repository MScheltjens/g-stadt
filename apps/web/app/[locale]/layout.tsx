import type { Metadata } from 'next';
import { hasLocale, Locale } from '@repo/i18n';
import { getTranslations } from '@repo/i18n/server';
import { Providers } from '@/components/providers';
import { routing } from '@repo/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from '@repo/i18n/server';
import { getUser } from '@/lib/auth';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

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
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // Enable static rendering for this page
  setRequestLocale(locale);
  const user = await getUser();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <Providers locale={locale} initialUser={user}>
          <Header locale={locale} />
          {children}
          {auth}
          {/* Footer for all public pages */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
