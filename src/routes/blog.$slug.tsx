import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EmailOptIn } from "@/components/EmailOptIn";
import { PostCard } from "@/components/PostCard";
import { formatDate } from "@/lib/date";
import { getPresentedPost } from "@/lib/postPresentation";
import { getPost, getCategory, getRelatedPosts, type Post } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const sourcePost = getPost(params.slug);
    if (!sourcePost) throw notFound();
    return { post: getPresentedPost(sourcePost) };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return {};
    const publicationDate = p.date;
    const pageUrl = absoluteUrl(`/blog/${p.slug}`);
    const imageUrl = absoluteUrl(p.image);
    const organizationUrl = absoluteUrl("/");
    return {
      meta: [
        { title: `${p.title} — Eco Tiny Living Hub` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: pageUrl },
        { property: "og:image", content: imageUrl },
        { name: "twitter:title", content: p.title },
        { name: "twitter:description", content: p.excerpt },
        { name: "twitter:image", content: imageUrl },
      ],
      links: [{ rel: "canonical", href: pageUrl }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.excerpt,
            datePublished: publicationDate,
            image: imageUrl,
            url: pageUrl,
            mainEntityOfPage: pageUrl,
            author: {
              "@type": "Organization",
              name: "Eco Tiny Living Hub",
              url: organizationUrl,
            },
            publisher: {
              "@type": "Organization",
              name: "Eco Tiny Living Hub",
              url: organizationUrl,
            },
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
        <Link to="/blog" className="text-moss underline">
          Back to all posts
        </Link>
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
  const publicationDate = post.date;

  return (
    <div className="min-h-screen bg-earth-100 text-earth-900">
      <SiteHeader />
      <article className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <Link
          to="/blog"
          className="text-xs uppercase tracking-widest text-earth-900/50 hover:text-moss"
        >
          ← All posts
        </Link>
        <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-widest text-earth-900/40">
          <Link
            to="/category/$slug"
            params={{ slug: post.category }}
            className="text-moss font-semibold"
          >
            {cat?.shortName}
          </Link>
          <span>·</span>
          <time dateTime={publicationDate}>{formatDate(publicationDate)}</time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl leading-tight mt-4 text-balance">
          {post.title}
        </h1>
        <p className="text-lg md:text-xl text-earth-900/70 mt-6 leading-relaxed">{post.excerpt}</p>

        <div className="mt-7 flex flex-col gap-1 border-l-2 border-moss/40 pl-4 text-sm text-earth-900/60">
          <p>
            Published by <span className="font-medium text-earth-900">Eco Tiny Living Hub</span>
          </p>
          <p>
            Reviewed under our{" "}
            <Link to="/editorial-policy" className="underline underline-offset-4 hover:text-moss">
              editorial and corrections policy
            </Link>
            .
          </p>
        </div>

        <div className="aspect-[2/3] mt-10 rounded-2xl overflow-hidden outline-1 -outline-offset-1 outline-black/5">
          <img
            src={post.image}
            alt={post.imageAlt}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={1024}
            height={1536}
            className="w-full h-full object-cover"
          />
        </div>

        {post.toc.length > 0 && (
          <nav
            aria-label="Table of contents"
            className="mt-10 p-6 bg-white rounded-2xl border border-earth-900/5"
          >
            <p className="text-xs uppercase tracking-widest text-earth-900/50 mb-3">In this post</p>
            <ol className="space-y-2 text-sm">
              {(post.toc as Post["toc"]).map((t, i: number) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="hover:text-moss">
                    <span className="text-earth-900/40 mr-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
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
                <h2
                  key={i}
                  id={block.id}
                  className="font-serif text-3xl md:text-4xl mt-12 mb-2 scroll-mt-24"
                >
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
                  {block.items?.map((it: string, j: number) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              );
            return <p key={i}>{block.text}</p>;
          })}
        </div>

        <section className="mt-12 rounded-2xl border border-earth-900/10 bg-white p-6 text-sm leading-relaxed text-earth-900/65">
          <h2 className="font-serif text-2xl text-earth-900">Found something we should correct?</h2>
          <p className="mt-2">
            Send the article title, the passage in question, and any supporting source through our{" "}
            <Link to="/contact" className="underline underline-offset-4 hover:text-moss">
              contact page
            </Link>
            . Material corrections will be made transparently.
          </p>
        </section>

        <EmailOptIn variant="inline" />

        <div className="mt-12 flex flex-wrap gap-2">
          {(post.tags as string[]).map((t: string) => (
            <span
              key={t}
              className="text-xs uppercase tracking-widest px-3 py-1.5 rounded-full bg-earth-900/5 text-earth-900/60"
            >
              #{t}
            </span>
          ))}
        </div>
      </article>

      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-earth-900/5">
          <h2 className="font-serif text-3xl mb-8">Keep reading</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
