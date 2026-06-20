export default {
  preset: "static",
  prerender: {
    routes: [
      "/",
      "/blog",
      "/about",
      "/resources",
      "/contact",
      "/blog/small-apartment-eco-upgrade-checklist",
      "/blog/zero-waste-kitchen-ideas-tiny-apartments",
      "/blog/eco-friendly-small-apartment-decor-budget",
      "/blog/beginner-sustainable-living-checklist-renters",
      "/category/zero-waste-kitchen",
      "/category/small-apartment-decor",
      "/category/eco-habits-budget",
    ],
    crawlLinks: true,
  },
};
