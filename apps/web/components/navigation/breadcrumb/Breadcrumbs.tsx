'use client';
import { LOCALES, ROUTES } from '@invicity/constants';
import { useTranslations } from '@invicity/i18n';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import { Breadcrumb } from '@/components/navigation/breadcrumb/Breadcrumb';

type BreadcrumbsProps = {
  slugToLabel?: Record<string, string>;
};

const HIDDEN: string[] = Object.values(LOCALES) as string[];

export function Breadcrumbs({ slugToLabel }: BreadcrumbsProps) {
  const t = useTranslations('breadcrumbs');
  const pathname = usePathname();
  const items = useMemo(() => {
    if (!pathname) return [];
    const segments = pathname.split('/').filter(Boolean);
    let href = '';
    const visibleSegments = segments.filter((seg) => !HIDDEN.includes(seg));
    const crumbs = visibleSegments.map((seg, idx) => {
      href += `/${seg}`;
      const label =
        slugToLabel && slugToLabel[seg]
          ? slugToLabel[seg]
          : seg.charAt(0).toUpperCase() + seg.slice(1);
      return {
        label,
        href,
        isCurrent: idx === visibleSegments.length - 1,
      };
    });
    // Add Home link at the start
    return [
      { label: t('home'), href: ROUTES.HOME, isCurrent: crumbs.length === 0 },
      ...crumbs,
    ];
  }, [pathname, slugToLabel, t]);

  if (items.length === 0) return null;

  return <Breadcrumb items={items} />;
}
