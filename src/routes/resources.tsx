import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteUrl } from "@/lib/site";

const title = "Resources — Eco Tiny Living Hub";
const description = "Free planning tools and transparently reviewed resources for sustainable small-space living.";
const pageUrl = absoluteUrl("/resources");
const pdfPath = "/downloads/small-apartment-eco-step-starter-sheet-v1.pdf";
const htmlPath = "/downloads/small-apartment-eco-step-starter-sheet-v1.html";

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
          <h1 className="font-serif text-5xl md:text-6xl mt-3 leading-tight">Practical tools for lighter small-space living</h1>
          <p className="text-earth-900/70 mt-4 text-lg">
            Start with free planning tools. Product recommendations remain separate and are not published until they have been reviewed and can be presented honestly.
          </p>
        </header>

        <section className="bg-white rounded-3xl border border-earth-900/5 p-7 md:p-10 mb-20 grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
          <div>
            <span className="uppercase text-xs font-bold tracking-widest text-moss">Available now</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-3">Small-Apartment Eco Step Starter Sheet</h2>
            <p className="text-earth-900/70 mt-4 leading-relaxed">
              Use this two-page worksheet to notice one recurring friction point, choose one small and reversible Eco Step, and review what happened without treating the result as a score.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-earth-900/65">
              <li>• No purchase required</li>
              <li>• Includes renter, household, accessibility, and safety checks</li>
              <li>• Available without joining an email list</li>
            </ul>
          </div>
          <div className="bg-moss/5 rounded-2xl p-6">
            <p className="font-medium">Choose the format that works for you.</p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={pdfPath}
                download
                className="bg-earth-900 text-white px-6 py-3 rounded-full text-center font-medium hover:bg-earth-900/90 transition-colors"
              >
                Download the PDF
              </a>
              <a
                href={htmlPath}
                className="border border-earth-900/15 px-6 py-3 rounded-full text-center font-medium hover:bg-earth-900/5 transition-colors"
              >
                Use the online version
              </a>
            </div>
            <p className="text-xs text-earth-900/50 mt-4">
              The PDF is designed for printing. The browser version provides labeled fields, keyboard focus, and responsive layout.
            </p>
          </div>
        </section>

        <section aria-labelledby="reviews-heading">
          <div className="max-w-2xl mb-10">
            <h2 id="reviews-heading" className="font-serif text-4xl md:text-5xl">Product reviews in progress</h2>
            <p className="text-earth-900/70 mt-3">
              These categories may be evaluated in the future. No product link is published merely because a commission is available.
            </p>
          </div>

          <div className="space-y-16">
            {sections.map((section) => (
              <section key={section.title}>
                <div className="mb-6">
                  <h3 className="font-serif text-3xl md:text-4xl">{section.title}</h3>
                  <p className="text-earth-900/60 mt-2">{section.intro}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {section.items.map((item) => (
                    <article key={item.title} className="bg-white rounded-2xl p-6 border border-earth-900/5 flex flex-col">
                      <div className="aspect-video bg-earth-100 rounded-xl mb-5 grid place-items-center text-earth-900/30 text-xs uppercase tracking-widest">
                        Review pending
                      </div>
                      <h4 className="font-serif text-xl">{item.title}</h4>
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
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
