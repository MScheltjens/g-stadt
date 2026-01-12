import { Skeleton } from '@repo/ui/components/skeleton';

export function SectionSkeleton({ cardCount = 3 }: { cardCount?: number }) {
  return (
    <section className="bg-muted">
      <div className="container mx-auto max-w-6xl pt-12 pb-16 px-6">
        <div className="flex justify-between my-4 items-center">
          <Skeleton className="h-10 w-48 mb-2 bg-primary/30 rounded" />
        </div>
        <Skeleton className="h-6 w-80 mb-4 bg-primary/30 rounded" />
        <div className="py-4">
          <div className="flex flex-wrap gap-6 mt-6">
            {Array.from({ length: cardCount }).map((_, i) => (
              <Skeleton
                key={i}
                className="w-full sm:w-80 h-96 bg-primary/30 rounded"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
