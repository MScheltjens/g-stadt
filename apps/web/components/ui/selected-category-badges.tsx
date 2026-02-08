import { ROUTES } from '@kwh/constants';
import { CategoryListResponse } from '@kwh/contracts';
import { useRouter } from '@kwh/i18n';
import { Badge } from '@kwh/ui/components/badge';
import { Button } from '@kwh/ui/components/button';
import { XCircle } from '@kwh/ui/components/icons';
import { cn } from '@kwh/ui/lib/utils';
import { useSearchParams } from 'next/navigation';

import {
  createCategoryColorHelpers,
  normalizeBadgeLabel,
  withAlpha,
} from '@/utils/category-colors';
import { extractSearchParams, setSearchParam } from '@/utils/search-params';

type SelectedCategoryBadgesProps = {
  categories?: CategoryListResponse;
  selectedCategorySlugs?: string[];
  className?: string;
};

export function SelectedCategoryBadges({
  categories,
  selectedCategorySlugs,
  className,
}: SelectedCategoryBadgesProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { getColorById } = createCategoryColorHelpers(categories);
  if (
    !categories ||
    !selectedCategorySlugs ||
    selectedCategorySlugs.length === 0
  )
    return null;

  return (
    <div
      className={cn(
        'flex gap-2 overflow-x-auto md:flex-wrap md:overflow-visible',
        className,
      )}
    >
      {categories
        .filter((cat) => selectedCategorySlugs.includes(cat.slug))
        .map((cat) => (
          <Badge
            key={cat.slug}
            variant="outline"
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-thin whitespace-nowrap"
            style={{
              borderColor: getColorById(cat.id),
              backgroundColor: withAlpha(getColorById(cat.id), 0.12),
              color: getColorById(cat.id),
            }}
          >
            <span className="truncate">{normalizeBadgeLabel(cat.label)}</span>
            <Button
              size="icon"
              variant="ghost"
              aria-label={`Remove ${cat.label}`}
              className="w-5 h-5 p-0 rounded-full"
              style={{ color: getColorById(cat.id) }}
              onClick={() => {
                // Remove this category from selectedCategorySlugs
                const newSelected = selectedCategorySlugs.filter(
                  (slug) => slug !== cat.slug,
                );
                let params = setSearchParam(
                  searchParams,
                  'categories',
                  newSelected.length > 0 ? newSelected : undefined,
                );
                params = setSearchParam(params, 'page', '1'); // Reset to first page on filter change
                router.push({
                  pathname: ROUTES.SERVICES,
                  query: extractSearchParams(params),
                });
              }}
            >
              <XCircle className="w-4 h-4" />
            </Button>
          </Badge>
        ))}
    </div>
  );
}
