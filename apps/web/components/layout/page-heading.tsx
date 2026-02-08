type PageHeadingProps = {
  title: string;
  description?: string;
};

export function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <header>
      <h1 className="mb-3 text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="max-w-2xl mb-2 text-base md:text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </header>
  );
}
