// apps/web/src/types/next-page.ts
import type { ReactNode } from 'react';

/**
 * Params can be sync OR async depending on route dynamism (Next.js 16).
 * Always type them as possibly async.
 */

type PageParams<T extends object = object> = {
  locale: string;
} & T;

type SearchParams = { [key: string]: string | string[] | undefined };

/* -----------------------------
   Page Props
------------------------------ */
export type PageProps<P extends object = object> = {
  params: PageParams<P>;
  searchParams?: SearchParams;
};
/* -----------------------------
   Layout Props
------------------------------ */
export type LayoutProps<P extends object = object> = {
  children: ReactNode;
  params: PageParams<P>;
  searchParams?: SearchParams;
};

/* -----------------------------
   Metadata Props
------------------------------ */
export type MetadataProps<P extends object = object> = {
  params: PageParams<P>;
};
