import React from "react";

export default function About() {
  return (
    <section
      style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
      className="w-full bg-white py-20 px-4 md:px-16 overflow-hidden"
    >
      {/* Google Font */}
      <style>{`

        .about-img-wrap::before {
          content: '';
          position: absolute;
          top: -18px;
          left: -18px;
          width: 100%;
          height: 100%;
          border: 1px solid #c8a96e;
          border-radius: 4px;
          z-index: 0;
          pointer-events: none;
        }

        .about-tag {
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.25em;
          font-weight: 400;
          font-size: 11px;
          text-transform: uppercase;
          color: #c8a96e;
        }

        .about-body {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 15px;
          line-height: 1.9;
          color: #5a5a5a;
        }

        .gold-line {
          display: inline-block;
          width: 48px;
          height: 1px;
          background: #c8a96e;
          vertical-align: middle;
          margin-right: 12px;
        }

        .about-pill {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #c8a96e;
          border: 1px solid #e8d9b8;
          border-radius: 999px;
          padding: 5px 14px;
          display: inline-block;
          background: #fffdf8;
        }
      `}</style>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">

        {/* ── Left: Image with offset frame ── */}
        <div className="w-full md:w-[46%] flex-shrink-0">
          <div className="about-img-wrap relative">
            <div className="relative z-10 rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=90"
                alt="Luxury Bedroom Interior — AU Cosmos Corner 3 BHK Siddharth Vihar"
                loading="lazy"
                className="w-full h-[340px] md:h-[520px] object-cover"
                style={{ filter: "brightness(0.97) contrast(1.02)" }}
              />
              {/* Bottom caption bar */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-3 flex items-center justify-between"
                style={{ background: "rgba(18,14,10,0.62)", backdropFilter: "blur(6px)" }}
              >
                <span
                  style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: "#e8d9b8", letterSpacing: "0.15em" }}
                >
                  MASTER BEDROOM · 3 BHK
                </span>
                <span style={{ color: "#c8a96e", fontSize: "18px" }}>✦</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: Text ── */}
        <div className="w-full md:w-[54%] flex flex-col gap-6">

          {/* Eyebrow */}
          <div className="flex items-center gap-0">
            <span className="gold-line" />
            <span className="about-tag">Our Story</span>
          </div>

          {/* Main heading */}
          <h2
            className="text-gray-900 leading-tight"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 300,
              letterSpacing: "-0.01em",
              lineHeight: 1.15,
            }}
          >
            About{" "}
            <span style={{ fontStyle: "italic", color: "#c8a96e" }}>
           AU Realestate
            </span>
           
           
          </h2>

          {/* Thin gold rule */}
          <div style={{ width: "56px", height: "1px", background: "#c8a96e" }} />

          {/* Body paragraphs */}
          <p className="about-body">
            <strong>AU Cosmos Corner</strong> is a premium residential project by <strong>AU Real Estate Pvt. Ltd.</strong>, one of Delhi NCR's trusted real estate developers. Located in Siddharth Vihar, Ghaziabad, it offers thoughtfully designed 3 BHK luxury apartments that blend quality construction, strategic location, and lifestyle-focused design.
          </p>

          <p className="about-body">
            This website is operated by <strong>Truelite Estates LLP</strong> — an officially authorized channel partner of AU Real Estate Pvt. Ltd. (RERA No. UPRERAPRJ466336). We are not the developer. We are your trusted advisor, helping you make the right home-buying decision with complete transparency and zero brokerage.
          </p>

          <p className="about-body">
            Our developments are nestled in well-connected corridors such as Siddharth Vihar, Ghaziabad
            West and Ghaziabad — offering seamless access to expressways, metro stations,
            schools, hospitals, and commercial hubs. Ideal for discerning families and
            forward-thinking investors like.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-2 mt-1">
            {["RERA Approved", "Premium Construction", "NCR's Finest", "On-Time Delivery"].map((tag) => (
              <span key={tag} className="about-pill">{tag}</span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}