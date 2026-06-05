import { useState, useEffect, useCallback } from "react";

import img09 from "../assets/gallery/image-09.jpeg";
import img10 from "../assets/gallery/image-10.jpeg";
import img11 from "../assets/gallery/image-11.jpeg";
import img12 from "../assets/gallery/image-12.jpeg";
import vid01 from "../assets/gallery/video-01.mp4";
import vid02 from "../assets/gallery/video-02.mp4";
import img01 from "../assets/gallery/image-01.png";
import img02 from "../assets/gallery/image-02.png";
import img03 from "../assets/gallery/image-03.png";
import img04 from "../assets/gallery/image-04.png";
import img05 from "../assets/gallery/image-05.png";
import img06 from "../assets/gallery/image-06.png";
import img07 from "../assets/gallery/image-07.png";
import img08 from "../assets/gallery/image-08.png";

const mediaItems = [
  { type: "video", src: vid01, label: "Project Video 1" },
  { type: "video", src: vid02, label: "Project Video 2" },
  { type: "image", src: img09, label: "AU Real Estate" },
  { type: "image", src: img10, label: "Cosmos Corner" },
  { type: "image", src: img11, label: "Sunday Times Ad" },
  { type: "image", src: img12, label: "Cosmos Corner Office" },
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
  const [lightbox, setLightbox] = useState(null);

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
        .media-strip-scroll { scrollbar-color: #c8a042 #f5f0e8; scrollbar-width: thin; }
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
        <div style={{ textAlign: "center", marginBottom: "32px", padding: "0 20px" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#c8a042", marginBottom: "6px" }}>
            Visual Tour
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, color: "#111", letterSpacing: "0.02em" }}>
            Project Gallery
          </h2>
          <div style={{ width: "40px", height: "2px", background: "#c8a042", margin: "10px auto 0" }} />
        </div>

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
