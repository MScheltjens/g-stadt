import { ComingSoon } from '@/components/marketing/coming-soon';

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

export default async function NewsCategoryPage() {
  return <ComingSoon />;
}
