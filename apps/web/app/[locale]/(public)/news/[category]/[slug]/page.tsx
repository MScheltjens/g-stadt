import { setRequestLocale } from '@repo/i18n/server';
import type { PageProps } from '@/types/next-page';
import { ComingSoon } from '@/components/common/coming-soon';

type NewsPageProps = PageProps<{
  category: string;
  slug: string;
}>;

export default async function NewsPage({ params }: NewsPageProps) {
  const { locale, category, slug } = await params;
  setRequestLocale(locale);
  console.log(
    'News Page - Locale:',
    locale,
    'Category:',
    category,
    'Slug:',
    slug,
  );

  return <ComingSoon />;
}
