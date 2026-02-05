/**
 * Prepends the base URL to a path.
 * Returns "/" in dev, "/katie-dautremont/" in production.
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL;
  // Remove leading slash from path if base already ends with one
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
