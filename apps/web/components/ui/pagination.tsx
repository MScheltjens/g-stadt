import { Button } from '@kwh/ui/components/button';
import { ChevronLeftIcon, ChevronRightIcon } from '@kwh/ui/components/icons';

export function Pagination({
  pageCount,
  page,
  onPageChange,
}: {
  pageCount: number;
  page: number;
  onPageChange?: (page: number) => void;
  info?: string;
}) {
  if (pageCount > 1) {
    return (
      <div className="flex items-center mt-2">
        <Button
          onClick={() => onPageChange?.(page - 1)}
          disabled={page === 1}
          size="icon-sm"
          aria-label="Previous page"
          variant="ghost"
        >
          <ChevronLeftIcon className="size-4" />
        </Button>

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
