import { ReactNode } from 'react';
import { PageNavigation } from '@/components/navigation/page-navigation';
import { PageHeading } from '@/components/layout/page-heading';

interface PublicPageLayoutProps {
  title: string;
  description?: string;
  slugToLabel?: Record<string, string>;
  children: ReactNode;
}

export function PublicPageLayout({
  title,
  description,
  slugToLabel = {},
  children,
}: PublicPageLayoutProps) {
  return (
    <>
      <PageNavigation slugToLabel={slugToLabel} />
      <div className="container w-full px-4 py-8 mx-auto max-w-7xl md:px-24 md:py-12">
        <PageHeading title={title} description={description} />

        {children}
      </div>
    </>
  );
}
