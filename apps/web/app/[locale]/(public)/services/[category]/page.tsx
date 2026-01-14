import { ComingSoon } from '@/components/common/coming-soon';
import type { PageProps } from '@/types/next-page';

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
