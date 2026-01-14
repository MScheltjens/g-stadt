import { setRequestLocale } from '@repo/i18n/server';
import type { PageProps } from '@/types/next-page';
import { ComingSoon } from '@/components/common/coming-soon';

type NewsPageProps = PageProps<{
  slug: string;
}>;

export default async function NewsPage({ params }: NewsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ComingSoon />;
}
