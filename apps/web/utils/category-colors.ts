import { CategoryListResponse } from '@kwh/contracts';

// Utility functions for category colors and badge label normalization //

type CategoryColorHelpers = {
  getColorById: (id: string) => string;
};

export const normalizeBadgeLabel = (label: string) =>
  label.replace(/\s+(?:und|et|and|&)\s+/gi, ', ');

export const withAlpha = (color: string, alpha: number) =>
  color.replace(')', ` / ${alpha})`);

export const createCategoryColorHelpers = (
  categories?: CategoryListResponse,
): CategoryColorHelpers => {
  const categoryOrder = categories?.map((category) => category.id) ?? [];

  const categoryIndexById = new Map(
    categoryOrder.map((id, index) => [id, index]),
  );
  const categoryCount = Math.max(categoryOrder.length, 1);

  const getColorById = (id: string) => {
    const index = categoryIndexById.get(id) ?? 0;
    const hue = Math.round((index * 360) / categoryCount);
    return `hsl(${hue} 70% 45%)`;
  };

  return { getColorById };
};
