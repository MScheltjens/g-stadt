import { setRequestLocale } from '@invicity/i18n/server';

import { ComingSoon } from '@/components/common/coming-soon';
import type { PageProps } from '@/lib/types/next-page';

export default async function EventsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ComingSoon />;
}
