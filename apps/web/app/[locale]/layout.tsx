import '@invicity/ui/globals.css';

import {
  getTranslations,
  hasLocale,
  routing,
  setRequestLocale,
} from '@invicity/i18n';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Providers } from '@/components/providers';
import { getUser } from '@/lib/auth';
import type { LayoutProps, MetadataProps } from '@/types/next-page';

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
  return routing.locales.map((locale) => ({ locale }));
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
      <body className="min-h-screen flex flex-col">
        <Providers locale={locale} initialUser={user}>
          {children}
          {auth}
          {modal}
        </Providers>
      </body>
    </html>
  );
}
