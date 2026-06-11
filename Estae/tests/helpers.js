/**
 * Shared test helpers — AU Cosmos Corner lead form E2E suite
 *
 * All test submissions use TEST_NAME_PREFIX in full_name so they can be
 * identified and deleted after the run without touching real leads.
 */

export const TEST_NAME_PREFIX = "[TEST]";
export const TEST_PHONE       = "9000000001";  // dummy 10-digit, unlikely to be real
export const TEST_EMAIL       = "e2e-test@test.invalid";

/** Name sent in every test submission */
export const testName = (label) => `${TEST_NAME_PREFIX} ${label}`;

/**
 * Supabase credentials (same as local-api.mjs).
 * Used only in the cleanup script — tests go through the real API endpoint.
 */
export const SUPABASE_URL     = "https://zmpjoxnsavmeeoabsskb.supabase.co";
export const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptcGpveG5zYXZtZWVvYWJzc2tiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2OTg3NjgsImV4cCI6MjA5MzI3NDc2OH0.zvAhdB8VdRoTikWI763_GdhtJhiMcKMYRgRC2hmkylU";

/**
 * Wait for the next POST to /api/enquiry and return { status, body }.
 * Set this up BEFORE the action that triggers the submit.
 */
export async function captureEnquiry(page) {
  return new Promise((resolve) => {
    page.on("response", async (res) => {
      if (res.url().includes("/api/enquiry") && res.request().method() === "POST") {
        const body = await res.json().catch(() => ({}));
        resolve({ status: res.status(), body });
      }
    });
  });
}

/**
 * Fill name + phone in the currently-visible form, pick interest via CustomSelect,
 * then click submit.  All selectors are scoped to `scope` (a Locator or page).
 */
export async function fillAndSubmit(scope, { name, interestText = "3 BHK" } = {}) {
  await scope.locator('input[name="name"]').fill(name ?? testName("Auto"));
  await scope.locator('input[name="phone"]').fill(TEST_PHONE);

  // CustomSelect trigger — text varies by form
  const trigger = scope.locator("button").filter({
    hasText: /Interested In|configuration|Select config/i,
  }).first();
  if (await trigger.count() > 0) {
    await trigger.click();
    // Pick first option that matches interestText
    await scope.page().locator(`button:has-text("${interestText}")`).first().click();
  }

  await scope.locator('button[type="submit"]').first().click();
}
