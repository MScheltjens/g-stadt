import { setRequestLocale } from '@invicity/i18n/server';

import { ComingSoon } from '@/components/common/coming-soon';
import type { PageProps } from '@/types/next-page';

// type NewsItemPageMetadataProps = MetadataProps<{
//   category: string;
//   slug: string;
// }>;

// export async function generateMetadata({
//   params
// }: NewsItemPageMetadataProps): Promise<Metadata> {
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

type NewsItemPageProps = PageProps<{
  category: string;
  slug: string;
}>;

export default async function NewsItemPage({ params }: NewsItemPageProps) {
  const { locale, category, slug } = await params;
  setRequestLocale(locale);
  console.log(
    'News Page - Locale:',
    locale,
    'Category:',
    category,
    'Slug:',
    slug,
  );

  return <ComingSoon />;
}
