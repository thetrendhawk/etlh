import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EmailOptIn } from "@/components/EmailOptIn";
import { PostCard } from "@/components/PostCard";
import { getPost, getCategory, getRelatedPosts, formatDate, type Post } from "@/lib/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.title} — Eco Tiny Living Hub` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${p.slug}` },
        { property: "og:image", content: p.image },
        { name: "twitter:image", content: p.image },
      ],
      links: [{ rel: "canonical", href: `/blog/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.excerpt,
            datePublished: p.date,
            image: p.image,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-earth-100 text-earth-900">
      <SiteHeader />
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="font-serif text-5xl mb-4">Post not found</h1>
        <Link to="/blog" className="text-moss underline">Back to all posts</Link>
      </div>
      <SiteFooter />
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const cat = getCategory(post.category);
  const related = getRelatedPosts(post);

  return (
    <div className="min-h-screen bg-earth-100 text-earth-900">
      <SiteHeader />
      <article className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <Link to="/blog" className="text-xs uppercase tracking-widest text-earth-900/50 hover:text-moss">
          ← All posts
        </Link>
        <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-widest text-earth-900/40">
          <Link to="/category/$slug" params={{ slug: post.category }} className="text-moss font-semibold">
            {cat?.shortName}
          </Link>
          <span>·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl leading-tight mt-4 text-balance">{post.title}</h1>
        <p className="text-lg md:text-xl text-earth-900/70 mt-6 leading-relaxed">{post.excerpt}</p>

        <div className="aspect-[2/3] mt-10 rounded-2xl overflow-hidden outline-1 -outline-offset-1 outline-black/5">
          <img
            src={post.image}
            alt={post.imageAlt}
            width={1024}
            height={1536}
            className="w-full h-full object-cover"
          />
        </div>

        {post.toc.length > 0 && (
          <nav aria-label="Table of contents" className="mt-10 p-6 bg-white rounded-2xl border border-earth-900/5">
            <p className="text-xs uppercase tracking-widest text-earth-900/50 mb-3">In this post</p>
            <ol className="space-y-2 text-sm">
              {(post.toc as Post["toc"]).map((t, i: number) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="hover:text-moss">
                    <span className="text-earth-900/40 mr-2">{String(i + 1).padStart(2, "0")}</span>
                    {t.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="prose-content mt-12 space-y-6 text-lg leading-relaxed text-earth-900/85">
          {(post.body as Post["body"]).map((block, i: number) => {
            if (block.type === "h2")
              return (
                <h2 key={i} id={block.id} className="font-serif text-3xl md:text-4xl mt-12 mb-2 scroll-mt-24">
                  {block.text}
                </h2>
              );
            if (block.type === "h3")
              return (
                <h3 key={i} id={block.id} className="font-serif text-2xl mt-8 mb-1 scroll-mt-24">
                  {block.text}
                </h3>
              );
            if (block.type === "ul")
              return (
                <ul key={i} className="list-disc pl-6 space-y-2">
                  {block.items?.map((it: string, j: number) => <li key={j}>{it}</li>)}
                </ul>
              );
            return <p key={i}>{block.text}</p>;
          })}
        </div>

        <EmailOptIn variant="inline" />

        <div className="mt-12 flex flex-wrap gap-2">
          {(post.tags as string[]).map((t: string) => (
            <span key={t} className="text-xs uppercase tracking-widest px-3 py-1.5 rounded-full bg-earth-900/5 text-earth-900/60">
              #{t}
            </span>
          ))}
        </div>
      </article>

      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-earth-900/5">
          <h2 className="font-serif text-3xl mb-8">Keep reading</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {related.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
