import { useId, useState, type FormEvent } from "react";

interface Props {
  variant?: "full" | "inline";
}

type Status = "idle" | "loading" | "success" | "error";

interface MailchimpResponse {
  result?: string;
  msg?: unknown;
}

type JsonpWindow = Window & Record<string, unknown>;

const MAILCHIMP_BASE = "https://choosebettertech.us22.list-manage.com/subscribe/post-json";
const U = "2b6b599ff49439c3c3a6a5927";
const ID = "b33e3d79ce";
const F_ID = "007bc2e1f0";
const PDF_PATH = "/downloads/small-apartment-eco-step-starter-sheet-v1.pdf";
const HTML_PATH = "/downloads/small-apartment-eco-step-starter-sheet-v1.html";

function subscribeViaJsonp(email: string, firstName: string): Promise<MailchimpResponse> {
  return new Promise((resolve, reject) => {
    const cb = "mc_cb_" + Date.now();
    const params = new URLSearchParams({
      u: U,
      id: ID,
      f_id: F_ID,
      EMAIL: email,
      FNAME: firstName,
      [`b_${U}_${ID}`]: "",
    });
    const script = document.createElement("script");
    const url = `${MAILCHIMP_BASE}?${params.toString()}&c=${cb}`;
    const jsonpWindow = window as JsonpWindow;

    jsonpWindow[cb] = (data: MailchimpResponse) => {
      resolve(data);
      cleanup();
    };

    script.src = url;
    script.onerror = () => {
      reject(new Error("Failed to load subscription script"));
      cleanup();
    };

    const cleanup = () => {
      if (script.parentNode) document.head.removeChild(script);
      delete jsonpWindow[cb];
    };

    document.head.appendChild(script);

    setTimeout(() => {
      reject(new Error("Subscription request timed out"));
      cleanup();
    }, 15000);
  });
}

export function EmailOptIn({ variant = "full" }: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const idPrefix = useId();
  const emailId = `${idPrefix}-email`;
  const nameId = `${idPrefix}-name`;
  const statusId = `${idPrefix}-status`;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("Sending your request…");
    try {
      const payload = await subscribeViaJsonp(email, name);
      if (payload.result === "success") {
        setStatus("success");
        setMessage("Thanks — check your inbox for the next step.");
        setEmail("");
        setName("");
      } else {
        setStatus("error");
        const msg = String(payload.msg ?? "Something went wrong. Please try again.")
          .replace(/<[^>]*>/g, "")
          .trim();
        setMessage(msg);
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  const loading = status === "loading";
  const hasError = status === "error";

  if (variant === "inline") {
    return (
      <aside className="my-12 bg-moss/5 border border-moss/15 rounded-2xl p-6 md:p-8">
        <p className="uppercase text-[11px] font-bold tracking-widest text-moss">Free Resource</p>
        <h3 className="font-serif text-2xl mt-2 mb-2">Small-Apartment Eco Step Starter Sheet</h3>
        <p className="text-earth-900/70 text-sm mb-5">
          Choose one small, reversible action without turning sustainable living into another overwhelming project.
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          <a
            href={PDF_PATH}
            download
            className="bg-earth-900 text-white px-6 py-3 rounded-full font-medium hover:bg-earth-900/90 transition-colors text-sm"
          >
            Download the PDF
          </a>
          <a
            href={HTML_PATH}
            className="border border-earth-900/15 px-6 py-3 rounded-full font-medium hover:bg-earth-900/5 transition-colors text-sm"
          >
            Use the online version
          </a>
        </div>
        <p className="text-earth-900/60 text-sm mb-3">
          Optional: join the ETLH email list for practical notes and future resource updates.
        </p>
        {status === "success" ? (
          <p id={statusId} role="status" aria-live="polite" className="text-moss font-medium">
            {message}
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" aria-busy={loading}>
            <label htmlFor={emailId} className="sr-only">Email</label>
            <input
              id={emailId}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              disabled={loading}
              aria-invalid={hasError}
              aria-describedby={message ? statusId : undefined}
              className="flex-1 bg-white border border-earth-900/10 px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-moss/30 text-sm disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-moss text-white px-6 py-3 rounded-full font-medium hover:bg-moss-dark transition-colors text-sm disabled:opacity-60"
            >
              {loading ? "Joining…" : "Join the list"}
            </button>
          </form>
        )}
        {status !== "success" && (
          <p
            id={statusId}
            role={hasError ? "alert" : "status"}
            aria-live={hasError ? "assertive" : "polite"}
            className={hasError ? "mt-3 text-sm text-clay" : "sr-only"}
          >
            {message}
          </p>
        )}
      </aside>
    );
  }

  return (
    <section className="bg-moss/5 py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="uppercase text-xs font-bold tracking-widest text-moss">Free Resource</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
          Small-Apartment Eco Step Starter Sheet
        </h2>
        <p className="text-lg text-earth-900/70 mb-8 max-w-2xl mx-auto">
          A two-page planning sheet that helps you notice one recurring friction point, choose a realistic Eco Step, and review what happened without scoring yourself.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <a
            href={PDF_PATH}
            download
            className="bg-earth-900 text-white px-8 py-4 rounded-full font-medium hover:bg-earth-900/90 transition-colors"
          >
            Download the free PDF
          </a>
          <a
            href={HTML_PATH}
            className="border border-earth-900/15 px-8 py-4 rounded-full font-medium hover:bg-earth-900/5 transition-colors"
          >
            Use the online version
          </a>
        </div>
        <div className="border-t border-earth-900/10 pt-8 max-w-2xl mx-auto">
          <p className="text-earth-900/70 mb-5">
            The resource is available without signing up. Email is optional for practical ETLH notes and future resource updates.
          </p>
          {status === "success" ? (
            <p id={statusId} role="status" aria-live="polite" className="text-moss font-medium text-lg">
              {message}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" aria-busy={loading}>
              <label htmlFor={nameId} className="sr-only">First name (optional)</label>
              <input
                id={nameId}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First name (optional)"
                disabled={loading}
                className="flex-1 bg-white border border-earth-900/10 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-moss/30 disabled:opacity-60"
              />
              <label htmlFor={emailId} className="sr-only">Email</label>
              <input
                id={emailId}
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                disabled={loading}
                aria-invalid={hasError}
                aria-describedby={message ? statusId : undefined}
                className="flex-1 bg-white border border-earth-900/10 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-moss/30 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-moss text-white px-8 py-4 rounded-full font-medium hover:bg-moss-dark transition-colors whitespace-nowrap disabled:opacity-60"
              >
                {loading ? "Joining…" : "Join the list"}
              </button>
            </form>
          )}
          {status !== "success" && (
            <p
              id={statusId}
              role={hasError ? "alert" : "status"}
              aria-live={hasError ? "assertive" : "polite"}
              className={hasError ? "mt-6 text-clay" : "sr-only"}
            >
              {message}
            </p>
          )}
        </div>
        <ul className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-earth-900/50">
          <li>✓ No purchase required</li>
          <li>✓ Renter-aware planning</li>
          <li>✓ Direct access</li>
        </ul>
      </div>
    </section>
  );
}
