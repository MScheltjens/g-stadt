import { setRequestLocale } from '@repo/i18n/server';
import type { PageProps } from '@/types/next-page';
import { ComingSoon } from '@/components/common/coming-soon';

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
