# CSP and Third-Party Privacy Audit

Date: 2026-07-18

## Scope

This audit records the third-party origins currently visible in the repository and defines a safe path toward a Content Security Policy (CSP). It does not add an enforcing CSP. Enforcement should be a separate implementation after a production-like preview confirms that all required resources and site behavior remain functional.

## Repository evidence

### Google Fonts

`src/routes/__root.tsx` preconnects to and loads styles from:

- `https://fonts.googleapis.com`
- `https://fonts.gstatic.com`

The stylesheet currently requests Instrument Serif and Plus Jakarta Sans. These requests occur before any analytics consent choice because they are part of the document head.

Privacy implication: a visitor's browser contacts Google-owned font infrastructure on page load. This is independent of GA4 consent.

### Google Analytics 4

`src/components/AnalyticsConsent.tsx` dynamically loads:

- `https://www.googletagmanager.com/gtag/js?id=G-G81H19S4TG`

The loader is restricted to the production hostname and runs only after the visitor accepts analytics. Ad storage, ad user data, and ad personalization are explicitly denied.

A future CSP must allow the GA script origin only if GA4 remains enabled. Network destinations used by GA4 must be confirmed from an authoritative production browser trace before an enforcing `connect-src` directive is introduced; this audit does not guess them.

### Lovable browser-side error reporting

`src/lib/lovable-error-reporting.ts` calls an optional `window.__lovableEvents.captureException` hook. The repository code reviewed here does not identify the hook's network endpoint.

A production browser trace is required to determine whether the deployed Lovable runtime sends error data to a third party and, if so, which origin and fields are transmitted. Until that is verified, no endpoint should be invented in CSP or privacy documentation.

### Open Graph image host

The root metadata references an image on:

- `https://storage.googleapis.com`

This is metadata for social crawlers rather than an in-page image request in the reviewed root component. A CSP `img-src` decision should be based on rendered pages and actual browser requests, not metadata alone.

### Email and form delivery

This audit did not find enough verified repository evidence to identify the contact form's delivery provider, endpoint, retention behavior, or abuse controls. Those items remain separate work. They require direct inspection of the contact route and production network behavior before conclusions are recorded.

## Current header baseline

`vercel.json` currently sets:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `X-Frame-Options: DENY`

No CSP is currently enforced.

## Recommended CSP rollout

1. Capture a production-like browser network inventory for the home page, one article, one category, privacy preferences, and contact form.
2. Record every required script, style, font, image, connection, frame, worker, and form-action origin.
3. Add `Content-Security-Policy-Report-Only` first.
4. Validate navigation, consent acceptance and decline, SPA page views, fonts, images, error handling, and contact submission in the authoritative `eco-tiny-living-site` preview.
5. Review report-only violations and remove accidental or unnecessary third-party dependencies.
6. Move to an enforcing CSP only after the report-only period is clean and the owner accepts any remaining third-party privacy tradeoffs.

## Initial directive model

This is a design starting point, not an approved header:

```text
default-src 'self';
base-uri 'self';
object-src 'none';
frame-ancestors 'none';
form-action 'self' <verified-form-provider>;
script-src 'self' <verified-GA-and-runtime-requirements>;
style-src 'self' <verified-font-style-requirements>;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: <verified-image-origins>;
connect-src 'self' <verified-analytics-error-and-form-origins>;
upgrade-insecure-requests;
```

Placeholders are intentional. They prevent an unverified policy from being copied into production.

## Privacy and architecture recommendations

- Consider self-hosting the two font families to remove unconditional Google Fonts requests and simplify CSP. Confirm font licensing and repository asset impact before implementation.
- Keep GA4 consent-gated and production-host restricted.
- Verify what the Lovable runtime collects before describing it as an error-reporting processor in public policy.
- Keep email delivery, retention, and anti-abuse review separate from CSP so provider-specific decisions are not hidden inside a header change.
- Do not add an enforcing CSP and change third-party providers in the same pull request.

## Completion criteria for the implementation task

The CSP implementation is complete only when:

- the complete production-like origin inventory is attached to the pull request;
- report-only violations are reviewed;
- `bun install --frozen-lockfile` and the full required CI suite pass;
- the authoritative `eco-tiny-living-site` preview is READY;
- consent, navigation, fonts, images, error boundaries, and contact behavior pass in the preview;
- the change is merged only after all gates pass;
- production headers and behavior are verified on `https://ecotinylivinghub.com`;
- roadmap issue #2 records the exact merge commit, deployment ID, validation results, and external limitations.

## Owner/legal boundary

This technical audit does not determine whether any third-party processing is legally sufficient, whether a specific consent mechanism is legally required, or what retention terms should be promised. Those are owner/legal decisions and must not be inferred from code alone.
