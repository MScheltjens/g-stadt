import { setRequestLocale } from '@invicity/i18n';

import { ComingSoon } from '@/components/marketing';
import type { PageProps } from '@/types/next-page';

export default async function EventsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ComingSoon />;
}
