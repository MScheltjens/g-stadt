type PageHeadingProps = {
  title: string;
  description?: string;
  className?: string;
};

export function PageHeading({
  title,
  description,
  className,
}: PageHeadingProps) {
  return (
    <header className={className}>
      <h1 className="text-3xl font-bold">{title}</h1>
      {description && (
        <p className="mt-2 text-lg text-muted-foreground">{description}</p>
      )}
    </header>
  );
}
