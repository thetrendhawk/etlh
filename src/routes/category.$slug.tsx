import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PostCard } from "@/components/PostCard";
import {
  getCategory,
  getPostsByCategory,
  promotedCategories,
  type CategorySlug,
} from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const cat = getCategory(params.slug);
    if (!cat) throw notFound();
    return { cat, posts: getPostsByCategory(cat.slug) };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.cat;
    if (!c) return {};
    const posts = loaderData?.posts ?? [];
    const title = `${c.name} — Eco Tiny Living Hub`;
    const pageUrl = absoluteUrl(`/category/${c.slug}`);
    return {
      meta: [
        { title },
        { name: "description", content: c.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: c.intro },
        { property: "og:url", content: pageUrl },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: c.intro },
      ],
      links: [{ rel: "canonical", href: pageUrl }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": `${pageUrl}#collection`,
                name: c.name,
                description: c.intro,
                url: pageUrl,
                isPartOf: { "@id": `${absoluteUrl("/")}#website` },
                mainEntity: { "@id": `${pageUrl}#articles` },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: absoluteUrl("/"),
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: c.name,
                    item: pageUrl,
                  },
                ],
              },
              {
                "@type": "ItemList",
                "@id": `${pageUrl}#articles`,
                numberOfItems: posts.length,
                itemListElement: posts.map((post, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  name: post.title,
                  url: absoluteUrl(`/blog/${post.slug}`),
                })),
              },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-earth-100 text-earth-900">
      <SiteHeader />
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="font-serif text-5xl mb-4">Category not found</h1>
        <Link to="/blog" className="text-moss underline">
          Back to the blog
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { cat, posts } = Route.useLoaderData();
  const otherCategories = promotedCategories.filter((category) => category.slug !== cat.slug);

  return (
    <div className="min-h-screen bg-earth-100 text-earth-900">
      <SiteHeader />
      <main className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <header className="mb-12 max-w-2xl">
          <span className="uppercase text-xs font-bold tracking-widest text-moss">Category</span>
          <h1 className="font-serif text-5xl md:text-6xl mt-3 leading-tight">{cat.name}</h1>
          <p className="text-earth-900/70 mt-4 text-lg leading-relaxed">{cat.intro}</p>
        </header>
        {cat.slug === "small-apartment-decor" ? (
          <section
            aria-labelledby="decor-start-heading"
            className="mb-14 rounded-3xl border border-earth-900/10 bg-white p-7 md:p-10"
          >
            <h2 id="decor-start-heading" className="font-serif text-3xl md:text-4xl">
              Plan the space before you shop
            </h2>
            <div className="mt-4 max-w-3xl space-y-4 text-earth-900/70 leading-relaxed">
              <p>
                A useful small-apartment update starts with the room you have: its measurements,
                walking paths, storage limits, lease rules, and the routines that happen there.
                Rearranging what you own or giving one frequently used item a clearer home may solve
                the problem without adding more furniture or décor.
              </p>
              <p>
                Begin with one reversible test. Measure first, keep doors, vents, heaters, outlets,
                and access routes usable, then live with the change before deciding whether to buy
                or install anything. If a purchase still fills a specific need, compare its full
                size, cleaning, transport, installation, return terms, and household fit—not only
                its material or style label.
              </p>
            </div>
            <div className="mt-7 grid gap-3 md:grid-cols-3">
              <Link
                to="/blog/$slug"
                params={{ slug: "sustainable-tiny-living-room-layout-ideas" }}
                className="rounded-2xl border border-earth-900/10 p-5 font-medium hover:border-earth-900/30 hover:text-moss transition-colors"
              >
                Measure and test a living-room layout
              </Link>
              <Link
                to="/blog/$slug"
                params={{ slug: "eco-friendly-small-apartment-weekend-checklist" }}
                className="rounded-2xl border border-earth-900/10 p-5 font-medium hover:border-earth-900/30 hover:text-moss transition-colors"
              >
                Try a no-purchase room reset
              </Link>
              <Link
                to="/blog/$slug"
                params={{ slug: "eco-friendly-small-apartment-decor-budget" }}
                className="rounded-2xl border border-earth-900/10 p-5 font-medium hover:border-earth-900/30 hover:text-moss transition-colors"
              >
                Compare budget sourcing options
              </Link>
            </div>
          </section>
        ) : null}
        {posts.length === 0 ? (
          <p className="text-earth-900/60">No posts in this category yet — check back soon.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((p: import("@/lib/posts").Post) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        )}

        {cat.slug === "eco-habits-budget" ? (
          <aside className="mt-16 rounded-2xl border border-earth-900/10 bg-white p-7 md:p-9">
            <span className="uppercase text-xs font-bold tracking-widest text-moss">
              Free planning tool
            </span>
            <h2 className="font-serif text-3xl mt-3">Choose one Eco Step</h2>
            <p className="text-earth-900/70 mt-3 max-w-2xl leading-relaxed">
              Use the Small-Apartment Eco Step Starter Sheet to notice one recurring friction point,
              choose a small reversible action, and review what happened. No email signup or
              purchase is required.
            </p>
            <Link
              to="/resources"
              className="inline-flex mt-6 bg-moss text-white px-6 py-3 rounded-full font-medium hover:bg-moss-dark transition-colors"
            >
              Get the free starter sheet
            </Link>
          </aside>
        ) : null}

        {otherCategories.length > 0 ? (
          <nav
            aria-labelledby="other-topics-heading"
            className="mt-16 border-t border-earth-900/10 pt-10"
          >
            <h2 id="other-topics-heading" className="font-serif text-3xl">
              Browse other topics
            </h2>
            <div className="flex flex-wrap gap-3 mt-5">
              {otherCategories.map((category) => (
                <Link
                  key={category.slug}
                  to="/category/$slug"
                  params={{ slug: category.slug }}
                  className="px-5 py-2 rounded-full text-sm font-medium border border-earth-900/15 hover:border-earth-900/40 hover:text-moss transition-colors"
                >
                  {category.shortName}
                </Link>
              ))}
            </div>
          </nav>
        ) : null}
      </main>
      <SiteFooter />
    </div>
  );
}

// Help TS narrow the slug union (not strictly needed)
export type _ = CategorySlug;
