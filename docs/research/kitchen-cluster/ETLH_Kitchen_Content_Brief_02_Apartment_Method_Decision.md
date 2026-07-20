# Content brief: apartment food-scrap method decision

## Status

- **Brief ID:** ETLH-KITCHEN-02
- **Reader job:** Apartment composting method decision
- **Published route:** `/blog/choose-apartment-food-scrap-method`
- **Publication date:** 2026-07-20
- **Category:** Zero-Waste Kitchen
- **Decision:** Proceed. The reader problem, source support, and route purpose are independent of the existing troubleshooting article.

## Evidence and overlap audit

### Reader problem

A renter wants to divert food scraps but does not know whether building collection, a verified drop-off, a private service, temporary storage plus handoff, active processing, or no system fits their apartment.

### Existing-route audit

| Route | Primary reader problem | Relationship to this article | Decision |
| --- | --- | --- | --- |
| `/blog/zero-waste-kitchen-ideas-tiny-apartments` | An existing indoor food-scrap container smells, leaks, or attracts fruit flies. | Troubleshooting after a route exists. | Link to it as the next step; do not repeat its symptom table. |
| `/blog/low-waste-kitchen-tips-chef-habits` | Use food more fully before disposal. | Upstream food-use routine. | No direct factual dependency. |
| `/blog/zero-waste-pantry-organization-small-apartments` | Food visibility and pantry organization. | Adjacent storage task, not a diversion decision. | No link needed for this decision path. |
| `/blog/zero-waste-kitchen-budget-9-swaps` | Evaluate kitchen replacements and swaps. | Purchase-timing guidance. | Do not position as a diversion method. |

**Differentiation conclusion:** The new article begins with destination verification and separates temporary storage, collection, handoff, active processing, finished-compost handling, and appliance treatment. The existing route begins only when a staging setup is already failing. These are distinct reader jobs and search intents.

## Authoritative source record

| Source | Used for | Boundary |
| --- | --- | --- |
| [U.S. EPA: Approaches to Composting](https://www.epa.gov/sustainable-management-food/approaches-composting) | Collection models; private haulers and drop-offs; pre-processing distinction. | Does not establish availability or acceptance rules at a particular address. Checked 2026-07-20. |
| [U.S. EPA: Composting at Home](https://www.epa.gov/recycle/composting-home) | Managed aerobic composting definition; residential grinder/dehydrator output is not compost. | Does not endorse an appliance, specify building rules, or create a local disposal route. Checked 2026-07-20. |
| [Washington State University Extension: Bokashi](https://extension.wsu.edu/kitsap/bokashi-composting/) | Bokashi as sealed anaerobic fermentation; output requires a finishing step. | Does not establish that soil burial or a finishing route is permitted for a given renter. Checked 2026-07-20. |
| Kitchen-cluster first-hand evidence records `C1-001`, `C1-007`, `N-004`, `N-016`, `N-021`, and `N-026` | Problem framing: limited space, odor concern, transfer cadence, and household constraints. | Not used for technical, service, legal, product, or prevalence claims. |

## Claims boundaries

- No claim that a freezer, bucket, appliance, pickup bin, or drop-off is itself composting.
- No national, municipal, lease, or service-availability claim.
- No odor, pest, convenience, savings, water, energy, environmental, or renter-suitability promise.
- No product recommendations, rankings, affiliate links, or price claims.
- Appliance output is described only with EPA's category-level distinction; manufacturer-specific operation belongs in the next article.
- Bokashi is included only with its required downstream finishing route.

## Structure and internal links

1. Destination-first check.
2. System-step distinctions.
3. Route comparison.
4. Apartment fit questions.
5. Valid no-system outcome.
6. Link to odor/fruit-fly troubleshooting when a working route needs troubleshooting.
7. Mention the approved appliance framework without linking to an unpublished route; add that internal link only after the sequential article is live.

## Asset record

- Reviewed approved illustrative asset `src/assets/cat-kitchen.jpg` (A02 in the site asset inventory).
- Reused as an illustrative category image only; it is not documentary evidence of a food-scrap setup.
- Alt text: “Illustrative small kitchen shelves with dry ingredients stored in assorted clear jars.”
- Generated images: 0.
- Source image library before: 16 files, 2,197.3 KiB. After: 16 files, 2,197.3 KiB.
- Emitted image references before/after: no new image file and no new asset bytes; the reused asset was already emitted by the category card.
- Asset gap recorded: no approved, non-endorsing visual that demonstrates the decision flow. The article uses accessible HTML tables instead.

## Publication and verification plan

Run `bun install --frozen-lockfile`, `bun run check:ci`, browser accessibility checks, preview verification, and the production smoke check after the merged deployment. Verify title, canonical, Article JSON-LD, TOC, tables, internal links, sitemap, robots, alt text, keyboard-focusable horizontal table regions, mobile overflow, and prohibited claim families.
