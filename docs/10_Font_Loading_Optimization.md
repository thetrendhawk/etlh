# ETLH Font Loading Optimization

## Purpose

Reduce mobile layout shift and heading render delay caused by late Google Fonts swaps while preserving the ETLH typography when fonts are available quickly or already cached.

## Change

- Change Google Fonts from `display=swap` to `display=optional`.
- Stop requesting Plus Jakarta Sans weight 300 because the current interface uses normal, medium, semibold, and bold weights.
- Keep the existing preconnects for the Google Fonts stylesheet and font host.

## Expected behavior

`font-display: optional` gives the custom font a short opportunity to render. On a slow first visit, the browser keeps the stable fallback instead of swapping typography after the page appears. On fast or cached visits, the custom ETLH fonts still render.

This is intentionally a low-risk first step. Self-hosting fonts remains a possible later optimization, but it requires font assets, licensing records, subset decisions, and cache-policy maintenance.

## Validation

Compare mobile and desktop Lighthouse measurements against `docs/09_Lighthouse_Baseline.md`, with particular attention to CLS, LCP, FCP, and the font-display diagnostic.
