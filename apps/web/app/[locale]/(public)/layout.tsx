import { getTranslations } from '@kwh/i18n';
import { Metadata } from 'next';

import { Footer } from '@/components/layout/footer';
import { TopMenuBar } from '@/components/navigation/top-menu';
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
  return (
    <>
      <TopMenuBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
