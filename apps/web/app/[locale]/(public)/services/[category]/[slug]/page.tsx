import { setRequestLocale } from '@repo/i18n/server';

import { ComingSoon } from '@/components/common/coming-soon';
import type { PageProps } from '@/types/next-page';

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

type ServiceItemPageProps = PageProps<{
  category: string;
  slug: string;
}>;

export default async function ServiceItemPage({
  params,
}: ServiceItemPageProps) {
  const { locale, category, slug } = await params;
  setRequestLocale(locale);
  console.log(
    'Service Item Page - Locale:',
    locale,
    'Category:',
    category,
    'Slug:',
    slug,
  );
  return <ComingSoon />;
}
