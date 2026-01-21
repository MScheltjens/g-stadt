import { cn } from '@invicity/ui/lib/utils';
import type { ReactNode } from 'react';

export interface PublicPageHeaderProps {
  title: ReactNode;
  description?: ReactNode;
  badge?: ReactNode;
  action?: ReactNode;
  className?: string;
  containerClassName?: string;
  children?: ReactNode;
  bgClassName?: string;
  ariaLabel?: string;
}

export function PublicPageHeader({
  title,
  description,
  badge,
  action,
  className,
  containerClassName = 'container mx-auto max-w-6xl px-6',
  children,
  bgClassName = 'bg-gradient-to-b from-muted/60 to-transparent',
  ariaLabel = 'Page header',
}: PublicPageHeaderProps) {
  return (
    <section
      className={cn('w-full py-8', bgClassName)}
      aria-label={ariaLabel}
      role="region"
    >
      <div className={cn('flex flex-col gap-2', containerClassName, className)}>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            {badge}
          </div>
          {action}
        </div>
        {description && <p className="text-muted-foreground">{description}</p>}
        {children}
      </div>
    </section>
  );
}
