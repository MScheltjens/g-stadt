import { setRequestLocale } from '@invicity/i18n/server';

import { ComingSoon } from '@/components/common/coming-soon';
import type { PageProps } from '@/types/next-page';

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

type EventPageProps = PageProps<{
  category: string;
  slug: string;
}>;

export default async function EventPage({ params }: EventPageProps) {
  const { locale, category, slug } = await params;
  setRequestLocale(locale);
  console.log(
    'Event Page - Locale:',
    locale,
    'Category:',
    category,
    'Slug:',
    slug,
  );

  return <ComingSoon />;
}
