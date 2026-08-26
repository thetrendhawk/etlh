# Publishing Playbook

## Purpose

Document repeatable, verifiable publishing operations for Eco Tiny Living Hub.

## Scope

This playbook currently documents website sitemap, robots, and analytics operations. Other publishing procedures (Instagram workflow, article publication, newsletter) are not yet documented here and remain TBD.

## Status

Active — sitemap, robots, and analytics operations.

## Sitemap and Robots Operations

### Source of truth

- The dynamic route `src/routes/sitemap[.]xml.ts` is the single authoritative source of `/sitemap.xml`. It builds the sitemap from `src/lib/sitemap.ts`, which derives every URL from the live content source (`src/lib/posts.ts`).
- `public/sitemap.xml` was deleted on 2026-07-15 and must not be recreated. A static file in `public/` silently shadows the dynamic route on Vercel and will go stale.
- `public/robots.txt` must always contain the line: `Sitemap: https://ecotinylivinghub.com/sitemap.xml`
- New posts and categories added to `src/lib/posts.ts` appear in the sitemap automatically. No sitemap edit is required when publishing website content.

### Verification command

Run from the repository root:

```sh
pnpm run check:sitemap
```

The check fails when: a static sitemap exists in `public/`, output is non-deterministic, any `<loc>` is relative or uses a non-production origin, URLs are duplicated, expected posts or categories are missing, unexpected URLs appear, or `robots.txt` lacks the sitemap declaration.

### Preview checks (before promoting a deployment)

- `/sitemap.xml` returns 200 with an XML content type and only fully qualified `https://ecotinylivinghub.com/...` URLs.
- `/robots.txt` returns 200 and includes the Sitemap line.
- `/`, one representative article, and one representative category return 200.
- An unknown path still returns 404.

### Search Console

After a sitemap change reaches production, resubmit `https://ecotinylivinghub.com/sitemap.xml` in the canonical `sc-domain:ecotinylivinghub.com` Google Search Console property when a resubmission is warranted. Do not mix canonical `.com` reporting with the legacy `.thrwds.com` property.

### Rollback

Revert the sitemap commit with `git revert <commit>` and push; Vercel redeploys the previous behavior automatically. Do not rewrite pushed history. The Vercel dashboard's instant rollback can also repoint production to the prior deployment while the revert lands.

## Google Analytics 4 Operations

### Current source of truth

As of the **2026-08-23** analytics correction merged through PR #116:

- GA4 measurement ID: **`G-G81H19S4TG`**.
- Production hostname: `ecotinylivinghub.com`.
- Global analytics behavior lives in `src/lib/analytics.ts`.
- Consent UI lives in `src/components/AnalyticsConsent.tsx` and calls the shared analytics library.
- Automatic GA4 pageviews are disabled with `send_page_view: false`.
- ETLH sends one manual `page_view` on the initial accepted-consent production load and one on each resolved TanStack Router location change.
- Duplicate pageviews for the same path and query string are suppressed in the browser.
- Analytics loads only when the hostname is exactly `ecotinylivinghub.com`; Vercel preview and alternate-host traffic is intentionally excluded.
- Current tracked action events are `resource_open`, `resource_download`, `contact_email_click`, and `social_click`.

Historical IDs and stream changes remain valid provenance for their dates but are not current configuration. The measurement-history timeline is maintained in `docs/17_KPI_Baseline_and_Measurement.md`.

### Clean measurement boundary

Use **2026-08-23 forward** as the clean comparable GA4 era for the active ETLH SMART goal. Earlier GA4 observations may be retained as historical context but should not be compared directly to post-fix event counts as though instrumentation were unchanged.

### Verification

After production deployment or an analytics change:

1. Open GA4 Realtime or DebugView.
2. Visit the production homepage in a browser session with analytics consent accepted.
3. Navigate through at least two internal links without a full reload.
4. Confirm one `page_view` for each unique route visited.
5. Confirm `page_location`, `page_path`, `page_title`, and hostname are correct.
6. Trigger a representative tracked action where safe and verify its event name and parameters.
7. Refresh one page and confirm exactly one new pageview is recorded.
8. Open a Vercel preview and confirm it does not initialize production analytics.
9. Run the repository analytics/accessibility regression checks and confirm the expected production measurement ID is enforced.

### Evidence and interpretation rules

- Do not call `resource_open`, `resource_download`, `contact_email_click`, or `social_click` a revenue or subscriber conversion unless a separately defined success state supports that claim.
- Exclude owner, QA, synthetic, preview, and known test events from goal evidence where possible; otherwise annotate the limitation.
- Search Console is authoritative for Google organic discovery and is independent of GA4 implementation changes.
- Preserve instrumentation change dates in monthly reporting so unlike periods are not compared as though collection were stable.

### Privacy and future review

GA4 is a third-party analytics service that may set cookies and process visitor data. Privacy-policy and consent requirements must be reviewed before traffic scales or geographic targeting expands. Do not add advertising features, Google Signals, user IDs, or personally identifiable information without a separate documented decision.

### Rollback

Revert the relevant analytics implementation commit and redeploy. Confirm in production HTML/network activity that the intended configuration is restored and annotate the measurement boundary created by the rollback.

## Revision History

| Version | Date | Notes |
|---|---|---|
| v0.1 | 2026-07-15 | Added sitemap and robots operations. |
| v0.2 | 2026-07-20 | Corrected sitemap and robots canonical host to `ecotinylivinghub.com`; legacy aliases remain redirect-only. |
| v0.3 | 2026-08-26 | Reconciled current analytics source of truth after PR #116, documented the 2026-08-23 clean measurement boundary, current event names, and canonical Search Console property handling. |
