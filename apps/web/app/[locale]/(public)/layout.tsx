import { Footer } from '@/components/common/footer';
import { Header } from '@/components/common/header';
import { setRequestLocale } from '@repo/i18n/server';
import type { LayoutProps } from '@/types/next-page';

export default async function PublicLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
