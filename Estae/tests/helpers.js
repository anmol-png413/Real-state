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
 * Uses page.waitForResponse() which has a built-in timeout and handles
 * network failures gracefully (won't hang if the API is down).
 * Set this up BEFORE the action that triggers the submit.
 */
export async function captureEnquiry(page, timeout = 20_000) {
  const response = await page.waitForResponse(
    (res) => res.url().includes("/api/enquiry") && res.request().method() === "POST",
    { timeout }
  );
  const body = await response.json().catch(() => ({}));
  return { status: response.status(), body };
}

/**
 * Fill name + phone in the currently-visible form, pick interest via CustomSelect,
 * then submit. Uses page.evaluate() for both the option click and the submit
 * button click to bypass the modal backdrop's pointer-event interception.
 */
export async function fillAndSubmit(scope, { name, interestText = "3 BHK" } = {}) {
  await scope.locator('input[name="name"]').fill(name ?? testName("Auto"));
  await scope.locator('input[name="phone"]').fill(TEST_PHONE);

  const page = scope.page();
  const trigger = scope.locator('[data-testid="select-trigger-interest"]').first();

  if (await trigger.count() > 0) {
    // Open the dropdown via a real click on the trigger (trigger is not blocked by backdrop)
    await trigger.click();

    // Wait for options to appear in DOM
    await page.locator('[data-testid^="select-option-"]').first()
      .waitFor({ state: "attached", timeout: 5_000 });

    // Click the matching option via dispatchEvent (bypasses modal backdrop interception)
    await page.evaluate((text) => {
      const options = document.querySelectorAll('[data-testid^="select-option-"]');
      for (const opt of options) {
        if (opt.textContent?.includes(text)) {
          opt.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
          break;
        }
      }
    }, interestText);

    // Wait for React to process the click and close the dropdown
    await page.locator('[data-testid^="select-option-"]').first()
      .waitFor({ state: "detached", timeout: 3_000 })
      .catch(() => {});

    // Allow React to flush the async setForm() state update before submitting
    await page.waitForTimeout(300);
  }

  // Submit via requestSubmit() — programmatically submits the form, triggering React's
  // onSubmit handler. This bypasses the modal backdrop pointer-event interception.
  const submitted = await page.evaluate(() => {
    // Modal form takes priority; fall back to any form with a submit button
    const form = document.querySelector('.fixed.inset-0 form')
      || document.querySelector('form:has(button[type="submit"])');
    if (!form) return false;
    // requestSubmit() fires validation + submit event (React onSubmit)
    if (typeof form.requestSubmit === "function") {
      form.requestSubmit();
    } else {
      form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
    }
    return true;
  });

  if (!submitted) {
    await scope.locator('button[type="submit"]').first().click({ force: true });
  }
}
