import { useState, type FormEvent } from "react";

interface Props {
  variant?: "full" | "inline";
}

export function EmailOptIn({ variant = "full" }: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: connect to email service (ConvertKit, MailerLite, Beehiiv, etc.)
    setSubmitted(true);
  }

  if (variant === "inline") {
    return (
      <aside className="my-12 bg-moss/5 border border-moss/15 rounded-2xl p-6 md:p-8">
        <p className="uppercase text-[11px] font-bold tracking-widest text-moss">Free Download</p>
        <h3 className="font-serif text-2xl mt-2 mb-2">Get the 30-Day Eco-Upgrade Checklist</h3>
        <p className="text-earth-900/70 text-sm mb-5">
          30 renter-friendly swaps for under $100, delivered to your inbox.
        </p>
        {submitted ? (
          <p className="text-moss font-medium">Thank you — check your inbox!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <label htmlFor="inline-email" className="sr-only">Email</label>
            <input
              id="inline-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-white border border-earth-900/10 px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-moss/30 text-sm"
            />
            <button
              type="submit"
              className="bg-earth-900 text-white px-6 py-3 rounded-full font-medium hover:bg-earth-900/90 transition-colors text-sm"
            >
              Send it
            </button>
          </form>
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
        {submitted ? (
          <p className="text-moss font-medium text-lg">Thank you — check your inbox for the checklist!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <label htmlFor="optin-name" className="sr-only">First name</label>
            <input
              id="optin-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name"
              className="flex-1 bg-white border border-earth-900/10 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-moss/30"
            />
            <label htmlFor="optin-email" className="sr-only">Email</label>
            <input
              id="optin-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 bg-white border border-earth-900/10 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-moss/30"
            />
            <button
              type="submit"
              className="bg-earth-900 text-white px-8 py-4 rounded-full font-medium hover:bg-earth-900/90 transition-colors whitespace-nowrap"
            >
              Send it to me
            </button>
          </form>
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
