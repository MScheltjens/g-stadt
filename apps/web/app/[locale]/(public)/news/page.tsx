import { Locale } from '@repo/i18n';
import { setRequestLocale } from '@repo/i18n/server';
import { getNews } from '@/lib/api';

type NewsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function NewsPage({ params }: NewsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const news = await getNews();

  return (
    <>
      <h1>News</h1>
      <pre>{JSON.stringify(news, null, 2)}</pre>
    </>
  );
}
