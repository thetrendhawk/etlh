import { Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ANALYTICS_CONSENT_KEY,
  ANALYTICS_PREFERENCES_EVENT,
  disableGoogleAnalytics,
  loadGoogleAnalytics,
  sendAnalyticsPageView,
} from "@/lib/analytics";

type ConsentChoice = "accepted" | "declined" | null;

export function AnalyticsConsent() {
  const router = useRouter();
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(ANALYTICS_CONSENT_KEY) as ConsentChoice;
    if (stored === "accepted") loadGoogleAnalytics();
    setChoice(stored === "accepted" || stored === "declined" ? stored : null);
    setOpen(stored !== "accepted" && stored !== "declined");

    const handleOpen = () => setOpen(true);
    window.addEventListener(ANALYTICS_PREFERENCES_EVENT, handleOpen);
    return () => window.removeEventListener(ANALYTICS_PREFERENCES_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    if (choice !== "accepted") return;
    loadGoogleAnalytics();
    return router.subscribe("onResolved", sendAnalyticsPageView);
  }, [choice, router]);

  function save(nextChoice: Exclude<ConsentChoice, null>) {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, nextChoice);
    if (nextChoice === "accepted") {
      loadGoogleAnalytics();
    } else {
      disableGoogleAnalytics();
    }
    setChoice(nextChoice);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <section
      role="dialog"
      aria-labelledby="analytics-consent-title"
      aria-describedby="analytics-consent-description"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-2xl border border-earth-900/10 bg-white p-5 shadow-2xl md:p-6"
    >
      <div className="md:flex md:items-center md:justify-between md:gap-8">
        <div>
          <h2 id="analytics-consent-title" className="font-serif text-2xl text-earth-900">
            Help us understand what is useful
          </h2>
          <p
            id="analytics-consent-description"
            className="mt-2 text-sm leading-relaxed text-earth-900/70"
          >
            ETLH uses Google Analytics only after you agree. It helps us understand general site
            usage. You can decline and still use the full site. Read the{" "}
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
