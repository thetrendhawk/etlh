# ETLH Lighthouse Baseline

## Measurement identity

- Production URL: `https://ecotinylivinghub.com/`
- Measured: 2026-07-18
- Lighthouse CLI: `12.8.2`
- Runner: GitHub-hosted Ubuntu with headless Chrome
- Reports: mobile and desktop JSON/HTML artifacts retained by the `Lighthouse baseline` workflow for 30 days

These are controlled lab measurements. They are directional engineering evidence and are not substitutes for field Core Web Vitals from real visitors.

## Initial production baseline

| Mode | Performance | Accessibility | Best Practices | SEO | FCP | LCP | TBT | CLS | Speed Index |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Mobile | 69 | 100 | 100 | 100 | 3.0 s | 3.7 s | 300 ms | 0.178 | 3.0 s |
| Desktop | 98 | 100 | 100 | 100 | 0.7 s | 0.9 s | 0 ms | 0.071 | 0.7 s |

## Evidence-backed findings

### 1. Mobile font loading is the primary layout-shift source

Lighthouse attributed the measured mobile CLS of `0.178` to the Plus Jakarta Sans and Instrument Serif web fonts loading after the initial render. The same font swap produced a smaller desktop shift of `0.071`.

The next performance slice should evaluate self-hosting the two required font files, preloading only the exact weights used above the fold, and using metric-compatible fallback settings. The goal is to reduce layout movement without abandoning the ETLH typography.

### 2. Mobile LCP is text render delay, not hero-image download

The mobile LCP element was the homepage `<h1>`. Lighthouse measured approximately 84% of its LCP time as render delay. This points toward font availability and main-thread work rather than a slow hero-image request as the first mobile target.

### 3. Responsive image delivery remains inefficient

Lighthouse estimated potential transfer savings from properly sized images:

- Mobile: approximately `362 KiB`
- Desktop: approximately `1,353 KiB`

The current markup supplies fixed source files and dimensions but not responsive `srcset`/`sizes` variants. A later image-delivery slice should generate appropriately sized variants for hero, category, and post-card images.

### 4. Some client JavaScript is unused on initial load

Lighthouse estimated about `47 KiB` of unused JavaScript in both modes. Mobile also recorded approximately `1.4 s` of JavaScript execution and `3.7 s` of main-thread work. Route-level bundle inspection should determine whether the large shared UI dependency surface can be reduced without destabilizing the site.

### 5. Current strengths

Accessibility, Best Practices, and SEO each scored `100` in both modes. Desktop performance is already strong at `98`. The optimization priority is therefore mobile stability and rendering—not broad visual redesign or indiscriminate dependency removal.

## Operating policy

- Run the workflow manually after meaningful performance changes.
- The workflow also runs weekly and on pull requests that touch site/runtime assets.
- Do not fail deployments on small score fluctuations; Lighthouse lab scores naturally vary.
- Turn repeated evidence into narrow budgets only after at least three comparable runs.
- Field LCP, CLS, and INP should be evaluated separately after sufficient real-user traffic exists.
