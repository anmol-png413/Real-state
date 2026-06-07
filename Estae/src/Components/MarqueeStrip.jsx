const items = [
  { text: "Luxury 3 BHK Flats", color: "#fff", icon: "★", iconColor: "#f5c842" },
  { text: "Starting at ₹1.22 Cr*", color: "#f5c842", bold: true },
  { text: "Siddharth Vihar, Ghaziabad", color: "#fff", icon: "★", iconColor: "#f5c842" },
  { text: "Attractive 40:20:20:20 Payment Plan", color: "#f5d98b", bold: true, icon: "🏠" },
];

function StripItem({ item }) {
  return (
    <span style={{
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "13px",
      fontWeight: item.bold ? 700 : 600,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: item.color,
      whiteSpace: "nowrap",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
    }}>
      {item.icon && <span style={{ color: item.iconColor || "inherit" }}>{item.icon}</span>}
      {item.text}
    </span>
  );
}

function Separator() {
  return <span style={{ color: "rgba(245,200,66,0.4)", fontSize: "12px", whiteSpace: "nowrap" }}>|</span>;
}

export default function MarqueeStrip() {
  return (
    <div style={{
      background: "#111",
      borderBottom: "2px solid #f5c842",
      overflow: "hidden",
    }}>
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 9px 0;
          animation: marquee-scroll 18s linear infinite;
          width: max-content;
        }
        @media (min-width: 768px) {
          .marquee-track {
            animation: none;
            justify-content: center;
            width: 100%;
            flex-wrap: wrap;
            padding: 9px 16px;
            gap: 6px 20px;
          }
          .marquee-dupe {
            display: none;
          }
        }
      `}</style>

      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "20px" }}>
            <StripItem item={item} />
            <Separator />
          </span>
        ))}
        {/* Duplicate for seamless loop on mobile */}
        <span className="marquee-dupe" style={{ display: "inline-flex", alignItems: "center", gap: "20px" }}>
          {items.map((item, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "20px" }}>
              <StripItem item={item} />
              <Separator />
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
