import { categories, posts } from "@/lib/posts";

export const SITE_ORIGIN = "https://ecotinylivinghub.thrwds.com";

export interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
}

// Single source of truth for the public URL inventory. Ordering is fixed:
// static pages, then categories and posts in their content-source array order.
export function getSitemapEntries(): SitemapEntry[] {
  return [
    { loc: `${SITE_ORIGIN}/`, changefreq: "weekly", priority: "1.0" },
    { loc: `${SITE_ORIGIN}/blog`, changefreq: "weekly", priority: "0.9" },
    { loc: `${SITE_ORIGIN}/about`, changefreq: "monthly", priority: "0.6" },
    { loc: `${SITE_ORIGIN}/resources`, changefreq: "monthly", priority: "0.7" },
    { loc: `${SITE_ORIGIN}/contact`, changefreq: "monthly", priority: "0.5" },
    { loc: `${SITE_ORIGIN}/editorial-policy`, changefreq: "yearly", priority: "0.4" },
    { loc: `${SITE_ORIGIN}/privacy`, changefreq: "yearly", priority: "0.3" },
    { loc: `${SITE_ORIGIN}/terms`, changefreq: "yearly", priority: "0.3" },
    { loc: `${SITE_ORIGIN}/affiliate-disclosure`, changefreq: "yearly", priority: "0.3" },
    ...categories.map((c) => ({
      loc: `${SITE_ORIGIN}/category/${c.slug}`,
      changefreq: "weekly",
      priority: "0.8",
    })),
    ...posts.map((p) => ({
      loc: `${SITE_ORIGIN}/blog/${p.slug}`,
      lastmod: p.date,
      changefreq: "monthly",
      priority: "0.7",
    })),
  ];
}

export function buildSitemapXml(): string {
  const urls = getSitemapEntries().map((e) =>
    [
      `  <url>`,
      `    <loc>${e.loc}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}
