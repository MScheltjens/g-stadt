import { ComingSoon } from '@/components/common/coming-soon';
import type { PageProps } from '@/types/next-page';

type ServicesCategoryPageProps = PageProps<{
  category: string;
}>;

export default async function ServicesCategoryPage({
  params,
}: ServicesCategoryPageProps) {
  const { locale, category } = await params;
  console.log(
    'Services Category Page - Locale:',
    locale,
    'Category:',
    category,
  );
  return <ComingSoon />;
}
