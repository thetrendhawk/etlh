import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EmailOptIn } from "@/components/EmailOptIn";
import heroImg from "@/assets/hero-apartment.jpg";
import { absoluteUrl } from "@/lib/site";

const title = "About — Eco Tiny Living Hub";
const description =
  "Why Eco Tiny Living Hub exists and how it helps renters make practical, lower-friction changes in small spaces.";
const pageUrl = absoluteUrl("/about");
const imageUrl = absoluteUrl(heroImg);

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: imageUrl },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-earth-100 text-earth-900">
      <SiteHeader />
      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_320px] gap-12 items-start">
          <div>
            <span className="uppercase text-xs font-bold tracking-widest text-moss">About</span>
            <h1 className="font-serif text-5xl md:text-6xl mt-3 leading-tight text-balance">
              Sustainable small-space living should feel practical, not overwhelming.
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-earth-900/80">
              <p>
                Eco Tiny Living Hub is a reader-centered content project for renters and small-space dwellers who want a calmer home, less waste, and habits that are easier to maintain.
              </p>
              <p>
                The focus is not perfection or expensive makeovers. It is small, concrete, repeatable steps that reduce unnecessary friction and make thoughtful choices more realistic in everyday life.
              </p>
              <p>
                Trust matters more than volume. We aim to explain tradeoffs, avoid inflated promises, disclose commercial relationships, and correct material errors when they are found.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/blog"
                className="bg-moss text-white px-7 py-3.5 rounded-full font-medium hover:bg-moss-dark transition-colors"
              >
                Read the blog
              </Link>
              <Link
                to="/editorial-policy"
                className="border border-earth-900/20 px-7 py-3.5 rounded-full font-medium hover:bg-earth-900/5 transition-colors"
              >
                Editorial standards
              </Link>
            </div>
          </div>
          <div className="aspect-[4/5] rounded-3xl overflow-hidden outline-1 -outline-offset-1 outline-black/5">
            <img
              src={heroImg}
              alt="Small apartment with plants"
              loading="lazy"
              width={640}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
      <EmailOptIn />
      <SiteFooter />
    </div>
  );
}
