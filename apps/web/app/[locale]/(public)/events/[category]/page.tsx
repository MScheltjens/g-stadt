import { ComingSoon } from '@/components/common/coming-soon';
import type { PageProps } from '@/types/next-page';

type EventCategoryPageProps = PageProps<{
  category: string;
}>;

export default async function EventCategoryPage({
  params,
}: EventCategoryPageProps) {
  const { locale, category } = await params;
  console.log('Event Category Page - Locale:', locale, 'Category:', category);
  return <ComingSoon />;
}
