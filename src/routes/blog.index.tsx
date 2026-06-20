import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PostCard } from "@/components/PostCard";
import { categories, posts, type CategorySlug } from "@/lib/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Eco Tiny Living Hub" },
      { name: "description", content: "Articles on zero-waste kitchen ideas, eco friendly small apartment decor, and budget sustainable living for renters." },
      { property: "og:title", content: "Blog — Eco Tiny Living Hub" },
      { property: "og:description", content: "Sustainable living articles for small apartments and renters." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [filter, setFilter] = useState<CategorySlug | "all">("all");
  const visible = filter === "all" ? posts : posts.filter((p) => p.category === filter);

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

        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${filter === "all" ? "bg-earth-900 text-earth-100 border-earth-900" : "bg-transparent border-earth-900/15 hover:border-earth-900/40"}`}
          >
            All posts
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => setFilter(c.slug)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${filter === c.slug ? "bg-earth-900 text-earth-100 border-earth-900" : "bg-transparent border-earth-900/15 hover:border-earth-900/40"}`}
            >
              {c.shortName}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="text-earth-900/60">No posts in this category yet — check back soon.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {visible.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        )}

        <div className="mt-16 text-center text-sm text-earth-900/50">
          <Link to="/" className="underline underline-offset-4 hover:text-moss">← Back to home</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
