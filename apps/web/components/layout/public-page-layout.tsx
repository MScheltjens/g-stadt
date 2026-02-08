import { ReactNode } from 'react';

import { PageHeading } from '@/components/layout/page-heading';
import { PageNavigation } from '@/components/navigation/page-navigation';

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
      <section className="w-full bg-linear-to-b from-muted/80 to-transparent border-b border-muted/50">
        <div className="container w-full px-4 pt-8 pb-4 mx-auto max-w-7xl md:px-24 md:pt-10 md:pb-5">
          <PageHeading title={title} description={description} />
        </div>
      </section>
      <div className="container w-full px-4 pt-2 pb-10 mx-auto max-w-7xl md:px-24 md:pt-6 md:pb-12">
        {children}
      </div>
    </>
  );
}
