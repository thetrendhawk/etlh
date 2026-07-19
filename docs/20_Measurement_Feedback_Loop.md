# ETLH Measurement Feedback Loop

## Purpose

Turn the KPI definitions in `17_KPI_Baseline_and_Measurement.md` into a repeatable weekly and monthly review process. This specification defines what to record, how to compare periods, and how evidence can trigger a content decision.

It does not provide current metric values, invent targets, or authorize account changes. Missing data remains missing.

## Principles

1. Record observations before interpretations.
2. Compare complete, like-for-like periods with the same source, property, filters, and attribution rules.
3. Treat small samples as directional, not decisive.
4. Prefer a reversible content test over a large strategy change when evidence is weak.
5. Use several signals when possible; one metric rarely explains why performance changed.
6. Preserve pages that are useful and accurate even when traffic is low unless a separate consolidation or removal decision is approved.

## Source requirements

| Source                | Metrics used                                                                                         | Required context                                                                                                        |
| --------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Google Search Console | Impressions, clicks, CTR, average position, queries, pages                                           | Search type, date range, country/device/page/query filters, retrieval date, data freshness                              |
| GA4                   | Users, engaged sessions, engagement rate, average engagement time, landing pages, defined key events | Property, date range, channel/source filters, consent and internal-traffic limitations, event-definition effective date |
| Pinterest             | Outbound clicks, saves                                                                               | Account, date range, pin/destination, organic/paid scope where available                                                |
| Instagram             | Reach, saves, shares, profile visits, link activity                                                  | Account, date range, post identifier, metric definition available in the platform                                       |

Owner-authorized account access is required for all four sources. Repository access alone cannot retrieve or validate these reports.

## Weekly review

### Goal

Detect operational problems, measurement breaks, unusual changes, and near-term opportunities without making major strategy decisions from a partial week.

### Record

- date and reviewer;
- active production deployment and any material release during the period;
- Search Console indexing or sitemap errors;
- Search Console impressions and clicks for a rolling view, labeled as preliminary when data is incomplete;
- GA4 users, engaged sessions, landing pages, and defined key events;
- top new or materially changed queries and landing pages;
- Pinterest outbound clicks and saves for recently published packages;
- Instagram reach, saves, shares, profile visits, and link activity for recently published packages;
- tracking, consent, campaign, publication, refresh, outage, or internal-traffic notes;
- action required, owner required, or no action.

### Weekly comparison window

Use the latest complete seven-day period compared with the immediately preceding complete seven-day period for operational detection. Also inspect a trailing 28-day view to avoid reacting to a single volatile week.

Do not use a partial current day or incomplete Search Console data as a final comparison. For day-of-week-sensitive behavior, add the same weekdays from the prior period.

### Weekly actions

- Fix broken tracking, indexing, links, deployment, or destination issues promptly through the applicable workflow.
- Annotate material changes so later monthly comparisons are interpretable.
- Add a possible content opportunity to the research queue; do not publish or substantially rewrite solely from a weekly spike.
- Escalate owner-only account, legal, purchase, target, or brand decisions.

## Monthly review

### Goal

Make bounded editorial decisions from complete periods and enough context to distinguish a recurring signal from routine volatility.

### Record

#### Search Console

- total impressions, clicks, CTR, and average position;
- query and landing-page rows;
- ranking-band distribution where exported rows support it;
- pages gaining or losing sustained impressions/clicks;
- pages with impressions but weak CTR relative to their own prior periods and query mix;
- overlapping queries across multiple ETLH pages;
- indexing, canonical, or structured-data issues.

#### GA4

- users and engaged sessions by relevant channel;
- engagement rate and average engagement time;
- organic landing pages;
- defined key events and rates only after the event definition is verified;
- source/medium and campaign context for social and email traffic;
- known consent, internal-traffic, or implementation limitations.

#### Pinterest

- outbound clicks and saves by pin and destination;
- creative variants pointing to the same destination;
- packages with saves but no outbound clicks, or clicks but few saves;
- missing, incorrect, or weak destination relationships.

#### Instagram

- reach, saves, shares, profile visits, and link activity by post;
- content themes and formats associated with repeated saves or shares;
- profile/link activity after a post, without claiming causation from correlation alone;
- completeness of caption, hashtags, first comment, and alt text.

### Monthly comparison windows

Use:

1. the most recent complete calendar month versus the preceding complete calendar month;
2. the most recent complete calendar month versus the same month in the prior year only when a full comparable year exists;
3. a trailing three-month view for direction, while labeling content age and major releases.

For a newly published or materially refreshed page, preserve the publication/change date. Do not compare its partial first month as though it were a mature full month.

## Minimum-sample cautions

ETLH does not yet have enough historical evidence to define universal numeric thresholds. Use these safeguards until owner-approved thresholds are based on observed data:

- Do not diagnose CTR from a handful of impressions.
- Do not interpret average position without inspecting the query mix and impression count.
- Do not consolidate pages from one short or partial period.
- Do not treat a single social post as proof of a durable audience preference.
- Do not report a key-event rate when the event definition, denominator, or duplicate handling is unclear.
- Do not compare saves, reach, or clicks across formats without noting platform distribution and post age.
- Extend the review window when a page or channel package has too little activity to support a stable comparison.
- Mark decisions as **hold for more data** when the sample cannot support the proposed action.

## Decision rules

These rules identify when to investigate and what evidence should be checked. They are not automatic publishing instructions.

### Refresh

Consider a refresh when:

- a page has a sustained decline across complete comparable periods;
- facts, sources, products, prices, regulations, or advice may be stale;
- relevant queries reveal a missing reader question;
- engagement and search evidence suggest the page is not satisfying its intended task;
- the page fails current claims, proof, accessibility, metadata, image, or internal-link standards.

Before action, check indexing, canonical status, query mix, seasonality, content changes, SERP changes, and tracking changes.

### Expand

Consider expansion when:

- one page consistently earns impressions or engagement for a distinct sub-question it only partially answers;
- audience or social evidence repeatedly surfaces the same practical constraint;
- the new scope is distinct enough to avoid cannibalization;
- ETLH can provide evidence, original value, and maintenance capacity.

Expansion may mean improving the existing page rather than publishing a new article.

### Consolidate

Consider consolidation when:

- multiple pages answer the same primary intent;
- Search Console shows material query overlap and no defensible reader-task distinction;
- one stronger destination can preserve the useful content and links;
- redirect, metadata, internal-link, and sitemap consequences are planned.

Consolidation requires owner approval because it changes public inventory and URLs. Low traffic alone is not sufficient.

### Improve CTR

Consider title or description improvement when:

- a page has a meaningful, sustained impression sample;
- CTR is weak relative to its own prior complete periods or comparable query/page context;
- ranking position and query mix are stable enough to make the comparison useful;
- the search snippet promise can be improved without clickbait or exceeding the page's actual value.

Record the change date and evaluate only after another complete representative window.

### Improve internal links

Consider an internal-link pass when:

- an important page is isolated or has weak contextual inbound support;
- a supporting article does not lead to its cornerstone or next useful task;
- a new article changes the best reader path;
- multiple pages need clearer role differentiation;
- landing-page behavior suggests readers lack a useful next step, while recognizing that GA4 alone may not reveal link-level behavior.

Use varied, descriptive anchors and preserve reader usefulness.

### Leave unchanged

Leave a page unchanged when:

- evidence is insufficient or contradictory;
- performance is stable within normal variation;
- the page accurately serves a distinct task;
- a proposed change would be cosmetic rather than useful;
- another technical, indexing, claims, or measurement issue must be resolved first.

"No change" is a valid recorded decision, not a failure to act.

## Manual dashboard schema

Use one row per source, metric, entity, and complete period. Preserve prior rows.

| Field               | Description                                                                     |
| ------------------- | ------------------------------------------------------------------------------- |
| `record_id`         | Stable unique identifier                                                        |
| `review_type`       | Weekly or monthly                                                               |
| `period_start`      | Inclusive start date                                                            |
| `period_end`        | Inclusive end date                                                              |
| `retrieved_at`      | Retrieval date/time                                                             |
| `source`            | Search Console, GA4, Pinterest, or Instagram                                    |
| `property_account`  | Property/account label without credentials                                      |
| `entity_type`       | Site, query, landing page, article, pin, post, or campaign                      |
| `entity_id`         | URL, query, post ID, pin ID, or durable package ID                              |
| `metric`            | Exact platform metric name                                                      |
| `value`             | Observed value; blank when unavailable                                          |
| `unit`              | Count, percent, seconds, position, or other platform unit                       |
| `filters`           | Search type, channel, country, device, campaign, or other scope                 |
| `comparison_period` | Prior complete period used                                                      |
| `comparison_value`  | Observed prior value when available                                             |
| `change_note`       | Absolute/relative change with small-sample caution as needed                    |
| `evidence_location` | Export, screenshot, issue, or authorized report reference                       |
| `site_change_notes` | Publications, refreshes, deployments, tracking, consent, or outages             |
| `sample_caution`    | None, low sample, partial data, privacy filtering, or definition change         |
| `observation`       | Factual description of what changed                                             |
| `interpretation`    | Preliminary explanation, clearly labeled                                        |
| `decision`          | Refresh, expand, consolidate, improve CTR, improve links, leave unchanged, hold |
| `decision_owner`    | Owner or assigned reviewer                                                      |
| `next_review_date`  | Date for re-evaluation                                                          |

### Decision log schema

| Decision ID | Date | Entity | Evidence reviewed | Decision | Rationale | Owner approval | Change date | Review date | Outcome |
| ----------- | ---- | ------ | ----------------- | -------- | --------- | -------------- | ----------- | ----------- | ------- |
|             |      |        |                   |          |           |                |             |             |         |

## Review workflow

1. Export or record source data with complete context.
2. Add site and publishing annotations.
3. Identify observations without explaining them yet.
4. Apply sample-size and comparability cautions.
5. Inspect related metrics and technical conditions.
6. Record a preliminary interpretation.
7. Choose a reversible action, hold, or leave unchanged.
8. Obtain owner approval where public inventory, targets, accounts, purchases, or strategy are affected.
9. Record the implementation date.
10. Review after a complete representative window and retain the outcome.

## Account and configuration gates

Owner access or action is required to:

- export Search Console query, page, indexing, and enhancement reports;
- export GA4 landing-page, channel, engagement, and key-event reports;
- verify or define GA4 key events and internal-traffic rules;
- retrieve Pinterest and Instagram account insights;
- approve business targets, conversion definitions, and campaign priorities;
- change account settings, credentials, integrations, retention, consent, or billing.

No account or tracking configuration should be changed as part of routine reporting without a separate approved task.

## Definition of done

A review is complete when:

- all available values include source, scope, period, and retrieval date;
- missing metrics remain explicitly unavailable;
- comparisons use complete like-for-like periods;
- small samples and tracking limitations are visible;
- observations and interpretations are separated;
- each proposed action names its evidence and owner gate;
- no demand, traffic, conversion, audience, or causal claim has been invented;
- the next review date is recorded.
