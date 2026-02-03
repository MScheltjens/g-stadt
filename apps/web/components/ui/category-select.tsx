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
    <fieldset className="flex flex-col gap-2 mt-4 ">
      <legend className="mb-4 font-semibold">{t('filterTheme')}</legend>
      <Label className="flex items-center justify-between font-normal cursor-pointer">
        {t('all')}
        <Input
          type="radio"
          name="category"
          checked={value === 'all' || !value}
          onChange={() => handleRadioChange('all')}
          className="size-4"
        />
      </Label>
      {categories.map((category) => (
        <Label
          key={category.id}
          className="flex items-center justify-between mt-2 font-normal cursor-pointer"
        >
          {category.label}
          <Input
            type="radio"
            name="category"
            checked={value === category.id}
            onChange={() => handleRadioChange(category.id)}
            className="size-4"
          />
        </Label>
      ))}
    </fieldset>
  );
}
