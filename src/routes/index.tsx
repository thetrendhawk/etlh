import { createFileRoute, Link } from "@tanstack/react-router";
import { EmailOptIn } from "@/components/EmailOptIn";
import { PostCard } from "@/components/PostCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import catDecor from "@/assets/cat-decor.jpg";
import catHabits from "@/assets/cat-habits.jpg";
import catKitchen from "@/assets/cat-kitchen.jpg";
import heroImg from "@/assets/hero-apartment.jpg";
import { vercelImageSrcSet } from "@/lib/image";
import { posts, promotedCategories, type CategorySlug } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

const catImages = {
  "zero-waste-kitchen": catKitchen,
  "small-apartment-decor": catDecor,
  "eco-habits-budget": catHabits,
};

const categoryLabels = {
  "zero-waste-kitchen": "My kitchen feels wasteful",
  "small-apartment-decor": "My small space feels cluttered",
  "eco-habits-budget": "I want sustainable habits that actually stick",
};

const title = "Eco Tiny Living Hub — Sustainable Living for Small Apartments";
const description =
  "Cozy, sustainable small apartment living on a realistic budget. Zero-waste kitchen, eco decor, and budget habits for renters.";
const pageUrl = absoluteUrl("/");
const imageUrl = absoluteUrl(heroImg);
const heroWidths = [480, 640, 960, 1200];
const categoryWidths = [320, 480, 640, 800];

type HomepageCategorySlug = keyof typeof categoryLabels;

function isHomepageCategory(slug: CategorySlug): slug is HomepageCategorySlug {
  return slug in categoryLabels;
}

export const Route = createFileRoute("/")({
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
  component: Home,
});

function Home() {
  const latest = posts.slice(0, 6);
  const homepageCategories = promotedCategories.filter(
    (category): category is typeof category & { slug: HomepageCategorySlug } =>
      isHomepageCategory(category.slug),
  );

  return (
    <div className="min-h-screen bg-earth-100 text-earth-900">
      <SiteHeader />

      <header className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-balance">
            Sustainable living for small spaces—without overwhelm, waste, or unnecessary friction.
          </h1>
          <p className="text-lg md:text-xl text-earth-900/70 max-w-md leading-relaxed">
            Practical guides, renter-friendly systems, and simple Eco Steps to help you make your
            home feel lighter, calmer, and more aligned with what matters.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/blog"
              className="bg-moss text-white px-8 py-4 rounded-full font-medium hover:bg-moss-dark transition-colors"
            >
              Start reading
            </Link>
            <Link
              to="/resources"
              className="border border-earth-900/20 px-8 py-4 rounded-full font-medium hover:bg-earth-900/5 transition-colors"
            >
              View resources
            </Link>
          </div>
        </div>
        <div className="aspect-square rounded-3xl overflow-hidden outline-1 -outline-offset-1 outline-black/5">
          <img
            src={heroImg}
            srcSet={vercelImageSrcSet(heroImg, heroWidths, 75)}
            sizes="(min-width: 768px) 50vw, calc(100vw - 3rem)"
            alt="Sunlit small apartment with houseplants and wooden furniture"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={1200}
            height={1200}
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <section
        id="categories"
        aria-labelledby="categories-heading"
        className="max-w-6xl mx-auto px-6 py-20 border-t border-earth-900/5 scroll-mt-24"
      >
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <span className="uppercase text-xs font-bold tracking-widest text-moss">
              Start here
            </span>
            <h2 id="categories-heading" className="font-serif text-4xl md:text-5xl mt-3">
              Start where life feels heavy
            </h2>
          </div>
          <p className="text-earth-900/70 max-w-sm text-sm">
            Three core areas to help you build a sustainable apartment, one small win at a time.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {homepageCategories.map((category) => {
            const categoryImage = catImages[category.slug];

            return (
              <Link
                key={category.slug}
                to="/category/$slug"
                params={{ slug: category.slug }}
                className="group block"
              >
                <div className="aspect-[4/3] bg-white rounded-2xl mb-4 overflow-hidden outline-1 -outline-offset-1 outline-black/5">
                  <img
                    src={categoryImage}
                    srcSet={vercelImageSrcSet(categoryImage, categoryWidths, 75)}
                    sizes="(min-width: 768px) 33vw, calc(100vw - 3rem)"
                    alt={category.name}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-moss">
                  {categoryLabels[category.slug]}
                </p>
                <h3 className="text-xl font-serif mt-2 group-hover:text-moss transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-earth-900/70 mt-2 leading-relaxed">{category.intro}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <EmailOptIn />

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl">Latest from the blog</h2>
            <p className="text-earth-900/70 mt-2">Fresh ideas for your sustainable journey.</p>
          </div>
          <Link to="/blog" className="text-moss font-semibold underline underline-offset-4">
            View all posts
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {latest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
