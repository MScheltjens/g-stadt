import { ComingSoon } from '@/components/marketing';

// type EventPageMetaDataProps = MetadataProps<{
//   category: string;
//   slug: string;
// }>;

// export async function generateMetadata({
//   params
// }: EventPageMetaDataProps): Promise<Metadata> {
//   const { category, slug } = params;
//   const eventData = await getEventByCategoryAndSlug(category, slug);
//   if (!eventData) {
//     return {
//       title: 'Event',
//     };
//   }
//   return {
//     title: eventData.title,
//     description: eventData.description
//   };
// }

export default async function EventPage() {
  return <ComingSoon />;
}
