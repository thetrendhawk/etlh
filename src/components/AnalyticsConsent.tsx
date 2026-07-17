import { Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const GA_MEASUREMENT_ID = "G-G81H19S4TG";
const PRODUCTION_HOSTNAME = "ecotinylivinghub.thrwds.com";
const CONSENT_KEY = "etlh-analytics-consent";
const OPEN_EVENT = "etlh-open-analytics-preferences";

type ConsentChoice = "accepted" | "declined" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __etlhLastGaPagePath?: string;
  }
}

function sendPageView() {
  const pagePath = `${window.location.pathname}${window.location.search}`;
  if (window.__etlhLastGaPagePath === pagePath) return;
  window.__etlhLastGaPagePath = pagePath;
  window.gtag?.("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
    page_path: pagePath,
  });
}

function loadGoogleAnalytics() {
  if (window.location.hostname !== PRODUCTION_HOSTNAME) return;
  if (document.getElementById("etlh-google-analytics")) {
    sendPageView();
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function (...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.id = "etlh-google-analytics";
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
  sendPageView();
}

export function AnalyticsConsent() {
  const router = useRouter();
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY) as ConsentChoice;
    setChoice(stored === "accepted" || stored === "declined" ? stored : null);
    setOpen(stored !== "accepted" && stored !== "declined");

    const handleOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    if (choice !== "accepted") return;
    loadGoogleAnalytics();
    return router.subscribe("onResolved", sendPageView);
  }, [choice, router]);

  function save(nextChoice: Exclude<ConsentChoice, null>) {
    window.localStorage.setItem(CONSENT_KEY, nextChoice);
    setChoice(nextChoice);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <section
      role="dialog"
      aria-modal="true"
      aria-labelledby="analytics-consent-title"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-2xl border border-earth-900/10 bg-white p-5 shadow-2xl md:p-6"
    >
      <div className="md:flex md:items-center md:justify-between md:gap-8">
        <div>
          <h2 id="analytics-consent-title" className="font-serif text-2xl text-earth-900">
            Help us understand what is useful
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-earth-900/70">
            ETLH uses Google Analytics only after you agree. It helps us understand general site usage. You can decline and still use the full site. Read the{" "}
            <Link to="/privacy" className="underline underline-offset-4 hover:text-moss">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="mt-5 flex shrink-0 flex-wrap gap-3 md:mt-0">
          <button
            type="button"
            onClick={() => save("declined")}
            className="rounded-full border border-earth-900/20 px-5 py-2.5 text-sm font-medium text-earth-900 hover:bg-earth-900/5"
          >
            Decline analytics
          </button>
          <button
            type="button"
            onClick={() => save("accepted")}
            className="rounded-full bg-earth-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-earth-900/90"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </section>
  );
}

export function openAnalyticsPreferences() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}
