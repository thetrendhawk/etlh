import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteUrl } from "@/lib/site";

const title = "Affiliate Disclosure — Eco Tiny Living Hub";
const description = "How Eco Tiny Living Hub discloses affiliate relationships and approaches product recommendations.";
const pageUrl = absoluteUrl("/affiliate-disclosure");

export const Route = createFileRoute("/affiliate-disclosure")({
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
  component: AffiliateDisclosure,
});

function AffiliateDisclosure() {
  return (
    <div className="min-h-screen bg-earth-100 text-earth-900">
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <span className="uppercase text-xs font-bold tracking-widest text-moss">Legal</span>
        <h1 className="font-serif text-5xl md:text-6xl mt-3 leading-tight">Affiliate Disclosure</h1>
        <p className="mt-4 text-sm text-earth-900/55">Effective July 17, 2026</p>

        <div className="mt-10 space-y-10 text-earth-900/75 leading-relaxed">
          <section>
            <h2 className="font-serif text-3xl text-earth-900">Plain-language disclosure</h2>
            <p className="mt-3">
              Some links published by Eco Tiny Living Hub may be affiliate links. If you click one of those links and make a qualifying purchase, ETLH may receive a commission. This generally does not increase the price you pay.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">How disclosures will appear</h2>
            <p className="mt-3">
              When content includes an affiliate relationship, we will place a clear disclosure where readers can notice it before or near the recommendation or link. We will not rely only on this policy page to disclose a material relationship.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">Recommendation standards</h2>
            <p className="mt-3">
              Commission availability does not by itself determine whether a product is included. ETLH aims to consider usefulness, fit for small spaces, durability, price, sustainability claims, and available evidence. We will distinguish personal experience from research or manufacturer information and will not claim to have tested a product when we have not.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">Your responsibility</h2>
            <p className="mt-3">
              Product details, prices, availability, warranties, and seller policies can change. Confirm current information with the seller and decide whether a product is appropriate for your needs before purchasing.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">Questions</h2>
            <p className="mt-3">
              Questions about a disclosure or recommendation can be sent through the <Link to="/contact" className="underline underline-offset-4 hover:text-moss">contact page</Link>.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
