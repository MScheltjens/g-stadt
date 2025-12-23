import { getNews } from '@/lib/api';
import { Locale } from '@repo/i18n';
import { setRequestLocale } from '@repo/i18n/server';
import { Card, CardHeader } from '@repo/ui/components/card';

type NewsPageProps = {
  params: Promise<{ locale: string }>;
};
export default async function NewsPage({ params }: NewsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const news = await getNews();
  return (
    <main className="container mx-auto py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6">News</h1>
      {news.map((article) => (
        <Card key={article.id} className="mt-4">
          <CardHeader>{article.title}</CardHeader>
        </Card>
      ))}
      <div className="bg-white rounded shadow p-4">
        No news articles to show.
      </div>
    </main>
  );
}
