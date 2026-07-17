import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteUrl } from "@/lib/site";

const title = "Editorial Policy — Eco Tiny Living Hub";
const description =
  "How Eco Tiny Living Hub researches, reviews, updates, corrects, and monetizes reader-facing content.";
const pageUrl = absoluteUrl("/editorial-policy");

export const Route = createFileRoute("/editorial-policy")({
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
  component: EditorialPolicy,
});

function EditorialPolicy() {
  return (
    <div className="min-h-screen bg-earth-100 text-earth-900">
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <span className="uppercase text-xs font-bold tracking-widest text-moss">Trust &amp; standards</span>
        <h1 className="font-serif text-5xl md:text-6xl mt-3 leading-tight">Editorial Policy</h1>
        <p className="mt-4 text-sm text-earth-900/55">Effective July 17, 2026</p>

        <div className="mt-10 space-y-10 text-earth-900/75 leading-relaxed">
          <section>
            <h2 className="font-serif text-3xl text-earth-900">Reader responsibility</h2>
            <p className="mt-3">
              Eco Tiny Living Hub is responsible for the content published under its name. Our goal is to give readers practical, understandable guidance without exaggerating outcomes, hiding tradeoffs, or presenting opinion as settled fact.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">How we develop content</h2>
            <p className="mt-3">
              Articles begin with a defined reader problem. We distinguish practical suggestions from factual claims, check time-sensitive details before publication, and prefer primary or authoritative sources when a claim depends on outside evidence. Sources may be linked in the article when they materially help readers verify or act on the information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">Claims and limits</h2>
            <p className="mt-3">
              We avoid guaranteed savings, health, environmental, or lifestyle outcomes. Costs, availability, regulations, product specifications, and service terms can change. Readers should verify details that materially affect a purchase, lease, health decision, or legal obligation.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">Reviews and updates</h2>
            <p className="mt-3">
              Publication dates identify when an article first appeared. When a material review changes facts, recommendations, or reader guidance, we will add or revise an updated date. Minor copy edits do not require a new date.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">Corrections</h2>
            <p className="mt-3">
              Meaningful factual errors are corrected promptly after verification. When a correction materially changes what a reader should understand or do, we will add a visible correction note instead of silently replacing the claim.
            </p>
            <p className="mt-3">
              To report a possible error, use the <Link to="/contact" className="underline underline-offset-4 hover:text-moss">contact page</Link> and include the article title, disputed passage, and any supporting source.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">Commercial independence</h2>
            <p className="mt-3">
              Affiliate relationships may support the site, but compensation does not determine whether a product or idea is presented as useful. Paid relationships and affiliate links must be disclosed clearly. See the <Link to="/affiliate-disclosure" className="underline underline-offset-4 hover:text-moss">Affiliate Disclosure</Link> for details.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">AI-assisted work</h2>
            <p className="mt-3">
              Software and AI tools may assist with research organization, drafting, editing, or production. Eco Tiny Living Hub remains responsible for reviewing the final published content, checking material claims, and correcting errors.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
