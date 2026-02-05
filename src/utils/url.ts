/**
 * Prepends the base URL to a path.
 * Returns "/" in dev, "/katie-dautremont/" in production.
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL;
  // Ensure base ends with slash and path doesn't start with one
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${normalizedBase}${cleanPath}`;
}
