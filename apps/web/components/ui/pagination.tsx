import { Button } from '@kwh/ui/components/button';
import { ChevronLeftIcon, ChevronRightIcon } from '@kwh/ui/components/icons';
import { cn } from '@kwh/ui/lib/utils';

type PaginationProps = {
  pageCount: number;
  page: number;
  onPageChange?: (page: number) => void;
  className?: string;
};

export function Pagination({
  pageCount,
  page,
  onPageChange,
  className,
}: PaginationProps) {
  if (pageCount > 1) {
    return (
      <div className={cn('items-center md:flex', className)}>
        <Button
          onClick={() => onPageChange?.(page - 1)}
          disabled={page === 1}
          size="icon-sm"
          aria-label="Previous page"
          variant="ghost"
        >
          <ChevronLeftIcon className="size-4" />
        </Button>

        <div className="hidden lg:block">
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
            <Button
              key={p}
              onClick={() => onPageChange?.(p)}
              disabled={p === page}
              size="icon-sm"
              variant="link"
            >
              {p}
            </Button>
          ))}
        </div>

        <Button
          onClick={() => onPageChange?.(page + 1)}
          disabled={page === pageCount}
          size="icon-sm"
          aria-label="Next page"
          variant="ghost"
        >
          <ChevronRightIcon className="size-4" />
        </Button>
      </div>
    );
  }

  return null;
}
