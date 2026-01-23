import { ROUTES } from '@kwh/constants';
import { useTranslations } from '@kwh/i18n';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@kwh/ui/components/breadcrumb';

export type BreadcrumbItem = {
  label: string;
  href: string;
  isCurrent?: boolean;
};

export type BreadcrumbCompProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function BreadcrumbComp({ items, className = '' }: BreadcrumbCompProps) {
  const t = useTranslations('breadcrumbs');
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={ROUTES.HOME}>{t('home')}</BreadcrumbLink>
        </BreadcrumbItem>
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <BreadcrumbSeparator />
            <BreadcrumbItem key={index}>
              {item.isCurrent ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
