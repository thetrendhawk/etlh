import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteUrl } from "@/lib/site";

const title = "Terms of Use — Eco Tiny Living Hub";
const description = "Terms governing use of the Eco Tiny Living Hub website and its educational content.";
const pageUrl = absoluteUrl("/terms");

export const Route = createFileRoute("/terms")({
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
  component: TermsOfUse,
});

function TermsOfUse() {
  return (
    <div className="min-h-screen bg-earth-100 text-earth-900">
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <span className="uppercase text-xs font-bold tracking-widest text-moss">Legal</span>
        <h1 className="font-serif text-5xl md:text-6xl mt-3 leading-tight">Terms of Use</h1>
        <p className="mt-4 text-sm text-earth-900/55">Effective July 17, 2026</p>

        <div className="mt-10 space-y-10 text-earth-900/75 leading-relaxed">
          <section>
            <h2 className="font-serif text-3xl text-earth-900">Agreement</h2>
            <p className="mt-3">
              By using Eco Tiny Living Hub, you agree to these Terms of Use. If you do not agree, do not use the site. We may revise these terms as the site changes; continued use after an update means you accept the revised terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">Educational information only</h2>
            <p className="mt-3">
              ETLH provides general educational and informational content about sustainable living, small spaces, organization, budgeting, products, and related topics. Content is not legal, financial, medical, engineering, safety, or other professional advice. Circumstances vary, so evaluate recommendations for your home, lease, budget, health, local rules, and product instructions before acting.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">No guarantees</h2>
            <p className="mt-3">
              We aim to publish useful and accurate information, but we do not guarantee that every statement is complete, current, error-free, or suitable for every reader. Results, costs, savings, environmental effects, and product performance vary. The site and its content are provided on an "as is" and "as available" basis to the extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">Responsible use</h2>
            <p className="mt-3">You may use the site only for lawful purposes. You may not:</p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Interfere with the site, its security, or its availability.</li>
              <li>Attempt unauthorized access to systems or data.</li>
              <li>Use automated methods that create unreasonable load or unlawfully copy content.</li>
              <li>Misrepresent ETLH content, identity, sponsorship, or endorsement.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">Intellectual property</h2>
            <p className="mt-3">
              Unless otherwise stated, ETLH owns or licenses the site design, original text, graphics, branding, and other published materials. You may link to public pages and quote brief portions with clear attribution. You may not republish, sell, reproduce, or create a competing collection from substantial portions of the site without permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">Third-party links and products</h2>
            <p className="mt-3">
              ETLH may link to websites, services, or products operated by others. We do not control their availability, privacy practices, terms, pricing, claims, or performance. A link does not automatically mean endorsement. Review third-party information before purchasing or sharing personal information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">Affiliate relationships</h2>
            <p className="mt-3">
              Some future links may be affiliate links, meaning ETLH could earn a commission if you make a qualifying purchase without increasing your price. Material relationships will be disclosed clearly. See the <Link to="/affiliate-disclosure" className="underline underline-offset-4 hover:text-moss">Affiliate Disclosure</Link>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">Limitation of liability</h2>
            <p className="mt-3">
              To the fullest extent permitted by law, ETLH will not be liable for indirect, incidental, special, consequential, or punitive losses arising from use of the site, reliance on its content, third-party services, or inability to access the site. Nothing in these terms excludes liability that cannot legally be excluded.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent through the <Link to="/contact" className="underline underline-offset-4 hover:text-moss">contact page</Link>.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
