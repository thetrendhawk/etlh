import { useState, type FormEvent } from "react";

interface Props {
  variant?: "full" | "inline";
}

type Status = "idle" | "loading" | "success" | "error";

const MAILCHIMP_BASE = "https://gmail.us22.list-manage.com/subscribe/post-json";
const U = "2b6b599ff49439c3c3a6a5927";
const ID = "b33e3d79ce";
const F_ID = "0074c2e1f0";

function subscribeViaJsonp(email: string, firstName: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const cb = "mc_cb_" + Date.now();
    const params = new URLSearchParams({
      u: U,
      id: ID,
      f_id: F_ID,
      EMAIL: email,
      FNAME: firstName ?? "",
      // Honeypot field — must remain empty
      [`b_${U}_${ID}`]: "",
    });
    const script = document.createElement("script");
    const url = `${MAILCHIMP_BASE}?${params.toString()}&c=${cb}`;

    (window as any)[cb] = (data: any) => {
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
      delete (window as any)[cb];
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

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const payload = await subscribeViaJsonp(email, name);
      if (payload.result === "success") {
        setStatus("success");
        setMessage("You're in — check your inbox to confirm.");
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

  if (variant === "inline") {
    return (
      <aside className="my-12 bg-moss/5 border border-moss/15 rounded-2xl p-6 md:p-8">
        <p className="uppercase text-[11px] font-bold tracking-widest text-moss">Free Download</p>
        <h3 className="font-serif text-2xl mt-2 mb-2">Get the 30-Day Eco-Upgrade Checklist</h3>
        <p className="text-earth-900/70 text-sm mb-5">
          30 renter-friendly swaps for under $100, delivered to your inbox.
        </p>
        {status === "success" ? (
          <p role="status" className="text-moss font-medium">{message}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" noValidate>
            <label htmlFor="inline-email" className="sr-only">Email</label>
            <input
              id="inline-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              disabled={loading}
              className="flex-1 bg-white border border-earth-900/10 px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-moss/30 text-sm disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-earth-900 text-white px-6 py-3 rounded-full font-medium hover:bg-earth-900/90 transition-colors text-sm disabled:opacity-60"
            >
              {loading ? "Sending…" : "Send it"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p role="alert" className="mt-3 text-sm text-clay">{message}</p>
        )}
      </aside>
    );
  }

  return (
    <section className="bg-moss/5 py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="uppercase text-xs font-bold tracking-widest text-moss">Free Resource</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
          The 30-Day Small Apartment Eco-Upgrade
        </h2>
        <p className="text-lg text-earth-900/70 mb-10 max-w-2xl mx-auto">
          Download our checklist of 30 renter-friendly, sustainable swaps that cost less than $100 total. Build your dream eco apartment without the waste — or the guilt.
        </p>
        {status === "success" ? (
          <p role="status" className="text-moss font-medium text-lg">{message}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" noValidate>
            <label htmlFor="optin-name" className="sr-only">First name</label>
            <input
              id="optin-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name"
              disabled={loading}
              className="flex-1 bg-white border border-earth-900/10 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-moss/30 disabled:opacity-60"
            />
            <label htmlFor="optin-email" className="sr-only">Email</label>
            <input
              id="optin-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              disabled={loading}
              className="flex-1 bg-white border border-earth-900/10 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-moss/30 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-earth-900 text-white px-8 py-4 rounded-full font-medium hover:bg-earth-900/90 transition-colors whitespace-nowrap disabled:opacity-60"
            >
              {loading ? "Sending…" : "Send it to me"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p role="alert" className="mt-6 text-clay">{message}</p>
        )}
        <ul className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-earth-900/50">
          <li>✓ 100% Renter Friendly</li>
          <li>✓ Under $100 Budget</li>
          <li>✓ Instant Download</li>
        </ul>
      </div>
    </section>
  );
}
