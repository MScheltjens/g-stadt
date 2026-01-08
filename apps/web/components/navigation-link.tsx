'use client';

import { cn } from '@repo/ui/lib/utils';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';
import { Link } from '@repo/i18n/navigation';

export const NavigationLink = ({
  href,
  ...rest
}: ComponentProps<typeof Link>) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'inline-block bg-blue-500 px-2 py-3 transition-colors',
        isActive ? 'text-foreground' : 'text-gray-400 hover:text-gray-200',
      )}
      href={href}
      {...rest}
    />
  );
};
