// card-list.tsx

import { Link } from '@kwh/i18n';
import { Badge } from '@kwh/ui/components/badge';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@kwh/ui/components/card';
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
    <ul className="mt-4 space-y-2">
      {items.map((item, index) => (
        <li
          key={item.title}
          className={index % 2 === 0 ? 'bg-muted/20 rounded-xl' : ''}
        >
          <Link href={item.href}>
            <Card className="transition-all duration-200 rounded-xl hover:shadow-lg hover:ring-1 hover:ring-border/60 hover:-translate-y-0.5">
              <CardHeader>
                {item.badge ? (
                  <div
                    className="w-10 h-1 mb-2 rounded-full lg:hidden"
                    style={item.accentStyle}
                    aria-hidden="true"
                  />
                ) : null}
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-base font-semibold md:text-lg">
                    {item.title}
                  </CardTitle>
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
                <CardDescription className="text-sm md:text-base">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
}
