# Decision Log

## Purpose

Record durable ETLH decisions, their rationale, and relevant repository history so future contributors do not have to reconstruct project intent from scattered conversations.

## Scope

This log covers major brand, editorial, production, publishing, measurement, migration, and repository-governance decisions.

## Status

Active.

## Decisions

| Date | Decision | Reason | Related Commit/Asset |
|---|---|---|---|
| 2026-06-22 | Expand Eco Tiny Living Hub to Instagram while staying in the same small-space sustainable-living niche established through Pinterest. | Build a broader content ecosystem without fragmenting the brand. | Historical source conversation; Instagram posts 001–012 |
| 2026-07-03 | Use the ETLH repository as the source of truth for website code and publication infrastructure. | Preserve traceable editorial, research, design, publishing, and implementation history. | `README.md`; commit `41a4434` |
| 2026-07-04 | Increase the contrast of the Instagram footer mark and continue using the improved treatment. | Improve mobile readability while preserving subtle branding. | `content/Instagram-005-Clear-One-Surface.md` |
| 2026-07-15 | Preserve the numbered documentation structure under `docs/` rather than creating parallel generic manuals. | Avoid duplicate authority and keep repository organization stable. | `docs/01_Operating_Manual.md` through `docs/07_Glossary.md` |
| 2026-07-15 | Verify repository paths and actual file status before editing or claiming completion. | Prevent invented paths, duplicate files, and inaccurate documentation. | ETLH reconciliation process |
| 2026-07-15 | Treat Conversation Recovery Packets as source evidence rather than polished final documentation. | Preserve provenance and prevent premature rewriting or loss of original decisions. | ETLH reconciliation process |
| 2026-07-15 | Reconcile the ETLH brand foundation from surviving evidence because the original Brand Strategy Guide, exact five-pillar wording, and exact stepping-stone wording were never committed and could not be recovered from Git history. | Move the project forward honestly without falsely presenting reconstructed language as verbatim historical source. | `docs/01_Operating_Manual.md` |
| 2026-07-15 | Adopt the reconciled five-pillar framework: Reduce Unnecessary Friction; Take Practical Eco Steps; Create Supportive Small-Space Systems; Practice Focused Consistency; Build Trust Through Thoughtful Living. | These pillars are directly supported by repeated user approvals, published ETLH content, and surviving strategy evidence. | `docs/01_Operating_Manual.md` |
| 2026-07-15 | Adopt the reconciled stepping-stone framework: Notice → Choose → Reduce → Repeat → Align. | This sequence preserves the approved stepping-stone concept and connects the Friction Finder Question, Eco Steps, simple systems, focused consistency, and meaningful alignment. | `docs/01_Operating_Manual.md` |
| 2026-07-15 | Defer Logo Concept A and the glossary term “Traveler” from active reconciliation. | Neither item is currently important enough to justify unsupported reconstruction. | No repo change required |
| 2026-07-15 | Make the dynamic `/sitemap.xml` route the single authoritative sitemap: emit absolute production URLs from `src/lib/sitemap.ts`, delete `public/sitemap.xml` (must not be recreated), declare the sitemap in `robots.txt`, and guard integrity with the sitemap check. | The static file shadowed the dynamic route on Vercel, went stale, and both implementations had emitted spec-violating relative `<loc>` values. | `src/routes/sitemap[.]xml.ts`; `src/lib/sitemap.ts`; `scripts/check-sitemap.ts`; `docs/05_Publishing_Playbook.md` |
| 2026-07-15 | Implement the first documented manual SPA GA4 pageview system with duplicate suppression and production-host-only loading. | Establish a traffic baseline while preventing double-counted TanStack Router navigations and excluding Vercel preview traffic. | Historical analytics implementation |
| 2026-08-05 | Temporarily replace the non-reporting original GA4 stream with verified stream `G-9BD6WKV3B7`, preserving consent-gated manual SPA pageviews. | The original stream accepted `collect` requests but did not surface events in Realtime or DebugView; a controlled event appeared immediately in the temporary stream. | PR #110; analytics history |
| 2026-08-05 | Standardize local development, CI, browser tests, and Vercel builds on pnpm 11 with Node.js 24, replacing Bun while retaining the dependency release-age policy. | pnpm provides a portable Node-based workflow and deterministic frozen installs without requiring a separate Bun runtime. | `package.json`; `pnpm-lock.yaml`; `pnpm-workspace.yaml`; `.github/workflows/ci.yml` |
| 2026-08-13 | Return consent-based GA4 collection to the original ETLH Analytics property/stream family, link the canonical `sc-domain:ecotinylivinghub.com` Search Console property to the ETLH Analytics property, and use current Search Console query evidence to improve the fridge/freezer article. | Consolidate split analytics history and respond to an actual search-query signal instead of publishing from assumption alone. | PR #115; `src/components/AnalyticsConsent.tsx`; `src/lib/posts.ts` |
| 2026-08-23 | Correct the production GA4 measurement ID to current source-of-truth `G-G81H19S4TG`, centralize analytics in `src/lib/analytics.ts`, make the initializer reliable, and add consent-gated `resource_open`, `resource_download`, `contact_email_click`, and `social_click` events. | The August 13 state still required a production configuration correction. The new implementation creates a clear, testable measurement boundary for future GA4 comparisons. | PR #116; `src/lib/analytics.ts`; `scripts/check-accessibility.ts` |
| 2026-08-26 | Extend the existing Operating Manual rather than create a competing project charter; add strategic thesis, key assumptions, non-goals, guardrails, long-term success, project/portfolio discipline, and separate SMART-goal governance. | Preserve ETLH's existing canonical mission/vision/values while closing the gap between brand philosophy and measurable strategy. | `docs/01_Operating_Manual.md`; `GOALS.md` |
| 2026-08-26 | Reconcile measurement documentation to the actual August implementation history; designate 2026-08-23 forward as the clean comparable GA4 era for the current goal; preserve earlier analytics observations as historical/diagnostic rather than silently treating them as comparable. | Prevent stale documentation and changing instrumentation from corrupting performance conclusions. Search Console remains independently authoritative for organic discovery. | `docs/05_Publishing_Playbook.md`; `docs/17_KPI_Baseline_and_Measurement.md`; `GOALS.md` |
| 2026-08-26 | Activate ETLH's first post-foundation SMART outcome goal around Google organic discovery and verified useful on-site actions, without a publishing-volume quota. | The brand, site, content system, and measurement capability are sufficiently built; the next question is whether the existing system can earn qualified discovery and observable usefulness. | `GOALS.md` |

## Operating Notes

- Do not rewrite pushed history.
- Prefer updating an existing authoritative document over creating a duplicate.
- Do not invent project history, strategy, publication dates, asset status, traffic, conversions, or completed work.
- Mark unknown or unrecoverable information honestly.
- Historical analytics IDs remain valid provenance for their dates but must not be represented as current configuration.
- Asset archive checkboxes may be completed only when corresponding final assets are actually committed.

## Revision History

| Version | Date | Notes |
|---|---|---|
| v1.0 | 2026-07-15 | Replaced the empty scaffold with reconciled durable decisions and provenance notes. |
| v1.1 | 2026-07-15 | Added the sitemap-integrity decision. |
| v1.2 | 2026-07-20 | Corrected the dynamic sitemap origin to the canonical `https://ecotinylivinghub.com` host; legacy `.thrwds.com` remains redirect-only. |
| v1.3 | 2026-08-05 | Recorded the temporary verified GA4 stream replacement. |
| v1.4 | 2026-08-05 | Recorded the Bun-to-pnpm toolchain migration. |
| v1.5 | 2026-08-26 | Recorded strategic-governance and separate SMART-goal framework decision. |
| v1.6 | 2026-08-26 | Reconciled the August 13/23 analytics history, established the clean measurement boundary, and recorded activation of the first post-foundation outcome goal. |
