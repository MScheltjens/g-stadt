// CategorySelect component: a dropdown for selecting a category to filter services.
// Props:
//   - categories: list of available categories
//   - value: currently selected category id
//   - onChange: handler for when a new category is selected
import { useTranslations } from '@kwh/i18n';
import { Input } from '@kwh/ui/components/input';
import { Label } from '@kwh/ui/components/label';

type CategorySelectProps = {
  categories: { label: string; id: string }[];
  value: string;
  onChange: (value: string) => void;
};

export function CategorySelect({
  categories,
  value,
  onChange,
}: CategorySelectProps) {
  const t = useTranslations('services.filter');

  const handleRadioChange = (id: string) => {
    onChange(id);
  };

  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="mb-1 font-medium">{t('filterTheme')}</legend>
      <Label className="flex items-center gap-2 font-normal cursor-pointer">
        <Input
          type="radio"
          name="category"
          checked={value === 'all' || !value}
          onChange={() => handleRadioChange('all')}
          className="size-4"
        />
        {t('all')}
      </Label>
      {categories.map((category) => (
        <Label
          key={category.id}
          className="flex items-center gap-2 font-normal cursor-pointer"
        >
          <Input
            type="radio"
            name="category"
            checked={value === category.id}
            onChange={() => handleRadioChange(category.id)}
            className="size-4"
          />
          {category.label}
        </Label>
      ))}
    </fieldset>
  );
}
