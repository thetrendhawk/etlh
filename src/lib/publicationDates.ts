import type { Post } from "@/lib/posts";

// These overrides replace unsupported legacy dates with the earliest defensible
// ETLH publication date established by the repository history and owner review.
const publicationDateOverrides: Record<string, string> = {
  "low-waste-kitchen-tips-chef-habits": "2026-06-22",
  "zero-waste-kitchen-budget-9-swaps": "2026-06-22",
  "small-apartment-eco-upgrade-checklist": "2026-06-22",
  "zero-waste-kitchen-ideas-tiny-apartments": "2026-06-22",
  "eco-friendly-small-apartment-decor-budget": "2026-06-22",
  "beginner-sustainable-living-checklist-renters": "2026-06-22",
};

export function getPublicationDate(post: Pick<Post, "slug" | "date">): string {
  return publicationDateOverrides[post.slug] ?? post.date;
}
