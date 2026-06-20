import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Eco Tiny Living Hub" },
      { name: "description", content: "Tools, products, and recommendations for sustainable living in a small apartment — reusable kitchen swaps, storage solutions, and eco cleaning supplies." },
      { property: "og:title", content: "Resources — Eco Tiny Living Hub" },
      { property: "og:description", content: "Tools and product recommendations for eco friendly small apartment living." },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: Resources,
});

interface Item {
  title: string;
  description: string;
  link?: string;
}

const sections: { title: string; intro: string; items: Item[] }[] = [
  {
    title: "Zero-waste kitchen swaps",
    intro: "Refillable, reusable, and renter-friendly.",
    items: [
      { title: "Reusable beeswax wraps", description: "A sturdy 3-pack that replaces plastic wrap for most kitchen needs." },
      { title: "Glass jar storage set", description: "Stackable, dishwasher-safe jars for bulk pantry items." },
      { title: "Compostable dish sponges", description: "Plant-based and they actually scrub well." },
    ],
  },
  {
    title: "Small-space storage",
    intro: "Solutions that don't require drilling, painting, or losing your deposit.",
    items: [
      { title: "Tension shelf system", description: "Adds vertical storage without a single screw." },
      { title: "Woven storage baskets", description: "Hide clutter and add texture in one move." },
      { title: "Over-the-door organizers", description: "Free real estate inside any closet." },
    ],
  },
  {
    title: "Eco cleaning supplies",
    intro: "A simple kit that handles 90% of apartment cleaning.",
    items: [
      { title: "Refillable cleaning concentrate", description: "One bottle, dozens of refills, zero plastic waste." },
      { title: "Wool dryer balls", description: "Cut drying time and replace dryer sheets for years." },
      { title: "Bamboo dish brushes", description: "Replace plastic brushes with a compostable handle." },
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
          <h1 className="font-serif text-5xl md:text-6xl mt-3 leading-tight">Tools & recommendations</h1>
          <p className="text-earth-900/70 mt-4 text-lg">
            A growing collection of things that genuinely make small-apartment sustainable living easier. Updated as I test new picks.
          </p>
          <p className="text-earth-900/50 text-sm mt-3 italic">
            Note: this page may contain affiliate links in the future. I'll only recommend things I'd buy myself.
          </p>
        </header>

        <div className="space-y-16">
          {sections.map((s) => (
            <section key={s.title}>
              <div className="mb-6">
                <h2 className="font-serif text-3xl md:text-4xl">{s.title}</h2>
                <p className="text-earth-900/60 mt-2">{s.intro}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {s.items.map((item) => (
                  <article key={item.title} className="bg-white rounded-2xl p-6 border border-earth-900/5 flex flex-col">
                    <div className="aspect-video bg-earth-100 rounded-xl mb-5 grid place-items-center text-earth-900/30 text-xs uppercase tracking-widest">
                      Product image
                    </div>
                    <h3 className="font-serif text-xl">{item.title}</h3>
                    <p className="text-sm text-earth-900/60 mt-2 flex-1">{item.description}</p>
                    <a
                      href={item.link ?? "#"}
                      className="mt-5 inline-block text-center bg-earth-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-earth-900/90 transition-colors"
                    >
                      Coming soon
                    </a>
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
