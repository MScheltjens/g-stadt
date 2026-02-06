import { cn } from '@kwh/ui/lib/utils';

type PageHeadingProps = {
  title: string;
  description?: string;
};

export function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <header>
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h1>
      {description && (
        <p className="mb-4 text-lg md:text-xl text-muted-foreground md:mb-12">
          {description}
        </p>
      )}
    </header>
  );
}
