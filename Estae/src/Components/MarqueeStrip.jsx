const marqueeItems = [
  { text: "Luxury 3 BHK Flats", color: "#fff", icon: "★", iconColor: "#f5c842" },
  { text: "Starting at ₹1.22 Cr*", color: "#f5c842", bold: true },
  { text: "Siddharth Vihar, Ghaziabad", color: "#fff", icon: "★", iconColor: "#f5c842" },
  { text: "Attractive 40:20:20:20 Payment Plan", color: "#f5d98b", bold: true, icon: "🏠" },
];


function Separator() {
  return <span style={{ color: "rgba(245,200,66,0.4)", fontSize: "12px", whiteSpace: "nowrap" }}>|</span>;
}

export default function MarqueeStrip() {
  return (
    <>
      {/* ── DESKTOP: Marquee ── */}
      <div className="hidden md:block" style={{ background: "#111", borderBottom: "2px solid #f5c842", overflow: "hidden" }}>
        <style>{`
          @keyframes marquee-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 9px 16px;
            justify-content: center;
            flex-wrap: wrap;
            gap: 6px 20px;
          }
        `}</style>
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "20px" }}>
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
              <Separator />
            </span>
          ))}
        </div>
      </div>

    </>
  );
}
