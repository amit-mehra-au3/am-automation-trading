/**
 * Helper to resolve public assets correctly under subpaths (e.g. GitHub Pages) and local dev.
 */
export const getImageUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Get Vite's BASE_URL (defaults to '/' in dev, '/am-automation-trading/' on GitHub Pages)
  const baseUrl = import.meta.env.BASE_URL || './';
  const formattedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  
  return `${formattedBase}${cleanPath}`;
};
