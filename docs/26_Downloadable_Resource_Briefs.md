# ETLH Downloadable Resource Production Briefs

## Purpose

Define three useful, evidence-aware resources that could help readers act on current ETLH articles. These are production briefs only. They do not create files, add forms, promise delivery, change public copy, or authorize publication.

## Current-state constraint

The repository contains no downloadable PDF, worksheet, or other resource binary. `/resources` currently lists product categories under review. The inline and full `EmailOptIn` components publicly promise a “30-Day Eco-Upgrade Checklist,” “30 renter-friendly swaps,” and a total under `$100`, but no corresponding file or verified delivery path exists in the repository.

Before any new resource CTA is published, a separate implementation must:

1. remove or substantiate the nonexistent/fixed-price offer;
2. verify what the current Mailchimp form sends after signup;
3. decide whether resources are direct, email-delivered, or both;
4. update public promise, confirmation, privacy, and delivery behavior to match reality;
5. test duplicate submissions, errors, accessibility, consent, and unsubscribe expectations.

These briefs do not assume that email gating is approved or that the existing form is an appropriate delivery mechanism.

## Shared production requirements

All three resources should:

- work without invented savings, costs, impact scores, outcomes, or audience claims;
- label examples as examples and leave reader-specific costs/measurements blank;
- offer `not applicable`, `needs permission`, and `needs research` where relevant;
- avoid making purchase completion the definition of progress;
- use selectable text, logical reading order, document language/title, tagged headings, labeled form fields, descriptive links, and sufficient contrast;
- remain understandable in grayscale and without decorative images;
- provide a mobile-friendly HTML or accessible form alternative when feasible;
- include version, publication date, destination URL, contact/corrections path, and evidence review date;
- avoid embedded font binaries in the repository;
- be reviewed against the live article destination before every revision.

## Brief 1 — Small-Apartment Eco Step Starter Sheet

### Reader problem

The reader encounters long sustainability lists but does not know which action fits their apartment, control, energy, budget, local services, or current routine. Starting with too many actions can turn a practical article into another obligation.

### Intended outcome

Help a reader select one small, reversible, renter-aware action; define the setup it requires; and choose what to observe after trying it. Completion means a clear next experiment, not a guaranteed habit, saving, or environmental result.

### Primary reader

A renter or small-space dweller who is interested in a lower-waste or lower-friction change but needs a bounded starting point.

### Sections and fields

#### 1. Notice one recurring friction point

- Room or routine.
- What keeps happening?
- When/where does it happen?
- What feels like the extra step?
- Optional example, visibly separated from the reader field.

#### 2. Check fit and control

- I control this change.
- I may need household agreement.
- I may need landlord/property approval.
- It depends on a local service or rule.
- It may affect accessibility, safety, pets, children, food, utilities, or shared space.
- `Not sure — research before acting` option.

#### 3. Use what already exists

- Item, location, or routine already available.
- Can it be moved, made visible, repaired, simplified, or assigned one clear home?
- Is a purchase actually necessary now? `yes / no / not sure`.

#### 4. Define one Eco Step

- “I will make this moment easier by…”
- Where the setup will live.
- When the reader will try it.
- Maximum time/effort the reader wants to spend.
- Permission/research needed first.

#### 5. Observe without scoring yourself

- Was the action easier to notice?
- Was anything harder, unsafe, inaccessible, or inconvenient?
- Keep, adjust, stop, or research.
- One note for the next attempt.

#### 6. Optional next step

- Repeat the same setup.
- Adjust one part.
- Choose a different problem.
- Stop; no next action is required.

### Content outline

1. One-sentence purpose and non-perfection framing.
2. Friction Finder prompt.
3. Renter/household/local-fit check.
4. Use-what-you-have purchase pause.
5. One Eco Step commitment.
6. Observation and adjustment.
7. Link back to the primary article and corrections/contact page.

### Claims boundaries

- Do not promise reduced stress, improved mental health, habit formation, saved money, lower emissions, reduced waste, or a “greener” home.
- Do not call an action renter-safe, pet-safe, food-safe, accessible, or landlord-approved without context.
- Do not assign environmental impact points or rank the reader.
- “Eco Step” is an ETLH planning concept, not a scientific measurement or certification.

### Evidence requirements

- Source any explanatory statement about behavior, cues, friction, repetition, or habit formation before publication.
- The worksheet prompts themselves can remain neutral planning aids and should not be presented as clinically validated.
- Any example involving utilities, cleaning, food, disposal, composting, or product replacement must be checked against the relevant authoritative source and location/household caveat.
- Record evidence review date and reviewer.

### Visual structure

- One or two pages with a clear top-to-bottom sequence.
- Cream/warm-white background, dark earth text, restrained sage accents, and no lifestyle photo required.
- Six numbered sections with generous blank fields.
- Simple line icons only if they aid scanning; never use icons as the sole labels.
- No score, streak, “perfect week,” leaf count, or progress meter.
- Optional small apartment line illustration may be decorative and must not imply a real result.

### Accessibility requirements

- Tagged PDF with H1/H2 hierarchy and logical reading order.
- Every checkbox and text field must have a programmatic label in a fillable version.
- Instructions cannot depend on color, icon, or spatial position alone.
- Body text at least 11–12 pt in print; mobile equivalent at least 16 px.
- High-contrast focus indicators for an HTML version.
- Avoid handwriting-only fields with low contrast or undersized lines.

### Printable and mobile-use considerations

- US Letter first; owner decides whether an A4 version is needed.
- Black-and-white print must remain legible without filled background panels.
- Minimum 0.5-inch print margins and adequate writing space.
- Mobile HTML version should be single-column and allow saving/printing without account creation.
- If PDF only, test phone zoom, field focus, virtual keyboard, and export/save behavior.

### Intended file format

- Preferred: accessible HTML companion plus tagged, fillable and printable PDF.
- Acceptable first release: tagged printable PDF plus a plain HTML summary of all prompts.
- Suggested canonical filename after approval: `small-apartment-eco-step-starter-sheet-v1.pdf`.

### Corresponding live article destinations

- Primary: `/blog/why-life-feels-harder-than-it-needs-to-sometimes`.
- Primary beginner path: `/blog/beginner-sustainable-living-checklist-renters`.
- Supporting: `/blog/low-waste-lifestyle-tips-beginners`.
- Supporting: `/blog/easy-sustainable-habits-on-a-budget`.
- Conditional after fixed-budget repair: `/blog/small-apartment-eco-upgrade-checklist`.

These destinations are current live routes, not a final cluster selection.

### Suggested CTA locations

- After “Your Eco Step” in the friction-reduction article.
- After the reader chooses a starting action in the beginner checklist.
- At the end of the 15- and 21-habit articles as a “choose one” aid, not a generic interruption.
- As a distinct practical-planning card on `/resources` after that route's purpose is revised and approved.
- Do not inject the CTA into unrelated kitchen/decor articles merely because the global inline form is available.

### Email opt-in relationship

Recommended default: make the sheet directly accessible; offer an optional email signup for future ETLH notes only with a clear, separate consent statement. If the owner chooses email delivery:

- show exactly what the reader receives and whether subscription is required;
- provide delivery immediately and test it end to end;
- do not retain the current `$100` or “30 swaps” promise;
- do not imply scarcity or exclusive results;
- align confirmation, privacy, unsubscribe, error, and duplicate-signup behavior.

### Owner approval required

- Final title, ETLH “Eco Step” framing, examples, evidence language, visual master, and version.
- Direct versus email-gated delivery.
- Mailchimp automation/list/tag behavior and public consent copy.
- `/resources` positioning and every live CTA location.
- Whether A4, fillable PDF, and HTML versions launch together.

### Definition of done

- Every prompt is useful without external explanation.
- No score, promise, fixed budget, or environmental outcome is invented.
- Evidence notes and examples are reviewed.
- Tagged PDF and/or HTML accessibility checks pass.
- Print, grayscale, 320/390 px mobile, and keyboard/fill tests pass.
- Destination, canonical file URL, metadata, version, corrections path, and delivery behavior are verified.
- Owner approves delivery/consent and the resource is not publicly promised before it exists.

## Brief 2 — Small-Kitchen Food-Use Rotation Sheet

### Reader problem

Food becomes difficult to see or remember in a small refrigerator, freezer, cabinet, or improvised pantry. The reader needs a simple way to identify what should receive attention without buying a matching container system or relying on unsafe universal storage timelines.

### Intended outcome

Help a household make food visible, plan a few realistic uses, and record freeze/share/other decisions using current package guidance and authoritative safety information. Completion means a reviewed food-use plan, not guaranteed waste or grocery savings.

### Primary reader

A renter or small-space household with limited storage, a small/no pantry, or recurring forgotten ingredients and leftovers.

### Sections and fields

#### 1. Rotation window

- Week/date range.
- Planned review day(s).
- Household notes, allergies, dietary needs, or shared-food boundaries where the reader chooses to record them.

#### 2. Use-first zone

- Item.
- Where it is stored.
- Package/opened/prepared date exactly as known.
- Package instruction or authoritative safety source checked? `yes / no / not applicable`.
- Planned use.
- Planned day.

#### 3. Opened and prepared food

- Item/container label.
- Date recorded by the household.
- Intended meal/use.
- Freeze, share, discard under local/safety guidance, or reassess.

#### 4. Pantry/cabinet rotation

- Older item to move forward.
- Duplicate or backstock found.
- Meal/use idea.
- Refill/buy decision only after existing stock is reviewed.

#### 5. Freezer visibility

- Item.
- Household label/date.
- Quantity/portion.
- Planned use.
- Source needed before making a safety decision.

#### 6. End-of-week review

- Used as planned.
- Frozen/shared/otherwise handled.
- Still needs attention.
- What made the item hard to see or use?
- One placement/labeling adjustment for next week.

### Content outline

1. Purpose and food-safety boundary.
2. Choose a small use-first zone.
3. Record known dates without interpreting them beyond verified guidance.
4. Plan a few uses.
5. Review pantry/backstock and freezer.
6. Record outcome and one visibility adjustment.
7. Links to the primary kitchen articles, authoritative safety references, and corrections path.

### Claims boundaries

- Do not promise reduced food waste, saved grocery money, longer food life, improved nutrition, or food safety.
- Do not supply universal storage times without authoritative, food-specific, jurisdiction-appropriate sourcing.
- Do not equate date labels automatically with safety or quality; terminology and guidance vary.
- Do not recommend eating questionable food, relying on smell alone, or overriding package/public-health guidance.
- Do not present glass, bulk buying, composting, freezing, sharing, or decanting as universally safer or more sustainable.

### Evidence requirements

- Use authoritative food-safety and date-label sources appropriate to the intended audience before adding guidance.
- Cite any storage, freezing, cooling, reheating, allergen, cross-contamination, or date-interpretation statement.
- Record jurisdiction and review date; avoid implying one location's rules are universal.
- Compost, food-donation, and disposal references require local-program verification.
- Any claim about food waste or cost requires explicit data and assumptions; the first version should avoid outcome claims.

### Visual structure

- Two-page system: Page 1 for use-first/opened/prepared items; Page 2 for pantry/freezer and review.
- Clear rows with generous handwriting space and repeatable weekly use.
- Small “move forward / use / freeze or other verified option / review” flow diagram.
- Neutral food icons may aid scanning; no staged jars, “perfect pantry,” or before/after imagery.
- Safety boundary box near the first date field, not hidden in a footer.

### Accessibility requirements

- Table headers must repeat across pages and be programmatically associated in a tagged PDF.
- Do not use unlabeled blank grids.
- Provide a linear mobile alternative to the table.
- Use explicit verbs and avoid abbreviations without definitions.
- Fields for dates must state the expected format and must not rely on placeholder text alone.
- Contrast and grayscale checks apply to row grouping and status options.

### Printable and mobile-use considerations

- US Letter portrait with a refrigerator-friendly one-page condensed option only after the full version is validated.
- Avoid ink-heavy full-page backgrounds.
- Mobile HTML should support adding/reordering rows and local printing without requiring account storage.
- Do not collect food, dietary, allergy, or household data unless a separately approved data/privacy design requires it; a static local form is preferred.
- Test long food names, large text zoom, and handwriting space.

### Intended file format

- Preferred: tagged printable/fillable PDF plus responsive HTML table/form.
- Suggested canonical filename after approval: `small-kitchen-food-use-rotation-sheet-v1.pdf`.
- Do not ship as an image-only checklist.

### Corresponding live article destinations

- Primary: `/blog/zero-waste-pantry-organization-small-apartments`.
- Primary: `/blog/low-waste-kitchen-tips-chef-habits` after authority/food-safety claim review.
- Supporting: `/blog/zero-waste-kitchen-ideas-tiny-apartments`.
- Conditional supporting: `/blog/zero-waste-kitchen-budget-9-swaps` after savings claims are repaired.

### Suggested CTA locations

- After the pantry article's rotation guidance.
- After the chef-habits article's inventory/use-first section, not beside unsupported authority or savings copy.
- After the tiny-kitchen article's storage/visibility section.
- A dedicated “plan what to use first” card on `/resources` after resource-library restructuring.
- Do not use a global article CTA outside food-use contexts.

### Email opt-in relationship

Recommended default: direct access from relevant kitchen articles, with optional email signup kept separate. Email delivery may be reasonable for a weekly reusable sheet only after the owner approves:

- whether signup subscribes the reader to ongoing email;
- whether an immediate direct link is also available;
- automation, file hosting, version updates, and correction delivery;
- privacy treatment for any form fields or analytics.

The sheet must not be promoted as a way to “save money” or “eliminate food waste.”

### Owner approval required

- Food-safety sources, jurisdiction scope, date-label language, and reviewer.
- Direct/email delivery and Mailchimp behavior.
- Whether fillable fields store anything; default should be no server-side storage.
- Final article CTAs and `/resources` placement.
- PDF/HTML scope, version, and update process.

### Definition of done

- A reader can complete one weekly rotation without buying containers.
- Safety/date language is authoritative, scoped, cited, and reviewed.
- No waste, savings, freshness, or nutrition outcome is guaranteed.
- Tables, fields, reading order, mobile flow, print, grayscale, and large-text checks pass.
- File URL, version, correction path, and destination CTAs are verified.
- Delivery/privacy behavior matches the public promise and has owner approval.

## Brief 3 — Small-Room Reset Planning Sheet

### Reader problem

A small room feels difficult to use, but the reader may jump directly to storage or decor purchases without first recording function, measurements, pathways, existing items, renter limits, and household needs.

### Intended outcome

Help the reader define what the room must support, record constraints, test one layout or storage change, and pause purchases until a specific need is clear. Completion means a measured plan and next test, not a makeover, before/after result, or budget guarantee.

### Primary reader

A renter or small-space dweller planning a living-room, bedroom, entryway, work-zone, or storage reset.

### Sections and fields

#### 1. Room and purpose

- Room/zone.
- Who uses it and for what tasks?
- What must remain accessible?
- What currently works?
- What recurring friction needs attention?

#### 2. Measurements and fixed constraints

- Room length/width/ceiling height with unit.
- Door, window, radiator/vent, outlet, built-in, and main pathway locations.
- Existing furniture dimensions.
- Accessibility, mobility, child, pet, safety, and shared-household considerations.
- Landlord/property approval needed? `yes / no / not sure`.

#### 3. Existing-item inventory

- Item.
- Function.
- Dimensions/condition.
- Keep, relocate, repair, release, or undecided.
- Evidence/permission needed before disposal, donation, sale, repair, or modification.

#### 4. Path and use test

- Main entry and movement path.
- Seating/work/storage zones.
- What blocks reach, movement, light, or routine?
- One layout to test using existing items.
- Test period and observation note.

#### 5. Storage and lighting needs

- What specifically needs a home?
- Frequency of use and reach/access need.
- Existing storage that can be reassigned.
- Task/ambient light need without electrical installation advice.

#### 6. Purchase pause

- Unmet function after testing.
- Required dimensions.
- Existing/borrow/repair/secondhand/new options.
- Condition, transport, cleaning, return, assembly, household, and renter constraints.
- Reader-entered budget; ETLH does not supply a target.
- Wait/research/approve decision.

#### 7. Next reset step

- One change to test.
- What will be moved/cleared/prepared?
- When to review.
- Keep, adjust, stop, or seek help/approval.

### Content outline

1. Purpose and “planning, not proof” label.
2. Function and friction.
3. Measurements/fixed constraints.
4. Existing-item decisions.
5. Layout/path test.
6. Storage/lighting notes.
7. Purchase pause and conditional comparison.
8. One next test and review.
9. Destination article and corrections/contact links.

### Claims boundaries

- Do not promise a room will feel bigger, calmer, healthier, less stressful, more sustainable, or more valuable.
- Do not call a layout accessible, safe, code-compliant, renter-safe, or universally functional without qualified review.
- Do not present example clearances as legal/building/accessibility requirements.
- Do not imply secondhand, natural, wood, plant, textile, or storage products are universally safer, cheaper, or more sustainable.
- Do not use before/after framing unless a separately documented real sequence meets the documentary standard.

### Evidence requirements

- Source any safety, accessibility, material, plant/pet, renter modification, wall-mounting, electrical, lighting, or ergonomic guidance.
- Example measurements must be labeled examples and cannot override local code, lease, manufacturer, or professional guidance.
- Any cost example needs date, geography, tax/delivery/transport, condition, and source; recommended first version has blank reader cost fields only.
- Original-photo examples need provenance, releases, consistent viewpoints, and edit disclosure.

### Visual structure

- Three-page printable set or a two-page front/back version after usability testing.
- Page 1: purpose, friction, measurements, and fixed constraints.
- Page 2: item inventory, path/layout sketch grid, storage and lighting.
- Page 3: purchase pause, next test, and review.
- Light dot/grid sketch area with written instructions and units.
- Small line examples of doorway, window, furniture footprint, and movement arrow; clearly label examples.
- No polished “after” room, shopping collage, or decorative product checklist.

### Accessibility requirements

- Sketch grid cannot be the only method; provide text fields for measurements, pathways, and layout notes.
- Tagged headings, labeled fields, logical tab order, and instructions before controls.
- Units must be typed/written, not inferred from column position.
- Provide a single-column mobile alternative with optional simple list-based room map.
- Maintain contrast for grid/lines without making them visually dominant.
- Allow large text without overlapping fields.

### Printable and mobile-use considerations

- US Letter portrait; verify home-printer clipping and grayscale.
- Offer an A4 variant only after owner approval and page-break review.
- Mobile version should support step-by-step completion and photo-free notes without horizontal scrolling.
- Do not require uploading room photos or measurements to ETLH.
- If photo upload is ever proposed, it requires a separate privacy, storage, deletion, access, and consent design.

### Intended file format

- Preferred: tagged printable/fillable PDF plus responsive HTML stepper/form that stores nothing server-side by default.
- Suggested canonical filename after approval: `small-room-reset-planning-sheet-v1.pdf`.

### Corresponding live article destinations

- Primary: `/blog/sustainable-small-apartment-decor-before-after`, whose current public presentation is a practical illustrative room-reset plan.
- Primary: `/blog/sustainable-tiny-living-room-layout-ideas`.
- Supporting: `/blog/eco-friendly-small-apartment-weekend-checklist`.
- Supporting: `/blog/eco-friendly-small-apartment-decor-budget` after its generated/watermarked hero and sourcing claims are repaired.

### Suggested CTA locations

- After “Set Priorities Before Setting a Budget” in the practical room-reset article.
- After the layout-options section in the tiny-living-room article.
- Before purchase-oriented sections in the weekend and budget-decor articles.
- A “plan before buying” card on `/resources` after that route is restructured.
- Do not place beside legacy before/after or fixed-budget promises.

### Email opt-in relationship

Recommended default: direct access because the planning sheet is part of the article's practical value. Optional email signup can offer future small-space planning notes only with separate, explicit consent. If email delivery is selected:

- name the exact file/version;
- deliver it immediately and provide a recovery path;
- do not promise a makeover or fixed budget;
- test on mobile and common email clients;
- preserve a stable direct correction/update URL.

### Owner approval required

- Measurement fields, example diagrams, evidence notes, and safety/accessibility boundaries.
- Direct/email delivery and Mailchimp automation.
- Article and `/resources` CTA locations.
- Whether HTML and fillable PDF are both in the first release.
- Any documentary room photography, releases, and public before/after use.

### Definition of done

- A reader can describe a room need, record constraints, test a layout, and pause a purchase without a photo or product list.
- Measurements and examples are clearly scoped and do not imply code/professional authority.
- No transformation, savings, accessibility, safety, or environmental outcome is guaranteed.
- Tagged PDF/HTML, keyboard, mobile, print, grayscale, large-text, and field-label checks pass.
- File URL, version, destination links, correction path, and delivery behavior are verified.
- Owner approves delivery, evidence, public CTAs, and any documentary example.

## Cross-resource delivery decision

The owner should select one consistent model before implementation:

| Model                            | Reader benefit                                                   | Operational/privacy cost                  | Required safeguards                                                                                     |
| -------------------------------- | ---------------------------------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Direct public download           | Lowest friction; article promise is immediately fulfilled        | File hosting/version maintenance          | Stable URL, versioning, corrections, analytics only if consented/configured                             |
| Optional email + direct download | Reader receives the file and may separately choose ongoing email | More interface and consent complexity     | Separate choices, no prechecked consent, tested automation, privacy alignment                           |
| Email-required delivery          | Can support list building                                        | Highest friction and failure/privacy risk | Explicit subscription terms, immediate delivery, error recovery, unsubscribe, no misleading exclusivity |

No repository evidence establishes which model converts better. Choose based on reader trust, operational capacity, privacy, and owner goals—not an invented conversion expectation.

## Recommended implementation order

1. Repair the current nonexistent/fixed-price email offer and verify Mailchimp behavior.
2. Approve one delivery model and shared accessible template.
3. Produce the **Small-Apartment Eco Step Starter Sheet** first because it can be claim-light and supports the current brand concept without food-safety or measured-layout complexity.
4. Produce the **Small-Kitchen Food-Use Rotation Sheet** after authoritative safety/date guidance is approved.
5. Produce the **Small-Room Reset Planning Sheet** after measurement examples and accessibility/safety boundaries are approved.
6. Add only relevant article CTAs and a revised `/resources` experience after each file actually exists and delivery is verified.

This order is operational, not a topic-cluster selection. Perplexity research may change later promotion and expansion priority.
