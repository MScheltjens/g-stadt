import { setRequestLocale } from '@repo/i18n/server';
import type { PageProps } from '@/types/next-page';

type NewsPageProps = PageProps<{
  slug: string;
}>;

export default async function NewsPage({ params }: NewsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <h1>News</h1>;
}
