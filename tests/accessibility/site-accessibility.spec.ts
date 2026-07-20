import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

test.setTimeout(60_000);

const pages = [
  { path: "/", heading: /Sustainable living for small spaces/i },
  { path: "/blog", heading: /Sustainable living, one small upgrade at a time/i },
  { path: "/category/eco-habits-budget", heading: /Budget-Friendly Sustainable Habits/i },
  {
    path: "/blog/zero-waste-kitchen-budget-9-swaps",
    heading: /Zero-Waste Kitchen on a Budget: 9 Swaps to Evaluate/i,
  },
  {
    path: "/blog/zero-waste-kitchen-ideas-tiny-apartments",
    heading: /Apartment Composting Odor & Fruit Flies: A Small-Space Fix/i,
  },
  {
    path: "/blog/choose-apartment-food-scrap-method",
    heading: /How to Choose an Apartment Food-Scrap Method/i,
  },
  { path: "/blog/electric-food-waste-appliances-apartments", heading: /Electric Food-Waste Appliances for Apartments: What to Check/i },
  { path: "/blog/dishwashing-without-dishwasher-small-kitchen", heading: /Dishwashing Without a Dishwasher in a Small Kitchen/i },
  {
    path: "/blog/zero-waste-pantry-organization-small-apartments",
    heading: /Pantry Organization for Small Apartments: A Practical Plan/i,
  },
  {
    path: "/blog/low-waste-kitchen-tips-chef-habits",
    heading: /11 Low-Waste Kitchen Habits for Using Food More Fully/i,
  },
  {
    path: "/blog/easy-sustainable-habits-on-a-budget",
    heading: /20 Renter-Aware Sustainable Habits to Consider/i,
  },
  {
    path: "/blog/sustainable-living-apartment-easy-habits",
    heading: /Sustainable Apartment Systems: What Renters Can Control/i,
  },
  {
    path: "/blog/why-life-feels-harder-than-it-needs-to-sometimes",
    heading: /Notice Friction at Home: Test One Small Change/i,
  },
  {
    path: "/blog/small-apartment-eco-upgrade-checklist",
    heading: /A 30-Day Small-Apartment Eco Step Checklist/i,
  },
  {
    path: "/blog/eco-friendly-small-apartment-decor-budget",
    heading: /Small-Apartment Decor on a Budget: Sourcing and Fit Considerations/i,
  },
  {
    path: "/blog/beginner-sustainable-living-checklist-renters",
    heading: /Beginner Sustainable Living Checklist for Renters: Five Options to Consider/i,
  },
  {
    path: "/blog/low-waste-lifestyle-tips-beginners",
    heading: /15 Low-Waste Lifestyle Practices to Consider/i,
  },
  { path: "/contact", heading: /Say hello/i },
];

async function gotoHydrated(page: Page, path: string) {
  await page.goto(path);
  await page.waitForLoadState("networkidle");
}

for (const pageCase of pages) {
  test(`${pageCase.path} has no serious rendered accessibility violations`, async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem("etlh-analytics-consent", "declined");
    });
    await gotoHydrated(page, pageCase.path);
    await expect(page.getByRole("heading", { name: pageCase.heading })).toBeVisible();

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(
      results.violations.filter((violation) =>
        ["serious", "critical"].includes(violation.impact ?? ""),
      ),
    ).toEqual([]);
  });
}

const pilotImageRoutes = [
  {
    path: "/blog/choose-apartment-food-scrap-method",
    alt: "Illustrative small apartment kitchen with food scraps, collection containers, a cutting board, and plants in warm daylight.",
    src: "choose-apartment-food-scrap-method-hero-v1",
  },
  {
    path: "/blog/electric-food-waste-appliances-apartments",
    alt: "Illustrative compact apartment kitchen with an unbranded countertop food-waste appliance and a removable food-scrap container.",
    src: "electric-food-waste-appliances-apartments-hero-v1",
  },
  {
    path: "/blog/dishwashing-without-dishwasher-small-kitchen",
    alt: "Illustrative small apartment kitchen with a sink, dish rack, drying dishes, wood counter, and plants in warm daylight.",
    src: "dishwashing-without-dishwasher-small-kitchen-hero-v2",
  },
];

for (const imageCase of pilotImageRoutes) {
  test(`${imageCase.path} renders its assigned pilot image and alt text`, async ({ page }) => {
    await page.addInitScript(() => window.localStorage.setItem("etlh-analytics-consent", "declined"));
    await gotoHydrated(page, imageCase.path);
    const image = page.locator(`img[alt="${imageCase.alt}"]`).first();
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute("src", new RegExp(imageCase.src));
    await expect(image).toHaveAttribute("width");
    await expect(image).toHaveAttribute("height");
  });
}

test("skip link moves focus to main content", async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem("etlh-analytics-consent", "declined"));
  await gotoHydrated(page, "/");
  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await expect(skipLink).toBeFocused();
  await skipLink.press("Enter");
  await expect(page.locator("#site-content")).toBeFocused();
});

test("analytics banner exposes a clear non-modal choice", async ({ page }) => {
  await page.addInitScript(() => window.localStorage.removeItem("etlh-analytics-consent"));
  await gotoHydrated(page, "/");
  const dialog = page.getByRole("dialog", { name: "Help us understand what is useful" });
  await expect(dialog).toBeVisible({ timeout: 15_000 });
  await expect(dialog).not.toHaveAttribute("aria-modal");
  await page.getByRole("button", { name: "Decline analytics" }).click();
  await expect(dialog).toBeHidden();
});

test("mobile menu exposes state and restores focus", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes("mobile"), "Mobile interaction coverage");
  await page.addInitScript(() => window.localStorage.setItem("etlh-analytics-consent", "declined"));
  await gotoHydrated(page, "/");
  const menuButton = page.locator('button[aria-controls="site-mobile-navigation"]');
  const mobileNavigation = page.locator("#site-mobile-navigation");
  await expect(menuButton).toHaveAccessibleName("Open navigation menu");
  await menuButton.click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await expect(menuButton).toHaveAccessibleName("Close navigation menu");
  await expect(mobileNavigation.getByRole("link", { name: "Home", exact: true })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(menuButton).toHaveAccessibleName("Open navigation menu");
  await expect(menuButton).toBeFocused();
});
