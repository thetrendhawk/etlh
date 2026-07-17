# ETLH Performance Baseline

Last updated: 2026-07-17

## Image baseline

The first exact repository audit measured 18 source images totaling 21,085,800 bytes (20.11 MiB).

Nine Pinterest-style PNG article assets accounted for 20,604,209 bytes of that total. Each file was between approximately 1.9 MiB and 2.5 MiB.

Those nine assets were converted to WebP at quality 82 with metadata removed. Their dimensions remain 1024×1536. The replacement set totals 1,768,406 bytes (1.69 MiB), a 91.4% reduction for that group.

The full source image library now totals approximately 2,249,997 bytes (2.15 MiB), an overall reduction of approximately 89.3%.

## Enforced budgets

`bun run check:assets` runs in required CI and enforces:

- Maximum individual source image: 400 KiB
- Maximum total source image library: 3 MiB
- Audited extensions: AVIF, JPEG, JPG, PNG, and WebP

These budgets are intentionally above the current baseline so normal publishing remains practical while preventing a return to multi-megabyte source images.

## Loading behavior

- Homepage hero and article hero images are explicitly eager, high-priority, and asynchronously decoded.
- Category images and article-card images remain lazy-loaded and asynchronously decoded.
- Width and height attributes remain present to preserve layout space and reduce layout shift.

## Deployment note

The duplicate legacy Vercel project was removed on 2026-07-17. Future ETLH Git deployments should run only through the authoritative `eco-tiny-living-site` project.

## Remaining measurement work

Repository asset weight is now measured and protected. Real-user Core Web Vitals still require sufficient traffic and a stable observation window. Future performance work should record mobile LCP, CLS, and INP from PageSpeed Insights, Search Console, or another verified field-data source when enough data exists.

Responsive derivative generation and AVIF should be evaluated only if field or lab measurements show that the current WebP delivery remains a material bottleneck.
