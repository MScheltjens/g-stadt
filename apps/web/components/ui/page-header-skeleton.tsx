import { Skeleton } from '@kwh/ui/components/skeleton';
import { cn } from '@kwh/ui/lib/utils';

export function PageHeaderSkeleton({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        'w-full bg-linear-to-b from-muted/60 to-transparent py-12 mb-8',
        className,
      )}
    >
      <div className="container flex flex-col max-w-6xl gap-4 px-6 mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
          <div className="flex-1">
            <Skeleton className="w-48 h-8 mb-4 bg-primary/30" />
            <Skeleton className="h-12 mb-2 w-80 bg-primary/30" />
            <Skeleton className="h-6 max-w-full w-96 bg-primary/30" />
          </div>
          <div className="shrink-0">
            <Skeleton className="w-32 h-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
