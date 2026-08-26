# ETLH KPI Baseline and Measurement Rules

Last reconciled: 2026-08-26
Status: Active

## Purpose

Create a durable, evidence-first record for organic visibility, site quality, reader behavior, and conversion signals without filling unknown fields with estimates.

This document defines what ETLH measures, where each number must come from, how snapshots are dated, and which current values are verified. Historical observations are preserved even when later implementation changes make them unsuitable as current baselines.

## Evidence rules

1. Every recorded value must include a source, measurement window, retrieval date, and scope.
2. Unknown, inaccessible, immature, or statistically weak values remain explicitly unreported.
3. Do not infer clicks from impressions, conversions from button events, rankings from isolated manual searches, or field performance from lab tests.
4. Search Console, GA4, Vercel, GitHub Actions, Lighthouse, Pinterest, Instagram, and external monitoring data must remain labeled by source because they measure different things.
5. Historical snapshots are append-only. Corrections must state what changed and why.
6. Personally identifiable information must not be copied into this baseline.
7. When analytics instrumentation changes, preserve an explicit effective date and do not compare unlike measurement eras as though tracking were stable.

## Measurement history and current state

### Historical verified snapshot — 2026-07-18

| Area | Metric | Verified value | Source and scope | Limitations |
|---|---|---:|---|---|
| Search discovery | Pages discovered | 27 | Google Search Console sitemap result recorded in roadmap issue #2 | Discovery is not the same as indexing or ranking. |
| Search discovery | Videos discovered | 0 | Google Search Console sitemap result recorded in roadmap issue #2 | Does not evaluate whether future video content could be indexed. |
| Production availability | Homepage response | HTTP 200 | Production validation after the then-current deployment | A single validation is not uptime monitoring. |
| URL identity | Preferred production host | `https://ecotinylivinghub.com/` | Production canonical and redirect checks | Does not report search-engine consolidation status. |
| Analytics implementation | GA4 state | Historical implementation, later superseded | Repository history | Later stream and initializer changes mean this is not a clean current analytics baseline. |
| Deployment | Hosting project | `eco-tiny-living-site` | Vercel project configuration | Deployment readiness is not an availability SLA. |

### Historical GA4 performance email — 2026-07-22 through 2026-08-18

A Google Analytics performance email received 2026-08-18 reported:

- active users: **3**;
- new users: **3**;
- average engagement time: **10 seconds**;
- events: **38**.

This observation is retained as **historical/diagnostic only**. It spans an analytics period in which ETLH changed streams and later corrected its production measurement ID and initializer. It must not be treated as the clean baseline for the active SMART goal or compared directly with post-fix event counts.

### Search Console evidence — August 2026

- On **2026-08-13**, PR #115 documented that current Search Console query evidence showed the fridge/freezer article receiving the strongest specific query signal available to the project, which justified a query-led content update.
- PR #115 also documented that the `sc-domain:ecotinylivinghub.com` Search Console property was associated with the ETLH Google Analytics property.
- A Search Console message reported that Google began collecting impressions for the legacy `https://ecotinylivinghub.thrwds.com/` property on **2026-08-15**. That legacy-property notice is evidence of search participation, not a canonical-domain performance total.
- Exact current property-wide `.com` Search Console clicks, impressions, CTR, average position, and indexed-page totals are **not preserved in the repository as of this reconciliation** and must not be invented.

Search Console is independent of GA4 instrumentation changes and remains the authoritative source for Google organic discovery.

### Analytics implementation timeline

ETLH's August analytics history contains several legitimate superseded states. They must remain visible rather than collapsed into one fictional continuous baseline.

| Effective date | State | Interpretation |
|---|---|---|
| 2026-07-15 | Initial documented manual SPA pageview implementation | Historical implementation; later found unreliable/non-reporting. |
| 2026-08-05 | Temporary verified stream `G-9BD6WKV3B7` used during troubleshooting | Historical diagnostic state; not current production source of truth. |
| 2026-08-13 | PR #115 returned collection to the original ETLH Analytics property/stream family and linked Search Console | Important continuity change, but later configuration correction means this is not the final clean boundary. |
| **2026-08-23** | PR #116 corrected the production measurement ID and initializer, centralized analytics behavior, and added consent-gated action events | **Current clean measurement boundary for goal-era GA4 comparisons.** |

### Current analytics source of truth

As of 2026-08-26, current production code in `src/lib/analytics.ts` defines:

- GA4 measurement ID: **`G-G81H19S4TG`**;
- production hostname: `ecotinylivinghub.com`;
- consent-gated analytics;
- manual `page_view` events with duplicate-path suppression;
- tracked action event names: `resource_open`, `resource_download`, `contact_email_click`, and `social_click`.

Repository code and automated checks are authoritative for the active implementation identifier. Historical documents that name prior stream IDs describe superseded states and should be labeled as such rather than treated as current configuration.

## Clean goal-era baseline policy

For the 2026-08-26 through 2026-11-30 SMART goal:

- **Google Search Console:** use authoritative `.com` property data for discovery metrics regardless of the GA4 measurement boundary, preserving date range and filters.
- **GA4:** use **2026-08-23 forward** as the clean comparable measurement era for site actions and traffic. Earlier data remains historical context only.
- **Social platforms:** Pinterest and Instagram platform metrics remain diagnostic until a dated owner-authorized baseline is deliberately recorded. Do not infer platform performance from repository publication records alone.
- **Actions:** exclude owner, QA, synthetic, preview, and known test events where possible. If exclusion cannot be proven, annotate the limitation and do not overstate the result.

## Measurement register

Use one dated row per reporting period. Do not overwrite prior periods.

| Period start | Period end | Retrieval date | Source | Property/view | Metric | Value | Scope/filter | Evidence location | Notes |
|---|---|---|---|---|---|---:|---|---|---|
| 2026-07-18 | 2026-07-18 | 2026-07-18 | Search Console | ETLH sitemap | Pages discovered | 27 | Sitemap | Roadmap issue #2 | Historical discovery snapshot; not indexing total. |
| 2026-07-22 | 2026-08-18 | 2026-08-18 | GA4 performance email | ETLH property | Active users | 3 | Email summary | Google Analytics email | Historical/diagnostic; spans changing instrumentation. |
| 2026-07-22 | 2026-08-18 | 2026-08-18 | GA4 performance email | ETLH property | Events | 38 | Email summary | Google Analytics email | Historical/diagnostic; not comparable to post-2026-08-23 action events. |
| 2026-08-23 | ongoing | 2026-08-26 reconciliation | Repository implementation | Production GA4 | Measurement boundary | Active | `ecotinylivinghub.com` | PR #116; `src/lib/analytics.ts` | Clean goal-era GA4 comparisons begin here. |

## Search visibility

### Required Search Console metrics

- Valid indexed pages and excluded/not-indexed pages.
- Total web-search impressions and clicks.
- CTR and average position, retained as Search Console aggregates rather than treated as exact rankings.
- Query and page performance, with brand/non-brand classification only when the classification rule is documented.
- Ranking bands derived from exported query rows: positions 1–3, 4–10, 11–20, 21–50, and 51+.
- Sitemap discovery and processing status.
- Structured-data enhancement status when available.

### Search reporting safeguards

- Use complete date ranges and record Search Console's data freshness.
- Preserve the selected property, search type, country, device, and page/query filters.
- Do not mix the legacy `.thrwds.com` property with canonical `.com` property totals.
- Do not compare partial current periods with complete prior periods.
- Do not call a URL indexed solely because it appears in a site search or sitemap.
- Small query sets may be privacy-filtered or omitted by Google; totals and exported rows may not reconcile exactly.

## Reader and conversion behavior

### Required GA4 metrics

From the clean post-2026-08-23 measurement era:

- organic sessions and users;
- landing pages for organic sessions;
- engaged sessions, engagement rate, and average engagement time;
- `resource_open` and `resource_download` events;
- `contact_email_click` events;
- `social_click` events as outbound-interest interactions rather than downstream social conversions.

### Conversion safeguards

A click or open is not automatically a business conversion. Each claimed conversion metric requires:

- a named user outcome;
- a verified event trigger;
- a success-state definition;
- hostname and internal-traffic rules;
- duplicate-event controls;
- a documented effective date.

Until those conditions are met, report ETLH's tracked events as **useful interactions** rather than revenue or subscriber conversions.

## Site quality and delivery

### Required technical measures

- CI pass/fail for the frozen-lockfile required suite.
- Lighthouse mobile and desktop lab results, identified as lab data.
- Field LCP, CLS, and INP only when sufficient real-user data exists.
- Production deployment state and exact commit SHA.
- Production smoke-test results.
- Runtime error counts and affected routes, when the observability source is available.
- External uptime and response-time data after a monitor is deliberately selected and configured.

### Lab versus field data

Lighthouse is useful for regression detection but cannot substitute for field Core Web Vitals. Field values remain unreported until the relevant source has enough traffic and a clearly defined reporting window.

## Channel attribution

Track Pinterest, Instagram, email/download, direct, referral, and organic search separately when reliable source/medium data exists.

Do not infer channel performance from follower counts, likes, saves, or platform reach alone. A channel package should use tagged destination URLs when practical, with a documented naming convention and no sensitive data in URL parameters.

Recommended UTM fields:

- `utm_source`: platform or partner;
- `utm_medium`: organic-social, email, referral, or another documented medium;
- `utm_campaign`: durable content or campaign identifier;
- `utm_content`: optional creative/package identifier.

## Reporting cadence

- Weekly: operational failures, deployment health, critical runtime errors, tracking breaks, and unexpected traffic anomalies when data access exists.
- Monthly: search visibility, landing pages, engagement, useful interactions, referral traffic, social platform evidence when authorized, and content changes.
- Quarterly: cluster-level performance, content refresh decisions, measurement-definition review, and target-setting by the owner.

Cadence does not authorize invented targets or automatic strategic changes.

## Baseline completion checklist

A reporting period is complete only when:

- [ ] Dates, retrieval date, source, property, and filters are recorded.
- [ ] Unknown metrics remain blank or explicitly unreported.
- [ ] Partial periods are labeled.
- [ ] Instrumentation-era changes are labeled.
- [ ] Lab and field measurements are separated.
- [ ] Interactions and verified conversions are separated.
- [ ] Material site, tracking, consent, or content changes are noted.
- [ ] Evidence is stored in a durable repository location or linked issue/PR record.
- [ ] No private credentials, personal data, or unsupported conclusions are included.

## External limitations and owner gates

The following cannot be completed from repository evidence alone:

- current Search Console indexing and performance exports require authorized property access;
- current GA4 traffic, landing-page, event, and referral reports require authorized analytics access;
- Pinterest and Instagram performance require authorized platform insights;
- conversion definitions may require owner confirmation of the intended business outcome;
- external uptime monitoring requires selecting and configuring a provider;
- material changes to approved targets require an explicit goal amendment rather than silent revision.
