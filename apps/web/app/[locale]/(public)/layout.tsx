import { getTranslations } from '@invicity/i18n';
import { Metadata } from 'next';

import { Footer, Header } from '@/components/layout';
import { getCategories } from '@/lib/api/categories.api';
import type { LayoutProps, MetadataProps } from '@/types';

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

export default async function PublicLayout({ children }: LayoutProps) {
  const categories = await getCategories('CONTACT');

  return (
    <>
      <Header categories={categories} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
