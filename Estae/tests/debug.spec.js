import { test, expect } from "@playwright/test";

test("debug · verify option click closes dropdown", async ({ page }) => {
  await page.goto("/");

  const btn = page.locator("nav").getByRole("button", { name: /book/i }).first();
  await btn.click();

  const modal = page.locator(".fixed.inset-0").first();
  await expect(modal).toBeVisible();

  await modal.locator('input[name="name"]').fill("DEBUG TEST");
  await modal.locator('input[name="phone"]').fill("9000000001");

  // Click trigger
  const trigger = modal.locator('[data-testid="select-trigger-interest"]').first();
  await trigger.click();
  await page.waitForTimeout(300);

  console.log("Options count:", await page.locator('[data-testid^="select-option-"]').count());

  // Use JS evaluate to click the option directly (bypasses all Playwright checks)
  const clicked = await page.evaluate(() => {
    const opt = document.querySelector('[data-testid="select-option-3bhk-1780"]');
    if (!opt) return "NOT FOUND";
    opt.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    return "CLICKED";
  });
  console.log("JS click result:", clicked);
  await page.waitForTimeout(500);

  console.log("Options count after click:", await page.locator('[data-testid^="select-option-"]').count());
  console.log("Trigger text after:", await trigger.textContent());

  await page.screenshot({ path: "test-results/debug-after-click.png" });
  expect(clicked).toBe("CLICKED");
});
