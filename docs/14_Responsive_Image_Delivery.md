# Responsive Image Delivery

## Purpose

This change reduces unnecessary image transfer on the ETLH homepage and reusable blog cards without changing the source photography or adding an image-processing dependency.

## Implementation

- Uses Vercel's first-party `/_vercel/image` endpoint in production.
- Preserves original image URLs as fallbacks and during local development.
- Supplies explicit responsive width candidates through `srcset`.
- Supplies layout-aware `sizes` values for the homepage hero, category cards, and reusable post cards.
- Limits optimization to local `/assets/` paths.
- Uses WebP output at quality 75 and a one-day minimum cache TTL.

## Validation requirements

Before merge:

- Full repository CI passes.
- Lighthouse branch checks pass.
- A Vercel preview reaches READY.
- Optimized hero and card URLs return successful image responses.
- Browser-selected `currentSrc` values use appropriate transformed widths.
- Image aspect ratios, lazy loading, accessibility text, CSP, and visual rendering remain correct.

## Rollback

Remove the image configuration, responsive `srcset` and `sizes` attributes, and `src/lib/image.ts`. Original image files remain unchanged.
