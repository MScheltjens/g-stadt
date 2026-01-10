import { Locale } from '@repo/i18n';
import { getTranslations, setRequestLocale } from '@repo/i18n/server';
import { getNews } from '@/lib/api';
import { ItemCardList } from '@/components/common/item-card-list';
import { formatDate } from '@/lib/utils';
import { PageSectionWrapper } from '@/components/common/page-section-wrapper';

type NewsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function NewsPage({ params }: NewsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations('news');
  const news = await getNews();

  return (
    <PageSectionWrapper title={t('title')} description={t('description')} muted>
      <ItemCardList
        items={news.map((item) => ({
          key: item.id,
          title: item.title,
          date: item.createdAt
            ? formatDate(new Date(item.createdAt).toDateString())
            : undefined,
          slug: item.slug,
          pathname: '/news/[slug]',
        }))}
      />
    </PageSectionWrapper>
  );
}
