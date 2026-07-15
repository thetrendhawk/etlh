import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteUrl } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(1, "Please tell me your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "A few more words please").max(2000),
});

const title = "Contact — Eco Tiny Living Hub";
const description = "Questions about sustainable apartment living? Send a note and I'll get back to you.";
const pageUrl = absoluteUrl("/contact");

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: pageUrl },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      setError(r.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setError(null);
    // TODO: connect to email/CRM service
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-earth-100 text-earth-900">
      <SiteHeader />
      <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <span className="uppercase text-xs font-bold tracking-widest text-moss">Contact</span>
        <h1 className="font-serif text-5xl md:text-6xl mt-3 leading-tight">Say hello.</h1>
        <p className="text-earth-900/70 mt-4 text-lg leading-relaxed">
          Got a question about sustainable apartment living, or a topic you'd love to see covered? Send a note — I read every message.
        </p>

        {sent ? (
          <div className="mt-12 bg-moss/5 border border-moss/15 rounded-2xl p-8 text-center">
            <h2 className="font-serif text-2xl">Thanks for reaching out!</h2>
            <p className="text-earth-900/70 mt-2">I'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Your name</label>
              <input
                id="name"
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white border border-earth-900/10 px-5 py-3.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-moss/30"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                id="email"
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white border border-earth-900/10 px-5 py-3.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-moss/30"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={6}
                maxLength={2000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white border border-earth-900/10 px-5 py-3.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-moss/30 resize-none"
              />
            </div>
            {error && <p className="text-sm text-red-700">{error}</p>}
            <button
              type="submit"
              className="bg-earth-900 text-white px-8 py-4 rounded-full font-medium hover:bg-earth-900/90 transition-colors"
            >
              Send message
            </button>
          </form>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
