import { Link } from "@tanstack/react-router";
import { formatDate } from "@/lib/date";
import { vercelImageSrcSet } from "@/lib/image";
import { getPresentedPost } from "@/lib/postPresentation";
import { type Post, getCategory } from "@/lib/posts";

const postCardWidths = [320, 480, 640, 800];

export function PostCard({ post }: { post: Post }) {
  const presentedPost = getPresentedPost(post);
  const category = getCategory(presentedPost.category);

  return (
    <article className="group">
      <Link to="/blog/$slug" params={{ slug: presentedPost.slug }} className="block">
        <div className="aspect-[16/10] bg-white rounded-xl mb-6 outline-1 -outline-offset-1 outline-black/5 overflow-hidden">
          <img
            src={presentedPost.image}
            srcSet={vercelImageSrcSet(presentedPost.image, postCardWidths, 75)}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, calc(100vw - 3rem)"
            alt={presentedPost.imageAlt}
            loading="lazy"
            decoding="async"
            width={800}
            height={500}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
        <div className="flex items-center gap-3 text-xs text-earth-900/70 uppercase tracking-widest">
          <span className="text-moss font-semibold">{category?.shortName}</span>
          <span>·</span>
          <time dateTime={presentedPost.date}>{formatDate(presentedPost.date)}</time>
        </div>
        <h3 className="text-2xl font-serif mt-3 leading-snug group-hover:text-moss transition-colors">
          {presentedPost.title}
        </h3>
        <p className="text-earth-900/70 mt-3 line-clamp-2 text-sm leading-relaxed">
          {presentedPost.excerpt}
        </p>
      </Link>
    </article>
  );
}
