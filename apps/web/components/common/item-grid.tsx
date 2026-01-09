import { Card, CardHeader } from '@repo/ui/components/card';
import { Locale } from '@repo/i18n';
import { Link } from '@repo/i18n/navigation';
import * as React from 'react';

export type ItemGridItem = {
  id: string;
  slug: string;
  title: string;
};

import type { Pathname } from '@repo/i18n/routing';

/**
 * Props for the ItemGrid component.
 *
 * @property items - The array of items to display in the grid. Each item must have id, slug, and title.
 * @property locale - The current locale for the links.
 * @property basePath - The base route path with dynamic segment (e.g. '/news/[slug]').
 */

type ItemGridProps = {
  items: ItemGridItem[];
  locale: Locale;
  basePath: Pathname;
};

export const ItemGrid = ({ items, locale, basePath }: ItemGridProps) => {
  if (!items.length) {
    return <div className="bg-white rounded shadow p-4">No items to show.</div>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Link
          key={item.id}
          href={{
            pathname: basePath,
            params: { slug: item.slug },
          }}
          locale={locale}
        >
          <Card className="p-4">
            <CardHeader className="text-xl font-semibold mb-2">
              {item.title}
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
};
