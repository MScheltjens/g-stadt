import { ComingSoon } from '@/components/marketing/coming-soon';

// export async function generateMetadata({
//   params,
// }: ServicesCategoryMetadataProps): Promise<Metadata> {
//   const { categorySlug } = await params;
//   const categoryData = await getCategoryWithServices(categorySlug);

//   return {
//     title: categoryData.translations[0]?.label || 'Services',
//   };
// }

export default async function ServicesCategoryPage() {
  return (
    <>
      {/* <Breadcrumbs slugToLabel={slugToLabel} />
      <PageHeading title={slugToLabel[categorySlug] || 'Services'} /> */}
      <ComingSoon />
    </>
  );
}
