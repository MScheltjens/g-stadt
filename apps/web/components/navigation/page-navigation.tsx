import { BackButton } from '@/components/navigation/back-button';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { KnowhereLogo } from '@/components/svg/knowhere.logo';

type PageNavigationProps = {
  slugToLabel?: Record<string, string>;
  className?: string;
};

export function PageNavigation({ slugToLabel = {} }: PageNavigationProps) {
  return (
    <nav
      aria-label="Public page navigation"
      className="flex items-center w-full mx-auto max-w-7xl md:px-8 bg-accent-foreground/5"
    >
      <KnowhereLogo className="hidden w-auto h-12 md:block" logo />
      <span
        className="hidden w-px h-6 mx-4 bg-primary md:inline"
        aria-hidden="true"
      />
      <BackButton className="md:hidden" />
      <Breadcrumbs slugToLabel={slugToLabel} className="hidden md:block" />
    </nav>
  );
}
