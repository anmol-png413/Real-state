import sitePlanImg from "../assets/WhatsApp Image 2026-05-04 at 12.30.51.jpeg";

const specs = [
  "1.5 Ton Split AC in All Bedrooms",
  "Modular Kitchen",
  "Wardrobes in Bedrooms",
  "10.5 ft Ceiling Height",
  "All Doors are of 8 ft Height",
  "Luxurious Club House G+2 Floors of approx 40,000 Sq.ft",
];

const residenceOptions = [
  { config: "3 BHK + 3T", area: "1780 Sq.ft" },
  { config: "3 BHK + S", area: "1972 Sq.ft" },
  { config: "5 BHK + S", area: "3175 Sq.ft" },
];

export default function SitePlan() {
  return (
    <section className="max-w-6xl mx-auto px-3 md:px-6 py-12 bg-white">
      
      <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-1">
        Layout Overview
      </p>
      <h2 className="text-2xl md:text-3xl font-medium text-center text-gray-900 mb-10">
        Master Site Plan
      </h2>

      <div className="flex flex-col md:flex-row gap-8 items-center">

        {/* Left — Text */}
        <div className="md:w-1/2 flex flex-col gap-5">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Thoughtfully Planned Community</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              AU Siddharth Vihar is designed for low-density luxury living. The master plan
              ensures maximum green cover, privacy, and seamless connectivity across all towers.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { icon: "🏊", label: "2 Swimming Pools", desc: "Centrally located within the complex" },
              { icon: "🏛️", label: "Grand Clubhouse", desc: "Premium club with modern facilities" },
              { icon: "🛒", label: "Retail Shops & Anchor Store", desc: "Ground-level commercial convenience" },
              { icon: "🌿", label: "Landscaped Green Spaces", desc: "Open gardens between all towers" },
              { icon: "🚗", label: "Dual Entry / Exit", desc: "18 Meter & 24 Meter wide roads" },
              { icon: "🏢", label: "Multiple Tower Wings", desc: "Units of 1780, 1972, 1981 & 3175 Sq.Ft." },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-yellow-50 border border-yellow-100 flex items-center justify-center text-base flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">{item.label}</p>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image */}
        <div className="md:w-1/2 w-full flex justify-end">
          <img
            src={sitePlanImg}
            alt="AU Siddharth Vihar Master Site Plan"
            className="w-full rounded-2xl shadow-md border border-gray-200 object-contain flex justify-end"
          />
        </div>

      </div>

      {/* ── Specification Section ── */}
      <div style={{ marginTop: "56px" }}>

        {/* Section Heading */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#c8a042",
            marginBottom: "6px",
          }}>
            Project Details
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            fontWeight: 700,
            color: "#111",
            marginBottom: "8px",
          }}>
            Specifications &amp; Residence Options
          </h2>
          <div style={{ width: "48px", height: "2px", background: "#c8a042", margin: "0 auto" }} />
        </div>

        {/* Two-column layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          alignItems: "start",
        }} className="spec-grid">
          <style>{`
            @media (max-width: 640px) { .spec-grid { grid-template-columns: 1fr !important; } }
          `}</style>

          {/* LEFT — Specifications */}
          <div style={{
            border: "1.5px solid #e8e0d0",
            borderRadius: "12px",
            overflow: "hidden",
          }}>
            {/* Card header */}
            <div style={{
              background: "#111",
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}>
              <span style={{ fontSize: "18px" }}>🏗️</span>
              <span style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#fff",
              }}>
                Specification
              </span>
            </div>

            {/* Spec items */}
            <div style={{ padding: "8px 0" }}>
              {specs.map((item, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "12px 24px",
                  borderBottom: i < specs.length - 1 ? "1px solid #f3f4f6" : "none",
                }}>
                  <div style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#c8a042",
                    flexShrink: 0,
                    marginTop: "5px",
                  }} />
                  <p style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#1a1a1a",
                    lineHeight: 1.5,
                    margin: 0,
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Residence Options + Price */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* Residence Options card */}
            <div style={{
              border: "1.5px solid #e8e0d0",
              borderRadius: "12px",
              overflow: "hidden",
            }}>
              <div style={{
                background: "#c8a042",
                padding: "16px 24px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}>
                <span style={{ fontSize: "18px" }}>🏠</span>
                <span style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#111",
                }}>
                  Residence Option
                </span>
              </div>

              <div style={{ padding: "8px 0" }}>
                {residenceOptions.map((opt, i) => (
                  <div key={i} style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 24px",
                    borderBottom: i < residenceOptions.length - 1 ? "1px solid #f3f4f6" : "none",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{
                        width: "8px", height: "8px",
                        borderRadius: "50%",
                        background: "#c8a042",
                      }} />
                      <span style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "#111",
                      }}>
                        {opt.config}
                      </span>
                    </div>
                    <span style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#555",
                    }}>
                      {opt.area}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pre-Launch Price box */}
            <div style={{
              border: "1.5px solid #c8a042",
              borderRadius: "12px",
              padding: "24px",
              textAlign: "center",
              background: "#fffbf0",
            }}>
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#888",
                marginBottom: "8px",
              }}>
                Pre-Launch Price
              </p>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 700,
                color: "#111",
                lineHeight: 1.2,
                marginBottom: "4px",
              }}>
                @ ₹ 6900 <span style={{ fontSize: "0.55em", fontWeight: 400, color: "#555" }}>Per Sq.ft</span>
              </p>
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "12px",
                color: "#888",
                marginTop: "4px",
              }}>
                (Other Charges Applicable)
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}