# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: lead-forms.spec.js >> Group 1 · Modal ContactForm CTAs >> TC-01 · Navbar 'Book Site Visit' opens modal → submits lead
- Location: tests/lead-forms.spec.js:26:3

# Error details

```
Error: Channel closed
```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('nav').getByRole('button', { name: /book/i }).or(locator('nav').getByRole('link', { name: /book/i })).first()
    - locator resolved to <button>Book Site Visit</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div>…</div> from <div>…</div> subtree intercepts pointer events
  - retrying click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <a href="#pricelist" class="text-[10px] font-bold tracking-[1.5px] uppercase text-gray-700 bg-gray-100 hover:bg-yellow-500 hover:text-black px-3 py-1.5 rounded-full transition-colors whitespace-nowrap">Price List</a> from <div class="lg:hidden flex items-center gap-2 px-4 py-2 overflow-x-auto border-b border-gray-100">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div>…</div> from <div>…</div> subtree intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <button>5 BHK from ₹2.19 Cr*</button> from <div>…</div> subtree intercepts pointer events
  5 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <a href="#pricelist" class="text-[10px] font-bold tracking-[1.5px] uppercase text-gray-700 bg-gray-100 hover:bg-yellow-500 hover:text-black px-3 py-1.5 rounded-full transition-colors whitespace-nowrap">Price List</a> from <div class="lg:hidden flex items-center gap-2 px-4 py-2 overflow-x-auto border-b border-gray-100">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div>…</div> from <div>…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <button>5 BHK from ₹2.19 Cr*</button> from <div>…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <button>5 BHK from ₹2.19 Cr*</button> from <div>…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <a href="#pricelist" class="text-[10px] font-bold tracking-[1.5px] uppercase text-gray-700 bg-gray-100 hover:bg-yellow-500 hover:text-black px-3 py-1.5 rounded-full transition-colors whitespace-nowrap">Price List</a> from <div class="lg:hidden flex items-center gap-2 px-4 py-2 overflow-x-auto border-b border-gray-100">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div>…</div> from <div>…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <button>5 BHK from ₹2.19 Cr*</button> from <div>…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms

```

```
Error: browserContext.close: Target page, context or browser has been closed
```