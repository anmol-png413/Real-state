# Gallery Section & Font Consistency — Design Spec

**Date:** 2026-06-05  
**Project:** AU Cosmos Corner Landing Page  
**Branch:** rahul/au-landing-page-changes

---

## Overview

Two changes:
1. A new horizontal-scroll media gallery (images + videos) placed immediately after the Hero section
2. A consistent 2-font system applied across the entire site

---

## Part 1: Media Gallery Strip

### Component
**File:** `Estae/src/Components/MediaStrip.jsx`  
**Placement:** `App.jsx` — immediately after `<HeroSection />`

### Assets
- User drops all images and video files into `Estae/src/assets/gallery/`
- Component imports them statically as an array of `{ type: 'image' | 'video', src, label }`
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp` for images; `.mp4`, `.webm` for videos

### Layout
- Full-width section, cream background (`#fffef8`) matching site theme
- Section heading: *"Project Gallery"* — Playfair Display, centered
- Horizontal scrolling row of tiles using CSS `overflow-x: auto` + `scroll-snap-type: x mandatory`
- Tile size: `320×220px` desktop, `260×180px` mobile
- Gap between tiles: `16px`
- Thin gold (`#c8a042`) custom scrollbar

### Image Tiles
- `object-fit: cover` rendering
- Hover: slight zoom (scale 1.03) + gold border highlight
- Click: opens lightbox overlay — fullscreen with close (×) button and prev/next arrow navigation

### Video Tiles
- Thumbnail: first frame of video (browser default poster)
- Gold play icon overlay centered on tile
- Hover: autoplay muted preview
- Click: opens fullscreen modal, plays with sound unmuted, shows native controls

### Lightbox
- Black overlay (`rgba(0,0,0,0.9)`)
- Close on backdrop click or Escape key
- Prev/Next navigation arrows (keyboard left/right supported)
- Works for both images and videos

---

## Part 2: Font Consistency

### Current Problem
The site inconsistently uses: Cormorant Garamond, Jost, Lato, and system fonts — mixing them across components without a clear hierarchy rule.

### New 2-Font System

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| **Display** | `Playfair Display` | 400, 700 | All `<h1>`–`<h3>`, section titles, hero headline, price figures |
| **Body** | `DM Sans` | 300, 400, 500, 600 | All body text, buttons, labels, tags, nav, form inputs |

### Implementation
1. Replace Google Fonts `@import` in `Estae/index.html` — remove Cormorant Garamond, Jost, Lato; add Playfair Display + DM Sans
2. Add global CSS rules in `Estae/src/index.css`:
   ```css
   * { font-family: 'DM Sans', sans-serif; }
   h1, h2, h3, .display { font-family: 'Playfair Display', serif; }
   ```
3. Do a find-and-replace across all `.jsx` components — replace inline `fontFamily` strings:
   - `'Cormorant Garamond', Georgia, serif` → `'Playfair Display', Georgia, serif`
   - `'Jost', sans-serif` → `'DM Sans', sans-serif`
   - `'Lato', sans-serif` → `'DM Sans', sans-serif`

### Scope
All files in `Estae/src/Components/` and `Estae/src/pages/`. The `MediaStrip.jsx` component will use the new font system from the start.

---

## Files Changed

| File | Change |
|------|--------|
| `Estae/src/Components/MediaStrip.jsx` | New component |
| `Estae/src/App.jsx` | Add `<MediaStrip />` after `<HeroSection />` |
| `Estae/src/assets/gallery/` | New folder for user-uploaded media |
| `Estae/index.html` | Replace Google Fonts imports |
| `Estae/src/index.css` | Add global font rules |
| All `.jsx` in `src/Components/` and `src/pages/` | Replace inline fontFamily strings |

---

## Out of Scope
- No backend/CDN upload flow — assets are bundled statically
- No lazy loading optimization (can be added later)
- Existing `ProjectGallery` component is untouched
