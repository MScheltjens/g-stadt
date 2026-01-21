import { ComingSoon } from '@/components/marketing';

// type ServicesCategoryMetadataProps = MetadataProps<{
//   category: string;
// }>;

// export async function generateMetadata({
//   params
// }: ServicesCategoryMetadataProps): Promise<Metadata> {
//   const { category } = params;
//   const categoryData = await getServicesByCategorySlug(category)

//   if (!categoryData) {
//     return {
//       title: 'Services',
//     };
//   }

//   return {
//     title: categoryData.title,
//     description: categoryData.description
//   };
// }

export default async function ServicesCategoryPage() {
  return <ComingSoon />;
}
