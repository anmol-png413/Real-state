# Gallery Section & Font Consistency Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a cinematic horizontal-scroll media strip (images + videos) after the Hero section, and replace the inconsistent 3-font mix with a clean Playfair Display + DM Sans system site-wide.

**Architecture:** Two independent tasks — font replacement is a global find-and-replace across CSS/JSX; the gallery is a new self-contained `MediaStrip.jsx` component that statically imports assets from `src/assets/gallery/` and renders a scroll-snap strip with a lightbox.

**Tech Stack:** React, Vite (static asset imports), CSS scroll-snap, Google Fonts (Playfair Display + DM Sans)

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `Estae/src/assets/gallery/` | Create folder | Holds all user images + videos |
| `Estae/src/Components/MediaStrip.jsx` | Create | Horizontal scroll gallery with lightbox |
| `Estae/src/App.jsx` | Modify | Import + render `<MediaStrip />` after `<HeroSection />` |
| `Estae/index.html` | Modify | Add Playfair Display + DM Sans font preconnect/load |
| `Estae/src/index.css` | Modify | Replace Lato import, set global font rules |
| `Estae/src/Components/HeroSection.jsx` | Modify | Replace inline `@import` + fontFamily strings |
| `Estae/src/Components/Navbar.jsx` | Modify | Replace fontFamily strings |
| `Estae/src/Components/About .jsx` | Modify | Replace fontFamily strings |
| `Estae/src/Components/CosmosCorner.jsx` | Modify | Replace fontFamily strings |
| `Estae/src/Components/SitePlan.jsx` | Modify | Replace fontFamily strings |
| `Estae/src/Components/Locationgallery .jsx` | Modify | Replace fontFamily strings |
| `Estae/src/Components/Projecthighlights.jsx` | Modify | Replace fontFamily strings |
| `Estae/src/App.jsx` | Modify (fonts) | Remove inline `@import` for Cormorant/Jost |

---

## Task 1: Set Up Gallery Assets Folder

**Files:**
- Create: `Estae/src/assets/gallery/.gitkeep`

- [ ] **Step 1: Create the gallery assets folder**

```bash
mkdir -p /home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src/assets/gallery
touch /home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src/assets/gallery/.gitkeep
```

- [ ] **Step 2: Copy existing corner images into gallery as seed content**

```bash
cp "/home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src/assets/corner/Screenshot 2026-05-24 115934.png" \
   "/home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src/assets/gallery/image-01.png"
cp "/home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src/assets/corner/Screenshot 2026-05-24 115953.png" \
   "/home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src/assets/gallery/image-02.png"
cp "/home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src/assets/corner/Screenshot 2026-05-24 120007.png" \
   "/home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src/assets/gallery/image-03.png"
cp "/home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src/assets/corner/Screenshot 2026-05-24 120020.png" \
   "/home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src/assets/gallery/image-04.png"
cp "/home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src/assets/corner/Screenshot 2026-05-24 120045.png" \
   "/home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src/assets/gallery/image-05.png"
cp "/home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src/assets/corner/Screenshot 2026-05-24 120102.png" \
   "/home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src/assets/gallery/image-06.png"
cp "/home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src/assets/corner/Screenshot 2026-05-24 120136.png" \
   "/home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src/assets/gallery/image-07.png"
cp "/home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src/assets/corner/Screenshot 2026-05-24 120149.png" \
   "/home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src/assets/gallery/image-08.png"
```

- [ ] **Step 3: Verify files copied**

```bash
ls /home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src/assets/gallery/
```
Expected: 8 image files + `.gitkeep`

- [ ] **Step 4: Commit**

```bash
cd /home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state
git add Estae/src/assets/gallery/
git commit -m "feat: add gallery assets folder with seed images"
```

---

## Task 2: Build MediaStrip Component

**Files:**
- Create: `Estae/src/Components/MediaStrip.jsx`

- [ ] **Step 1: Create MediaStrip.jsx**

```jsx
// Estae/src/Components/MediaStrip.jsx
import { useState, useEffect, useCallback } from "react";

import img01 from "../assets/gallery/image-01.png";
import img02 from "../assets/gallery/image-02.png";
import img03 from "../assets/gallery/image-03.png";
import img04 from "../assets/gallery/image-04.png";
import img05 from "../assets/gallery/image-05.png";
import img06 from "../assets/gallery/image-06.png";
import img07 from "../assets/gallery/image-07.png";
import img08 from "../assets/gallery/image-08.png";

const mediaItems = [
  { type: "image", src: img01, label: "Project View 1" },
  { type: "image", src: img02, label: "Project View 2" },
  { type: "image", src: img03, label: "Project View 3" },
  { type: "image", src: img04, label: "Project View 4" },
  { type: "image", src: img05, label: "Project View 5" },
  { type: "image", src: img06, label: "Project View 6" },
  { type: "image", src: img07, label: "Project View 7" },
  { type: "image", src: img08, label: "Project View 8" },
];

export default function MediaStrip() {
  const [lightbox, setLightbox] = useState(null); // index or null

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() =>
    setLightbox(i => (i - 1 + mediaItems.length) % mediaItems.length), []);
  const next = useCallback(() =>
    setLightbox(i => (i + 1) % mediaItems.length), []);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, close, prev, next]);

  return (
    <>
      <style>{`
        .media-strip-scroll::-webkit-scrollbar { height: 4px; }
        .media-strip-scroll::-webkit-scrollbar-track { background: #f5f0e8; }
        .media-strip-scroll::-webkit-scrollbar-thumb { background: #c8a042; border-radius: 2px; }
        .media-tile { flex-shrink: 0; width: 320px; height: 220px; border-radius: 10px; overflow: hidden; cursor: pointer; position: relative; scroll-snap-align: start; transition: transform 0.25s, box-shadow 0.25s; }
        .media-tile:hover { transform: scale(1.03); box-shadow: 0 8px 32px rgba(200,160,66,0.25); }
        @media (max-width: 640px) { .media-tile { width: 260px; height: 180px; } }
        .media-tile img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .media-tile video { width: 100%; height: 100%; object-fit: cover; display: block; }
        .play-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.25); }
        .play-btn { width: 52px; height: 52px; border-radius: 50%; background: rgba(200,160,66,0.9); display: flex; align-items: center; justify-content: center; }
        .lightbox-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.92); z-index: 1000; display: flex; align-items: center; justify-content: center; }
        .lightbox-img { max-width: 90vw; max-height: 85vh; border-radius: 8px; object-fit: contain; }
        .lightbox-video { max-width: 90vw; max-height: 85vh; border-radius: 8px; }
        .lb-btn { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(200,160,66,0.85); border: none; border-radius: 50%; width: 44px; height: 44px; font-size: 20px; color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; }
        .lb-close { position: absolute; top: 20px; right: 24px; background: rgba(255,255,255,0.15); border: none; border-radius: 50%; width: 40px; height: 40px; font-size: 22px; color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; }
      `}</style>

      <section style={{ background: "#fffef8", padding: "52px 0 40px" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "32px", padding: "0 20px" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#c8a042", marginBottom: "6px" }}>
            Visual Tour
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, color: "#111", letterSpacing: "0.02em" }}>
            Project Gallery
          </h2>
          <div style={{ width: "40px", height: "2px", background: "#c8a042", margin: "10px auto 0" }} />
        </div>

        {/* Scroll Strip */}
        <div
          className="media-strip-scroll"
          style={{ display: "flex", gap: "16px", overflowX: "auto", scrollSnapType: "x mandatory", padding: "8px 32px 16px", scrollBehavior: "smooth" }}
        >
          {mediaItems.map((item, i) => (
            <div key={i} className="media-tile" onClick={() => setLightbox(i)}>
              {item.type === "image" ? (
                <img src={item.src} alt={item.label} loading="lazy" />
              ) : (
                <>
                  <video src={item.src} muted playsInline preload="metadata"
                    onMouseEnter={e => e.currentTarget.play()}
                    onMouseLeave={e => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                  />
                  <div className="play-overlay">
                    <div className="play-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><polygon points="5,3 19,12 5,21" /></svg>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox-backdrop" onClick={close}>
          <button className="lb-close" onClick={close}>×</button>
          <button className="lb-btn" style={{ left: "16px" }} onClick={e => { e.stopPropagation(); prev(); }}>‹</button>
          <div onClick={e => e.stopPropagation()}>
            {mediaItems[lightbox].type === "image" ? (
              <img className="lightbox-img" src={mediaItems[lightbox].src} alt={mediaItems[lightbox].label} />
            ) : (
              <video className="lightbox-video" src={mediaItems[lightbox].src} controls autoPlay />
            )}
          </div>
          <button className="lb-btn" style={{ right: "16px" }} onClick={e => { e.stopPropagation(); next(); }}>›</button>
        </div>
      )}
    </>
  );
}
```

- [ ] **Step 2: Import and place MediaStrip in App.jsx**

In `Estae/src/App.jsx`, add the import at the top with other imports:
```jsx
import MediaStrip from './Components/MediaStrip';
```

Then in the `HomePage` function, place `<MediaStrip />` immediately after `<HeroSection .../>`:
```jsx
<HeroSection onBookVisit={() => { setModalSource("Hero Section"); setShowModal(true); }} />
<MediaStrip />
```

- [ ] **Step 3: Verify in browser**

Open [http://localhost:5173](http://localhost:5173) — scroll down past hero, gallery strip should appear with 8 project images, scroll horizontally, click to open lightbox.

- [ ] **Step 4: Commit**

```bash
cd /home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state
git add Estae/src/Components/MediaStrip.jsx Estae/src/App.jsx
git commit -m "feat: add MediaStrip horizontal gallery section after hero"
```

---

## Task 3: Replace Font Imports (index.html + index.css)

**Files:**
- Modify: `Estae/index.html`
- Modify: `Estae/src/index.css`

- [ ] **Step 1: Update index.html — add Playfair Display + DM Sans**

Find the `<head>` section in `Estae/index.html`. Add these lines after the existing `<link rel="preconnect">` tags (or after `<meta>` tags if no preconnects exist):

```html
<!-- Font preconnects -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<!-- Playfair Display (display/headings) + DM Sans (body) -->
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500;600&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500;600&display=swap" />
```

- [ ] **Step 2: Update index.css — replace Lato with DM Sans globally**

Replace the entire contents of `Estae/src/index.css` with:

```css
@tailwind base;
@tailwind utilities;
@tailwind components;

@layer base {
  * {
    font-family: 'DM Sans', sans-serif;
  }
  h1, h2, h3 {
    font-family: 'Playfair Display', Georgia, serif;
  }
}
```

- [ ] **Step 3: Commit**

```bash
cd /home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state
git add Estae/index.html Estae/src/index.css
git commit -m "feat: replace Lato with DM Sans + Playfair Display global font system"
```

---

## Task 4: Replace Inline fontFamily Strings Across Components

**Files:**
- Modify: `Estae/src/Components/HeroSection.jsx`
- Modify: `Estae/src/Components/Navbar.jsx`
- Modify: `Estae/src/Components/About .jsx`
- Modify: `Estae/src/Components/CosmosCorner.jsx`
- Modify: `Estae/src/Components/SitePlan.jsx`
- Modify: `Estae/src/Components/Locationgallery .jsx`
- Modify: `Estae/src/Components/Projecthighlights.jsx`
- Modify: `Estae/src/App.jsx`

- [ ] **Step 1: Remove all inline @import font declarations from component files**

Each component that has an inline `<style>` block with `@import url(...)` for Google Fonts must have those lines removed — fonts are now loaded globally via `index.html`.

Run to find all occurrences:
```bash
grep -rn "@import url" /home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src/
```

For each file returned, delete the `@import url('https://fonts.googleapis.com/...')` line inside the `<style>` JSX string.

- [ ] **Step 2: Replace Cormorant Garamond with Playfair Display**

```bash
find /home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src -name "*.jsx" \
  -exec sed -i "s/'Cormorant Garamond', Georgia, serif/'Playfair Display', Georgia, serif/g" {} \;
find /home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src -name "*.jsx" \
  -exec sed -i "s/\"Cormorant Garamond\"/\"Playfair Display\"/g" {} \;
```

- [ ] **Step 3: Replace Jost with DM Sans**

```bash
find /home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src -name "*.jsx" \
  -exec sed -i "s/'Jost', sans-serif/'DM Sans', sans-serif/g" {} \;
find /home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src -name "*.jsx" \
  -exec sed -i "s/\"Jost\"/\"DM Sans\"/g" {} \;
```

- [ ] **Step 4: Replace Lato with DM Sans**

```bash
find /home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src -name "*.jsx" \
  -exec sed -i "s/'Lato', sans-serif/'DM Sans', sans-serif/g" {} \;
find /home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src -name "*.jsx" \
  -exec sed -i "s/\"Lato\"/\"DM Sans\"/g" {} \;
```

- [ ] **Step 5: Verify no old font names remain**

```bash
grep -rn "Cormorant\|'Jost'\|\"Jost\"\|'Lato'\|\"Lato\"" \
  /home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state/Estae/src/
```
Expected: no output (zero matches)

- [ ] **Step 6: Check site looks correct in browser**

Open [http://localhost:5173](http://localhost:5173) — all headings should render in Playfair Display (elegant serif), all body/labels/buttons in DM Sans (clean sans-serif). No layout breaks.

- [ ] **Step 7: Commit**

```bash
cd /home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state
git add Estae/src/
git commit -m "feat: replace Cormorant Garamond/Jost/Lato with Playfair Display/DM Sans site-wide"
```

---

## Task 5: Push to Remote

- [ ] **Step 1: Push branch**

```bash
cd /home/fa064042/workspace/personal/realestate-projects-landing-pages/Real-state
git push origin rahul/au-landing-page-changes
```

Expected: branch pushed, Vercel auto-deploys in ~1-2 minutes.
