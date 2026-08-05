import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const handlerPath = resolve(
  ".vercel/output/functions/__server.func/index.mjs",
);

if (!existsSync(handlerPath)) {
  throw new Error(
    `Built Vercel server handler not found at ${handlerPath}. Run pnpm run build first.`,
  );
}

const { default: handler } = await import(pathToFileURL(handlerPath).href);

if (!handler || typeof handler.fetch !== "function") {
  throw new TypeError("Built Vercel server does not export a fetch handler.");
}

const backgroundWork = [];
const response = await handler.fetch(
  new Request("https://ecotinylivinghub.com/", {
    headers: {
      "user-agent": "ETLH built-server smoke test",
    },
  }),
  {
    waitUntil(promise) {
      backgroundWork.push(Promise.resolve(promise));
    },
  },
);
const body = await response.text();

if (response.status !== 200) {
  throw new Error(
    `Built Vercel server returned HTTP ${response.status} for the homepage.`,
  );
}

if (!body.includes("Eco Tiny Living Hub")) {
  throw new Error("Built Vercel server response is missing the site identity.");
}

await Promise.allSettled(backgroundWork);

console.log(
  `check:built-server PASSED — homepage returned HTTP 200 (${body.length} characters).`,
);
