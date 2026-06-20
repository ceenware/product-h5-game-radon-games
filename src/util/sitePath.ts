export const siteBasePath = import.meta.env.BASE_URL.replace(/\/$/, "");
export const routerBasePath = siteBasePath || "/";

export function sitePath(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (!siteBasePath) {
    return normalizedPath;
  }
  if (normalizedPath === "/") {
    return `${siteBasePath}/`;
  }
  return `${siteBasePath}${normalizedPath}`;
}
