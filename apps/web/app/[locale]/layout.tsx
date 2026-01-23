import '@kwh/ui/globals.css';

import { Locale, SUPPORTED_LOCALES } from '@kwh/constants';
import {
  getTranslations,
  hasLocale,
  routing,
  setRequestLocale,
} from '@kwh/i18n';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getUser } from '@/authentication/jwt';
import { Providers } from '@/components/providers/provider-wrapper';
import type { LayoutProps, MetadataProps } from '@/types';

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'meta',
  });

  return {
    title: {
      default: t('title'),
      template: `%s – ${t('title')}`,
    },
    description: t('description'),
  };
}

export const generateStaticParams = () => {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
};

type LocaleLayoutProps = LayoutProps & {
  auth?: React.ReactNode;
  modal?: React.ReactNode;
};

export default async function LocaleLayout({
  children,
  params,
  auth,
  modal,
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
      <body className="flex flex-col min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-50">
        <Providers locale={locale as Locale} initialUser={user}>
          {children}
          {auth}
          {modal}
        </Providers>
      </body>
    </html>
  );
}
