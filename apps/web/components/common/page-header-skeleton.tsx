import { Skeleton } from '@repo/ui/components/skeleton';
import { cn } from '@repo/ui/lib/utils';

export function PageHeaderSkeleton({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        'w-full bg-gradient-to-b from-muted/60 to-transparent py-12 mb-8',
        className,
      )}
    >
      <div className="container mx-auto max-w-6xl px-6 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="flex-1">
            <Skeleton className="h-8 w-48 mb-4 bg-primary/30" />
            <Skeleton className="h-12 w-80 mb-2 bg-primary/30" />
            <Skeleton className="h-6 w-96 max-w-full bg-primary/30" />
          </div>
          <div className="flex-shrink-0">
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>
    </section>
  );
}
