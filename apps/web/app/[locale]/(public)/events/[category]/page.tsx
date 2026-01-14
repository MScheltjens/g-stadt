import { ComingSoon } from '@/components/common/coming-soon';
import type { PageProps } from '@/types/next-page';

// type EventCategoryMetaDataProps = MetadataProps<{
//   category: string;
// }>;

// export async function generateMetadata({
//   params
// }: EventCategoryMetaDataProps): Promise<Metadata> {
//   const { category } = params;
//   const categoryData = await getEventCategoryBySlug(category)
//   if (!categoryData) {
//     return {
//       title: 'Events',
//     };
//   }
//   return {
//     title: categoryData.title,
//     description: categoryData.description
//   };
// }

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
