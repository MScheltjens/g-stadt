import { setRequestLocale } from '@repo/i18n/server';
import type { PageProps } from '@/types/next-page';
import { ComingSoon } from '@/components/common/coming-soon';

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
