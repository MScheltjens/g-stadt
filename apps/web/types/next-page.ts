// apps/web/src/types/next-page.ts
import type { ReactNode } from 'react';
import type { Locale } from '@repo/types';

/**
 * Params can be sync OR async depending on route dynamism (Next.js 16).
 * Always type them as possibly async.
 */
export type MaybeAsync<T> = T | Promise<T>;

/* -----------------------------
   Page Props
------------------------------ */
export type PageProps<P extends object = object> = {
  params: MaybeAsync<
    {
      locale: string;
    } & P
  >;
};

/* -----------------------------
   Layout Props
------------------------------ */
export type LayoutProps<P extends object = object> = {
  children: ReactNode;
  params: MaybeAsync<
    {
      locale: string;
    } & P
  >;
};

/* -----------------------------
   Metadata Props
------------------------------ */
export type MetadataProps<P extends object = object> = {
  params: MaybeAsync<
    {
      locale: string;
    } & P
  >;
};
