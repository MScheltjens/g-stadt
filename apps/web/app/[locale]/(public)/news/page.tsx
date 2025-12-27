import { PageSectionWrapper } from '@/components/page-section-wrapper';
import { getNews } from '@/lib/api';
import { Locale } from '@repo/i18n';
import { getTranslations, setRequestLocale } from '@repo/i18n/server';
import { Card, CardDescription, CardHeader } from '@repo/ui/components/card';

type NewsPageProps = {
  params: Promise<{ locale: string }>;
};
export default async function NewsPage({ params }: NewsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations('home.news');
  const news = await getNews();

  return (
    <main className="container mx-auto py-8 max-w-6xl">
      <PageSectionWrapper title={t('title')}>
        {news.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((newsItem) => (
              <Card key={newsItem.id} className="p-4">
                <CardHeader className="text-xl font-semibold mb-2">
                  {newsItem.title}
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded shadow p-4">No news to show.</div>
        )}
      </PageSectionWrapper>
    </main>
  );
}
