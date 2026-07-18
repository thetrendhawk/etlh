import { readFileSync } from "node:fs";

interface HeaderEntry {
  key?: string;
  value?: string;
}

interface HeaderRule {
  source?: string;
  headers?: HeaderEntry[];
}

interface VercelConfig {
  headers?: HeaderRule[];
}

const config = JSON.parse(readFileSync("vercel.json", "utf8")) as VercelConfig;
const globalRule = config.headers?.find((rule) => rule.source === "/(.*)");
const csp = globalRule?.headers?.find(
  (header) => header.key?.toLowerCase() === "content-security-policy",
)?.value;

if (!csp) {
  throw new Error("vercel.json is missing a global Content-Security-Policy header.");
}

const requiredDirectives = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "script-src 'self'",
  "style-src 'self'",
  "font-src 'self'",
  "img-src 'self'",
  "connect-src 'self'",
  "upgrade-insecure-requests",
];

for (const directive of requiredDirectives) {
  if (!csp.includes(directive)) {
    throw new Error(`Content-Security-Policy is missing required directive: ${directive}`);
  }
}

const requiredOrigins = [
  "https://www.googletagmanager.com",
  "https://www.google-analytics.com",
  "https://*.google-analytics.com",
  "https://choosebettertech.us22.list-manage.com",
  "https://fonts.googleapis.com",
  "https://fonts.gstatic.com",
];

for (const origin of requiredOrigins) {
  if (!csp.includes(origin)) {
    throw new Error(`Content-Security-Policy is missing required third-party origin: ${origin}`);
  }
}

const prohibitedTokens = ["*", "http:", "https:"];
for (const token of prohibitedTokens) {
  const tokenPattern = new RegExp(`(^|[;\\s])${token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}($|[;\\s])`);
  if (tokenPattern.test(csp)) {
    throw new Error(`Content-Security-Policy contains overly broad source token: ${token}`);
  }
}

console.log("✓ Content Security Policy contains the required directives and narrow third-party allowlist.");
