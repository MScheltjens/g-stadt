import { ComingSoon } from '@/components/marketing';
import type { PageProps } from '@/types';

// type NewsCategoryMetadataProps = MetadataProps<{
//   category: string;
// }>;

// export async function generateMetadata({
//   params
// }: NewsCategoryMetadataProps): Promise<Metadata> {
//   const { category } = params;
//   const categoryData = await getNewsByCategorySlug(category)

//   return {
//     title: categoryData.title,
//     description: categoryData.description
//   };
// }

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
