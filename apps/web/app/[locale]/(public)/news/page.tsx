import { getTranslations, setRequestLocale } from '@repo/i18n/server';
import { PublicPageHeader } from '@/components/common/public-page-header';

import type { PageProps } from '@/types/next-page';

export default async function NewsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('news');

  return <PublicPageHeader title={t('title')} description={t('description')} />;
}
