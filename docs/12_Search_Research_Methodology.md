# ETLH Search Research Methodology

## Purpose

Create a repeatable, evidence-first method for deciding which search problems Eco Tiny Living Hub should address. This methodology separates observed audience evidence, search-platform signals, editorial judgment, and owner decisions so that unsupported keyword claims are not treated as facts.

This document does not select priority clusters, estimate traffic, claim ranking potential, or approve publication topics.

## Core rule

A topic is not approved merely because a tool reports search volume or because it fits the brand. It must pass four distinct tests:

1. **Audience evidence:** real people describe the problem, constraint, or desired outcome.
2. **Search evidence:** current search results show a recognizable intent and a plausible content gap.
3. **Brand fit:** ETLH can answer the problem honestly, practically, and within its small-space sustainability scope.
4. **Execution fit:** the team can produce a useful answer with adequate evidence, images, internal links, and maintenance capacity.

Record each test separately. Do not combine weak signals into a false conclusion.

## Evidence classes

### A. Direct audience evidence

Examples:

- first-person forum or community discussions
- questions and comments under relevant videos or articles
- product reviews describing constraints, failures, workarounds, or desired outcomes
- reader emails, survey responses, or site-search terms when legitimately available

Capture:

- source URL or internal source identifier
- access date
- exact problem statement or a faithful paraphrase
- living context, such as renter, studio apartment, tiny home, shared space, or limited budget
- emotion or consequence
- attempted solution and result
- exclusion flags for promotion, duplication, unsupported claims, or unclear context

Do not manufacture quotations. Use short quotations only when the source can be preserved and verified.

### B. Search-platform evidence

Examples:

- Google autocomplete and related searches
- Search Console query and landing-page data
- current search-result page composition
- reputable keyword tools used as directional estimates
- Pinterest search suggestions when evaluating Pinterest packaging

Capture:

- exact query
- country, language, device, and date where available
- source/tool
- whether the number is measured, estimated, sampled, or inferred
- current result types and dominant intent
- visible freshness, authority, usability, or format gaps

Keyword-tool metrics are estimates, not facts. Never present them as guaranteed demand, traffic, or ranking opportunity.

### C. Editorial evidence

Examples:

- ETLH already has relevant first-hand research
- credible primary or authoritative sources are available
- existing articles can support the topic through internal links
- the topic can produce a practical reader outcome without overclaiming

Capture the reasoning and the evidence needed before publication.

### D. Owner decisions

Owner decisions include priority, commercial relevance, publishing capacity, legal risk tolerance, and final topic approval. Mark these explicitly. Do not infer them from brand fit or tool output.

## Research workflow

### Step 1: Define the problem lane

State the audience, setting, constraint, and desired outcome in one sentence.

Template:

> A person living in **[setting]** wants to **[outcome]** but is constrained by **[constraint]**.

Reject lanes that are too broad to produce a clear search intent.

### Step 2: Gather direct evidence

Collect multiple independent records before forming a conclusion. Favor detailed first-person accounts over generic listicles or promotional summaries.

For each record, assign:

- evidence strength: strong, moderate, weak
- duplication status
- promotional-risk flag
- relevance to small-space living
- relevance to sustainability, affordability, calm, or reduced friction

A single anecdote may reveal a useful problem but does not establish prevalence.

### Step 3: Normalize problem language

Preserve the original wording, then add a normalized problem label. Keep the source language separate from the researcher’s interpretation.

Example fields:

| Field | Purpose |
|---|---|
| Source wording | What the person actually said |
| Normalized problem | Consistent label for grouping |
| Constraint | Budget, space, rental rules, time, humidity, storage, etc. |
| Desired outcome | What success looks like |
| Current workaround | What they already tried |
| Failure point | Why the workaround was insufficient |

### Step 4: Build query families

Translate validated problems into query families without assuming volume.

Include:

- plain-language problem queries
- solution-seeking queries
- comparison queries
- cost or budget queries
- renter- or small-space-modified queries
- troubleshooting queries
- checklist, guide, setup, or routine formats when the evidence supports them

Do not create artificial variants that change no meaningful intent.

### Step 5: Inspect current search results

Review the live result set for each candidate query. Record:

- dominant intent: informational, commercial investigation, transactional, navigational, mixed
- dominant format: guide, list, product page, video, forum, tool, category page
- recurring subtopics
- authority and evidence quality
- date sensitivity
- small-space relevance
- sustainability relevance
- obvious omissions or usability gaps

A weak result page does not automatically mean ETLH can rank. It only indicates a possible content gap requiring further evaluation.

### Step 6: Assess opportunity without false precision

Use a qualitative scorecard unless reliable first-party data exists.

| Dimension | Low | Medium | High |
|---|---|---|---|
| Audience evidence | isolated or vague | repeated but mixed | repeated, specific, independent |
| Intent clarity | conflicting | partly consistent | clear and stable |
| ETLH fit | peripheral | useful connection | central to brand promise |
| Evidence availability | weak or derivative | adequate | strong primary/authoritative support |
| Differentiation | little added value | better usability or focus | clear evidence, context, or format advantage |
| Maintenance burden | high | manageable | low |
| Internal-link support | isolated | some links | strong cluster support |

Record the basis for every rating. Do not total the ratings into a fabricated probability of success.

### Step 7: Classify the candidate

Assign one status:

- **Reject:** weak fit, weak evidence, unsafe claims, or no useful differentiation.
- **Hold:** potentially useful but missing evidence, data, expertise, or owner input.
- **Supporting article candidate:** narrow intent that strengthens an existing or proposed cornerstone.
- **Cornerstone candidate:** broad, durable reader problem with several distinct supporting intents.
- **Refresh candidate:** intent already addressed by an existing article that should be improved instead of duplicated.

### Step 8: Check cannibalization and existing coverage

Before approving a new article:

- search the repository for overlapping titles, slugs, headings, and problem statements
- compare target intent, not just keywords
- decide whether to refresh, consolidate, redirect, or create new content
- identify the intended cornerstone and supporting links

Do not publish multiple articles that answer the same primary intent with superficial wording changes.

### Step 9: Prepare the evidence packet

Every topic proposed for a brief should include:

- problem statement
- audience and constraint
- direct-evidence summary with sources
- query family
- result-page observations with review date
- intent classification
- existing-content overlap
- proposed role in a cluster
- evidence and claim requirements
- unresolved questions
- owner decisions required

Only after this packet is complete should a search-content brief be drafted.

## Research record schema

Recommended fields:

```text
research_id
lane
source_type
source_url_or_id
accessed_date
source_wording
faithful_paraphrase
audience_context
constraint
emotion
job_to_be_done
attempted_solution
failure_point
normalized_problem
query_family
search_intent
result_page_notes
existing_content_overlap
evidence_strength
promotional_flag
duplicate_of
exclusion_reason
candidate_status
researcher_notes
owner_decision
```

## Source quality rules

Prefer, in order appropriate to the claim:

1. primary research, government, academic, standards, or official technical sources
2. credible organizations with transparent methodology
3. detailed first-person experience for lived problems and constraints
4. reputable reporting for current context
5. secondary summaries only when primary evidence is unavailable

User-generated sources are valuable for identifying problems and language, but they do not by themselves validate scientific, health, safety, legal, environmental, or financial claims.

## Exclusion rules

Exclude or quarantine records that are:

- generic advice without first-person context
- promotional content disguised as experience
- duplicated or syndicated
- unverifiable quotations
- unsupported prevalence claims
- outside the ETLH audience or scope
- dependent on legal, medical, financial, structural, electrical, or safety judgment ETLH cannot responsibly provide
- based on private analytics or owner facts that have not been supplied

## AI-use rules

AI may help:

- normalize labels
- detect possible duplicates
- group records into provisional themes
- propose query variants
- summarize result-page patterns from supplied evidence
- identify missing evidence fields

AI may not:

- invent quotations, sources, metrics, trends, or reader experiences
- claim a topic has demand without a cited signal
- convert keyword estimates into traffic forecasts
- approve owner decisions
- treat generated clusters as validated research
- replace manual source review for consequential claims

Every AI-assisted conclusion must remain traceable to stored evidence.

## Review cadence

- Review live search results when a brief is created and again before publication.
- Recheck time-sensitive topics during each content refresh.
- Revisit rejected or held candidates only when new evidence appears.
- Use Search Console data after sufficient impressions accumulate to revise query families and content roles.

## Definition of done

A research candidate is ready for briefing only when:

- the problem is supported by traceable evidence
- the primary intent is clear
- current result pages have been reviewed and dated
- existing ETLH coverage has been checked
- the cluster role is stated
- evidence and claim requirements are explicit
- uncertainties and owner decisions are visible
- no demand, traffic, ranking, or conversion claim has been invented
