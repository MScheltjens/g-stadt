import { Locale } from '@repo/i18n';
import { setRequestLocale } from '@repo/i18n/server';
import { getNewsBySlug } from '@/lib/api';

type NewsPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function NewsPage({ params }: NewsPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);

  const news = await getNewsBySlug(slug);

  return (
    <>
      <h1>News</h1>
      <pre>{JSON.stringify(news, null, 2)}</pre>
    </>
  );
}
