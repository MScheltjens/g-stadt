import { PageSectionWrapper } from '@/components/page-section-wrapper';
import { getNews } from '@/lib/api';
import { Locale } from '@repo/i18n';
import { getTranslations, setRequestLocale } from '@repo/i18n/server';
import { ItemGrid } from '@/components/item-grid';

type NewsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function NewsPage({ params }: NewsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations('news');
  const news = await getNews();

  return (
    <main className="container mx-auto py-8 max-w-6xl">
      <PageSectionWrapper title={t('title')}>
        <ItemGrid
          items={news}
          locale={locale as Locale}
          basePath="/news/[slug]"
        />
      </PageSectionWrapper>
    </main>
  );
}
