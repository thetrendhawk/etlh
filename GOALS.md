# Eco Tiny Living Hub Goals

Version: 1.0
Status: Active — discovery and usefulness goal frozen
Owner: Eco Tiny Living Hub
Date: 2026-08-26

## Purpose

Maintain ETLH's current SMART goals separately from its durable operating foundation so measurable targets can change without rewriting the project's mission, values, or strategic identity.

## Goal-Setting Rules

Every major goal should include:

- a specific outcome;
- a verified baseline where practical;
- a measurable target;
- a deadline;
- leading indicators;
- an outcome metric;
- an evidence source;
- a decision threshold or interpretation rule;
- a status.

Activity metrics such as publishing cadence, article count, Reel count, carousel count, feature count, or workflow automation may support a goal but should not substitute for an outcome unless the activity itself is the intended result.

Once foundational capability is sufficient, additional building should count as progress only when it materially advances a defined outcome, tests an important assumption, protects a demonstrated capability, or resolves a genuine blocker.

## Decision Rule

At the end of a material goal period, assign one of the following decisions:

- **SCALE** — evidence is strong enough to justify materially greater investment.
- **CONTINUE** — evidence is encouraging or the experiment remains incomplete; maintain investment.
- **MODIFY** — the underlying opportunity remains plausible, but the current approach should change.
- **PAUSE** — expected future value no longer justifies the resources required relative to better opportunities.

A rigorous experiment that shows an assumption is wrong can still be a successful project outcome if it prevents larger future waste.

## Historical Foundation Review

Earlier ETLH planning primarily focused on establishing the brand, site, content system, and social foundation rather than defining numeric business outcomes. Current repository evidence as of 2026-08-26 supports the following reconciliation:

| Historical objective | Status | Evidence / interpretation |
| --- | --- | --- |
| Define ETLH philosophy and brand foundation | ACHIEVED | Canonical Operating Manual established mission, vision, audience, positioning, values, five pillars, and stepping-stone framework. |
| Make trust the central operating value | ACHIEVED | `Trust Is the Main Currency` is canonical. |
| Establish progress-over-perfection and teach-don't-preach principles | ACHIEVED | Both are canonical values and active content principles. |
| Make sustainability practical and budget-conscious | ACHIEVED AS POSITIONING | Explicitly embedded in the mission, audience definition, values, and content standards. |
| Establish durable repository documentation | ACHIEVED | Operating, Editorial, Research, Design, Publishing, Decision Log, KPI Baseline, and related operating documents are maintained in the repository. |
| Launch the production website | ACHIEVED | `https://ecotinylivinghub.com` is the canonical production site. |
| Expand from Pinterest into Instagram | ACHIEVED | Instagram is an established ETLH distribution channel. |
| Build an intentional Instagram content system | ACHIEVED | A repository-backed content queue and post packages exist. |
| Habit Friction posts 013–018 | OPEN / PROVISIONAL | These remain planning records and are correctly not represented as published. |
| Prove meaningful audience traction | NOT PREVIOUSLY DEFINED AS A NUMERIC GOAL | No sufficiently explicit historical outcome threshold was found. |
| Prove monetization or commercial sustainability | NOT PREVIOUSLY DEFINED AS A NUMERIC GOAL | No sufficiently explicit historical revenue threshold was found. |

## Current Goal Period

Target period: **2026-08-26 through 2026-11-30**.

### Strategic question

Can ETLH's practical, low-pressure sustainability content earn meaningful Google discovery and produce observable evidence that real visitors find the site useful?

## Measurement Baseline and Boundaries

ETLH's August analytics implementation changed materially several times. The canonical measurement history is maintained in `docs/17_KPI_Baseline_and_Measurement.md`.

For this goal:

- **Google Search Console** is authoritative for Google organic discovery and is independent of GA4 implementation changes.
- Exact current property-wide `.com` Search Console clicks, impressions, CTR, average position, and indexed-page totals were **not preserved in the repository at goal freeze**; unknown values remain unknown rather than estimated.
- PR #115 on **2026-08-13** documented that live Search Console query evidence existed and was already strong enough to guide a fridge/freezer content improvement.
- A historical GA4 email covering 2026-07-22 through 2026-08-18 reported 3 active users, 3 new users, 10 seconds average engagement, and 38 events, but that period spans changing analytics implementation and is **not** used as the clean goal baseline.
- PR #116 on **2026-08-23** corrected the production measurement ID and initializer and established current consent-gated action events. **2026-08-23 forward is the clean comparable GA4 era for this goal.**

The absence of a clean pre-goal numerical baseline is itself part of the experiment design. The target is fixed prospectively and will not be retrofitted after later account exports become available.

## SMART Goal 1 — Validate Organic Discovery and Useful Reader Action

**Objective:** Demonstrate that ETLH's existing content and editorial system can earn qualified Google discovery and prompt real visitors to take useful on-site actions without using publishing volume as the success metric.

### Primary discovery target

By **2026-11-30**, achieve **at least 15 Google Search Console clicks in a trailing 28-day window** on the canonical `ecotinylivinghub.com` property.

### Exposure condition

By **2026-11-30**, achieve **at least 500 Google Search Console impressions in a trailing 28-day window** on the canonical `.com` property.

This is a supporting exposure condition, not the primary outcome. A high-impression/low-click result should trigger a snippet, intent, ranking, or content-fit investigation rather than more publishing by default.

### Useful-action target

By **2026-11-30**, record **at least 3 verified qualifying on-site actions from at least 2 distinct external sessions** during the clean post-2026-08-23 GA4 era.

Qualifying actions are:

- `resource_open`;
- `resource_download`;
- `contact_email_click`.

`social_click` is tracked as an outbound-interest diagnostic but does **not** by itself satisfy the useful-action target because it does not prove that ETLH's site resource or contact pathway delivered value.

Exclude owner, QA, synthetic, preview, and known test traffic. If a clean exclusion cannot be established, annotate the limitation and do not count ambiguous events toward the threshold.

### Leading indicators

Review these as diagnostics, not substitute outcomes:

- Search Console impressions and clicks;
- CTR and average position where sample size supports interpretation;
- number of canonical pages receiving impressions;
- number of canonical pages receiving clicks;
- query and landing-page concentration;
- GA4 organic users and engaged sessions from the post-2026-08-23 era;
- `resource_open`, `resource_download`, and `contact_email_click` events;
- `social_click` events;
- Pinterest outbound clicks/saves and Instagram reach/saves/shares only after dated platform baselines are deliberately retrieved and recorded;
- known indexing, canonical, tracking, consent, or content-quality defects.

### Evidence sources

Use authoritative evidence in this order where applicable:

1. Google Search Console canonical `.com` property for Google organic impressions, clicks, queries, pages, and indexing context.
2. GA4 production reporting from the clean post-2026-08-23 measurement era for traffic and qualifying site actions.
3. Pinterest and Instagram native insights for platform-specific social metrics when owner-authorized evidence is deliberately retrieved.
4. Repository records for implementation dates, content inventory, deployments, and preserved goal history.

Do not treat missing metrics as zero unless the authoritative source was checked for the stated period and supports that conclusion.

## Decision Thresholds at 2026-11-30

### SCALE

Consider materially increasing investment in ETLH's search/distribution engine only if all of the following are true:

- at least **40 Search Console clicks** in the trailing 28 days;
- at least **1,500 Search Console impressions** in the trailing 28 days;
- at least **5 verified qualifying on-site actions** from at least **3 distinct external sessions**;
- no material tracking, indexability, content-integrity, or measurement defect explains the result.

A SCALE decision means increase investment carefully in the topics and formats producing evidence; it does not authorize indiscriminate content volume.

### CONTINUE

The goal is achieved at the CONTINUE level if all of the following are true:

- at least **15 Search Console clicks** in the trailing 28 days;
- at least **500 Search Console impressions** in the trailing 28 days;
- at least **3 verified qualifying on-site actions** from at least **2 distinct external sessions**;
- no material measurement defect makes the actions uninterpretable.

This justifies another bounded goal period. It does not by itself prove monetization or a scalable business.

### MODIFY

Modify the acquisition/content approach rather than simply publish more if any of the following applies:

- Search Console reaches **5–14 clicks** in the trailing 28 days;
- Search Console reaches at least **500 impressions** but remains below 15 clicks;
- discovery grows but qualifying on-site actions remain below target;
- a narrow set of pages or queries accounts for nearly all search visibility;
- a material snippet/CTR, search-intent, internal-link, indexing, content-quality, measurement, or resource-path problem is identified;
- social platform evidence becomes materially stronger than search evidence, suggesting the distribution thesis should be adjusted rather than forcing an SEO-only strategy.

Prefer reversible, evidence-led changes to existing pages and resource paths before expanding content breadth.

### PAUSE

Consider pausing major additional investment in the current search-led growth approach if, after at least **28 consecutive days** of clean post-2026-08-23 analytics and functioning canonical `.com` Search Console collection, all of the following remain true at the deadline:

- fewer than **5 Search Console clicks** in the trailing 28 days;
- fewer than **250 Search Console impressions** in the trailing 28 days;
- fewer than **2 verified qualifying on-site actions**;
- no unresolved material indexing, analytics, canonical, or technical defect explains the weak result.

If a measurement or indexing blocker prevents fair exposure, classify and resolve the blocker rather than using PAUSE to claim lack of audience demand.

## Execution Constraints

- There is **no article-count, Reel-count, carousel-count, or publishing-cadence quota** for this goal.
- Do not publish another broad overlapping renter-habits article merely to increase output; existing cannibalization and claims-repair findings remain relevant.
- Prefer query-led refreshes, claims repair, stronger reader paths, useful resources, and internal-link improvements before broad expansion.
- New content should require documented search evidence, audience evidence, a validated reader problem, or another approved strategic reason.
- Preserve ETLH's trust, accuracy, affordability, renter-awareness, and progress-over-perfection standards.
- Do not change the November 30 targets after observing results unless the goal is explicitly amended and the original thresholds remain preserved for audit.
- Pinterest and Instagram remain active distribution channels, but platform activity does not count as goal achievement until measured outcomes are retrieved from the platforms themselves.

**Status:** ACTIVE — frozen 2026-08-26.

## Review Cadence

- **2026-09-30:** first monthly evidence review; use the first complete post-fix measurement period available.
- **2026-10-31:** second monthly evidence review.
- **2026-11-30:** formal outcome review and SCALE / CONTINUE / MODIFY / PAUSE decision.
- Review interim leading indicators only when they support a specific decision or corrective action.
- Preserve completed goal periods so historical expectations and outcomes remain auditable.
