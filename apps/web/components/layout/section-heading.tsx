import { cn } from '@kwh/ui/lib/utils';

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  accentClassName?: string;
}

export function SectionHeading({
  title,
  description,
  className,
  titleClassName,
  accentClassName,
}: SectionHeadingProps) {
  return (
    <header className={cn('mb-6', className)}>
      {accentClassName ? (
        <div className={cn('h-1 w-10 rounded-full', accentClassName)} />
      ) : null}

      <h2
        className={cn('mb-2 text-lg font-semibold md:text-xl', titleClassName)}
      >
        {title}
      </h2>

      {description && (
        <p className="text-sm md:text-base text-muted-foreground">
          {description}
        </p>
      )}
    </header>
  );
}
