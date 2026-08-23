const GA_MEASUREMENT_ID = "G-G81H19S4TG";
const PRODUCTION_HOSTNAME = "ecotinylivinghub.com";

export const ANALYTICS_CONSENT_KEY = "etlh-analytics-consent";
export const ANALYTICS_PREFERENCES_EVENT = "etlh-open-analytics-preferences";

export type AnalyticsEventName =
  "contact_email_click" | "resource_download" | "resource_open" | "social_click";

type AnalyticsEventParameters = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __etlhGaReady?: boolean;
    __etlhGaConfigured?: boolean;
    __etlhLastGaPagePath?: string;
  }
}

function hasAnalyticsConsent() {
  return window.localStorage.getItem(ANALYTICS_CONSENT_KEY) === "accepted";
}

export function sendAnalyticsPageView() {
  if (!window.__etlhGaReady || !window.gtag) return;
  const pagePath = `${window.location.pathname}${window.location.search}`;
  if (window.__etlhLastGaPagePath === pagePath) return;
  window.__etlhLastGaPagePath = pagePath;
  window.gtag("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
    page_path: pagePath,
  });
}

export function loadGoogleAnalytics() {
  if (window.location.hostname !== PRODUCTION_HOSTNAME) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      // Google Tag Manager requires the arguments object, not a normal array.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };

  if (!window.__etlhGaConfigured) {
    window.gtag("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
    window.__etlhGaConfigured = true;
    window.__etlhGaReady = true;
  }

  if (!document.getElementById("etlh-google-analytics")) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.id = "etlh-google-analytics";
    document.head.appendChild(script);
  }

  sendAnalyticsPageView();
}

export function disableGoogleAnalytics() {
  window.gtag?.("consent", "update", { analytics_storage: "denied" });
}

export function trackAnalyticsEvent(
  eventName: AnalyticsEventName,
  parameters: AnalyticsEventParameters,
) {
  if (typeof window === "undefined") return;
  if (window.location.hostname !== PRODUCTION_HOSTNAME || !hasAnalyticsConsent()) return;
  loadGoogleAnalytics();
  window.gtag?.("event", eventName, parameters);
}

export function openAnalyticsPreferences() {
  window.dispatchEvent(new Event(ANALYTICS_PREFERENCES_EVENT));
}
