import { ComingSoon } from '@/components/marketing/coming-soon';

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

export default async function EventCategoryPage() {
  return <ComingSoon />;
}
