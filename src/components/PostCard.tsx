import { Link } from "@tanstack/react-router";
import { type Post, getCategory } from "@/lib/posts";
import { formatDate } from "@/lib/date";
import { getPublicationDate } from "@/lib/publicationDates";

export function PostCard({ post }: { post: Post }) {
  const cat = getCategory(post.category);
  const publicationDate = getPublicationDate(post);
  return (
    <article className="group">
      <Link to="/blog/$slug" params={{ slug: post.slug }} className="block">
        <div className="aspect-[16/10] bg-white rounded-xl mb-6 outline-1 -outline-offset-1 outline-black/5 overflow-hidden">
          <img
            src={post.image}
            alt={post.imageAlt}
            loading="lazy"
            width={800}
            height={500}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
        <div className="flex items-center gap-3 text-xs text-earth-900/40 uppercase tracking-widest">
          <span className="text-moss font-semibold">{cat?.shortName}</span>
          <span>·</span>
          <time dateTime={publicationDate}>{formatDate(publicationDate)}</time>
        </div>
        <h3 className="text-2xl font-serif mt-3 leading-snug group-hover:text-moss transition-colors">
          {post.title}
        </h3>
        <p className="text-earth-900/60 mt-3 line-clamp-2 text-sm leading-relaxed">{post.excerpt}</p>
      </Link>
    </article>
  );
}
