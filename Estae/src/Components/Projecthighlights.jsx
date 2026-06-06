import React from "react";

const highlightCards = [
  {
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="44" height="44">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    label: "Siddharth Vihar,\nGhaziabad",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="44" height="44">
        <rect x="3" y="10" width="18" height="11" rx="1" />
        <path d="M12 2L2 10h20L12 2z" />
        <rect x="9" y="14" width="2" height="4" />
        <rect x="13" y="14" width="2" height="4" />
      </svg>
    ),
    label: "3 Exclusive Towers",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="44" height="44">
        <rect x="2" y="7" width="20" height="13" rx="2" />
        <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    label: "3 BHK, 3 BHK + Servant,\n5 BHK + Servant",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="44" height="44">
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
    label: "5.60 Acres of\nGreen Living",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="44" height="44">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    label: "1780 | 1972 | 3175\nSq.Ft.",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="44" height="44">
        <rect x="5" y="2" width="14" height="20" rx="1" />
        <line x1="9" y1="7" x2="15" y2="7" />
        <line x1="9" y1="11" x2="15" y2="11" />
        <line x1="9" y1="15" x2="15" y2="15" />
        <line x1="9" y1="19" x2="12" y2="19" />
      </svg>
    ),
    label: "G+40 Floors",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="44" height="44">
        <rect x="4" y="2" width="6" height="20" rx="1" />
        <rect x="14" y="2" width="6" height="20" rx="1" />
        <line x1="7" y1="8" x2="7" y2="10" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="17" y1="14" x2="17" y2="16" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    label: "7 Apartments\nPer Floor",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="44" height="44">
        <rect x="7" y="3" width="10" height="18" rx="1" />
        <line x1="10" y1="3" x2="10" y2="21" />
        <line x1="14" y1="3" x2="14" y2="21" />
        <path d="M9 8h6M9 12h6M9 16h6" strokeLinecap="round" />
        <path d="M12 3V1M12 23v-2" strokeLinecap="round" />
      </svg>
    ),
    label: "7 High-Speed\nLifts",
  },
];

export default function ProjectHighlights({ onBookVisit }) {
  return (
    <div id="highlights" style={{ background: "#fff", paddingBottom: "60px" }}>

      {/* ── Section Heading ── */}
      <div style={{ textAlign: "center", paddingTop: "60px", paddingBottom: "40px" }}>
        <p style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
          fontWeight: 700,
          color: "#111",
          letterSpacing: "0.02em",
          marginBottom: "6px",
        }}>
          AU Realestate
        </p>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#c8a042",
          marginBottom: "8px",
        }}>
          HIGHLIGHTS
        </p>
        <div style={{
          width: "40px",
          height: "2px",
          background: "#c8a042",
          margin: "0 auto",
        }} />
      </div>

      {/* ── Highlight Cards Grid ── */}
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "0 20px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
      }}
        className="highlights-grid"
      >
        <style>{`
          @media (max-width: 768px) {
            .highlights-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          .highlight-card:hover {
            box-shadow: 0 8px 28px rgba(200,160,66,0.18);
            transform: translateY(-3px);
          }
        `}</style>

        {highlightCards.map((card, i) => (
          <div
            key={i}
            className="highlight-card"
            style={{
              border: "1.5px solid #c8a042",
              borderRadius: "10px",
              padding: "32px 20px 28px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "14px",
              background: "#fff",
              transition: "transform 0.25s, box-shadow 0.25s",
              cursor: "default",
            }}
          >
            <div style={{ color: "#b8893a" }}>{card.svg}</div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              color: "#1a1a1a",
              textAlign: "center",
              lineHeight: 1.45,
              whiteSpace: "pre-line",
            }}>
              {card.label}
            </p>
          </div>
        ))}
      </div>

      {/* ── Divider ── */}
      <div style={{ maxWidth: "900px", margin: "52px auto 0", padding: "0 20px" }}>
        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb" }} />
      </div>

      {/* ── Price List ── */}
      <div id="pricelist" style={{ maxWidth: "900px", margin: "0 auto", padding: "52px 20px 0" }}>
        <p style={{
          textAlign: "center",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#c8a042",
          marginBottom: "6px",
        }}>
          INVESTMENT OVERVIEW
        </p>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.4rem, 3vw, 2rem)",
          fontWeight: 700,
          textAlign: "center",
          color: "#111",
          marginBottom: "28px",
          letterSpacing: "0.02em",
        }}>
          AU Realestate — Price List
        </h2>

        <div style={{ border: "1px solid #e5e7eb", borderRadius: "12px", overflow: "hidden" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 24px",
            background: "#f9fafb",
            borderBottom: "1px solid #e5e7eb",
          }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, color: "#111" }}>
              Available Units
            </span>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              color: "#6b7280",
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "999px",
              padding: "3px 12px",
            }}>
              Ready to Book
            </span>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#fff" }}>
                  {["Unit Type", "Unit Area", "Unit Price"].map((h) => (
                    <th key={h} style={{
                      textAlign: "left",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#9ca3af",
                      padding: "14px 24px",
                      borderBottom: "1px solid #e5e7eb",
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "3 BHK + 3 Toilet", sub: "Premium Configuration", area: "1780 Sq.Ft.", areaSub: "11 ft ceiling", price: "₹ 1.22 Cr*", priceSub: "@ ₹6900 BSP/sq.ft" },
                  { type: "3 BHK + 3 Toilet + Servant", sub: "Premium Configuration", area: "1972 Sq.Ft.", areaSub: "11 ft ceiling" },
                  { type: "5 BHK + 3 Toilet + Servant", sub: "Ultra Luxury Configuration", area: "3175 Sq.Ft.", areaSub: "11 ft ceiling" },
                ].map((row, i, arr) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: i < arr.length - 1 ? "1px solid #f3f4f6" : "none",
                      background: "#fff",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "#fefce8"}
                    onMouseLeave={e => e.currentTarget.style.background = "#fff"}
                  >
                    <td style={{ padding: "18px 24px" }}>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#111", fontSize: "14px" }}>{row.type}</p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#9ca3af", marginTop: "2px" }}>{row.sub}</p>
                    </td>
                    <td style={{ padding: "18px 24px" }}>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#111", fontSize: "14px" }}>{row.area}</p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#9ca3af", marginTop: "2px" }}>{row.areaSub}</p>
                    </td>
                    <td style={{ padding: "18px 24px" }}>
                      {row.price ? (
                        <>
                          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "18px", color: "#b8893a" }}>{row.price}</p>
                          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#9ca3af", marginTop: "2px" }}>{row.priceSub}</p>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={onBookVisit}
                            style={{
                              fontFamily: "'DM Sans', sans-serif",
                              fontWeight: 700,
                              fontSize: "13px",
                              color: "#b8893a",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              padding: 0,
                              textDecoration: "underline",
                              textUnderlineOffset: "3px",
                            }}
                          >
                            ₹ Get Price
                          </button>
                          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#9ca3af", marginTop: "2px" }}>Contact for pricing</p>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}
