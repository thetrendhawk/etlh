import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const GA_MEASUREMENT_ID = "G-G81H19S4TG";
const PRODUCTION_HOSTNAME = "ecotinylivinghub.thrwds.com";

const GA_BOOTSTRAP_SCRIPT = `
(function () {
  if (window.location.hostname !== "${PRODUCTION_HOSTNAME}") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}";
  script.id = "etlh-google-analytics";
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", "${GA_MEASUREMENT_ID}", { send_page_view: false });

  var pagePath = window.location.pathname + window.location.search;
  window.__etlhLastGaPagePath = pagePath;
  window.gtag("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
    page_path: pagePath
  });
})();
`;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __etlhLastGaPagePath?: string;
  }
}

function GoogleAnalyticsRouteTracking() {
  const router = useRouter();

  useEffect(() => {
    if (window.location.hostname !== PRODUCTION_HOSTNAME) return;

    return router.subscribe("onResolved", () => {
      const pagePath = `${window.location.pathname}${window.location.search}`;
      if (window.__etlhLastGaPagePath === pagePath) return;

      window.__etlhLastGaPagePath = pagePath;
      window.gtag?.("event", "page_view", {
        page_title: document.title,
        page_location: window.location.href,
        page_path: pagePath,
      });
    });
  }, [router]);

  return null;
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Eco Tiny Living Hub — Sustainable Living for Small Apartments" },
      { name: "description", content: "Practical, beginner-friendly guides for renters who want a zero-waste kitchen, eco-friendly small apartment decor, and sustainable habits on a budget." },
      { name: "author", content: "Eco Tiny Living Hub" },
      { property: "og:site_name", content: "Eco Tiny Living Hub" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Eco Tiny Living Hub — Sustainable Living for Small Apartments" },
      { name: "twitter:title", content: "Eco Tiny Living Hub — Sustainable Living for Small Apartments" },
      { property: "og:description", content: "Practical, beginner-friendly guides for renters who want a zero-waste kitchen, eco-friendly small apartment decor, and sustainable habits on a budget." },
      { name: "twitter:description", content: "Practical, beginner-friendly guides for renters who want a zero-waste kitchen, eco-friendly small apartment decor, and sustainable habits on a budget." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/618f9034-5cbc-4cac-aef8-143b55209d60" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/618f9034-5cbc-4cac-aef8-143b55209d60" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: GA_BOOTSTRAP_SCRIPT }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <GoogleAnalyticsRouteTracking />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
