import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, isAbsolute, relative, resolve, sep } from "node:path";
import { Readable } from "node:stream";
import { pathToFileURL } from "node:url";
import { createGzip } from "node:zlib";

const outputRoot = resolve(".vercel/output");
const staticRoot = resolve(outputRoot, "static");
const handlerPath = resolve(outputRoot, "functions/__server.func/index.mjs");

if (!existsSync(handlerPath)) {
  throw new Error(
    `Built Vercel server handler not found at ${handlerPath}. Run pnpm run build first.`,
  );
}

const { default: handler } = await import(pathToFileURL(handlerPath).href);

if (!handler || typeof handler.fetch !== "function") {
  throw new TypeError("Built Vercel server does not export a fetch handler.");
}

const argumentValue = (name, fallback) => {
  const index = process.argv.indexOf(name);
  return index === -1 ? fallback : process.argv[index + 1];
};

const host = argumentValue("--host", "127.0.0.1");
const port = Number(argumentValue("--port", "4173"));

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new TypeError(`Invalid port: ${port}`);
}

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".mjs", "text/javascript; charset=utf-8"],
  [".pdf", "application/pdf"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".webp", "image/webp"],
  [".woff2", "font/woff2"],
  [".xml", "application/xml; charset=utf-8"],
]);

function findStaticFile(pathname) {
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(pathname);
  } catch {
    return undefined;
  }

  const candidate = resolve(staticRoot, decodedPath.replace(/^\/+/, ""));
  const relativePath = relative(staticRoot, candidate);
  if (relativePath.startsWith(`..${sep}`) || relativePath === ".." || isAbsolute(relativePath)) {
    return undefined;
  }

  return existsSync(candidate) && statSync(candidate).isFile() ? candidate : undefined;
}

function acceptsGzip(incoming) {
  return /(?:^|,)\s*gzip\s*(?:,|$)/i.test(incoming.headers["accept-encoding"] ?? "");
}

function isCompressible(contentType) {
  return /^(?:application\/(?:javascript|json|xml)|image\/svg\+xml|text\/)/i.test(contentType);
}

function sendStaticFile(incoming, outgoing, staticFile) {
  const contentType =
    contentTypes.get(extname(staticFile).toLowerCase()) ?? "application/octet-stream";
  outgoing.statusCode = 200;
  outgoing.setHeader("cache-control", "public, max-age=31536000, immutable");
  outgoing.setHeader("content-type", contentType);

  if (incoming.method === "HEAD") {
    outgoing.end();
    return;
  }

  const stream = createReadStream(staticFile);
  if (acceptsGzip(incoming) && isCompressible(contentType)) {
    outgoing.setHeader("content-encoding", "gzip");
    outgoing.setHeader("vary", "accept-encoding");
    stream.pipe(createGzip()).pipe(outgoing);
  } else {
    stream.pipe(outgoing);
  }
}

const server = createServer(async (incoming, outgoing) => {
  try {
    const url = new URL(
      incoming.url ?? "/",
      `http://${incoming.headers.host ?? `${host}:${port}`}`,
    );
    const optimizedSource =
      url.pathname === "/_vercel/image" ? url.searchParams.get("url") : undefined;
    const staticFile = findStaticFile(optimizedSource ?? url.pathname);

    if (staticFile && (incoming.method === "GET" || incoming.method === "HEAD")) {
      sendStaticFile(incoming, outgoing, staticFile);
      return;
    }

    const headers = new Headers();
    for (const [name, value] of Object.entries(incoming.headers)) {
      for (const item of Array.isArray(value) ? value : [value]) {
        if (item !== undefined) headers.append(name, item);
      }
    }

    const requestInit = { method: incoming.method, headers };
    if (incoming.method !== "GET" && incoming.method !== "HEAD") {
      requestInit.body = Readable.toWeb(incoming);
      requestInit.duplex = "half";
    }

    const backgroundWork = [];
    const response = await handler.fetch(new Request(url, requestInit), {
      waitUntil(promise) {
        backgroundWork.push(Promise.resolve(promise));
      },
    });

    outgoing.statusCode = response.status;
    response.headers.forEach((value, name) => outgoing.setHeader(name, value));

    if (!response.body || incoming.method === "HEAD") {
      outgoing.end();
    } else if (
      acceptsGzip(incoming) &&
      isCompressible(response.headers.get("content-type") ?? "")
    ) {
      outgoing.removeHeader("content-length");
      outgoing.setHeader("content-encoding", "gzip");
      outgoing.setHeader("vary", "accept-encoding");
      Readable.fromWeb(response.body).pipe(createGzip()).pipe(outgoing);
    } else {
      Readable.fromWeb(response.body).pipe(outgoing);
    }

    void Promise.allSettled(backgroundWork);
  } catch (error) {
    console.error(error);
    if (!outgoing.headersSent) outgoing.statusCode = 500;
    outgoing.end("Internal Server Error");
  }
});

server.listen(port, host, () => {
  console.log(`Built ETLH server listening on http://${host}:${port}`);
});
