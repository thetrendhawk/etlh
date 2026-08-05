# ETLH Technical Audit — 2026-08-05

## Scope

- Source baseline: `main` at `e46e2cc`
- Production: `https://ecotinylivinghub.com`
- Surfaces: application source, generated Vercel output, GitHub Actions, live routes, analytics, metadata, structured data, security headers, links, responsive behavior, dependencies, and asset budgets
- Separately reviewed content branch: `agent/improve-sustainable-habits-traffic-page` at `06f759d`

## Verified healthy

- All 38 unique sitemap URLs returned HTTP 200.
- All 78 discovered internal links returned a successful or intended redirect response.
- Every indexable page had one H1, a unique title and description, the exact canonical URL, a matching Open Graph URL, and valid JSON-LD.
- No mixed-content links, unexpected `noindex`, duplicate titles, duplicate descriptions, broken loaded images, console errors, or failed production requests were found.
- Desktop and mobile navigation rendered correctly without horizontal overflow.
- Production sends a consented GA4 `page_view` request to `G-9BD6WKV3B7`; the request reported `analytics_storage` as granted and the browser console remained clean.
- CSP, Permissions Policy, Referrer Policy, HSTS, `nosniff`, and clickjacking protection were present in production.
- The production dependency audit reported no known vulnerabilities.
- The full repository gate passed, including the built Vercel server returning HTTP 200.

## Improvements implemented in this audit branch

1. Made `pnpm run check:ci` the single GitHub Actions validation gate so package-level checks cannot silently drift from CI.
2. Added TypeScript checking to the gate and corrected the unsafe browser callback-map cast it identified.
3. Wired the existing responsive-image configuration check into the package and CI gates.
4. Added the built Vercel server smoke test to the actual GitHub Actions path.
5. Expanded production-smoke triggers to include lockfile, workspace, Vercel, and Vite configuration changes.
6. Migrated workflow internals to Node 24-compatible `actions/checkout`, `actions/upload-artifact`, and `pnpm/setup` releases.
7. Replaced Lighthouse's unminified development-server target with a production-build HTTP adapter that serves built assets, compression, and local Vercel-image fallbacks.
8. Corrected stale pnpm and canonical-domain documentation.
9. Ignored local validation reports while retaining them as CI artifacts.
10. Regenerated the committed TanStack route tree with the current pinned toolchain.

## Lighthouse verification

The previous pull-request workflow's mobile score of 36 was not a production measurement: it audited an unminified Vite development server with a 7.3 MiB transfer and no compression.

The corrected local production-build path measured:

| Mode    | Performance | Accessibility | Best Practices | SEO |   FCP |   LCP |  TBT | CLS |
| ------- | ----------: | ------------: | -------------: | --: | ----: | ----: | ---: | --: |
| Mobile  |          82 |           100 |            100 | 100 | 2.9 s | 4.0 s | 0 ms |   0 |
| Desktop |          99 |           100 |            100 | 100 | 0.7 s | 0.9 s | 0 ms |   0 |

These are controlled lab measurements, not field Core Web Vitals. The local adapter passes original images through for Vercel optimizer URLs, so production image delivery may differ.

## Prioritized follow-up backlog

### Medium priority

- Reduce the shared client entry chunk, currently about 474 KiB raw and 148 KiB gzip. Lighthouse estimates about 127 KiB of unused JavaScript on the homepage; route-level or component-level code splitting should be evaluated in a focused performance change.
- Create a focused dead-code cleanup PR. Static analysis found roughly 50 unused starter/UI files and their associated dependencies. They are tree-shaken from production but increase install, audit, and maintenance surface. Do not mass-delete them alongside content work because the repository remains connected to Lovable.
- Recover image-budget headroom. Source images total exactly 3.00 MiB, so the next unoptimized asset will fail the current budget. Archive unused promotional art outside `src/assets` or compress it in a dedicated asset change.

### Low priority

- Resolve the seven existing Fast Refresh lint warnings by separating shared constants/helpers from component modules where those modules are still used.
- Review major dependency upgrades individually. Keep the current exact TanStack Start, Lovable Vite config, Jiti, and Nitro compatibility set until each candidate passes the built-server and preview checks.
- Remove `vite-tsconfig-paths` only when the pinned Lovable Vite wrapper supports Vite's native `resolve.tsconfigPaths` cleanly.
- Remove or reconcile the unused `src/lib/subscribe.functions.ts` server subscription path; the live form currently uses browser-side Mailchimp JSONP with different endpoint metadata.

## Traffic-page branch review

The six-file traffic-page change is focused and passes `git diff --check`. Its article date metadata, callout rendering, content assertions, and homepage feature are internally consistent. A merge simulation against current `main` produced no unresolved conflict markers. Because its publishing-workflow document was authored before the pnpm migration, merge it through a PR after this audit branch so current pnpm and canonical-host wording remains authoritative.
