import { getTranslations, setRequestLocale } from '@invicity/i18n/server';
import { Metadata } from 'next';

import { Footer } from '@/components/common/footer';
import { Header } from '@/components/common/header';
import type { LayoutProps, MetadataProps } from '@/lib/types/next-page';
import { Locale } from '@invicity/constants';
import { getCategories } from '@/lib/api/categories';

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
  const allCategories = await getCategories(locale as Locale); // or your locale
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
