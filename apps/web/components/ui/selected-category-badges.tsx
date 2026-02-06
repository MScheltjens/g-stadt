import { ROUTES } from '@kwh/constants';
import { CategoryListResponse } from '@kwh/contracts';
import { useRouter } from '@kwh/i18n';
import { Badge } from '@kwh/ui/components/badge';
import { Button } from '@kwh/ui/components/button';
import { XCircle } from '@kwh/ui/components/icons';
import { useSearchParams } from 'next/navigation';

import { extractSearchParams, setSearchParam } from '@/utils/search-params';

type SelectedCategoryBadgesProps = {
  categories?: CategoryListResponse;
  selectedCategorySlugs?: string[];
};

export function SelectedCategoryBadges({
  categories,
  selectedCategorySlugs,
}: SelectedCategoryBadgesProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  if (
    !categories ||
    !selectedCategorySlugs ||
    selectedCategorySlugs.length === 0
  )
    return null;

  return (
    <div className="flex flex-wrap gap-2">
      {categories
        .filter((cat) => selectedCategorySlugs.includes(cat.slug))
        .map((cat) => (
          <Badge key={cat.slug} variant="secondary">
            {cat.label}
            <Button
              size="icon"
              variant="ghost"
              className="ml-2 rounded-full"
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
              <XCircle />
            </Button>
          </Badge>
        ))}
    </div>
  );
}
