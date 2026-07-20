# ETLH Article Claims Review Inventory

## Purpose

Identify claims in the 14 current articles that involve percentages, savings, environmental or health effects, professional authority, personal experience, or transformations presented as real.

This is a repository-based editorial audit. It does not rewrite public content, determine legal compliance, or verify a claim merely because the claim sounds plausible.

## Classification

- **Safe/common editorial guidance:** practical guidance that can remain when it does not imply a measured outcome, universal result, credential, or documented experience.
- **Source required:** a factual claim may be supportable, but a suitable primary or authoritative source and accurate scope are needed.
- **Soften wording:** the direction may be useful, but certainty, magnitude, universality, or causal language exceeds available evidence.
- **Remove or reframe:** the current promise or attribution is misleading without evidence, or the content should be presented as a hypothetical example rather than a documented result.
- **Owner confirmation required:** the claim depends on receipts, original images, firsthand experience, identity, credentials, or another owner-only fact.

Several claims need more than one action. The table lists the strongest required control.

## Inventory coverage

| Category               | Current articles reviewed |
| ---------------------- | ------------------------: |
| Intentional Living     |                         1 |
| Small Apartment Decor  |                         4 |
| Eco Habits on a Budget |                         5 |
| Zero-Waste Kitchen     |                         4 |
| **Total**              |                    **14** |

The merged existing-content intent map covers 10 articles. This claims review also includes the four current articles omitted from that map.

## High-priority findings

### Sustainable Small Apartment Decor: Before & After on a Budget

| Location                   | Claim                                                                                               | Classification              | Required evidence or action                                                                                                                                                          |
| -------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/lib/posts.ts:451`     | The excerpt promises a **real** transformation under $300.                                          | Owner confirmation required | Confirm the project, original before/after images, itemized costs, dates, location/currency, and what was excluded. Otherwise remove "real" and reframe as a hypothetical room plan. |
| `src/lib/posts.ts:457`     | Image alt text says the page shows before-and-after photos.                                         | Remove or reframe           | Current repository imagery does not establish a documented pair. Alt text must describe the actual image, and the article must not imply proof the asset does not provide.           |
| `src/lib/posts.ts:476-481` | The copy describes a specific starting room and says "we turned it" into the result.                | Owner confirmation required | Confirm firsthand project records and authorship. Without them, rewrite as an illustrative scenario.                                                                                 |
| `src/lib/posts.ts:512`     | "We set a hard budget of $300."                                                                     | Owner confirmation required | Require an itemized, reproducible budget and owner confirmation that this happened.                                                                                                  |
| `src/lib/posts.ts:531`     | Decluttering "made the room feel 30% bigger."                                                       | Remove or reframe           | No measurement method exists, and perceived size is not a defensible percentage. Use qualitative language only if the transformation itself is verified.                             |
| `src/lib/posts.ts:535-582` | Specific furniture, layout, lighting, and decor changes are presented as completed project actions. | Owner confirmation required | Confirm project evidence, sourcing, and image correspondence; otherwise present as a sample plan.                                                                                    |

**Disposition:** highest repair priority. Do not add synthetic or staged imagery and call it documented proof. The safe paths are either a verified case study with transparent evidence or a clearly labeled hypothetical plan.

### Zero Waste Pantry Organization for Small Apartments (Before & After)

| Location                     | Claim                                                                   | Classification              | Required evidence or action                                                                                                                                          |
| ---------------------------- | ----------------------------------------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/lib/posts.ts:982`       | The title promises before-and-after evidence.                           | Owner confirmation required | Confirm a documented pantry process and corresponding images, or remove the transformation framing.                                                                  |
| `src/lib/posts.ts:990`       | Image alt text describes a before-and-after view.                       | Remove or reframe           | Alt text must match the actual single repository asset; do not describe a visual comparison that is not present.                                                     |
| `src/lib/posts.ts:1016`      | The guide calls itself a before-and-after process.                      | Soften wording              | A process guide is supportable, but "before-and-after" implies documented proof unless clearly labeled as a walkthrough.                                             |
| `src/lib/posts.ts:1026`      | "Most pantry waste comes from" three named causes.                      | Source required             | Requires evidence or narrower wording that presents these as common practical causes rather than a measured majority.                                                |
| `src/lib/posts.ts:1032`      | Organization will reduce food waste and save grocery money.             | Source required             | Support with appropriate household food-waste evidence and state that outcomes vary; visibility alone does not guarantee savings.                                    |
| `src/lib/posts.ts:1047-1051` | Expired items should be tossed and duplicates combined into containers. | Source required             | Add food-safety, date-label, allergen, cooking-instruction, lot-code, and original-package retention cautions. Do not recommend combining products indiscriminately. |

**Disposition:** retain the practical organization guidance only after proof framing and food-storage safety are corrected.

**Repair record (2026-07-19):** the source title, excerpt, image reference, alt text, and body now use a practical walkthrough rather than undocumented before-and-after proof. Majority, guaranteed outcome, blanket decanting/combining, universal date-disposal, fixed-frequency, and purchase-upgrade language was removed or bounded. The body now preserves package directions, allergen information, lot codes, storage guidance, container suitability, and household variability.

### Low Waste Kitchen Tips: 11 Habits Chefs Use to Cut Food Waste

| Location                                        | Claim                                                                                                        | Classification    | Required evidence or action                                                                                                                    |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/lib/posts.ts:1171-1173`                    | The title/excerpt says chefs use the habits and that they cut waste and save money.                          | Source required   | Cite reliable professional-kitchen or food-waste sources for each relevant practice, or remove the chef authority frame and outcome certainty. |
| `src/lib/posts.ts:1205`                         | The "best" tips come from restaurant chefs and zero-waste cooks who are forced to maximize every ingredient. | Remove or reframe | "Best" and the broad authority attribution are unsupported. Describe the practices directly and source them.                                   |
| `src/lib/posts.ts:1210`                         | The habits will reduce waste, save money, and make better food in any small apartment context.               | Soften wording    | State intended benefits and variability; avoid guaranteed outcomes.                                                                            |
| `src/lib/posts.ts:1221`                         | Households globally waste a "huge portion" mainly through named causes.                                      | Source required   | Use a current authoritative food-waste source, exact geography/scope, and non-sensational wording.                                             |
| `src/lib/posts.ts:1226`                         | Professional kitchens universally run on tight margins and maximize every ingredient.                        | Source required   | Narrow the claim and cite an authoritative hospitality or food-waste source.                                                                   |
| `src/lib/posts.ts:1237`, `1294`, `1387`, `1406` | Chefs rarely order without inventory, use trimmings, control portions, and rely on labels/clear containers.  | Source required   | Source each practice or remove the professional attribution while retaining safe practical guidance.                                           |
| `src/lib/posts.ts:1294`                         | Using trimmings provides extra meals and nutrients.                                                          | Source required   | Food-safety and edible-part limitations are necessary; not all peels/trimmings are suitable.                                                   |
| `src/lib/posts.ts:1387`                         | Over-portioning is a major source of home and restaurant plate waste.                                        | Source required   | Requires appropriately scoped waste-composition evidence.                                                                                      |
| `src/lib/posts.ts:1425`                         | Composting avoids methane-producing landfill waste.                                                          | Source required   | Cite an authoritative source and explain that outcomes depend on landfill and compost system conditions.                                       |

**Disposition:** useful structure, but authority and outcome claims need systematic sourcing or neutral framing.

**Repair record (2026-07-19):** the route and 11-part food-use structure are preserved, while the source metadata and body no longer claim chef authority or guaranteed savings, waste, nutrient, quality, satisfaction, safety, or environmental outcomes. FDA, USDA FSIS, EPA, package, appliance, recall, allergen, lot-code, accessibility, household, and local-program boundaries now control produce, leftovers, freezing, storage, and food-scrap advice. The retired `ZeroWastePin2.webp` remains in repository source for traceability but is no longer imported or emitted. See `docs/research/kitchen-cluster/ETLH_KITCHEN_CHEF_HABITS_CLAIMS_AUDIT.md`.

### Zero Waste Kitchen on a Budget: 9 Simple Swaps That Actually Save Money

**Repair status (2026-07-19):** the budget-swaps body, source metadata, imagery, safety boundaries, and internal links were repaired in a focused follow-up. The route is preserved. Savings, payback, waste-reduction, unnamed-authority, universal-product, unsafe-cooling, blanket-decanting, and fixed-routine claims in the audited set were removed or narrowed. See `docs/research/kitchen-cluster/ETLH_KITCHEN_BUDGET_SWAPS_CLAIMS_AUDIT.md`. This status does not certify household outcomes.

| Location                     | Claim                                                                                          | Classification    | Required evidence or action                                                                                                                   |
| ---------------------------- | ---------------------------------------------------------------------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/lib/posts.ts:1444-1445` | Title/excerpt promises swaps that "actually save money" and stretch the grocery bill.          | Remove or reframe | Savings depend on local prices, prior behavior, product lifespan, utilities, and replacement timing. Use conditional cost framing.            |
| `src/lib/posts.ts:1451`      | Alt text describes a before-and-after collage.                                                 | Remove or reframe | Verify the asset and describe only what it actually shows. Do not imply documented transformation evidence.                                   |
| `src/lib/posts.ts:1466`      | "Most impact" comes from a handful of habits and swaps.                                        | Source required   | Define impact and support the comparison, or use a narrower editorial statement.                                                              |
| `src/lib/posts.ts:1469`      | Plastic bottles are one of the biggest sources of kitchen waste and recurring cost.            | Source required   | Requires a defined waste stream and source; recurring cost varies by household.                                                               |
| `src/lib/posts.ts:1476`      | A bottle/filter swap cuts plastic dramatically and pays for itself quickly.                    | Source required   | Require water safety context, local water/filter needs, current packaged-drink spending, filter replacement cost, and break-even assumptions. |
| `src/lib/posts.ts:1485`      | A pack of cloths can last for years and reduces trash frequency.                               | Soften wording    | Durability and trash effect vary by material, laundering, use, and prior consumption.                                                         |
| `src/lib/posts.ts:1498-1508` | Bulk buying costs less and reduces packaging.                                                  | Source required   | Unit price and packaging vary; add "when available and cheaper per unit" plus storage/allergen constraints.                                   |
| `src/lib/posts.ts:1512`      | The listed habits are proven to cut food waste significantly and directly lower grocery costs. | Source required   | Cite a study matching the specific interventions and population; avoid applying aggregate findings as a household guarantee.                  |
| `src/lib/posts.ts:1521`      | Trash volume will drop quickly.                                                                | Soften wording    | Outcome and timing vary by local recycling/compost acceptance and starting waste mix.                                                         |
| `src/lib/posts.ts:1531`      | The pantry method is one of the most recommended strategies "right now."                       | Source required   | Time-sensitive popularity claim requires dated evidence or removal.                                                                           |
| `src/lib/posts.ts:1533-1540` | Zero-waste creators and experienced kitchen people recommend specific "high-impact" products.  | Remove or reframe | Unnamed authority and impact claims are not verifiable. Present criteria and non-purchase options instead.                                    |
| `src/lib/posts.ts:1542`      | Energy tweaks save money and emissions.                                                        | Source required   | Support each action; cost and emissions depend on appliance, energy source, rates, and behavior.                                              |
| `src/lib/posts.ts:1547-1558` | Readers can reinvest observed savings into higher-quality reusables.                           | Soften wording    | Do not assume savings occurred. Frame reinvestment as optional after the reader verifies their own costs.                                     |

**Disposition:** highest density of unsupported savings and environmental certainty. Repair the title and evidence plan before treating it as a budget cornerstone.

## Additional article findings

### Why Life Feels Harder Than It Needs To Sometimes

| Location                   | Claim                                                                                         | Classification                 | Required evidence or action                                                                                                                                                                        |
| -------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/lib/posts.ts:224`     | Behavior change is more likely to last when an action is visible, convenient, and repeatable. | Source required                | This is plausible behavioral guidance but is presented under "Why We're Confident." Cite relevant behavior-design evidence and preserve the current limitation that it does not guarantee a habit. |
| `src/lib/posts.ts:173-202` | Small friction-reduction actions can make routines easier.                                    | Safe/common editorial guidance | Keep as practical suggestions when framed as experiments and observations rather than guaranteed outcomes.                                                                                         |

### Sustainable Tiny Living Room: Layout and Styling Ideas for Small Spaces

| Location                   | Claim                                                                             | Classification                 | Required evidence or action                                                                                                                                                              |
| -------------------------- | --------------------------------------------------------------------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/lib/posts.ts:418`     | Plants bring "better air quality" into the space.                                 | Remove or reframe              | Typical household plant quantities should not be presented as a meaningful air-quality intervention without strong evidence. Keep aesthetic/biophilic value separate from health claims. |
| `src/lib/posts.ts:229-342` | Layout and styling suggestions can improve circulation, storage, and visual calm. | Safe/common editorial guidance | Keep as clearly editorial design guidance; avoid measured size, health, or universal sustainability outcomes.                                                                            |

### Eco Friendly Small Apartment Checklist You Can Tackle in a Weekend

| Location                   | Claim                                                                              | Classification | Required evidence or action                                                                                                                                      |
| -------------------------- | ---------------------------------------------------------------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/lib/posts.ts:443`     | A few changes can make the apartment cleaner, calmer, and "lighter on the planet." | Soften wording | "Cleaner" and "calmer" may be subjective; the environmental phrase is undefined. Name the specific reduced purchase, packaging, energy, or waste action instead. |
| `src/lib/posts.ts:345-443` | The checklist can be completed in a weekend.                                       | Soften wording | Present as a selectable weekend list, not a promise that every renter can complete all actions.                                                                  |

### 15 Low Waste Lifestyle Tips You Can Start This Week

| Location                   | Claim                                                                                   | Classification                 | Required evidence or action                                                                |
| -------------------------- | --------------------------------------------------------------------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------ |
| `src/lib/posts.ts:708`     | Food/packaging are big household-waste sources and the habits help readers "save more." | Source required                | Cite a relevant waste-composition source and avoid savings certainty.                      |
| `src/lib/posts.ts:837`     | The choices create a lifestyle better for the bank account and planet.                  | Soften wording                 | Replace broad outcome language with specific intended reductions and note that costs vary. |
| `src/lib/posts.ts:606-837` | Use existing products before replacements and start with manageable actions.            | Safe/common editorial guidance | Practical non-purchase guidance with low claims risk.                                      |

### 21 Easy Sustainable Habits on a Budget (Perfect for Renters)

| Location                        | Claim                                                                                         | Classification                 | Required evidence or action                                                                                                        |
| ------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Article title and broad framing | "Perfect for Renters" implies universal fit.                                                  | Soften wording                 | Use renter-friendly or renter-aware; lease, utility, climate, and service access vary.                                             |
| Current body                    | Energy, water, food, and purchase changes are associated with lower bills and reduced impact. | Source required                | Source material claims individually and state cost/location limitations. Avoid bundling all actions into a single outcome promise. |
| Habit suggestions               | Starting with a small number of repeatable habits.                                            | Safe/common editorial guidance | Keep without guaranteed persistence or savings claims.                                                                             |

### Sustainable Living in an Apartment: 10 Easy Habits That Don't Feel Extreme

| Location                      | Claim                                                                                  | Classification  | Required evidence or action                                                                                               |
| ----------------------------- | -------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `src/lib/posts.ts:845`, `875` | The habits save money and reduce environmental footprint.                              | Source required | Each material outcome needs a source and conditions; the excerpt should not promise savings.                              |
| `src/lib/posts.ts:886`        | Apartments are often more efficient than single-family homes because they share walls. | Source required | Define efficiency and use an authoritative housing/energy source with geography and building-type limits.                 |
| `src/lib/posts.ts:891`        | Habits trim bills and make a space healthier.                                          | Source required | Separate cost, waste, subjective calm, and health claims. "Healthier" requires a defined outcome and evidence or removal. |
| `src/lib/posts.ts:902`        | Energy is usually the biggest apartment-living footprint.                              | Source required | Requires a defined footprint, boundary, geography, and source.                                                            |
| `src/lib/posts.ts:922`        | Water savings are among the easiest actions and lower bills.                           | Soften wording  | Ease and bill impact depend on metering, lease structure, fixtures, rates, and behavior.                                  |
| `src/lib/posts.ts:970`        | A 24-hour purchase pause often saves money and resources.                              | Soften wording  | Present as a decision aid rather than a frequent or measured outcome.                                                     |

### 30-Day Small Apartment Eco-Upgrade Checklist (Under 100 Dollars)

| Location                     | Claim                                                     | Classification              | Required evidence or action                                                                                                                                |
| ---------------------------- | --------------------------------------------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/lib/posts.ts:1563-1565` | The full 30-day plan costs under $100 total.              | Owner confirmation required | Require itemized costs, assumptions, date, geography, taxes/shipping treatment, and which actions use existing items. Otherwise remove the fixed total.    |
| `src/lib/posts.ts:1580-1582` | External posts commonly cost $50 or assume homeownership. | Remove or reframe           | Unsupported prevalence/comparison claim. Keep the renter/budget problem without inventing a market pattern.                                                |
| `src/lib/posts.ts:1591`      | Vinegar and water handles most surfaces.                  | Remove or reframe           | Overbroad cleaning guidance can damage some materials and is unsuitable for some soil/pathogen needs. Use product/material instructions and safety limits. |
| `src/lib/posts.ts:1591`      | Wool dryer balls last for years.                          | Source required             | Product lifespan varies; cite manufacturer/test evidence or use conditional language.                                                                      |

**Repair record (2026-07-19):** the route and optional four-week pacing structure are preserved, while the source metadata and body no longer promise a sub-$100 total, universal renter permission, habit formation, cleaning performance, product lifespan, savings, waste reduction, or environmental results. CDC/EPA cleaning boundaries, product and surface labels, appliance instructions, lease/building rules, accessibility, household agreement, food safety, local services, and actual prices now control. See `docs/research/ETLH_ECO_STEP_CHECKLIST_CLAIMS_AUDIT.md`.

### Zero Waste Kitchen Ideas for Tiny Apartments

| Location                | Claim                                                       | Classification    | Required evidence or action                                                                                                                                |
| ----------------------- | ----------------------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/lib/posts.ts:1615` | "Most" zero-waste kitchen content assumes a walk-in pantry. | Remove or reframe | Unsupported prevalence claim; state the article's small-space scope directly.                                                                              |
| `src/lib/posts.ts:1617` | Reused food jars create a free pantry system.               | Source required   | Add suitability, seal, damage, allergen, original-label, and cooking-instruction cautions. "Free" applies only when jars are already available and usable. |
| `src/lib/posts.ts:1620` | Freezer scrap storage produces "zero smell."                | Soften wording    | Odor control depends on sealing, contents, duration, and freezer conditions.                                                                               |
| `src/lib/posts.ts:1625` | Three products have the "best return on effort."            | Remove or reframe | No comparison method or evidence is present. Present them as options and include use-what-you-own alternatives.                                            |

### Eco Friendly Small Apartment Decor on a Budget

| Location                     | Claim                                                                                              | Classification              | Required evidence or action                                                                                                                          |
| ---------------------------- | -------------------------------------------------------------------------------------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/lib/posts.ts:1643`      | "Here's the loose framework I use."                                                                | Owner confirmation required | This implies personal experience. Confirm the author/owner can truthfully make it or shift to brand-level editorial framing.                         |
| `src/lib/posts.ts:1647`      | Estate sales beat thrift stores; Marketplace beats both; Buy Nothing is unbeatable.                | Remove or reframe           | Availability, price, access, safety, transport, and quality vary. Present options with tradeoffs rather than universal winners.                      |
| `src/lib/posts.ts:1649`      | One plant changes a room more than $200 of decor; pothos and snake plants survive almost anything. | Remove or reframe           | Unsupported price comparison and extreme durability claim. Include pet/toxicity, light, and care considerations if recommending plants.              |
| `src/lib/posts.ts:1653-1657` | "Peel-and-stick everything" is renter-safe.                                                        | Remove or reframe           | Adhesives and lease rules vary and can damage finishes. Require product instructions, patch testing, surface suitability, and landlord/lease review. |

**Repair record (2026-07-19):** the route is preserved, while unverified personal experience, universal sourcing rankings, the $200 plant comparison, extreme plant durability, and renter-safe adhesive/load claims were removed. The article now requires measurement, condition, recall, pest, cleaning, transport, total-cost, light, care, toxicity, lease/building, surface, load, manufacturer, accessibility, and household checks. The watermarked `post-decor.jpg` remains in repository source for traceability but is no longer imported or emitted. See `docs/research/ETLH_DECOR_BUDGET_CLAIMS_AUDIT.md`.

### Beginner Sustainable Living Checklist for Renters

| Location                     | Claim                                                                       | Classification                 | Required evidence or action                                                                         |
| ---------------------------- | --------------------------------------------------------------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------- |
| `src/lib/posts.ts:1674`      | Sustainable-living influencers use "$80 reusable everything."               | Remove or reframe              | Rhetorical but unsupported market characterization. State the non-purchase principle directly.      |
| `src/lib/posts.ts:1685`      | Choosing what enters the apartment is "the whole game" of low-waste living. | Soften wording                 | Useful emphasis, but it excludes utilities, food systems, local services, and building constraints. |
| `src/lib/posts.ts:1676-1685` | Start with a small, practical set of renter-controlled actions.             | Safe/common editorial guidance | Keep as non-guilt guidance when product and lease limitations are respected.                        |

## Cross-cutting repair rules

### Savings and budget

- Replace guaranteed savings with conditional cost framing.
- State date, geography, currency, unit prices, existing-item assumptions, maintenance, lifespan, utilities, taxes, and shipping where relevant.
- Do not call an action free when it requires an item the reader may not own.
- Do not present a fixed project budget without receipts or an itemized evidence record.

### Environmental impact

- Define the impact: material use, packaging, food waste, energy, water, emissions, landfill, or another bounded outcome.
- Prefer authoritative sources and preserve geography/system limits.
- Avoid "better for the planet," "high impact," "dramatic," "significant," or "big difference" without a supported comparison.

### Health and air quality

- Remove generic health benefits unless a specific outcome and suitable evidence exist.
- Do not present ordinary houseplants as an air-quality intervention.
- Cleaning, food-storage, composting, and plant guidance must include relevant safety and product/material limits.

### Authority and experience

- Attribute professional practices only to identifiable, reviewable sources.
- Do not imply chef, expert, founder, or personal experience that the owner has not confirmed.
- Brand-level editorial guidance should be labeled as such rather than written as a documented personal project.

### Transformation proof

- A real before-and-after requires original or properly licensed paired images, documented starting conditions, action records, costs where claimed, and a clear statement of what was measured versus perceived.
- Generated, staged, stock, or illustrative visuals must be labeled accurately and cannot substantiate a real case study.
- Image alt text must describe the actual asset, not the intended article promise.

## Recommended repair order

1. Reframe or substantiate **Sustainable Small Apartment Decor: Before & After on a Budget**.
2. Remove or substantiate savings certainty in **Zero Waste Kitchen on a Budget: 9 Simple Swaps That Actually Save Money**.
3. Source or neutralize chef authority in **Low Waste Kitchen Tips: 11 Habits Chefs Use to Cut Food Waste**.
4. Reframe or substantiate the pantry before-and-after and add food-storage cautions.
5. Remove or substantiate the under-$100 promise in the 30-day checklist.
6. Repair health, air-quality, utility-savings, environmental-impact, universal product, and personal-experience claims across the remaining articles.

## Owner decisions still required

- Whether either before-and-after article is based on a real documented project.
- Whether original paired visuals, receipts, budgets, dates, and project notes exist.
- Whether any first-person or professional-authority statement is truthful and approved.
- Whether fixed budget promises should be substantiated or removed.
- Public-copy changes after the claims repair plan is reviewed.

## Definition of done for a future repair

A claims repair is complete only when the public wording, excerpt, title, image, alt text, metadata, and structured-data description all make the same supportable promise; consequential claims have suitable sources; owner-only facts are confirmed; and the repository's content, accessibility, build, and production checks pass.
