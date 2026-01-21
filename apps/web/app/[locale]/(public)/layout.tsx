import { Locale } from '@invicity/constants';
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

export default async function PublicLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  const allCategories = await getCategories(locale as Locale);
  const serviceCategories = allCategories.filter(
    (cat) => cat.type === 'SERVICE',
  );
  const contactCategories = allCategories.filter(
    (cat) => cat.type === 'CONTACT',
  );

  return (
    <>
      <Header
        categories={{ service: serviceCategories, contact: contactCategories }}
      />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
