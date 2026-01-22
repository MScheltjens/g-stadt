interface PageHeadingProps {
  title: string;
  description?: string;
}

export function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <section>
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        {description && (
          <p className="mt-2 text-lg text-muted-foreground">{description}</p>
        )}
      </div>
    </section>
  );
}
