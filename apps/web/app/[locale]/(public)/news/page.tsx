import { setRequestLocale } from '@repo/i18n/server';

import { ComingSoon } from '@/components/common/coming-soon';
import type { PageProps } from '@/types/next-page';

export default async function NewsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ComingSoon />;
}
