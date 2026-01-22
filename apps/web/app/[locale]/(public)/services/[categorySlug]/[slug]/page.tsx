import { ComingSoon } from '@/components/marketing/coming-soon';

// type ServicePageMetadataProps = MetadataProps<{
//   category: string;
//   slug: string;
// }>;

// export async function generateMetadata({
//   params
// }: ServicePageMetadataProps): Promise<Metadata> {
//   const { category, slug } = params;
//   const eventData = await getServiceByCategoryAndSlug(category, slug);
//   if (!eventData) {
//     return {
//       title: 'Service',
//     };
//   }
//   return {
//     title: eventData.title,
//     description: eventData.description
//   };
// }

export default async function ServiceItemPage() {
  return <ComingSoon />;
}
