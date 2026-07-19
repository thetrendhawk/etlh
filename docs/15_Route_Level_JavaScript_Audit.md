# ETLH Route-Level JavaScript Audit

## Purpose

This audit records the measured client JavaScript baseline, identifies code that is loaded globally, and defines the ordered reduction plan for Eco Tiny Living Hub. It separates verified repository and build evidence from proposed implementation work.

## Verified baseline

The initial emitted-build audit measured:

- 463.1 KiB of JavaScript across 18 files;
- a 376.8 KiB largest shared chunk;
- approximately 47 KiB of unused JavaScript reported by the initial production Lighthouse review.

These figures describe emitted uncompressed asset sizes. They are not equivalent to network transfer size, parse cost, or execution time.

## First measured reduction

PR #56 removes the unused global React Query runtime. ETLH had initialized a `QueryClient`, router context, and `QueryClientProvider` on every route, but repository inspection found no query hooks, query-cache usage, or route data dependency on React Query.

The branch build measured:

- total JavaScript: 439.8 KiB;
- largest shared chunk: 353.0 KiB;
- reduction from baseline: approximately 23.3 KiB total and 23.8 KiB from the largest shared chunk.

PR #56 remains gated on an exact-head Vercel preview before merge.

## Current global runtime inventory

The root runtime currently includes or references:

- React and React DOM hydration;
- TanStack Router and TanStack Start runtime;
- the site-wide analytics-consent interface;
- root error and not-found components;
- error-reporting integration used only after a root error;
- global styles and font metadata;
- router scroll restoration and hydration scripts.

The homepage additionally loads:

- the email opt-in form;
- the reusable post-card component;
- site header and footer components;
- homepage content and responsive-image helpers.

The build output demonstrates that route components are already emitted into multiple files, but the shared framework/root chunk remains the main JavaScript cost.

## Ordered reduction plan

### 1. Remove unused global providers

Status: implemented in PR #56 and awaiting exact-head preview verification.

Reason: unused providers add code and runtime work to every route without delivering user-facing behavior.

### 2. Move error-only reporting out of the normal root path

Candidate change: replace the static root import of the error-reporting integration with an on-demand import inside the error boundary.

Expected effect: error-reporting code should not be part of the normal successful-route dependency graph.

Required safeguards:

- preserve reporting when a root error actually occurs;
- preserve the current recovery interface;
- prevent an error-reporting import failure from breaking error recovery;
- compare emitted chunks before and after the change.

This change overlaps the root file modified by PR #56 and must wait until that PR is merged or closed.

### 3. Audit analytics-consent loading cost

The consent interface is required on every route because visitors must be able to review or change analytics preferences. The audit should distinguish:

- essential preference-state and banner code;
- GA4 loader code that only runs after explicit acceptance;
- dialog or interaction code that can load only when preferences are opened.

No consent behavior may be weakened solely to reduce JavaScript.

### 4. Audit below-fold homepage interactivity

The homepage email form is interactive but appears below the hero and category section. A future implementation may test deferred hydration or component loading only when it preserves:

- server-rendered form content;
- keyboard and screen-reader behavior;
- status announcements;
- no visible layout shift;
- reliable submission behavior.

A smaller bundle is not worth a delayed or unreliable lead-magnet form.

### 5. Audit dependencies against actual source usage

The package manifest contains many UI and data dependencies. Installed dependencies do not automatically enter the production client bundle, so removal decisions must be based on source imports and emitted-build evidence rather than manifest size alone.

Potentially unused packages should be handled in a separate dependency-cleanup concern with:

- repository-wide import verification;
- lockfile regeneration through Bun;
- frozen-install validation;
- security audit;
- full CI and deployment checks.

### 6. Establish regression budgets after the reductions stabilize

The asset audit is currently report-first. Hard budgets should be based on a verified post-optimization baseline, not arbitrary thresholds.

Recommended first budgets after the current work settles:

- total emitted client JavaScript must not grow materially without explanation;
- the largest shared chunk must not exceed the verified optimized baseline;
- new route-specific interactive features should remain route-scoped where practical;
- CI should publish before/after asset evidence for performance-focused pull requests.

Exact numeric thresholds should be set after PR #56 and the error-only reporting slice are complete.

## Validation requirements

Each runtime reduction must pass:

- frozen dependency installation;
- lint and deterministic source checks;
- production build;
- emitted-asset audit with before/after comparison;
- rendered accessibility tests;
- Lighthouse branch audit;
- authoritative Vercel preview for the exact pull-request head;
- production verification after merge.

## Decision rules

Proceed when a change removes verified unused or conditional code without reducing user capability, accessibility, privacy controls, or reliability.

Do not proceed when:

- savings are speculative and cannot be measured;
- the change weakens consent or accessibility;
- the implementation merely moves work later while making interaction noticeably worse;
- framework internals are modified without a supported upgrade or configuration path;
- a dependency is removed without a regenerated and validated lockfile.

## Current conclusion

ETLH's first shared-runtime reduction is meaningful but not sufficient by itself. The largest chunk remains framework- and root-heavy at 353.0 KiB on the PR #56 branch. The next safest measured slice is error-only reporting, followed by a careful consent and below-fold interaction audit. These changes should remain small, independently measurable, and reversible.
