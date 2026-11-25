import imageMap from "./imageMap.json";

const map = imageMap as Record<string, string>;

/**
 * Resolve an original Showit asset filename (or full //static.showit.com/.. url)
 * to the local self-hosted path under /public/images.
 */
export function img(filenameOrUrl: string): string {
  const filename = filenameOrUrl.split("/").pop() ?? filenameOrUrl;
  const resolved = map[filename];
  if (!resolved) {
    throw new Error(`No local image mapped for "${filename}"`);
  }
  return resolved;
}
