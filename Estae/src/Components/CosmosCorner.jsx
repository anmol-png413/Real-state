import { useState } from "react";
import img1 from "../assets/corner/Screenshot 2026-05-24 115934.png";
import img2 from "../assets/corner/Screenshot 2026-05-24 115953.png";
import img3 from "../assets/corner/Screenshot 2026-05-24 120007.png";
import img4 from "../assets/corner/Screenshot 2026-05-24 120020.png";
import img5 from "../assets/corner/Screenshot 2026-05-24 120045.png";
import img6 from "../assets/corner/Screenshot 2026-05-24 120102.png";
import img7 from "../assets/corner/Screenshot 2026-05-24 120136.png";
import img8 from "../assets/corner/Screenshot 2026-05-24 120149.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function CosmosCorner({ onBookVisit }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <section style={{ background: "#fffef8", padding: "64px 0" }}>
      <style>{`
        .cc-arrow {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 2px solid #c8a042;
          background: #fff;
          color: #c8a042;
          font-size: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.15s;
          flex-shrink: 0;
          user-select: none;
        }
        .cc-arrow:hover {
          background: #c8a042;
          color: #fff;
          transform: scale(1.08);
        }
        .cc-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d9c9a0;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .cc-dot.active {
          background: #c8a042;
          transform: scale(1.3);
        }
        .cc-brochure-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 36px;
          background: #111;
          color: #fff;
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          border-radius: 2px;
          transition: background 0.2s, letter-spacing 0.2s;
          margin-top: 36px;
        }
        .cc-brochure-btn:hover {
          background: #c8a042;
          letter-spacing: 0.32em;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.015); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "#c8a042",
          marginBottom: "10px",
        }}>
          Exclusive Collection
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 700,
          color: "#111",
          letterSpacing: "0.04em",
          marginBottom: "12px",
        }}>
          Cosmos Corner
        </h2>
        <div style={{ width: "48px", height: "2px", background: "#c8a042", margin: "0 auto" }} />
      </div>

      {/* Slider */}
      <div style={{
        maxWidth: "920px",
        margin: "0 auto",
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}>
        {/* Left Arrow */}
        <button className="cc-arrow" onClick={prev} aria-label="Previous">
          &#8249;
        </button>

        {/* Image */}
        <div style={{
          flex: 1,
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
          border: "1px solid #e8e0d0",
          aspectRatio: "16/9",
          background: "#f5f0e8",
        }}>
          <img
            key={current}
            src={images[current]}
            alt={`Cosmos Corner ${current + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              animation: "fadeIn 0.35s ease",
            }}
          />
        </div>

        {/* Right Arrow */}
        <button className="cc-arrow" onClick={next} aria-label="Next">
          &#8250;
        </button>
      </div>

      {/* Dots */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "24px",
      }}>
        {images.map((_, i) => (
          <div
            key={i}
            className={`cc-dot${i === current ? " active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

      {/* Counter */}
      <p style={{
        textAlign: "center",
        fontFamily: "'Jost', sans-serif",
        fontSize: "12px",
        color: "#b0a080",
        marginTop: "12px",
        letterSpacing: "0.15em",
      }}>
        {current + 1} / {images.length}
      </p>

      {/* Download Brochure Button */}
      <div style={{ textAlign: "center" }}>
        <button className="cc-brochure-btn" onClick={onBookVisit}>
          <span>📄</span>
          Download Brochure
        </button>
      </div>

    </section>
  );
}
