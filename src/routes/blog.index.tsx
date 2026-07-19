import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PostCard } from "@/components/PostCard";
import { posts, promotedCategories } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

const title = "Blog — Eco Tiny Living Hub";
const description =
  "Articles on zero-waste kitchen ideas, eco friendly small apartment decor, and budget sustainable living for renters.";
const pageUrl = absoluteUrl("/blog");

export const Route = createFileRoute("/blog/")({
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
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-earth-100 text-earth-900">
      <SiteHeader />
      <main className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <header className="mb-12 max-w-2xl">
          <span className="uppercase text-xs font-bold tracking-widest text-moss">The Journal</span>
          <h1 className="font-serif text-5xl md:text-6xl mt-3 leading-tight">
            Sustainable living, one small upgrade at a time.
          </h1>
          <p className="text-earth-900/70 mt-4 text-lg">
            Browse beginner-friendly guides for renters and small-apartment dwellers.
          </p>
        </header>

        <nav aria-labelledby="topics-heading" className="mb-12">
          <h2 id="topics-heading" className="text-sm font-semibold text-earth-900 mb-3">
            Browse by topic
          </h2>
          <div className="flex flex-wrap gap-2">
            {promotedCategories.map((category) => (
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

        <section aria-labelledby="all-articles-heading">
          <h2 id="all-articles-heading" className="font-serif text-3xl mb-8">
            All articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <div className="mt-16 text-center text-sm text-earth-900/50">
          <Link to="/" className="underline underline-offset-4 hover:text-moss">
            ← Back to home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
