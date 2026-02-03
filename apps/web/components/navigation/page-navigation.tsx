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
      className="flex items-center mt-6 md:pb-2 md:ml-4"
    >
      <KnowhereLogo className="hidden w-auto h-15 md:block" logo />
      <span className="hidden mx-4 md:inline">|</span>
      <BackButton className="md:hidden" />
      <Breadcrumbs slugToLabel={slugToLabel} className="hidden md:block" />
    </nav>
  );
}
