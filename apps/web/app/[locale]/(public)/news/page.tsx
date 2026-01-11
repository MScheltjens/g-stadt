import { Locale } from '@repo/i18n';
import { getTranslations, setRequestLocale } from '@repo/i18n/server';
import { getNews } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import { SectionCard } from '@/components/common/section-card';
import { PublicPageHeader } from '@/components/common/public-page-header';

type NewsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function NewsPage({ params }: NewsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations('news');
  const news = await getNews();

  return (
    <>
      <PublicPageHeader title={t('title')} description={t('description')} />
      <SectionCard
        muted
        items={news.map((newsItem) => ({
          key: newsItem.id,
          title: newsItem.title,
          pathname: '/news/[slug]',
          icon: 'Calendar',
          slug: newsItem.slug,
          footer: formatDate(newsItem.createdAt.toLocaleDateString()),
        }))}
      />
    </>
  );
}
