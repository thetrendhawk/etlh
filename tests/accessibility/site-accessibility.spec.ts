import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

const pages = [
  { path: "/", heading: /Sustainable living for small spaces/i },
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
  const region = page.getByRole("region", { name: "Help us understand what is useful" });
  await expect(region).toBeVisible({ timeout: 15_000 });
  await expect(region).not.toHaveAttribute("aria-modal");
  await page.getByRole("button", { name: "Decline analytics" }).click();
  await expect(region).toBeHidden();
});

test("mobile menu exposes state and restores focus", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes("mobile"), "Mobile interaction coverage");
  await page.addInitScript(() => window.localStorage.setItem("etlh-analytics-consent", "declined"));
  await gotoHydrated(page, "/");
  const menuButton = page.getByRole("button", { name: "Open navigation menu" });
  await menuButton.click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("link", { name: "Home" }).last()).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(menuButton).toBeFocused();
});
