import { ComingSoon } from '@/components/common/coming-soon';
import type { PageProps } from '@/types/next-page';

type NewsCategoryPageProps = PageProps<{
  category: string;
}>;

export default async function NewsCategoryPage({
  params,
}: NewsCategoryPageProps) {
  const { locale, category } = await params;
  console.log('News Category Page - Locale:', locale, 'Category:', category);
  return <ComingSoon />;
}
