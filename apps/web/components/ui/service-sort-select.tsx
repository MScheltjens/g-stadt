'use client';

import { SERVICE_SORT } from '@kwh/constants';
import { useTranslations } from '@kwh/i18n';
import { Label } from '@kwh/ui/components/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@kwh/ui/components/select';

type ServiceSortSelectProps = {
  value: string;
  onChangeAction: (value: string) => void;
};

export function ServiceSortSelect({
  value,
  onChangeAction,
}: ServiceSortSelectProps) {
  const t = useTranslations('services');

  return (
    <Label className="flex items-center gap-2 text-xs text-muted-foreground">
      <span>{t('results.sortLabel')}</span>
      <Select value={value} onValueChange={onChangeAction}>
        <SelectTrigger size="sm" className="h-8 text-xs border-border/60">
          <SelectValue />
        </SelectTrigger>
        <SelectContent
          position="popper"
          align="end"
          className="min-w-(--radix-select-trigger-width)"
        >
          <SelectItem value={SERVICE_SORT.ORDER}>
            {t('results.sortDefault')}
          </SelectItem>
          <SelectItem value={SERVICE_SORT.TITLE_ASC}>
            {t('results.sortAZ')}
          </SelectItem>
          <SelectItem value={SERVICE_SORT.TITLE_DESC}>
            {t('results.sortZA')}
          </SelectItem>
        </SelectContent>
      </Select>
    </Label>
  );
}
