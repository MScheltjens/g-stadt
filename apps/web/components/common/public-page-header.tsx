import { cn } from '@invicity/ui/lib/utils';
import { ReactNode } from 'react';

export interface PublicPageHeaderProps {
  title: ReactNode;
  description?: ReactNode;
  badge?: ReactNode;
  action?: ReactNode;
  className?: string;
  containerClassName?: string;
  children?: ReactNode;
  bgClassName?: string;
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
}: PublicPageHeaderProps) {
  return (
    <section className={cn('w-full py-12', bgClassName, className)}>
      <div className={cn(containerClassName, 'flex flex-col gap-4')}>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            {badge && <div className="mb-4">{badge}</div>}
            <h1 className="text-4xl font-bold tracking-tight mb-2">{title}</h1>
            {description && (
              <p className="text-lg text-muted-foreground max-w-2xl">
                {description}
              </p>
            )}
          </div>
          {action && <div>{action}</div>}
        </div>
        {children}
      </div>
    </section>
  );
}
