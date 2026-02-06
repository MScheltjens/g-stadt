import { cn } from '@kwh/ui/lib/utils';

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn('mb-6', className)}>
      <h2 className="mb-2 text-lg font-semibold md:text-xl">{title}</h2>
      {description && (
        <p className="text-sm md:text-base text-muted-foreground">
          {description}
        </p>
      )}
    </header>
  );
}
