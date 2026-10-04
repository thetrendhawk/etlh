# ETLH search and analytics review — October 4, 2026

Status: Local validation passed; release verification in progress.

Goal: Improve discovery and useful visits for the existing ETLH site. Preserve the frozen November 30 targets in `GOALS.md`: 15 trailing-28-day Google clicks, 500 impressions, and three verified useful actions from two distinct external sessions.

## Account observations

Retrieved October 4 from the signed-in account. Search property: `sc-domain:ecotinylivinghub.com`; Web search, all countries/devices, no query or page filters. Search Console's last update was nine hours before retrieval.

| Window | Clicks | Impressions | CTR | Average position |
| --- | ---: | ---: | ---: | ---: |
| September 2–29, 2026 (displayed 28 days) | 0 | 208 | 0% | 17.3 |
| July 17–September 29, 2026 (displayed 3 months; available chart starts July 17) | 0 | 377 | 0% | 29.5 |

Top page rows in the 28-day view (all zero clicks):

| Article slug | Impressions |
| --- | ---: |
| shared-apartment-laundry-room-check | 83 |
| dishwashing-without-dishwasher-small-kitchen | 40 |
| laundry-transport-without-in-unit-washer | 22 |
| drying-clothes-small-apartment-space-plan | 21 |
| eat-first-fridge-freezer-small-apartment | 13 |
| laundry-product-storage-small-apartment | 7 |

Visible query rows included `shared laundry room washer dryer` (24 impressions), `laundry room shared` (20), `shared laundry etiquette` (5), and `laundry room rules for tenants` (3). Query rows can be privacy-filtered and need not reconcile with totals. Page counts are not additive to property totals.

Indexing report last updated September 20: 29 indexed URLs; 12 excluded: three redirects, eight discovered but not indexed, one crawled but not indexed. The latter was `/blog/laundry-product-storage-small-apartment` (last crawled August 23). Discovered examples: electric food-waste appliances, laundry holding zones, eco upgrade checklist, three category pages (eco habits, intentional living, zero-waste kitchen), contact, and editorial policy. Exclusion does not by itself identify a technical defect.

Sitemap: successful, 38 discovered pages, last read September 29; submitted August 23. A fresh resubmission should follow a verified production sitemap change.

GA4 account 399855980 / property 545836116, Eco Tiny Living Hub Website: September 27–October 3 home cards showed two active users, ten views, sixteen events, zero key events. Session channel cards showed one Direct and one Organic Search session. Small sample, consent coverage and external-session status unverified. Do not equate GA4 organic attribution with Search Console click counts, especially across different windows.

Main stream 15264528887: `G-G81H19S4TG`; diagnostic stream 15386098625: `G-9BD6WKV3B7`. Production script verified to use the main stream. Both stream panels warned of no data received in the past 48 hours; this is consistent with sparse traffic and requires a controlled collection check before diagnosing a break.

GA4's complete September 6–October 3 window: home summary showed three active users, seventeen views, twenty-six events, zero key events. Traffic acquisition reported three sessions and three engaged sessions, 100% engagement rate, and one minute average engagement per session. Channels: one AI Assistant session (46 seconds), one Direct session (28 seconds), one Organic Search session (1 minute 47 seconds). Views remain subject to the historical duplication caveat. Zero key events does not prove zero useful-action events unless event definitions are checked. Production QA during this review subsequently appeared as one active user in Realtime; exclude October 4 QA from outcome evidence.

## Changes and rationale

1. Disabled main-stream Enhanced Measurement history-based pageviews and reopened the editor to verify the saved unchecked state. The application already emits manual route pageviews. [Google's pageview documentation](https://developers.google.com/analytics/devguides/collection/ga4/views) explains why `send_page_view: false` alone cannot prevent history-event duplicates. Leave the diagnostic stream unchanged.
2. Harden consent withdrawal using Google's per-measurement disable flag, check consent before each manual pageview, and restore granted consent on reacceptance. Regression tests exercise withdrawal, navigation, reacceptance, and the active tag/config identifier instead of a hardcoded fake collector ID.
3. Refresh the highest-impression shared-laundry guide with a direct washer/dryer title, practical description, immediate checklist, shared-laundry definition, bounded etiquette guidance, and related laundry links. Retain its URL and safety/ownership boundaries.
4. Add a homepage laundry navigation section, including the holding-zones article waiting for a crawl. This also helps readers find the existing guides without relying on publication order.
5. Use `updatedDate ?? date` for sitemap article modification dates and validate that output. Do not stamp all URLs with the deployment date.

## Review rule and next action

Verify CI and the deployed article, homepage, sitemap, and consent behavior. After deployment, resubmit the sitemap and inspect priority URLs through Search Console. Request indexing only when live URL inspection confirms access and canonical correctness; a request does not guarantee indexing or improved rank.

Compare the first complete 28-day post-release Search Console window with September 2–29, preserving filters. Review the shared-laundry page's impressions, clicks, CTR, position, and query mix. Use GA4's useful-action events with verified external-session exclusions. Do not declare ranking growth, causal uplift, or SMART-goal completion from implementation alone.

Validation/release results will be appended below.

Local validation: `pnpm run check:ci` passed; final lint and type checks passed (six existing React Fast Refresh warnings). `pnpm run check:accessibility:browser`: 91 passed, three intentionally skipped by device scope. The focused analytics suite also passed. No dependency versions changed.

Release blocker found on preview `dpl_F8LQepZw2QyBFiKbntJtpExTCjZZ`: Vercel rejected TanStack Start 1.168.34 with `BLOCKED_PACKAGE`. The September 30 [official advisory GHSA-qx66-fv34-fjm8](https://github.com/TanStack/router/security/advisories/GHSA-qx66-fv34-fjm8) identifies React Start 1.168.60 and start-server-core 1.169.39 as patched versions. Updated React Start to exactly 1.168.60; the resolved server core is 1.169.39. This necessary release fix supersedes the preceding no-dependency-change statement. No Vercel security bypass was enabled.

Live collection check after the account change: navigating homepage → blog produced one observed `page_view` collection request to `G-G81H19S4TG`, with the blog location and title. GA4 Realtime showed an active user after the QA visit. September 6–October 3 landing-page report showed all three sessions landing on `/`.
