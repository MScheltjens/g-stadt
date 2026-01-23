'use client';

import { capitalizeWords } from '@invicity/ui/lib/utils';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import { BreadcrumbComp } from '@/components/navigation/breadcrumb';
import { SUPPORTED_LOCALES } from '@invicity/constants';

type BreadcrumbListProps = {
  slugToLabel?: Record<string, string>;
  className?: string;
};

const HIDDEN: string[] = SUPPORTED_LOCALES as string[];

export function Breadcrumbs({ slugToLabel, className }: BreadcrumbListProps) {
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

  return <BreadcrumbComp items={items} className={className} />;
}
