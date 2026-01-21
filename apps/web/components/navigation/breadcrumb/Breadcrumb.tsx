import { Link } from '@invicity/i18n';
import { ChevronRight } from '@invicity/ui/components/icons';
import { cn } from '@invicity/ui/lib/utils';

import { BackButton } from '../../ui';

export interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb = ({ items, className = '' }: BreadcrumbProps) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        'container mx-auto max-w-6xl flex justify-between',
        className,
      )}
    >
      <ol className="flex items-center space-x-2" role="list">
        {items.map((item, idx) => (
          <li key={item.href} className="flex items-center" role="listitem">
            {idx > 0 && (
              <span className="mx-1 text-gray-400" aria-hidden="true">
                <ChevronRight />
              </span>
            )}
            {item.isCurrent ? (
              <span aria-current="page" className="text-gray-900 font-semibold">
                {item.label}
              </span>
            ) : (
              // @ts-expect-error -- TypeScript will validate that only known `params`
              // are used in combination with a given `pathname`. Since the two will
              // always match for the current route, we can skip runtime checks.
              <Link href={item.href} className="text-blue-600 hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
      <BackButton />
    </nav>
  );
};
