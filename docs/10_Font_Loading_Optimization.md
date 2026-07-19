# ETLH Font Loading Optimization

## Purpose

Reduce font-driven layout shift and heading-render delay while preserving ETLH typography when the remote fonts are available quickly or already cached.

## Change

- Change the Google Fonts request from `display=swap` to `display=optional`.
- Stop requesting Plus Jakarta Sans weight 300 because the current interface uses weights 400, 500, 600, and 700.
- Keep the existing preconnects and the narrowly allowed Google Fonts origins documented in `10_CSP_and_Third_Party_Privacy_Audit.md`.

## Expected behavior

`font-display: optional` gives the custom font a short opportunity to render. On a slow first visit, the browser can retain the fallback instead of swapping typography after the page appears. On fast or cached visits, the custom ETLH fonts can still render.

This is a narrow, reversible adjustment. It does not claim that every visit will use the custom font or that lab results predict field Core Web Vitals.

## Evidence boundary

- Repository search found no `font-light`, explicit `font-weight: 300`, or equivalent 300-weight usage in `src`.
- Google Fonts remains a third party. Self-hosting could reduce that request but requires verified licensing, asset provenance, subset choices, and cache-policy maintenance.
- Field CLS, LCP, and INP remain unavailable until sufficient real-user data exists.

## Validation requirements

- Frozen-install full CI and production build.
- Rendered desktop and mobile accessibility checks.
- Branch Lighthouse comparison with CLS, LCP, FCP, and the font-display diagnostic recorded as lab data.
- Exact-head Vercel preview.
- Desktop and 390px review of typography, consent, navigation, and horizontal overflow.
- CSP response and browser-console verification for Google Fonts.
