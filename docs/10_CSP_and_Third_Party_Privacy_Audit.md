# ETLH Content Security Policy and Third-Party Privacy Audit

## Scope

Audited the production-facing code paths that load or transmit data to third parties:

- Google Fonts
- Google Analytics 4
- Mailchimp email signup
- Vercel hosting and delivery
- External social links and Open Graph metadata

This document records technical behavior and implementation boundaries. It is not legal advice and does not replace owner review of published legal policies.

## Third-party inventory

### Vercel

Purpose: hosting, edge delivery, redirects, response headers, and application runtime.

Data exposure: normal web request information such as IP address, requested URL, user agent, timing, and operational logs may be processed by the hosting provider.

CSP requirement: none beyond `'self'` for the deployed application because first-party assets and runtime routes are served from the ETLH origin.

### Google Fonts

Purpose: load Instrument Serif and Plus Jakarta Sans.

Origins:

- Stylesheet: `https://fonts.googleapis.com`
- Font files: `https://fonts.gstatic.com`

Data exposure: a visitor's browser makes requests to Google when the remote fonts are used. Those requests can include IP address, user agent, referrer information subject to browser policy, and request timing.

Current mitigation: `Referrer-Policy: strict-origin-when-cross-origin`; only the two required font families and selected weights are requested.

Recommended future reduction: self-host the exact production font files after licensing and asset provenance are verified. Do not copy font binaries into the repository without confirming redistribution rights.

### Google Analytics 4

Purpose: consent-gated aggregate traffic and content-performance measurement.

Origins:

- Script: `https://www.googletagmanager.com`
- Measurement transport: `https://www.google-analytics.com` and regional Google Analytics endpoints

Data exposure: analytics is not loaded until the visitor explicitly accepts. When accepted, GA4 may receive page URL, page title, device/browser characteristics, approximate location, session information, and a first-party identifier. Advertising storage and personalization signals remain denied in the ETLH implementation.

CSP requirement: allow the exact script and connection origins; do not allow broad `https:` or wildcard script sources.

### Mailchimp

Purpose: email-list signup and delivery of requested resources.

Origin:

- JSONP subscription endpoint: `https://choosebettertech.us22.list-manage.com`

Data exposure: the submitted email address and optional first name are sent to Mailchimp. The current browser-side JSONP integration also exposes those values in the request URL, which may be present in browser/network tooling and provider logs.

Existing abuse control: Mailchimp honeypot field.

Remaining risks and follow-up:

- Client-side JSONP cannot provide strong server-side rate limiting.
- Query-string submission is less privacy-preserving than a first-party server endpoint.
- A future server-side proxy should validate input, rate limit by privacy-preserving signals, keep Mailchimp credentials server-side, and submit data in the request body.
- Do not claim stronger abuse protection until that server-side path exists and is verified.

### External links and metadata

Pinterest, Instagram, and other linked sites receive data only when a visitor follows a link. The Open Graph image URL may be fetched by social platforms and messaging crawlers when a page is shared.

## Enforced Content Security Policy

The site policy is intentionally narrow while remaining compatible with the current TanStack Start runtime and third-party integrations:

- `default-src 'self'`
- `base-uri 'self'`
- `object-src 'none'`
- `frame-ancestors 'none'`
- `form-action 'self'`
- scripts limited to first party, Google Analytics, and the exact Mailchimp list host
- styles limited to first party and Google Fonts
- fonts limited to first party and Google Fonts
- connections limited to first party and Google Analytics
- no broad `*`, `https:`, or `http:` source tokens
- insecure requests upgraded

`'unsafe-inline'` remains necessary for scripts and styles because the current server-rendered application emits inline hydration/bootstrap scripts and framework/style output. Removing it requires a nonce- or hash-based CSP integrated with the server renderer. The current policy is therefore a meaningful restriction, not the final strictest possible configuration.

## Validation

CI validates that:

- the CSP header exists globally;
- security-critical directives remain present;
- all currently required third-party origins are explicitly listed;
- broad wildcard and scheme-wide source tokens are rejected.

Production verification must confirm:

- the response header is present on the `.com` site;
- the homepage renders and hydrates;
- analytics still loads only after consent;
- declining analytics sends no GA request;
- Mailchimp signup can complete;
- Google Fonts load without CSP errors;
- browser console contains no unexpected CSP violations.

## Legal-policy boundary

The current Privacy Policy already identifies Vercel, Google Analytics, and Mailchimp. It does not explicitly describe remote Google Fonts requests or the Mailchimp JSONP/query-string transport. Updating public legal language requires owner review because wording may create legal commitments. The technical facts above are the recommended source material for that review.
