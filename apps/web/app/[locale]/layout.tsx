import type { Metadata } from 'next';
import { hasLocale } from '@repo/i18n/next-intl';
import { getTranslations, setRequestLocale } from '@repo/i18n/server';
import { routing } from '@repo/i18n/routing';
import { notFound } from 'next/navigation';
import { getUser } from '@/lib/auth';
import type { LayoutProps, MetadataProps } from '@/types/next-page';
import { Providers } from '@/components/providers/providers';

import '@repo/ui/globals.css';

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: 'metadata',
  });

  setRequestLocale(locale);

  return {
    title: t('title'),
    description: t('description'),
  };
}

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }));
};

type LocaleLayoutProps = LayoutProps & {
  auth?: React.ReactNode;
};

export default async function LocaleLayout({
  children,
  params,
  auth,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // Enable static rendering for this page
  setRequestLocale(locale);
  const user = await getUser();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Providers locale={locale} initialUser={user}>
          {children}
          {auth}
        </Providers>
      </body>
    </html>
  );
}
