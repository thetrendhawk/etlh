import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteUrl } from "@/lib/site";

const title = "Contact — Eco Tiny Living Hub";
const description = "Questions or topic suggestions for Eco Tiny Living Hub? Reach out through Instagram while the direct contact form is being prepared.";
const pageUrl = absoluteUrl("/contact");
const instagramUrl = "https://www.instagram.com/ecotinylivinghub/";

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
  return (
    <div className="min-h-screen bg-earth-100 text-earth-900">
      <SiteHeader />
      <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <span className="uppercase text-xs font-bold tracking-widest text-moss">Contact</span>
        <h1 className="font-serif text-5xl md:text-6xl mt-3 leading-tight">Say hello.</h1>
        <p className="text-earth-900/70 mt-4 text-lg leading-relaxed">
          Have a question about sustainable small-space living, or a topic you would like to see covered? Direct messages are currently the most reliable way to reach Eco Tiny Living Hub.
        </p>

        <section className="mt-12 bg-white border border-earth-900/5 rounded-2xl p-8">
          <h2 className="font-serif text-2xl">Message us on Instagram</h2>
          <p className="text-earth-900/70 mt-3 leading-relaxed">
            The website contact form is not active yet. Until it is connected to a verified delivery service, no form will be shown or claim that a message was sent.
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-earth-900 text-white px-7 py-3.5 rounded-full font-medium hover:bg-earth-900/90 transition-colors"
          >
            Open Instagram
          </a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
