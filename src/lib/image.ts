const DEFAULT_QUALITY = 75;

export function vercelImageSrcSet(
  src: string,
  widths: number[],
  quality = DEFAULT_QUALITY,
): string | undefined {
  if (!import.meta.env.PROD) return undefined;

  return [...widths]
    .sort((a, b) => a - b)
    .map((width) => {
      const optimizedUrl = `/_vercel/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
      return `${optimizedUrl} ${width}w`;
    })
    .join(", ");
}
