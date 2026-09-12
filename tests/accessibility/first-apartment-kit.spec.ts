import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { readFile } from "node:fs/promises";

const toolPath = "/tools/first-apartment-kit.html";
const storageKey = "etlh-first-apartment-v1";

test("free kit is labeled, accessible, responsive, and linked to its PDF", async ({ page }) => {
  await page.goto(toolPath);
  await expect(page.locator("#items article")).toHaveCount(24);
  await expect(page.locator("#tasks .task")).toHaveCount(18);
  await expect(page.getByRole("checkbox", { name: /Remember my plan/ })).not.toBeChecked();
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
  expect(results.violations).toEqual([]);
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
  ).toBe(true);
  const pdf = await page.request.get("/downloads/first-apartment-less-waste-v1.pdf");
  expect(pdf.ok()).toBe(true);
  expect((await pdf.body()).subarray(0, 5).toString()).toBe("%PDF-");
});

test("budget separates later and unpriced items and excludes owned items", async ({ page }) => {
  await page.goto(toolPath);
  await page.locator("#budget").fill("800");
  await page.locator("#buffer").fill("100");
  await page.locator("#other").fill("50");
  const first = page.locator("#items article").nth(0);
  const second = page.locator("#items article").nth(1);
  await first.locator("select").selectOption("now");
  await expect(page.locator("#budget-note")).toContainText("no price");
  await first.locator("input").fill("200");
  await second.locator("select").selectOption("later");
  await second.locator("input").fill("40");
  await expect(page.locator("#now-total")).toHaveText("$200.00");
  await expect(page.locator("#later-total")).toHaveText("$40.00");
  await expect(page.locator("#remaining")).toHaveText("$450.00");
  await first.locator("select").selectOption("have");
  await expect(page.locator("#remaining")).toHaveText("$650.00");
  await first.locator("select").selectOption("now");
  await expect(first.locator("input")).toHaveValue("200");
  await first.locator("input").fill("0");
  await expect(page.locator("#budget-note")).not.toContainText("no price");
  await first.locator("input").fill("-1");
  await expect(page.locator("#input-errors")).toBeVisible();
  await first.locator("input").fill("20.25");
  await expect(page.locator("#input-errors")).toBeHidden();
  await expect(page.locator("#remaining")).toHaveText("$629.75");
});

test("browser saving is opt-in, survives reload, and can be removed", async ({ page }) => {
  await page.goto(toolPath);
  await page.locator("#budget").fill("800");
  expect(await page.evaluate((key) => localStorage.getItem(key), storageKey)).toBeNull();
  await page.reload();
  await expect(page.locator("#budget")).toHaveValue("");
  await page.locator("#budget").fill("800");
  await page.getByRole("checkbox", { name: /Remember my plan/ }).check();
  await page.reload();
  await expect(page.locator("#budget")).toHaveValue("800");
  await page.getByRole("checkbox", { name: /Remember my plan/ }).uncheck();
  expect(await page.evaluate((key) => localStorage.getItem(key), storageKey)).toBeNull();
  await page.reload();
  await expect(page.locator("#budget")).toHaveValue("");
});

test("backup restores the plan and a malformed file cannot replace it", async ({ page }) => {
  await page.goto(toolPath);
  await page.locator("#budget").fill("700");
  await page.locator("#next-step").fill("Measure the desk corner.");
  const downloaded = page.waitForEvent("download");
  await page.locator("#export").click();
  const download = await downloaded;
  const filePath = await download.path();
  if (!filePath) throw new Error("The backup file was not downloaded.");
  const backup = await readFile(filePath);
  expect(JSON.parse(backup.toString()).budget).toBe("700");
  await page.locator("#budget").fill("10");
  page.once("dialog", (dialog) => dialog.accept());
  await page.locator("#import").setInputFiles({
    name: "plan.json",
    mimeType: "application/json",
    buffer: backup,
  });
  await expect(page.locator("#budget")).toHaveValue("700");
  await expect(page.locator("#next-step")).toHaveValue("Measure the desk corner.");
  await page.locator("#import").setInputFiles({
    name: "invalid.json",
    mimeType: "application/json",
    buffer: Buffer.from('{"version":99}'),
  });
  await expect(page.locator("#message")).toContainText("not a supported");
  await expect(page.locator("#budget")).toHaveValue("700");
});

test("measurement comparisons and suggested dates are explicit", async ({ page }) => {
  await page.goto(toolPath);
  await page.locator("#move-date").fill("2026-10-01");
  await expect(page.locator(".task-date").first()).toHaveText("Suggested: Sep 10, 2026");
  const dimensions = page.locator("#fits input[type=number]");
  for (let index = 0; index < 6; index += 1) {
    await dimensions.nth(index).fill(index < 3 ? "30" : "40");
  }
  await expect(page.locator(".fit-result")).toContainText("Within the space dimensions");
  await expect(page.locator(".fit-result")).toContainText("not a fit guarantee");
  await dimensions.first().fill("41");
  await expect(page.locator(".fit-result")).toContainText("Too large");
});
