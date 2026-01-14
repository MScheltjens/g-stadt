import { setRequestLocale } from '@repo/i18n/server';
import type { PageProps } from '@/types/next-page';
import { ComingSoon } from '@/components/common/coming-soon';

export default async function NewsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ComingSoon />;
}
