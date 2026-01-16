import { getTranslations, setRequestLocale } from '@invicity/i18n/server';
import { Metadata } from 'next';

import { Footer } from '@/components/common/footer';
import { Header } from '@/components/common/header';
import type { LayoutProps, MetadataProps } from '@/types/next-page';

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'public.meta',
  });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function PublicLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
