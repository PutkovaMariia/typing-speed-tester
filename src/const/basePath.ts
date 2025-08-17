export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const assetUrl = (p: string) => `${BASE_PATH}${p.startsWith("/") ? p : `/${p}`}`;
