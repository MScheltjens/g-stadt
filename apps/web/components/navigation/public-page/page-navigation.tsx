import { Breadcrumbs } from '@/components/navigation';
import { BackButton } from '@/components/ui';

interface PageNavigationProps {
  slugToLabel?: Record<string, string>;
  className?: string;
}

export function PageNavigation({ slugToLabel = {} }: PageNavigationProps) {
  return (
    <nav aria-label="Public page navigation" role="region">
      <div className="flex items-center gap-4 mt-6 md:pb-2 md:ml-4">
        <BackButton className="md:hidden" />
        <Breadcrumbs slugToLabel={slugToLabel} className="hidden md:block" />
      </div>
    </nav>
  );
}
