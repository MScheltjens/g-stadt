import { CategoryListResponse } from '@kwh/contracts';
import { useSearchParams } from 'next/navigation';
import { useRouter } from '@kwh/i18n';
import { Badge } from '@kwh/ui/components/badge';
import { Button } from '@kwh/ui/components/button';
import { ROUTES } from '@kwh/constants';
import { XCircle } from '@kwh/ui/components/icons';

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
                const params = new URLSearchParams(searchParams.toString());
                if (newSelected.length > 0) {
                  params.set('categories', newSelected.join(','));
                } else {
                  params.delete('categories');
                }
                params.set('page', '1'); // Reset to first page on filter change
                router.push({
                  pathname: ROUTES.SERVICES,
                  query: Object.fromEntries(params.entries()),
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
