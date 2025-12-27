import { getEventBySlug, getNewsBySlug } from '@/lib/api';
import { Locale } from '@repo/i18n/index';
import { setRequestLocale } from '@repo/i18n/server';

type NewsItemPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function NewsItemPage({ params }: NewsItemPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);
  const newsItem = await getNewsBySlug(slug);

  return (
    <main>
      <h1>{newsItem.title}</h1>
      {/* <p>{new Date(newsItem.).toLocaleDateString(locale)}</p> */}
      <p>{newsItem.category}</p>
      {newsItem.imageUrl && (
        <img src={newsItem.imageUrl} alt={newsItem.title} />
      )}
    </main>
  );
}
