// card-list.tsx

import { Link } from '@kwh/i18n';
import { Badge } from '@kwh/ui/components/badge';
import { cn } from '@kwh/ui/lib/utils';
import { ComponentProps, CSSProperties } from 'react';

type CardListProps = {
  items: {
    title: string;
    description: string;
    href: ComponentProps<typeof Link>['href'];
    badge?: {
      label: string;
      className?: string;
      style?: CSSProperties;
    };
    accentStyle?: CSSProperties;
  }[];
};

export function CardList({ items }: CardListProps) {
  return (
    <ul className="mt-4 divide-y-2 divide-border/80">
      {items.map((item) => (
        <li key={item.title} className="first:pt-0 last:pb-0">
          <Link
            href={item.href}
            className="block px-4 py-4 transition-colors hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
          >
            {item.badge ? (
              <div
                className="w-10 h-1 mb-2 rounded-full lg:hidden"
                style={item.accentStyle}
                aria-hidden="true"
              />
            ) : null}
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold md:text-lg">
                {item.title}
              </h3>
              {item.badge ? (
                <Badge
                  variant="outline"
                  className={cn(
                    'hidden max-w-40 shrink-0 truncate px-2 py-0.5 text-[10px] font-normal lg:inline-flex',
                    item.badge.className,
                  )}
                  style={item.badge.style}
                >
                  {item.badge.label}
                </Badge>
              ) : null}
            </div>
            <p className="text-sm text-muted-foreground md:text-base">
              {item.description}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
