// Helper functions for working with URLSearchParams in Next.js

/**
 * Extracts search params as an object from a ReadonlyURLSearchParams or URLSearchParams.
 */
export function extractSearchParams(
  searchParams: URLSearchParams | { toString(): string },
) {
  const params = new URLSearchParams(searchParams.toString());
  return Object.fromEntries(params.entries());
}

/**
 * Builds a URLSearchParams object from a key-value object.
 */
export function buildSearchParams(
  obj: Record<string, string | number | undefined | null | (string | number)[]>,
) {
  const params = new URLSearchParams();
  Object.entries(obj).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    if (Array.isArray(value)) {
      if (value.length > 0) {
        params.set(key, value.join(','));
      }
    } else {
      params.set(key, value.toString());
    }
  });
  return params;
}

/**
 * Sets or deletes a param in a URLSearchParams object and returns a new object.
 */
export function setSearchParam(
  searchParams: URLSearchParams | { toString(): string },
  key: string,
  value: string | number | undefined | null | (string | number)[],
) {
  const params = new URLSearchParams(searchParams.toString());
  if (
    value === undefined ||
    value === null ||
    (Array.isArray(value) && value.length === 0)
  ) {
    params.delete(key);
  } else if (Array.isArray(value)) {
    params.set(key, value.join(','));
  } else {
    params.set(key, value.toString());
  }
  return params;
}
