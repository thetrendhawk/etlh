# ETLH KPI Baseline and Measurement Rules

## Purpose

Create a durable, evidence-first record for organic visibility, site quality, reader behavior, and conversion signals without filling unknown fields with estimates.

This document defines what ETLH measures, where each number must come from, how snapshots are dated, and which current values are verified. It is not a performance claim and does not establish targets that the owner has not approved.

## Evidence rules

1. Every recorded value must include a source, measurement window, retrieval date, and scope.
2. Unknown, inaccessible, immature, or statistically weak values remain explicitly unreported.
3. Do not infer clicks from impressions, conversions from button events, rankings from isolated manual searches, or field performance from lab tests.
4. Search Console, GA4, Vercel, GitHub Actions, Lighthouse, and external monitoring data must remain labeled by source because they measure different things.
5. Historical snapshots are append-only. Corrections must state what changed and why.
6. Personally identifiable information must not be copied into this baseline.

## Current verified baseline

Snapshot date: July 18, 2026.

| Area | Metric | Verified value | Source and scope | Limitations |
|---|---|---:|---|---|
| Search discovery | Pages discovered | 27 | Google Search Console sitemap result recorded in roadmap issue #2 | Discovery is not the same as indexing or ranking. |
| Search discovery | Videos discovered | 0 | Google Search Console sitemap result recorded in roadmap issue #2 | Does not evaluate whether future video content could be indexed. |
| Production availability | Homepage response | HTTP 200 | Production validation after the latest merged deployment | A single validation is not uptime monitoring. |
| URL identity | Preferred production host | `https://ecotinylivinghub.com/` | Production canonical and redirect checks | Does not report search-engine consolidation status. |
| Analytics implementation | GA4 property tag | `G-G81H19S4TG` | Repository and roadmap configuration | Implementation does not prove traffic volume or data completeness. |
| Analytics implementation | Consent behavior | Consent-gated; `.com` hostname restricted | Repository and production validation | Consent rates and analytics coverage are not yet recorded. |
| Deployment | Hosting project | `eco-tiny-living-site` | Vercel project configuration | Deployment readiness is not an availability SLA. |

No verified baseline is currently recorded here for indexed pages, impressions, clicks, CTR, average position, ranking bands, organic landing-page sessions, conversions, referral traffic, field Core Web Vitals, or external uptime.

## Measurement register

Use one dated row per reporting period. Do not overwrite prior periods.

| Period start | Period end | Retrieval date | Source | Property/view | Metric | Value | Scope/filter | Evidence location | Notes |
|---|---|---|---|---|---|---:|---|---|---|
| | | | | | | | | | |

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
- Preserve the selected search type, country, device, and page/query filters.
- Do not compare partial current periods with complete prior periods.
- Do not call a URL indexed solely because it appears in a site search or sitemap.
- Small query sets may be privacy-filtered or omitted by Google; totals and exported rows may not reconcile exactly.

## Reader and conversion behavior

### Required GA4 metrics

- Organic sessions and users.
- Landing pages for organic sessions.
- Engaged sessions, engagement rate, and average engagement time.
- Internal CTA events and outbound referral events only when event definitions are documented.
- Email/download conversions only after the destination, success condition, and duplicate-event handling are verified.
- Consent acceptance and analytics coverage only if a privacy-safe implementation exposes reliable aggregate data.

### Conversion safeguards

A click is not automatically a conversion. Each conversion metric requires:

- a named user outcome;
- a verified event trigger;
- a success-state definition;
- hostname and internal-traffic rules;
- duplicate-event controls;
- a documented effective date.

Until those conditions are met, report the event as an interaction rather than a conversion.

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

- Weekly: operational failures, deployment health, critical runtime errors, and unexpected traffic anomalies when data access exists.
- Monthly: search visibility, landing pages, engagement, interactions/conversions, referral traffic, and content changes.
- Quarterly: cluster-level performance, content refresh decisions, measurement-definition review, and target-setting by the owner.

Cadence does not authorize invented targets or automatic strategic changes.

## Baseline completion checklist

A reporting period is complete only when:

- [ ] Dates, retrieval date, source, property, and filters are recorded.
- [ ] Unknown metrics remain blank or explicitly unreported.
- [ ] Partial periods are labeled.
- [ ] Lab and field measurements are separated.
- [ ] Interactions and verified conversions are separated.
- [ ] Material site, tracking, consent, or content changes are noted.
- [ ] Evidence is stored in a durable repository location or linked issue/PR record.
- [ ] No private credentials, personal data, or unsupported conclusions are included.

## External limitations and owner gates

The following cannot be completed from repository evidence alone:

- Search Console indexing and performance exports require authorized property access.
- GA4 traffic, landing-page, event, and referral reports require authorized analytics access.
- Conversion definitions may require owner confirmation of the intended business outcome.
- External uptime monitoring requires selecting and configuring a provider; paid purchase or account changes require owner approval.
- Performance targets, traffic goals, and business KPIs are owner decisions and must not be invented.
