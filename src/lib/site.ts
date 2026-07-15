export const SITE_ORIGIN = "https://ecotinylivinghub.thrwds.com";

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_ORIGIN).toString();
}
