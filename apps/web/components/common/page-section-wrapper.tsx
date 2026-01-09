import { Button } from '@repo/ui/components/button';
import { cn } from '@repo/ui/lib/utils';

type PageSectionProps = {
  title: string;
  actionBtnText?: string;
  children: React.ReactNode;
  description?: string;
  muted?: boolean;
};

export const PageSectionWrapper = ({
  title,
  muted,
  description,
  actionBtnText,
  children,
}: PageSectionProps) => (
  <section className={cn(muted && 'bg-muted')}>
    <div className="container mx-auto max-w-6xl pt-12 pb-16 px-6">
      <div className="flex justify-between my-4 items-center">
        <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
        {actionBtnText && <Button variant="ghost">{actionBtnText}</Button>}
      </div>
      {description && (
        <p className="text-muted-foreground mt-4">{description}</p>
      )}
      <div className="py-4">{children}</div>
    </div>
  </section>
);
