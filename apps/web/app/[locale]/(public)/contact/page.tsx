import { setRequestLocale } from '@invicity/i18n';

import { ComingSoon } from '@/components/marketing';
import type { PageProps } from '@/types';

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ComingSoon />;
}
