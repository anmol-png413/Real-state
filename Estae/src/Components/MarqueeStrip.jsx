export default function MarqueeStrip() {
  return (
    <div style={{
      background: "#111",
      padding: "9px 16px",
      borderBottom: "2px solid #f5c842",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "6px 20px",
      textAlign: "center",
    }}>
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(11px, 1.4vw, 13px)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff", whiteSpace: "nowrap" }}>
        <span style={{ color: "#f5c842", marginRight: "8px" }}>★</span>Luxury 3 BHK Flats
      </span>
      <span style={{ color: "rgba(245,200,66,0.4)", fontSize: "12px" }}>|</span>
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(11px, 1.4vw, 13px)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f5c842", whiteSpace: "nowrap" }}>
        Starting at ₹1.22 Cr*
      </span>
      <span style={{ color: "rgba(245,200,66,0.4)", fontSize: "12px" }}>|</span>
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(11px, 1.4vw, 13px)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff", whiteSpace: "nowrap" }}>
        <span style={{ color: "#f5c842", marginRight: "8px" }}>★</span>Siddharth Vihar, Ghaziabad
      </span>
      <span style={{ color: "rgba(245,200,66,0.4)", fontSize: "12px" }}>|</span>
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(11px, 1.4vw, 13px)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f5d98b", whiteSpace: "nowrap" }}>
        <span style={{ marginRight: "8px" }}>🏠</span>Attractive 40:20:20:20 Payment Plan
      </span>
    </div>
  );
}
