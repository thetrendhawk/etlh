# ETLH Proposed Internal-Linking Map

## Purpose

Map useful internal links among the 14 current articles and four category routes without editing public copy. The goal is to clarify reader paths, strengthen preliminary cornerstone/support relationships, expose isolated content, and avoid reinforcing cannibalization.

This is repository-based editorial judgment. Cornerstone roles and cluster priorities remain preliminary until external evidence and owner decisions support them.

## Current implementation

- Every article is reachable from `/blog` and its category route.
- Every article page links to its category.
- Article bodies contain no contextual links to other articles.
- `getRelatedPosts` selects the first two other articles in the same category based on source order.
- The automatic related-card logic is not reciprocal or role-aware and does not guarantee inbound sibling cards for later articles.
- The Intentional Living article is the only article in its category, so it receives no related cards.

No article is a strict route orphan, but several are **editorially isolated** because navigation cards are their only inbound path and article bodies do not connect reader tasks.

## Category route roles

| Category route                    | Proposed role | Notes                                                                                                                    |
| --------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `/category/zero-waste-kitchen`    | Cluster index | Orient readers among small-space setup, food-waste habits, pantry systems, and budget swaps.                             |
| `/category/eco-habits-budget`     | Cluster index | Explain beginner, renter, utilities, low-waste, and implementation-plan distinctions before sending readers to articles. |
| `/category/small-apartment-decor` | Cluster index | Separate layout, weekend reset, budget sourcing, and transformation/proof tasks.                                         |
| `/category/intentional-living`    | Concept index | Connect friction reduction to practical kitchen, habit, clutter, and reset systems.                                      |

Category routes should support discovery, but contextual article links should carry the more specific reader journey.

## Preliminary cornerstone candidates

| Cluster                               | Candidate                                          | Why it is the current candidate                                                                                  | Constraint before strengthening                                                           |
| ------------------------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Small-space zero-waste kitchen        | `low-waste-kitchen-tips-chef-habits`               | Broadest food-waste prevention structure across inventory, leftovers, portions, freezing, labels, and composting | Chef authority and outcome claims require sourcing or neutral framing.                    |
| Budget sustainable habits for renters | `easy-sustainable-habits-on-a-budget`              | Broadest renter/budget habits scope                                                                              | Heavy overlap with the 15-tip, 10-habit, 30-day, and beginner checklist articles.         |
| Sustainable small-space decor         | `sustainable-tiny-living-room-layout-ideas`        | Broad durable room-specific layout and styling scope                                                             | Needs measured visual examples and careful separation from generic decor guidance.        |
| Friction-reduction concept            | `why-life-feels-harder-than-it-needs-to-sometimes` | Defines ETLH's core reduced-friction idea                                                                        | Broad brand article with unclear search intent and no same-category supporting inventory. |

Do not implement high-volume inbound linking to a candidate until its claims and scope are repaired. A link map should reinforce a useful destination, not amplify a weak promise.

## Kitchen cluster

### Proposed structure

- **Cornerstone candidate:** Low Waste Kitchen Tips: 11 Habits Chefs Use to Cut Food Waste
- **Supporting:** Zero Waste Pantry Organization for Small Apartments (Before & After)
- **Supporting:** Zero Waste Kitchen on a Budget: 9 Simple Swaps That Actually Save Money
- **Supporting primer:** Zero Waste Kitchen Ideas for Tiny Apartments
- **Index:** `/category/zero-waste-kitchen`

### Proposed links

| Source                       | Destination                  | Suggested anchor concepts                                                            | Reader benefit                                                             |
| ---------------------------- | ---------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| Chef-habits article          | Pantry organization article  | "make food visible in a small pantry"; "a simple pantry rotation system"             | Moves from broad food-waste habits to a storage workflow.                  |
| Chef-habits article          | Budget swaps article         | "evaluate low-waste kitchen swaps by cost"; "start with what you already own"        | Adds budget and replacement-timing context.                                |
| Chef-habits article          | Tiny-apartment ideas article | "set up a low-waste kitchen with almost no pantry"                                   | Supports the most space-constrained reader.                                |
| Pantry article               | Chef-habits article          | "food-waste habits beyond pantry organization"; "plan leftovers and use food sooner" | Prevents pantry organization from being treated as the complete solution.  |
| Pantry article               | Tiny-apartment ideas article | "storage ideas when there is no pantry"                                              | Serves readers whose problem is cabinet scarcity rather than organization. |
| Pantry article               | Budget swaps article         | "reuse containers before buying a pantry system"                                     | Adds a non-purchase/budget path, subject to food-storage safety repair.    |
| Budget swaps article         | Chef-habits article          | "reduce food waste before buying new reusables"                                      | Reorients the reader from products toward habits.                          |
| Budget swaps article         | Pantry article               | "build pantry visibility with containers you already have"                           | Adds implementation detail without promising savings.                      |
| Budget swaps article         | Tiny-apartment ideas article | "small-kitchen options for renters"                                                  | Narrows broad swaps to space constraints.                                  |
| Tiny-apartment ideas article | Chef-habits article          | "a complete food-waste routine for a small kitchen"                                  | Gives the short primer a deeper next step.                                 |
| Tiny-apartment ideas article | Pantry article               | "organize one cabinet or narrow pantry"                                              | Adds detailed storage guidance.                                            |
| Tiny-apartment ideas article | Budget swaps article         | "compare low-waste swaps before spending"                                            | Adds cost tradeoffs and slows unnecessary purchases.                       |

### Cannibalization controls

- Keep the chef-habits article focused on food-use systems, not a general list of products.
- Keep the pantry article focused on visibility, labeling, rotation, and narrow storage constraints.
- Keep the budget-swaps article focused on conditional cost and replacement decisions.
- Keep the tiny-apartment guide as an orientation for no-pantry/very-small-kitchen constraints, or consolidate it if it cannot sustain a distinct reader task.
- Avoid repeating exact-match "zero waste kitchen" anchors across every link.

## Budget renter-habits cluster

### Proposed structure

- **Cornerstone candidate:** 21 Easy Sustainable Habits on a Budget (Perfect for Renters)
- **Supporting low-waste focus:** 15 Low Waste Lifestyle Tips You Can Start This Week
- **Reposition or consolidation candidate:** Sustainable Living in an Apartment: 10 Easy Habits That Don't Feel Extreme
- **Supporting implementation plan:** 30-Day Small Apartment Eco-Upgrade Checklist (Under 100 Dollars)
- **Supporting beginner entry:** Beginner Sustainable Living Checklist for Renters
- **Index:** `/category/eco-habits-budget`

### Proposed links

| Source                      | Destination                 | Suggested anchor concepts                                                          | Reader benefit                                                                             |
| --------------------------- | --------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 21-habits article           | 15 low-waste tips           | "focus first on packaging and everyday waste"; "low-waste habits to try this week" | Routes readers to a narrower waste task.                                                   |
| 21-habits article           | Apartment 10-habits article | "renter-controlled energy and water habits"                                        | Useful only if the destination is repositioned around utilities and apartment constraints. |
| 21-habits article           | 30-day checklist            | "turn a few habits into a paced 30-day plan"                                       | Gives readers an implementation sequence after the fixed budget is repaired.               |
| 21-habits article           | Beginner checklist          | "choose a very small starting set"                                                 | Provides a lower-effort entry point.                                                       |
| 15 low-waste tips           | 21-habits article           | "broader renter habits beyond waste"                                               | Keeps the supporting article narrow while offering a complete overview.                    |
| 15 low-waste tips           | Beginner checklist          | "start with five renter-friendly actions"                                          | Adds a simple next step without another broad list.                                        |
| Apartment 10-habits article | 21-habits article           | "compare budget habits across the whole apartment"                                 | Establishes the broader hub if this article retains a utilities focus.                     |
| Apartment 10-habits article | 30-day checklist            | "pace renter-controlled changes over a month"                                      | Moves from concepts to implementation.                                                     |
| 30-day checklist            | 21-habits article           | "choose habits by cost and renter control"                                         | Adds context before readers follow a schedule.                                             |
| 30-day checklist            | Beginner checklist          | "use a smaller starting checklist"                                                 | Provides a fallback for readers who find 30 days too heavy.                                |
| Beginner checklist          | 21-habits article           | "explore more renter-friendly habits when ready"                                   | Natural progression from starter to cornerstone.                                           |
| Beginner checklist          | 15 low-waste tips           | "take the next step on household waste"                                            | Offers one bounded expansion path.                                                         |

### Cannibalization controls

- Do not add reciprocal links merely to make all five pages look equivalent.
- Establish the 21-habits page as the broad hub only after its savings and environmental claims are repaired.
- Reposition the 10-habits article around renter-controlled energy/water and building constraints, or consolidate it after performance evidence and owner approval.
- Keep the 15-tip article specific to low-waste behavior.
- Keep the 30-day article as a pacing format and remove the fixed total unless substantiated.
- Keep the beginner checklist genuinely shorter and lower effort than the cornerstone.

## Decor cluster

### Proposed structure

- **Cornerstone candidate:** Sustainable Tiny Living Room: Layout and Styling Ideas for Small Spaces
- **Supporting reset:** Eco Friendly Small Apartment Checklist You Can Tackle in a Weekend
- **Supporting proof article, after repair:** Sustainable Small Apartment Decor: Before & After on a Budget
- **Supporting sourcing guide:** Eco Friendly Small Apartment Decor on a Budget
- **Index:** `/category/small-apartment-decor`

### Proposed links

| Source                   | Destination                | Suggested anchor concepts                                        | Reader benefit                                                                    |
| ------------------------ | -------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Living-room article      | Weekend checklist          | "reset one small room this weekend"; "a bounded apartment reset" | Gives readers a low-effort implementation path.                                   |
| Living-room article      | Budget decor guide         | "source secondhand and renter-aware decor"                       | Adds purchasing and sourcing considerations after universal claims are repaired.  |
| Living-room article      | Before-and-after article   | "see a documented small-room plan"                               | Add only if genuine proof exists or the page is clearly reframed as hypothetical. |
| Weekend checklist        | Living-room article        | "plan a small living-room layout"                                | Provides deeper room-specific guidance.                                           |
| Weekend checklist        | Budget decor guide         | "use existing and secondhand items first"                        | Supports a non-purchase reset.                                                    |
| Weekend checklist        | Friction-reduction article | "notice which surface or routine asks for attention"             | Connects a visual reset to the ETLH concept.                                      |
| Before-and-after article | Living-room article        | "layout principles for a small living room"                      | Gives a verified or hypothetical case study a durable reference.                  |
| Before-and-after article | Budget decor guide         | "evaluate secondhand and renter-safe options"                    | Adds sourcing tradeoffs.                                                          |
| Budget decor guide       | Living-room article        | "measure layout before bringing decor home"                      | Moves from objects to spatial planning.                                           |
| Budget decor guide       | Weekend checklist          | "start with a no-purchase weekend reset"                         | Creates a lower-cost alternative.                                                 |

### Cannibalization controls

- Keep the living-room article centered on layout and one-room decisions.
- Keep the weekend checklist bounded by time and reset tasks, not a complete decor guide.
- Do not link to the before-and-after article as proof until it is substantiated or reframed.
- Keep the budget decor article focused on sourcing criteria and tradeoffs rather than universal marketplace or plant claims.

## Intentional-living concept links

### Current isolation

`why-life-feels-harder-than-it-needs-to-sometimes` has no same-category sibling. It is reachable through blog/category navigation but receives no automatic related cards and has no contextual article links.

### Proposed outbound links

| Destination                 | Suggested anchor concepts                               | Reader benefit                                             |
| --------------------------- | ------------------------------------------------------- | ---------------------------------------------------------- |
| 21-habits article           | "make one renter-friendly habit easier to repeat"       | Converts the friction concept into a broad practical path. |
| Pantry organization article | "make food that needs attention easier to see"          | Connects visibility and placement to kitchen friction.     |
| Weekend checklist           | "clear one bounded area instead of the whole apartment" | Connects overwhelm reduction to a short reset.             |
| Beginner renter checklist   | "choose a small starting set"                           | Reinforces progress over perfection.                       |

### Proposed inbound links

| Source              | Suggested anchor concepts                                  | Reader benefit                                        |
| ------------------- | ---------------------------------------------------------- | ----------------------------------------------------- |
| 21-habits article   | "reduce the friction around a habit"                       | Explains why setup and placement matter.              |
| Weekend checklist   | "notice where your home asks for repeated attention"       | Adds an ETLH reflection step before action.           |
| Chef-habits article | "make the useful choice visible and easy to repeat"        | Connects food-waste systems to behavior design.       |
| Beginner checklist  | "start with the recurring frustration you can make easier" | Prevents the checklist from becoming a product quota. |

Use varied phrasing. Do not force "unnecessary friction" as exact-match anchor text in every source.

## Editorially isolated or weakly supported articles

| Article                                                       | Current weakness                                                                                | Proposed remedy                                                                              |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Why Life Feels Harder Than It Needs To Sometimes              | No related cards and no contextual article links                                                | Add selective cross-category practical links and receive links from implementation articles. |
| 30-Day Small Apartment Eco-Upgrade Checklist                  | Later source order means weak sibling-card inbound support; absent from the existing intent map | Link from the broad renter hub after fixed-budget repair.                                    |
| Beginner Sustainable Living Checklist for Renters             | Later source order and substantial overlap; absent from the intent map                          | Establish as the deliberately short entry point and link from broader pages.                 |
| Zero Waste Kitchen Ideas for Tiny Apartments                  | Later source order; short and overlapping; absent from the intent map                           | Link from all three kitchen pages only if no-pantry intent remains distinct.                 |
| Eco Friendly Small Apartment Decor on a Budget                | Later source order; absent from the intent map                                                  | Link from layout/reset pages after universal sourcing and plant claims are repaired.         |
| Sustainable Small Apartment Decor: Before & After on a Budget | Navigation exists, but proof risk makes stronger inbound links unsafe                           | Repair or reframe before promoting as case-study evidence.                                   |

## Anchor-text rules

- Describe the next reader task, not merely the destination title.
- Vary anchors naturally across sources.
- Avoid repetitive exact-match cluster phrases.
- Do not use "click here," unsupported outcome promises, or authority language.
- Do not call a destination a case study, proven method, money saver, or before-and-after unless the destination substantiates that promise.
- Keep links close to the sentence or step they help explain.
- One useful link is better than several loosely related links.

## Implementation sequence

1. Repair claims and proof on the intended destinations.
2. Confirm the preliminary cornerstone and consolidation decisions with the owner.
3. Add contextual links from supporting pages to the appropriate cornerstone.
4. Add selective cornerstone links to distinct supporting tasks.
5. Add cross-category links where the reader journey is genuinely improved.
6. Review anchor variation and avoid equivalence among overlapping pages.
7. Verify all links, route identities, accessibility, sitemap behavior, build, and production output.
8. Record the implementation date so later measurement is interpreted correctly.

## Owner decisions still required

- Final cornerstone selection for each candidate cluster.
- Whether the 10-habits article should be repositioned or consolidated.
- Whether the short tiny-kitchen and beginner-checklist articles remain distinct enough to keep.
- Whether the before-and-after pages can be substantiated.
- Approval for any consolidation, redirect, unpublishing, or public-copy change.

## Definition of done for a future link implementation

- Every retained article has a clear role and at least one useful contextual reader path.
- Supporting articles link to the appropriate cornerstone where useful.
- Cornerstones link to distinct supporting tasks.
- Isolated content receives relevant inbound support or an approved consolidation decision.
- Anchors are descriptive, varied, and do not overpromise.
- Links do not strengthen unsupported claims or cannibalization.
- Repository and production validation pass.
