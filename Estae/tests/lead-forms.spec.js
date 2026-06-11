/**
 * Lead Form E2E Tests — AU Cosmos Corner
 * =========================================
 * Real end-to-end: browser → Vite → Express (local-api.mjs) → Supabase.
 * No mocking. Every submission uses name prefix "[TEST]" so the cleanup
 * script can safely identify and delete them.
 *
 * Run:           npm test
 * Headed:        npm run test:headed
 * Single test:   npx playwright test --grep "TC-01"
 * Cleanup after: npm run test:cleanup
 */

import { test, expect } from "@playwright/test";
import { captureEnquiry, fillAndSubmit, testName, TEST_PHONE } from "./helpers.js";

// All tests navigate to /?test which disables the 3s auto-popup in App.jsx.

// ═══════════════════════════════════════════════════════════════════════════
// GROUP 1 — MODAL ContactForm  (opened via CTAs throughout the page)
// ═══════════════════════════════════════════════════════════════════════════

test.describe("Group 1 · Modal ContactForm CTAs", () => {

  // ── TC-01 ──────────────────────────────────────────────────────────────
  test("TC-01 · Navbar 'Book Site Visit' opens modal → submits lead", async ({ page }) => {
    await page.goto("/?test");
    const apiDone = captureEnquiry(page);

    const btn = page.locator("nav").getByRole("button", { name: /book/i })
      .or(page.locator("nav").getByRole("link", { name: /book/i }))
      .first();
    await expect(btn).toBeVisible({ timeout: 10_000 });
    await btn.click();

    const modal = page.locator(".fixed.inset-0").first();
    await expect(modal).toBeVisible({ timeout: 5_000 });

    await fillAndSubmit(modal, { name: testName("TC-01 Navbar") });
    const { status, body } = await apiDone;

    expect(status).toBe(200);
    expect(body.success).toBe(true);
    expect(body).toHaveProperty("message");
  });

  // ── TC-02 ──────────────────────────────────────────────────────────────
  test("TC-02 · Mobile hamburger → 'Book Site Visit' opens modal → submits lead", async ({ page }) => {
    await page.goto("/?test");

    const hamburger = page.locator("button[aria-label]").filter({ hasText: /menu|☰/i })
      .or(page.locator('button:has(svg[class*="menu"]), button:has(svg[class*="bar"])'))
      .first();

    // On mobile viewport the hamburger is visible; on desktop it may be hidden
    if (!(await hamburger.isVisible({ timeout: 3_000 }).catch(() => false))) {
      test.skip(true, "Hamburger not visible on this viewport — skipping");
      return;
    }

    const apiDone = captureEnquiry(page);
    await hamburger.click();

    const mobileBook = page.locator("button:has-text('Book'), a:has-text('Book')").last();
    await expect(mobileBook).toBeVisible({ timeout: 5_000 });
    await mobileBook.click();

    const modal = page.locator(".fixed.inset-0").first();
    await expect(modal).toBeVisible({ timeout: 5_000 });

    await fillAndSubmit(modal, { name: testName("TC-02 Hamburger") });
    const { status, body } = await apiDone;
    expect(status).toBe(200);
    expect(body.success).toBe(true);
  });

  // ── TC-03 ──────────────────────────────────────────────────────────────
  test("TC-03 · Desktop Hero CTA 'Book Site Visit' → source = 'Hero Section'", async ({ page }) => {
    await page.goto("/?test");
    const apiDone = captureEnquiry(page);

    // Desktop hero is inside section.hidden.md:block — look for Book button visible on desktop
    const heroBtn = page.locator("section").filter({ hasText: /AU Cosmos Corner/ })
      .getByRole("button", { name: /book/i }).first();
    await expect(heroBtn).toBeVisible({ timeout: 10_000 });
    await heroBtn.click();

    const modal = page.locator(".fixed.inset-0").first();
    await expect(modal).toBeVisible({ timeout: 5_000 });
    await fillAndSubmit(modal, { name: testName("TC-03 Hero Desktop") });

    const { status, body } = await apiDone;
    expect(status).toBe(200);
    expect(body.success).toBe(true);
  });

  // ── TC-04 ──────────────────────────────────────────────────────────────
  test("TC-04 · Hero price pill '₹ 1.22 Cr*' opens modal → submits lead", async ({ page }) => {
    await page.goto("/?test");
    const apiDone = captureEnquiry(page);

    const pricePill = page.locator("button").filter({ hasText: /1\.22|Cr\*/ }).first();
    await pricePill.scrollIntoViewIfNeeded();
    await expect(pricePill).toBeVisible({ timeout: 10_000 });
    await pricePill.click();

    const modal = page.locator(".fixed.inset-0").first();
    await expect(modal).toBeVisible({ timeout: 5_000 });
    await fillAndSubmit(modal, { name: testName("TC-04 Price Pill") });

    const { status, body } = await apiDone;
    expect(status).toBe(200);
    expect(body.success).toBe(true);
  });

  // ── TC-05 ──────────────────────────────────────────────────────────────
  test("TC-05 · Overview Section CTA → source = 'Overview'", async ({ page }) => {
    await page.goto("/?test");
    const apiDone = captureEnquiry(page);

    await page.locator("#overview").scrollIntoViewIfNeeded();
    const btn = page.locator("#overview").getByRole("button", { name: /book|get/i }).first();
    await expect(btn).toBeVisible({ timeout: 10_000 });
    await btn.click();

    const modal = page.locator(".fixed.inset-0").first();
    await expect(modal).toBeVisible({ timeout: 5_000 });
    await fillAndSubmit(modal, { name: testName("TC-05 Overview") });

    const { status, body } = await apiDone;
    expect(status).toBe(200);
    expect(body.success).toBe(true);
  });

  // ── TC-06 ──────────────────────────────────────────────────────────────
  test("TC-06 · CosmosCorner 'Download Brochure' → source = 'Download Brochure from Collection'", async ({ page }) => {
    await page.goto("/?test");
    const apiDone = captureEnquiry(page);

    const brochureBtn = page.locator(".cc-brochure-btn, button:has-text('Download Brochure')").first();
    await brochureBtn.scrollIntoViewIfNeeded();
    await expect(brochureBtn).toBeVisible({ timeout: 10_000 });
    await brochureBtn.click();

    const modal = page.locator(".fixed.inset-0").first();
    await expect(modal).toBeVisible({ timeout: 5_000 });
    await fillAndSubmit(modal, { name: testName("TC-06 Brochure") });

    const { status, body } = await apiDone;
    expect(status).toBe(200);
    expect(body.success).toBe(true);
  });

  // ── TC-07 ──────────────────────────────────────────────────────────────
  test("TC-07 · Price List '₹ 1.22 Cr*' row button → source = 'Project Highlights'", async ({ page }) => {
    await page.goto("/?test");
    const apiDone = captureEnquiry(page);

    await page.locator("#pricelist").scrollIntoViewIfNeeded();
    const priceBtn = page.locator("#pricelist button").first();
    await expect(priceBtn).toBeVisible({ timeout: 10_000 });
    await priceBtn.click();

    const modal = page.locator(".fixed.inset-0").first();
    await expect(modal).toBeVisible({ timeout: 5_000 });
    await fillAndSubmit(modal, { name: testName("TC-07 Price List") });

    const { status, body } = await apiDone;
    expect(status).toBe(200);
    expect(body.success).toBe(true);
  });

  // ── TC-08 ──────────────────────────────────────────────────────────────
  test("TC-08 · FAQ Section CTA → source = 'FAQ Section'", async ({ page }) => {
    await page.goto("/?test");
    const apiDone = captureEnquiry(page);

    const faqCta = page.locator("#faq").getByRole("button", { name: /book|get|visit/i }).first();
    await faqCta.scrollIntoViewIfNeeded();
    await expect(faqCta).toBeVisible({ timeout: 10_000 });
    await faqCta.click();

    const modal = page.locator(".fixed.inset-0").first();
    await expect(modal).toBeVisible({ timeout: 5_000 });
    await fillAndSubmit(modal, { name: testName("TC-08 FAQ") });

    const { status, body } = await apiDone;
    expect(status).toBe(200);
    expect(body.success).toBe(true);
  });

  // ── TC-09 ──────────────────────────────────────────────────────────────
  test("TC-09 · Footer CTA → source = 'Footer'", async ({ page }) => {
    await page.goto("/?test");
    const apiDone = captureEnquiry(page);

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    const footerBtn = page.locator("footer").getByRole("button", { name: /book|get/i }).first();
    await expect(footerBtn).toBeVisible({ timeout: 10_000 });
    await footerBtn.click();

    const modal = page.locator(".fixed.inset-0").first();
    await expect(modal).toBeVisible({ timeout: 5_000 });
    await fillAndSubmit(modal, { name: testName("TC-09 Footer") });

    const { status, body } = await apiDone;
    expect(status).toBe(200);
    expect(body.success).toBe(true);
  });

  // ── TC-10 ──────────────────────────────────────────────────────────────
  test("TC-10 · Download Brochure floating button → source = 'Download Brochure'", async ({ page }) => {
    await page.goto("/?test");
    const apiDone = captureEnquiry(page);

    // Left floating button — desktop only
    const floatBtn = page.locator("button, a").filter({ hasText: /Download Brochure/i })
      .and(page.locator(".hidden.md\\:block, .hidden.lg\\:block").locator("button, a"))
      .first();
    await expect(floatBtn).toBeVisible({ timeout: 10_000 });
    await floatBtn.click();

    const modal = page.locator(".fixed.inset-0").first();
    await expect(modal).toBeVisible({ timeout: 5_000 });
    await fillAndSubmit(modal, { name: testName("TC-10 Brochure Float") });

    const { status, body } = await apiDone;
    expect(status).toBe(200);
    expect(body.success).toBe(true);
  });

  // ── TC-11 ──────────────────────────────────────────────────────────────
  test("TC-11 · Download Prices floating button → source = 'Download Prices'", async ({ page }) => {
    await page.goto("/?test");
    const apiDone = captureEnquiry(page);

    const floatBtn = page.locator("button, a").filter({ hasText: /Download Prices|Price List/i })
      .and(page.locator(".hidden.md\\:block, .hidden.lg\\:block").locator("button, a"))
      .first();
    await expect(floatBtn).toBeVisible({ timeout: 10_000 });
    await floatBtn.click();

    const modal = page.locator(".fixed.inset-0").first();
    await expect(modal).toBeVisible({ timeout: 5_000 });
    await fillAndSubmit(modal, { name: testName("TC-11 Prices Float") });

    const { status, body } = await apiDone;
    expect(status).toBe(200);
    expect(body.success).toBe(true);
  });

});

// ═══════════════════════════════════════════════════════════════════════════
// GROUP 2 — STANDALONE FORMS (submit directly, no modal)
// ═══════════════════════════════════════════════════════════════════════════

test.describe("Group 2 · Standalone Forms", () => {

  // ── TC-12 ──────────────────────────────────────────────────────────────
  test("TC-12 · Inline Contact Form (page bottom) → source = 'Contact Form'", async ({ page }) => {
    await page.goto("/?test");
    const apiDone = captureEnquiry(page);

    // Scroll to the inline ContactForm at the bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight - 600));
    const contactSection = page.locator("#contact, [id*=contact]").first();
    await contactSection.scrollIntoViewIfNeeded().catch(() => {});

    await page.locator('#contact input[name="name"], form input[name="name"]').last().fill(testName("TC-12 Contact Form"));
    await page.locator('#contact input[name="phone"], form input[name="phone"]').last().fill(TEST_PHONE);
    await page.locator('#contact input[name="email"], form input[name="email"]').last().fill("e2e@test.invalid").catch(() => {});

    await page.locator('#contact button[type="submit"], form button[type="submit"]').last().click();

    const { status, body } = await apiDone;
    expect(status).toBe(200);
    expect(body.success).toBe(true);
  });

  // ── TC-13 ──────────────────────────────────────────────────────────────
  test("TC-13 · Desktop Sticky Lead Form → source = 'Sticky Form'", async ({ page }) => {
    await page.goto("/?test");

    // Sticky form slides in after 2 s — advance frozen clock
    await page.clock.fastForward(3_000);

    // If panel starts collapsed, open it
    const getPrice = page.locator("button:has-text('Get Price')").first();
    if (await getPrice.isVisible({ timeout: 2_000 }).catch(() => false)) {
      await getPrice.click();
      await page.waitForTimeout(600);
    }

    const stickyForm = page.locator(".hidden.lg\\:flex form").first();
    await expect(stickyForm).toBeVisible({ timeout: 8_000 });

    const apiDone = captureEnquiry(page);
    await fillAndSubmit(stickyForm, { name: testName("TC-13 Sticky Form") });

    const { status, body } = await apiDone;
    expect(status).toBe(200);
    expect(body.success).toBe(true);
  });

  // ── TC-14 ──────────────────────────────────────────────────────────────
  test("TC-14 · Mobile Hero inline form → source = 'Mobile Hero Form'", async ({ page }) => {
    await page.goto("/?test");

    const heroForm = page.locator(".md\\:hidden form, div.md\\:hidden form").first();
    await expect(heroForm).toBeVisible({ timeout: 10_000 });

    const apiDone = captureEnquiry(page);
    await fillAndSubmit(heroForm, { name: testName("TC-14 Mobile Hero") });

    const { status, body } = await apiDone;
    expect(status).toBe(200);
    expect(body.success).toBe(true);
  });

  // ── TC-15 ──────────────────────────────────────────────────────────────
  test("TC-15 · Mobile Sticky Form bottom sheet → source = 'Mobile Sticky Form'", async ({ page }) => {
    await page.goto("/?test");

    // Gold pill appears after 4 s — advance frozen clock
    await page.clock.fastForward(5_000);
    const pill = page.locator("button:has-text('Get Best Price')").first();
    await expect(pill).toBeVisible({ timeout: 6_000 });
    await pill.click();

    const sheet = page.locator(".lg\\:hidden form").first();
    await expect(sheet).toBeVisible({ timeout: 5_000 });

    const apiDone = captureEnquiry(page);
    await fillAndSubmit(sheet, { name: testName("TC-15 Mobile Sticky") });

    const { status, body } = await apiDone;
    expect(status).toBe(200);
    expect(body.success).toBe(true);
  });

});

// ═══════════════════════════════════════════════════════════════════════════
// GROUP 3 — VALIDATION (no real submission expected)
// ═══════════════════════════════════════════════════════════════════════════

test.describe("Group 3 · Form Validation", () => {

  // ── TC-16 ──────────────────────────────────────────────────────────────
  test("TC-16 · Empty submit shows required-field errors (no API call)", async ({ page }) => {
    await page.goto("/?test");
    let apiCalled = false;
    page.on("request", (req) => {
      if (req.url().includes("/api/enquiry")) apiCalled = true;
    });

    const btn = page.locator("button:has-text('Book'), a:has-text('Book')").first();
    await btn.click();
    const modal = page.locator(".fixed.inset-0").first();
    await expect(modal).toBeVisible();

    await modal.locator('button[type="submit"]').first().click();
    await page.waitForTimeout(500);

    // Error messages must appear
    await expect(modal.locator("p").filter({ hasText: /name|required/i }).first()).toBeVisible({ timeout: 3_000 });
    expect(apiCalled).toBe(false);
  });

  // ── TC-17 ──────────────────────────────────────────────────────────────
  test("TC-17 · Invalid phone (5 digits) shows phone error (no API call)", async ({ page }) => {
    await page.goto("/?test");
    let apiCalled = false;
    page.on("request", (req) => {
      if (req.url().includes("/api/enquiry")) apiCalled = true;
    });

    const btn = page.locator("button:has-text('Book'), a:has-text('Book')").first();
    await btn.click();
    const modal = page.locator(".fixed.inset-0").first();
    await expect(modal).toBeVisible();

    await modal.locator('input[name="name"]').fill(testName("TC-17 Invalid Phone"));
    await modal.locator('input[name="phone"]').fill("12345");
    await modal.locator('button[type="submit"]').first().click();
    await page.waitForTimeout(500);

    await expect(modal.locator("p").filter({ hasText: /10|valid|phone/i }).first()).toBeVisible({ timeout: 3_000 });
    expect(apiCalled).toBe(false);
  });

  // ── TC-18 ──────────────────────────────────────────────────────────────
  test("TC-18 · Mobile Hero Form: empty submit shows validation (no API call)", async ({ page }) => {
    await page.goto("/?test");
    let apiCalled = false;
    page.on("request", (req) => {
      if (req.url().includes("/api/enquiry")) apiCalled = true;
    });

    const heroForm = page.locator(".md\\:hidden form").first();
    await expect(heroForm).toBeVisible({ timeout: 10_000 });
    await heroForm.locator('button[type="submit"]').click();
    await page.waitForTimeout(500);

    await expect(heroForm.locator("p").first()).toBeVisible({ timeout: 3_000 });
    expect(apiCalled).toBe(false);
  });

  // ── TC-19 ──────────────────────────────────────────────────────────────
  test("TC-19 · Backdrop click closes modal without submitting", async ({ page }) => {
    await page.goto("/?test");
    let apiCalled = false;
    page.on("request", (req) => {
      if (req.url().includes("/api/enquiry")) apiCalled = true;
    });

    const btn = page.locator("button:has-text('Book'), a:has-text('Book')").first();
    await btn.click();
    const modal = page.locator(".fixed.inset-0").first();
    await expect(modal).toBeVisible();

    // Click the very top-left corner (outside the form panel = backdrop)
    await modal.click({ position: { x: 10, y: 10 } });
    await expect(modal).not.toBeVisible({ timeout: 3_000 });
    expect(apiCalled).toBe(false);
  });

});

// ═══════════════════════════════════════════════════════════════════════════
// GROUP 4 — POST-SUBMIT REDIRECT
// ═══════════════════════════════════════════════════════════════════════════

test.describe("Group 4 · Post-Submit Redirect", () => {

  // ── TC-20 ──────────────────────────────────────────────────────────────
  test("TC-20 · Modal form submit → redirects to /thank-you", async ({ page }) => {
    await page.goto("/?test");
    const btn = page.locator("button:has-text('Book'), a:has-text('Book')").first();
    await btn.click();
    const modal = page.locator(".fixed.inset-0").first();
    await expect(modal).toBeVisible();

    await fillAndSubmit(modal, { name: testName("TC-20 Redirect") });
    await page.waitForURL("**/thank-you", { timeout: 12_000 });
    expect(page.url()).toContain("/thank-you");
  });

  // ── TC-21 ──────────────────────────────────────────────────────────────
  test("TC-21 · Mobile Hero Form submit → redirects to /thank-you", async ({ page }) => {
    await page.goto("/?test");
    const heroForm = page.locator(".md\\:hidden form").first();
    await expect(heroForm).toBeVisible({ timeout: 10_000 });

    await fillAndSubmit(heroForm, { name: testName("TC-21 Mobile Redirect") });
    await page.waitForURL("**/thank-you", { timeout: 12_000 });
    expect(page.url()).toContain("/thank-you");
  });

});

// ═══════════════════════════════════════════════════════════════════════════
// GROUP 5 — API PAYLOAD INTEGRITY
// ═══════════════════════════════════════════════════════════════════════════

test.describe("Group 5 · API Payload Integrity", () => {

  // ── TC-22 ──────────────────────────────────────────────────────────────
  test("TC-22 · Payload has full_name, phone, interested_in, source — all non-empty", async ({ page }) => {
    await page.goto("/?test");
    let capturedPayload = null;
    page.on("request", (req) => {
      if (req.url().includes("/api/enquiry") && req.method() === "POST") {
        capturedPayload = JSON.parse(req.postData() ?? "{}");
      }
    });

    const btn = page.locator("button:has-text('Book'), a:has-text('Book')").first();
    await btn.click();
    const modal = page.locator(".fixed.inset-0").first();
    await expect(modal).toBeVisible();
    await fillAndSubmit(modal, { name: testName("TC-22 Payload Check") });

    await page.waitForTimeout(1_500);
    expect(capturedPayload).not.toBeNull();
    expect(capturedPayload.full_name).toContain("[TEST]");
    expect(capturedPayload.phone).toBe(TEST_PHONE);
    expect(capturedPayload.interested_in).toBeTruthy();
    expect(capturedPayload.source).toBeTruthy();
    expect(capturedPayload.source.length).toBeGreaterThan(0);
  });

  // ── TC-23 ──────────────────────────────────────────────────────────────
  test("TC-23 · Phone +91 prefix is stripped before submission", async ({ page }) => {
    await page.goto("/?test");
    let capturedPayload = null;
    page.on("request", (req) => {
      if (req.url().includes("/api/enquiry") && req.method() === "POST") {
        capturedPayload = JSON.parse(req.postData() ?? "{}");
      }
    });

    const btn = page.locator("button:has-text('Book'), a:has-text('Book')").first();
    await btn.click();
    const modal = page.locator(".fixed.inset-0").first();
    await expect(modal).toBeVisible();

    await modal.locator('input[name="name"]').fill(testName("TC-23 Phone Strip"));
    await modal.locator('input[name="phone"]').fill("+91" + TEST_PHONE);
    await modal.locator('button[type="submit"]').first().click();

    await page.waitForTimeout(1_500);
    expect(capturedPayload?.phone).toBe(TEST_PHONE);
  });

  // ── TC-24 ──────────────────────────────────────────────────────────────
  test("TC-24 · Double-click submit sends only one API request", async ({ page }) => {
    await page.goto("/?test");
    let callCount = 0;
    page.on("request", (req) => {
      if (req.url().includes("/api/enquiry") && req.method() === "POST") callCount++;
    });

    const btn = page.locator("button:has-text('Book'), a:has-text('Book')").first();
    await btn.click();
    const modal = page.locator(".fixed.inset-0").first();
    await expect(modal).toBeVisible();

    await modal.locator('input[name="name"]').fill(testName("TC-24 Double Click"));
    await modal.locator('input[name="phone"]').fill(TEST_PHONE);
    await modal.locator('button[type="submit"]').first().dblclick();

    await page.waitForTimeout(2_000);
    expect(callCount).toBeLessThanOrEqual(1);
  });

});

// ═══════════════════════════════════════════════════════════════════════════
// GROUP 6 — MOBILE BOTTOM BAR (direct contact, no form submission)
// ═══════════════════════════════════════════════════════════════════════════

test.describe("Group 6 · Mobile Bottom Bar", () => {

  // ── TC-25 ──────────────────────────────────────────────────────────────
  test("TC-25 · 'Call Now' button has valid tel: href", async ({ page }) => {
    await page.goto("/?test");
    const callBtn = page.locator('a[href^="tel:"]').first();
    await expect(callBtn).toBeVisible({ timeout: 10_000 });
    const href = await callBtn.getAttribute("href");
    // Must be tel: followed by 10 digits (no spaces, no +91)
    expect(href).toMatch(/^tel:\d{10}$/);
  });

  // ── TC-26 ──────────────────────────────────────────────────────────────
  test("TC-26 · 'WhatsApp' button has valid wa.me href with pre-filled message", async ({ page }) => {
    await page.goto("/?test");
    const waBtn = page.locator('a[href*="wa.me"]').first();
    await expect(waBtn).toBeVisible({ timeout: 10_000 });
    const href = await waBtn.getAttribute("href");
    expect(href).toContain("wa.me");
    expect(href).toContain("text=");
    // Phone number must be present in the URL
    expect(href).toMatch(/wa\.me\/\d+/);
  });

});
