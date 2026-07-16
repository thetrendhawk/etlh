import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteUrl } from "@/lib/site";

const title = "Resources — Eco Tiny Living Hub";
const description = "A transparent preview of resource categories being reviewed for sustainable small-space living.";
const pageUrl = absoluteUrl("/resources");

export const Route = createFileRoute("/resources")({
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
  component: Resources,
});

interface Item {
  title: string;
  description: string;
}

const sections: { title: string; intro: string; items: Item[] }[] = [
  {
    title: "Zero-waste kitchen swaps",
    intro: "Refillable, reusable, and renter-friendly categories under review.",
    items: [
      { title: "Reusable beeswax wraps", description: "A possible alternative to disposable plastic wrap for selected kitchen uses." },
      { title: "Glass jar storage", description: "Reusable containers that can make pantry contents easier to see and use." },
      { title: "Plant-based dish sponges", description: "Lower-plastic cleaning options that still need durability and performance review." },
    ],
  },
  {
    title: "Small-space storage",
    intro: "Renter-friendly categories that do not require permanent installation.",
    items: [
      { title: "Tension shelf systems", description: "Vertical storage options designed to avoid drilling into walls." },
      { title: "Woven storage baskets", description: "Flexible containers that can reduce visible clutter while fitting into open shelving." },
      { title: "Over-the-door organizers", description: "Storage that uses otherwise empty door space in closets and small rooms." },
    ],
  },
  {
    title: "Eco cleaning supplies",
    intro: "Simple reusable categories being evaluated for everyday apartment cleaning.",
    items: [
      { title: "Refillable cleaning concentrates", description: "Concentrated products that may reduce repeat packaging when used correctly." },
      { title: "Wool dryer balls", description: "A reusable alternative to disposable dryer sheets for compatible laundry routines." },
      { title: "Replaceable-head dish brushes", description: "Brush systems intended to replace only the worn cleaning head instead of the full handle." },
    ],
  },
];

function Resources() {
  return (
    <div className="min-h-screen bg-earth-100 text-earth-900">
      <SiteHeader />
      <main className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <header className="max-w-2xl mb-12">
          <span className="uppercase text-xs font-bold tracking-widest text-moss">Resources</span>
          <h1 className="font-serif text-5xl md:text-6xl mt-3 leading-tight">Resource library in progress</h1>
          <p className="text-earth-900/70 mt-4 text-lg">
            These are product categories we may evaluate for small-space sustainable living. No product links are published until a recommendation has been reviewed and can be presented honestly.
          </p>
          <p className="text-earth-900/50 text-sm mt-3">
            Future affiliate links will be clearly disclosed. Inclusion will not be based only on commission availability.
          </p>
        </header>

        <div className="space-y-16">
          {sections.map((section) => (
            <section key={section.title}>
              <div className="mb-6">
                <h2 className="font-serif text-3xl md:text-4xl">{section.title}</h2>
                <p className="text-earth-900/60 mt-2">{section.intro}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <article key={item.title} className="bg-white rounded-2xl p-6 border border-earth-900/5 flex flex-col">
                    <div className="aspect-video bg-earth-100 rounded-xl mb-5 grid place-items-center text-earth-900/30 text-xs uppercase tracking-widest">
                      Review pending
                    </div>
                    <h3 className="font-serif text-xl">{item.title}</h3>
                    <p className="text-sm text-earth-900/60 mt-2 flex-1">{item.description}</p>
                    <span className="mt-5 inline-block text-center border border-earth-900/10 text-earth-900/55 px-5 py-2.5 rounded-full text-sm font-medium" aria-label={`${item.title} recommendation is not yet published`}>
                      Not yet recommended
                    </span>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
