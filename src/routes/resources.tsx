import { Link, createFileRoute } from "@tanstack/react-router";
import { FirstApartmentKitCard } from "@/components/FirstApartmentKitCard";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { trackAnalyticsEvent } from "@/lib/analytics";
import { absoluteUrl } from "@/lib/site";

const title = "Resources — Eco Tiny Living Hub";
const description =
  "Free planning tools and practical kitchen, laundry, and storage guides for small-apartment living.";
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

const sections = [
  {
    title: "Kitchen routines",
    intro: "Plan the next step around the kitchen you have.",
    items: [
      {
        slug: "dishwashing-without-dishwasher-small-kitchen",
        title: "Dishwashing without a dishwasher",
        description: "Set up a manageable wash, rinse, and dry flow in a small kitchen.",
      },
      {
        slug: "choose-apartment-food-scrap-method",
        title: "Choose a food-scrap method",
        description:
          "Compare options against your space, collection access, and household routine.",
      },
    ],
  },
  {
    title: "Apartment laundry",
    intro: "Work with shared machines and limited drying space.",
    items: [
      {
        slug: "shared-apartment-laundry-room-check",
        title: "Shared laundry room checklist",
        description: "Check machine instructions, carrying needs, and timing before a load.",
      },
      {
        slug: "drying-clothes-small-apartment-space-plan",
        title: "Plan your drying space",
        description: "Check airflow, clearance, and household needs before hanging clothes.",
      },
    ],
  },
  {
    title: "Small-space storage",
    intro: "Give everyday items a place before buying more organizers.",
    items: [
      {
        slug: "laundry-holding-zones-studio-apartment",
        title: "Where laundry waits",
        description: "Separate worn, ready-to-wash, and clean laundry in a studio apartment.",
      },
      {
        slug: "zero-waste-pantry-organization-small-apartments",
        title: "Organize a small pantry",
        description: "Make food easier to find and use with the storage you already have.",
      },
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
          <h1 className="font-serif text-5xl md:text-6xl mt-3 leading-tight">
            Practical tools for lighter small-space living
          </h1>
          <p className="text-earth-900/70 mt-4 text-lg">
            Start with a free planning tool or choose a guide for the kitchen, laundry, or storage
            task you want to make easier.
          </p>
        </header>

        <FirstApartmentKitCard />

        <section className="bg-white rounded-3xl border border-earth-900/5 p-7 md:p-10 mb-20 grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
          <div>
            <span className="uppercase text-xs font-bold tracking-widest text-moss">
              Available now
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mt-3">
              Small-Apartment Eco Step Starter Sheet
            </h2>
            <p className="text-earth-900/70 mt-4 leading-relaxed">
              Use this two-page worksheet to notice one recurring friction point, choose one small
              and reversible Eco Step, and review what happened without treating the result as a
              score.
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
                onClick={() =>
                  trackAnalyticsEvent("resource_download", {
                    resource_name: "eco_step_starter_sheet",
                    resource_format: "pdf",
                    link_location: "page_resource",
                    page_path: window.location.pathname,
                  })
                }
                className="bg-earth-900 text-white px-6 py-3 rounded-full text-center font-medium hover:bg-earth-900/90 transition-colors"
              >
                Download the PDF
              </a>
              <a
                href={htmlPath}
                onClick={() =>
                  trackAnalyticsEvent("resource_open", {
                    resource_name: "eco_step_starter_sheet",
                    resource_format: "html",
                    link_location: "page_resource",
                    page_path: window.location.pathname,
                  })
                }
                className="border border-earth-900/15 px-6 py-3 rounded-full text-center font-medium hover:bg-earth-900/5 transition-colors"
              >
                Use the online version
              </a>
            </div>
            <p className="text-xs text-earth-900/50 mt-4">
              The PDF is designed for printing. The browser version provides labeled fields,
              keyboard focus, and responsive layout.
            </p>
          </div>
        </section>

        <section aria-labelledby="guides-heading">
          <div className="max-w-2xl mb-10">
            <h2 id="guides-heading" className="font-serif text-4xl md:text-5xl">
              Find a guide for your next task
            </h2>
            <p className="text-earth-900/70 mt-3">
              Use these practical guides to plan around your space and routine. No purchase is
              required.
            </p>
          </div>

          <div className="space-y-16">
            {sections.map((section) => (
              <section key={section.title}>
                <div className="mb-6">
                  <h3 className="font-serif text-3xl md:text-4xl">{section.title}</h3>
                  <p className="text-earth-900/60 mt-2">{section.intro}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {section.items.map((item) => (
                    <article
                      key={item.title}
                      className="bg-white rounded-2xl p-6 border border-earth-900/5 flex flex-col"
                    >
                      <h4 className="font-serif text-xl">{item.title}</h4>
                      <p className="text-sm text-earth-900/60 mt-2 flex-1">{item.description}</p>
                      <Link
                        to="/blog/$slug"
                        params={{ slug: item.slug }}
                        className="mt-5 inline-block text-center border border-earth-900/20 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-earth-900/5 transition-colors"
                        aria-label={`Read the guide: ${item.title}`}
                      >
                        Read the guide
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
        <aside className="mt-12 border-t border-earth-900/10 pt-6 text-sm text-earth-900/70">
          Product recommendations may be added after review. No product link is published merely
          because a commission is available.
        </aside>
      </main>
      <SiteFooter />
    </div>
  );
}
