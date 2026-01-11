import { Locale } from '@repo/i18n';
import { getTranslations, setRequestLocale } from '@repo/i18n/server';
import { getNews } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import { CardList } from '@/components/common/card-list';
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
      <CardList
        muted
        items={news.map((newsItem) => ({
          title: newsItem.title,
          pathname: '/news/[slug]',
          slug: newsItem.slug,
          date: (
            newsItem.publishedAt || newsItem.createdAt
          ).toLocaleDateString(),
        }))}
      />
    </>
  );
}
