# ETLH Category Page Experience Audit

## Purpose

Audit the four public category routes as reader journeys, not merely article indexes. This document records current introductions, source-order behavior, promise and visual risks, missing next steps, internal-link opportunities, and a future implementation sequence.

## Scope and boundary

Audited on July 19, 2026 against `main` at `2da9d9d`:

- `src/routes/category.$slug.tsx`;
- category and post records in `src/lib/posts.ts`;
- presentation repair in `src/lib/postPresentation.ts`;
- `PostCard`, homepage category treatment, metadata, current claims inventory, cluster evidence packet, and internal-linking map;
- all 14 current articles and repository image assets.

The current cluster evidence is preliminary and external Perplexity research is still pending. This audit therefore does **not** select cornerstones, lock clusters, reorder public articles, change introductions, or publish category-page work.

## Current shared category template

Every `/category/$slug` route currently renders:

1. a `Category` label;
2. the category name;
3. one introduction paragraph from `src/lib/posts.ts`;
4. a flat grid of article cards in `posts` source order;
5. the global footer.

### Shared strengths

- Category names and introductions are visible and indexable.
- Cards include category, date, title, excerpt, and image.
- Responsive two/three-column layout is simple and consistent.
- Empty and unknown category states are handled.
- Canonical, title, description, Open Graph title/description/URL, and Twitter title/description are supplied.

### Shared limitations

- There is no explicit “start here,” featured article, supporting path, task grouping, or article-role label.
- Order is inherited from the global `posts` array, not a documented reader-journey decision.
- Cards are visually equal even when claims, scope, evidence quality, and overlap differ materially.
- No category-specific hero, instructional overview, Open Graph image, or Twitter image is defined.
- There is no contextual next step after the grid, no relevant resource, and no cross-category path.
- Category pages do not explain whether an article is a primer, plan, comparison, checklist, or deeper guide.
- The grid repeats article images that often contain embedded text, obsolete branding, unsupported claims, or inaccessible crops.
- The template cannot currently promote a repaired presentation title/hero consistently in every relationship unless each card passes through the presentation layer; current cards do, but source-order and related-link logic still operate on source posts.
- The page feels complete only when the article inventory itself is clear. A larger grid can still feel thin when items overlap or overpromise.

## Route 1 — Zero-Waste Kitchen

### Current route

`/category/zero-waste-kitchen`

### Current introduction

> Practical zero waste kitchen ideas for renters: composting in tiny spaces, plastic-free pantry swaps, and reducing food waste without a backyard or a big budget.

### Current article order

1. `zero-waste-pantry-organization-small-apartments` — **Zero Waste Pantry Organization for Small Apartments (Before & After)**
2. `low-waste-kitchen-tips-chef-habits` — **Low Waste Kitchen Tips: 11 Habits Chefs Use to Cut Food Waste**
3. `zero-waste-kitchen-budget-9-swaps` — **Zero Waste Kitchen on a Budget: 9 Simple Swaps That Actually Save Money**
4. `zero-waste-kitchen-ideas-tiny-apartments` — **Zero Waste Kitchen Ideas for Tiny Apartments**

### Reader journey

The page begins with the highest-proof-risk article, moves to an authority-led list, then a savings-led swap list, and ends with the shortest general small-kitchen primer. A reader new to the topic receives promises before orientation. There is no path for a reader whose main constraint is no pantry, food visibility, cost uncertainty, compost access, or renter control.

### Cornerstone/support clarity

Unclear. Preliminary repository documents identify the chef-habits article as a possible broad food-use destination, but “Chefs Use” and associated claims need evidence or reframing. The pantry article has a distinct visibility/rotation task but cannot function as proof while its before/after framing is unsupported. The tiny-apartment article could be a beginner primer but appears last and may overlap the others.

No cornerstone should be selected until Perplexity evidence and claims readiness are reviewed.

### Weak or missing next steps

- No “start with food visibility” or “start with your space constraint” entry point.
- No direct path to a weekly use-first/rotation tool.
- No distinction between no-purchase food-use systems and product swaps.
- No local-rule/safety cue for composting, food storage, date labels, or bulk purchasing.
- No lower-effort fallback when a four-article grid feels too broad.

### Visual repetition

- First three cards use matching beige/green portrait Pinterest graphics with large embedded claims and similar jar/plant imagery.
- The three graphics read as one promotional campaign rather than distinct reader tasks.
- Their embedded text is clipped in the 16:10 card crop.
- `ZeroWastePin1.webp` and `ZeroWastePin3.webp` use undocumented before/after framing; all three contain unsupported outcome language.
- The final `post-kitchen.jpg` is a generic herb/jar image and does not explain a no-pantry setup.

### Internal-link opportunities

Subject to claims repair and cluster review:

- orient from the tiny-apartment primer to food visibility, pantry zoning, and conditional swap evaluation;
- route from pantry organization to a food-use system, not only containers;
- route from the chef/food-use article to the pantry rotation and budget-decision tasks;
- route from the budget-swaps article back to use-what-you-have and food-waste prevention;
- connect a future food-use rotation resource from the most relevant section, not every card.

These are reader-task connections, not final hierarchy or anchor text.

### Misleading or outdated promises

- “Before & After” lacks documentary evidence.
- “Chefs Use” requires credible support or neutral framing.
- “Actually Save Money” is unqualified.
- Stored graphics promise money/time savings, a healthier/calmer home, less stress/waste, food safety/nutrition, and a better planet.
- The introduction's “zero waste” and “without…a big budget” framing may overstate what four current articles substantiate.

### Complete or thin?

**Visually full, experientially unresolved.** Four cards suggest coverage, but the journey depends on proof-risk articles, repeated promotional images, and overlapping lists. The page lacks a safe beginner path and practical next action.

### Recommended future implementation sequence

1. Repair proof, authority, savings, safety, and environmental claims.
2. Replace Pinterest graphics with article-specific website assets and accurate alt text.
3. Review Perplexity evidence and decide the retained role of each article.
4. Choose the start-here path and any cornerstone only after steps 1–3.
5. Group articles by reader task: orient, make food visible, build a food-use routine, evaluate purchases.
6. Add contextual links and the approved food-use rotation resource.
7. Add a category-specific instructional/OG asset only if it improves orientation.
8. Validate mobile order, card crops, metadata, links, accessibility, and exact-head preview.

## Route 2 — Small-Space Eco Decor & Storage

### Current route

`/category/small-apartment-decor`

### Current introduction

> Eco friendly small apartment decor on a budget — thrifted finds, renter-safe upgrades, sustainable storage solutions, and cozy styling that doesn't cost the earth.

### Current article order

1. `sustainable-tiny-living-room-layout-ideas` — **Sustainable Tiny Living Room: Layout and Styling Ideas for Small Spaces**
2. `eco-friendly-small-apartment-weekend-checklist` — **Eco Friendly Small Apartment Checklist You Can Tackle in a Weekend**
3. `sustainable-small-apartment-decor-before-after` — publicly presented as **Sustainable Small Apartment Decor: A Practical Room Reset Plan**
4. `eco-friendly-small-apartment-decor-budget` — **Eco Friendly Small Apartment Decor on a Budget**

### Reader journey

The first article offers a room-specific layout task, then the page moves to a broad weekend checklist, a repaired illustrative reset plan, and a sourcing/budget guide. This is closer to a useful progression than the other multi-article categories, but the page does not explain the differences. “Layout,” “weekend checklist,” “room reset,” and “decor on a budget” can appear like four versions of the same promise.

### Cornerstone/support clarity

Preliminary documents identify the living-room layout article as a possible broad destination and the others as reset, proof/reframing, and sourcing support. That remains unconfirmed. The repaired room-reset presentation is safer than its legacy slug/source record, but it should not be promoted as documentary proof. Final hierarchy is blocked on Perplexity research and article-role review.

### Weak or missing next steps

- No “measure first,” “reset without buying,” or “evaluate a purchase” path.
- No layout diagram, room-planning aid, sourcing checklist, or renter-permission decision aid.
- No explanation of which guide fits one room versus a whole apartment.
- No path from inspiration to a bounded test and review.
- No warning that costs, availability, lease rules, household safety, and room dimensions vary.

### Visual repetition

- `DecorPin2.webp` and `DecorPin3.webp` share polished beige/sage rooms, plants, large promotional text, and unsupported claims.
- The repaired room-reset card uses `cat-decor.jpg`, also used by the homepage category card.
- The budget-decor article uses `post-decor.jpg`, which visibly carries a Midjourney mark while the alt calls its vase thrifted.
- All four visuals emphasize styled rooms or objects; none explains dimensions, circulation, condition, or a decision.

### Internal-link opportunities

Subject to research and claims readiness:

- living-room layout → measured room plan and sourcing criteria;
- weekend checklist → no-purchase room reset and friction-reduction concept;
- practical room reset → layout principles and conditional sourcing guide;
- budget decor → measurement/purchase pause and a no-purchase reset alternative;
- category page → approved room-reset planning sheet after the file exists.

### Misleading or outdated promises

- The category introduction uses broad “eco friendly,” “renter-safe,” “sustainable storage,” and “doesn't cost the earth” claims without conditions.
- Current Pinterest graphics claim air purification, mood, health, energy/money savings, reduced waste, and universal layout outcomes.
- The legacy source slug/title/asset for the repaired room-reset article still carries before/after history; public presentation is repaired but cleanup remains.
- The budget-decor hero's “thrifted” alt is unsupported and the Midjourney watermark is visible.

### Complete or thin?

**Moderate inventory, weak differentiation.** Four articles cover plausible tasks, but the page reads as repeated styling inspiration. It lacks measured planning, condition/sourcing criteria, and a clearly labeled no-purchase start.

### Recommended future implementation sequence

1. Remove the watermarked/misdescribed hero and replace remaining promotional Pinterest graphics.
2. Repair universal sustainability, safety, cost, plant, material, and outcome claims.
3. Review external evidence and define distinct roles: layout, bounded reset, planning sequence, sourcing.
4. Choose the start-here path/cornerstone only after role confirmation.
5. Add task labels and a “measure/plan before buying” journey.
6. Add the approved small-room planning sheet and contextual links.
7. Consider a category-specific measured/illustrative overview, not another styled room.
8. Validate route presentation, old-slug expectations, mobile cards, metadata, and accessibility.

## Route 3 — Budget-Friendly Sustainable Habits

### Current route

`/category/eco-habits-budget`

### Current introduction

> Low waste lifestyle habits for small spaces. Simple, beginner-friendly routines and swaps that build a sustainable living apartment without overwhelm.

### Current article order

1. `low-waste-lifestyle-tips-beginners` — **15 Low Waste Lifestyle Tips You Can Start This Week**
2. `easy-sustainable-habits-on-a-budget` — **21 Easy Sustainable Habits on a Budget (Perfect for Renters)**
3. `sustainable-living-apartment-easy-habits` — **Sustainable Living in an Apartment: 10 Easy Habits That Don’t Feel Extreme**
4. `small-apartment-eco-upgrade-checklist` — **30-Day Small Apartment Eco-Upgrade Checklist (Under 100 Dollars)**
5. `beginner-sustainable-living-checklist-renters` — **Beginner Sustainable Living Checklist for Renters**

### Reader journey

The page presents five overlapping list formats in descending source chronology, not a beginner progression. The explicitly beginner-focused article appears last, after lists of 15, 21, 10, and 30 actions. There is no route based on renter control, time, use-what-you-have, permission, local services, or purchase timing.

### Cornerstone/support clarity

Unclear and high-risk. Preliminary documents identify the 21-habit article as a possible broad hub, the 15-tip article as low-waste support, the 10-habit article as reposition/consolidation candidate, the 30-day article as a pacing format, and the beginner checklist as a short entry. No public page communicates these roles, and several titles/claims must be repaired first. Final decisions require Perplexity evidence and owner approval.

### Weak or missing next steps

- No genuinely small starting point despite “beginner-friendly” introduction.
- No distinction between no-purchase habits, maintenance, local-service actions, and product replacements.
- No “not controlled by renter,” “needs permission,” or “not applicable” path.
- No method to choose one action from 81 nominal list items across five articles.
- No starter sheet or review step.

### Visual repetition

- First three cards use similar green/cream portrait sustainability graphics with icons and large embedded claims.
- `SustainablePin1.webp` is reused by the 10-habit article and the separate Intentional Living article.
- Last two articles reuse `post-checklist.jpg`; the beginner article's alt describes a hand/checklist/coffee that are absent.
- The card grid therefore contains both visual sameness and a literal duplicate.

### Internal-link opportunities

Subject to external research and consolidation decisions:

- beginner checklist → one broader renter guide and one narrow low-waste next step;
- 15-tip article → broader renter context plus starter path;
- 21-habit article → distinct low-waste, renter-control, and paced-plan tasks;
- 10-habit article → broader guide only if repositioned around utilities/building constraints;
- 30-day plan → broad context and smaller fallback;
- category page → Eco Step starter sheet after the resource exists.

Avoid reciprocal linking that treats all five broad lists as equally necessary.

### Misleading or outdated promises

- “Perfect for Renters,” “Easy,” “Don’t Feel Extreme,” “Under 100 Dollars,” and “without overwhelm” are broad or subjective promises.
- Stored graphics assert saved money, lower bills, cleaner/happier home, improved mood/air, ethical brands, and a better planet.
- The current full/inline email forms repeat the nonexistent 30-day download and under-$100 total on article pages.
- “Swaps” can imply buying is the expected path, conflicting with the use-what-you-have direction.

### Complete or thin?

**Overfull but functionally thin.** Five articles create quantity without clear progression. Overlap, repeated visuals, and list length make the category harder—not easier—to navigate.

### Recommended future implementation sequence

1. Repair the nonexistent email/download and fixed-price public promise.
2. Correct false alt text and replace repeated/promotional heroes.
3. Review claims and map every action by renter control, purchase timing, local dependency, and distinct reader task.
4. Reconcile Perplexity evidence and decide retain/reposition/consolidate roles.
5. Select a short start-here path and broader hub only after step 4.
6. Group the category into start small, low-waste focus, renter-controlled systems, and paced implementation as supported by retained articles.
7. Add contextual links and the approved Eco Step starter sheet.
8. Validate redirects if consolidation is approved; otherwise verify card order, metadata, accessibility, and mobile flow.

## Route 4 — Intentional Living

### Current route

`/category/intentional-living`

### Current introduction

> Gentle ways to reduce unnecessary friction, make everyday routines feel lighter, and build a home life that supports what matters.

### Current article order

1. `why-life-feels-harder-than-it-needs-to-sometimes` — **Why Life Feels Harder Than It Needs To Sometimes**

### Reader journey

The page offers one broad concept article and no same-category continuation. The article defines friction and suggests small setup changes, but the category page cannot show how the concept connects to a kitchen, entryway, room reset, renter habit, or practical worksheet.

Intentional Living is also omitted from the homepage's three-category “Start where life feels heavy” card set even though its only article currently appears first in the latest-post list.

### Cornerstone/support clarity

The only article may define an ETLH-wide concept, but one page is not enough evidence to declare a search or content cornerstone. It has no same-category support inventory and unclear search intent in repository documents. External research and owner positioning are required before expansion.

### Weak or missing next steps

- No same-category related card.
- No practical start-here worksheet or linked example.
- No category-level explanation of how friction relates to sustainable small-space decisions.
- No path by room/routine.
- No homepage category card.

### Visual repetition

- The only article uses `SustainablePin1.webp`, the same generic “10 Easy Habits” graphic used by an Eco Habits article.
- The graphic does not visualize friction and embeds money, wellbeing, and planetary claims.
- The category therefore has no unique visual identity or useful explanatory asset.

### Internal-link opportunities

Without creating a new cluster, the concept article could eventually link to current practical examples:

- food visibility/use-first setup;
- a bounded room reset;
- a beginner renter action;
- a doorway or landing-zone system.

Relevant implementation articles could link back when they genuinely use the friction framework. These cross-category links should not manufacture same-category depth.

### Misleading or outdated promises

- “Feel lighter” is subjective and should not be presented as a guaranteed emotional or mental-health result.
- The article hero's sustainability claims do not match the article and may imply wellbeing outcomes.
- The article's behavior-change explanation requires careful sourcing and should not be treated as clinical advice.

### Complete or thin?

**Thin.** One article, no same-category support, no unique visual, and no practical next step. The page is navigable but not yet a category experience.

### Recommended future implementation sequence

1. Replace the mismatched reused hero and verify behavior/wellbeing claims.
2. Add the Eco Step starter resource only after it exists and delivery is verified.
3. Add selective cross-category practical links to current articles where useful.
4. Review Perplexity evidence and owner brand/search intent before adding or moving content into this category.
5. Decide whether Intentional Living remains a category, becomes a brand framework, or receives distinct supporting content.
6. Only then decide homepage representation, category intro changes, or category-specific assets.
7. Verify navigation, related paths, metadata, accessibility, and mobile presentation.

## Cross-category opportunities that do not require cluster selection

The following foundation work improves current pages without deciding a cluster:

1. Correct false alt text and remove misleading/obsolete website graphics.
2. Separate website hero/card assets from Pinterest/Instagram packaging.
3. Add a reusable article-role label only after each current article's role is reviewed.
4. Add renter-control, location-dependency, and purchase-timing language patterns.
5. Repair the current nonexistent/fixed-price email resource offer.
6. Implement approved resources only after the files and delivery path exist.
7. Ensure category ordering becomes explicit configuration rather than accidental global source order.

## Future category template requirements

After research and article-role decisions, a stronger shared template should support:

- one concise category promise with claims reviewed;
- an optional start-here destination;
- task or stage grouping rather than a flat undifferentiated grid;
- role labels such as primer, plan, comparison, checklist, or deeper guide;
- one relevant next action/resource only when it exists;
- optional category-specific image and social metadata with provenance;
- explicit editorial order stored independently from publication source order;
- safe handling for a one-article category;
- no implied cornerstone where evidence has not selected one;
- responsive, keyboard, screen-reader, metadata, structured-data, and empty-state validation.

## Owner decisions required

- Final cornerstone/support roles after Perplexity review.
- Retain, reposition, consolidate, redirect, or unpublish decisions for overlapping articles.
- Whether Intentional Living remains a standalone category and whether it appears on the homepage.
- Category introduction and promise changes.
- Public resource delivery model and CTA placement.
- Any documentary photography, paid/licensed asset, or category-specific social master.

## Definition of done for future implementation

- Every retained article has a distinct, useful role.
- Category order is intentional and stored independently from global post order.
- The first visible path is safe, useful, and appropriate for a new reader.
- Claims and imagery do not overpromise or present illustration as evidence.
- Cards are visually distinct enough to communicate different tasks.
- Each category offers a sensible next step without forcing email signup or purchase.
- Contextual internal links support the chosen reader journey.
- External evidence and owner decisions are recorded before cluster/hierarchy changes.
- Repository CI, exact-head Vercel preview, metadata, responsive behavior, and rendered accessibility pass.
