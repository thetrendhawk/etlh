import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PostCard } from "@/components/PostCard";
import { getCategory, getPostsByCategory, type CategorySlug } from "@/lib/posts";
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
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-earth-100 text-earth-900">
      <SiteHeader />
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="font-serif text-5xl mb-4">Category not found</h1>
        <Link to="/blog" className="text-moss underline">Back to the blog</Link>
      </div>
      <SiteFooter />
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { cat, posts } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-earth-100 text-earth-900">
      <SiteHeader />
      <main className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <header className="mb-12 max-w-2xl">
          <span className="uppercase text-xs font-bold tracking-widest text-moss">Category</span>
          <h1 className="font-serif text-5xl md:text-6xl mt-3 leading-tight">{cat.name}</h1>
          <p className="text-earth-900/70 mt-4 text-lg leading-relaxed">{cat.intro}</p>
        </header>
        {posts.length === 0 ? (
          <p className="text-earth-900/60">No posts in this category yet — check back soon.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((p: import("@/lib/posts").Post) => <PostCard key={p.slug} post={p} />)}
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

// Help TS narrow the slug union (not strictly needed)
export type _ = CategorySlug;
