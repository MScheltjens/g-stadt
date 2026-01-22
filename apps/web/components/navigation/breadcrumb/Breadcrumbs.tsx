'use client';

import { LOCALES } from '@invicity/constants';
import { capitalizeWords } from '@invicity/ui/lib/utils';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import { BreadcrumbNav } from '@/components/navigation/breadcrumb';

type BreadcrumbsProps = {
  slugToLabel?: Record<string, string>;
  className?: string;
};

const HIDDEN: string[] = Object.values(LOCALES) as string[];

export function Breadcrumbs({ slugToLabel, className }: BreadcrumbsProps) {
  const pathname = usePathname();

  const items = useMemo(() => {
    if (!pathname) return [];
    const segments = pathname.split('/').filter(Boolean);
    let href = '';
    const visibleSegments = segments.filter((seg) => !HIDDEN.includes(seg));
    const crumbs = visibleSegments.map((seg, idx) => {
      href += `/${seg}`;
      const rawLabel =
        slugToLabel && slugToLabel[seg]
          ? slugToLabel[seg]
          : seg.replace(/[-_]/g, ' ');
      const label = capitalizeWords(rawLabel);
      return {
        label,
        href,
        isCurrent: idx === visibleSegments.length - 1,
      };
    });
    return crumbs;
  }, [pathname, slugToLabel]);

  if (items.length === 0) return null;

  return <BreadcrumbNav items={items} className={className} />;
}
