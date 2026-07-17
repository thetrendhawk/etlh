import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteUrl } from "@/lib/site";

const title = "Privacy Policy — Eco Tiny Living Hub";
const description = "How Eco Tiny Living Hub collects, uses, and protects information when you visit the site or join the email list.";
const pageUrl = absoluteUrl("/privacy");

export const Route = createFileRoute("/privacy")({
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
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-earth-100 text-earth-900">
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <span className="uppercase text-xs font-bold tracking-widest text-moss">Legal</span>
        <h1 className="font-serif text-5xl md:text-6xl mt-3 leading-tight">Privacy Policy</h1>
        <p className="mt-4 text-sm text-earth-900/55">Effective July 17, 2026</p>

        <div className="mt-10 space-y-10 text-earth-900/75 leading-relaxed">
          <section>
            <h2 className="font-serif text-3xl text-earth-900">Overview</h2>
            <p className="mt-3">
              Eco Tiny Living Hub ("ETLH," "we," "us," or "our") respects your privacy. This policy explains what information may be collected when you use this website, why it is used, and the choices available to you.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">Information you provide</h2>
            <p className="mt-3">
              When you join the email list, you may provide your email address and an optional first name. Signup information is submitted to Mailchimp, our email-service provider, so we can manage subscriptions and send requested messages or resources. You can unsubscribe through the link included in our emails.
            </p>
            <p className="mt-3">
              If you contact us through a linked social platform, that platform processes the information you choose to send under its own privacy terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">Analytics and device information</h2>
            <p className="mt-3">
              On the production website, Google Analytics 4 is available to help us understand general site usage. The Google Analytics tag does not load and no analytics data is sent unless you choose “Accept analytics.” If you accept, Google Analytics may collect session statistics, approximate location, browser and device information, and a first-party identifier used to distinguish visits. We use this information to evaluate site performance and improve content; we do not ask Google Analytics to identify you by name.
            </p>
            <p className="mt-3">
              Advertising storage, advertising user data, and personalized advertising signals remain disabled in our implementation.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">How information is used</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Deliver email content or resources you requested.</li>
              <li>Operate, secure, troubleshoot, and improve the website.</li>
              <li>Understand aggregate traffic and content performance when analytics consent is granted.</li>
              <li>Comply with legal obligations and protect legitimate rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">Service providers and external links</h2>
            <p className="mt-3">
              ETLH currently relies on Vercel for website hosting, Google Analytics for consent-based traffic measurement, and Mailchimp for email-list management. These providers process information under their own terms and privacy policies. The site may also link to third-party websites that ETLH does not control.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">Retention and security</h2>
            <p className="mt-3">
              Information is retained only as reasonably needed for the purposes described above, subject to provider settings and legal requirements. No online system is perfectly secure, but we use reasonable operational safeguards and limit collection to information needed for the stated purpose.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">Your choices and rights</h2>
            <p className="mt-3">
              You may unsubscribe from marketing emails at any time. Depending on where you live, you may also have rights to request access, correction, deletion, or other limits on certain personal information. Use the <Link to="/contact" className="underline underline-offset-4 hover:text-moss">contact page</Link> to make a privacy request. We may need enough information to verify and respond to the request.
            </p>
            <p className="mt-3">
              You can accept or decline analytics when the consent notice appears. You can change that choice later through “Analytics preferences” in the footer. Declining analytics does not prevent you from using the site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">Children</h2>
            <p className="mt-3">
              ETLH is intended for a general audience and is not directed to children under 13. We do not knowingly seek personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-earth-900">Policy changes</h2>
            <p className="mt-3">
              We may update this policy when the site, providers, or legal obligations change. The effective date above will be revised when material changes are published.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
