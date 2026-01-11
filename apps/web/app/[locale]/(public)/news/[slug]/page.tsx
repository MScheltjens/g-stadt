import { setRequestLocale } from '@repo/i18n/server';
import { getNewsBySlug } from '@/lib/api';
import type { PageProps } from '@/types/next-page';

type NewsPageProps = PageProps<{
  slug: string;
}>;

export default async function NewsPage({ params }: NewsPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const news = await getNewsBySlug(slug);

  return (
    <>
      <h1>News</h1>
      <pre>{JSON.stringify(news, null, 2)}</pre>
    </>
  );
}
