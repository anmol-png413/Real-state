import React, { useState } from "react";

const locationCards = [
  { label: "City Centre", time: "20 Min." },
  { label: "Amity University", time: "16 Min." },
  { label: "Fortis Hospital", time: "15 Min." },
  { label: "Mall Of India", time: "18 Min." },
  { label: "Akshardham Temple", time: "25 Min." },
  { label: "NH-24 / Delhi-Meerut Expressway", time: "2 Min." },
  { label: "Noida Sector 62", time: "10 Min." },
  { label: "IGI Airport", time: "60 Min." },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    alt: "Luxury apartment building exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    alt: "Modern high rise towers",
  },
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    alt: "Premium residential complex",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    alt: "Elegant apartment view at dusk",
  },
];

export default function LocationGallery() {
  const [activeImg, setActiveImg] = useState(null);

  return (
   <div id="location" className="w-full bg-white">

      {/* ══════════════════════════════
          SECTION 1 — PRIME LOCATION
      ══════════════════════════════ */}
      <section className="w-full px-4 md:px-10 py-14">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-center tracking-widest text-gray-900 uppercase mb-2">
          Prime Location Advantage
        </h2>
        <div className="w-20 h-0.5 bg-yellow-600 mx-auto mb-10 rounded" />

        {/* Map + Text Grid */}
        <div className="flex flex-col md:flex-row gap-8 mb-10">

          {/* Map Embed */}
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-gray-200 min-h-[260px]">
            <iframe
              title="Siddharth Vihar Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4!2d77.4!3d28.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1b6b9c9c9c9%3A0x0!2sSiddharth+Vihar%2C+Ghaziabad!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ minHeight: "260px", border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Description */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-5">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              <span className="text-yellow-600 font-medium">AU Realestate</span> is
              strategically located near NH-24 (Delhi-Meerut Expressway), making daily travel
              easy and convenient. It offers seamless connectivity to Noida, Delhi, and other
              NCR locations.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Key areas like Noida Sector 62, Electronic City Metro Station, and Ghaziabad
              Railway Station are just a few minutes away, ensuring smooth commuting.
            </p>
          </div>
        </div>

        {/* Location Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px",
        }} className="loc-grid">
          <style>{`
            @media (max-width: 768px) { .loc-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 480px) { .loc-grid { grid-template-columns: repeat(1, 1fr) !important; } }
          `}</style>

          {locationCards.map((card, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                background: "#fff",
                border: "1px solid #e8e0d0",
                borderRadius: "10px",
                padding: "16px 18px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              {/* Gold circle number */}
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#c8a042",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                fontWeight: 700,
                color: "#fff",
              }}>
                {i + 1}
              </div>

              {/* Text */}
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                color: "#1a1a2e",
                lineHeight: 1.4,
                margin: 0,
              }}>
                {card.label}
                <span style={{ color: "#888", fontWeight: 400 }}> – {card.time}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 2 — GALLERY
      ══════════════════════════════ */}
      {/* <section className="w-full px-4 md:px-10 py-14 bg-gray-50">

        {/* Heading */}
        {/* <h2 className="text-2xl md:text-4xl font-bold text-center tracking-widest text-gray-900 uppercase mb-2">
         AU Realestate — Gallery
        </h2> */}
        {/* <div className="w-20 h-0.5 bg-yellow-600 mx-auto mb-10 rounded" /> */}

        {/* Image Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setActiveImg(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-44 md:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-xl" />
            </div>
          ))}
        </div>
      </section> */} 

      {/* Lightbox */}
      {activeImg && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveImg(null)}
        >
          <img
            src={activeImg}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
          />
          <button
            className="absolute top-5 right-6 text-white text-3xl font-light hover:text-yellow-400 transition"
            onClick={() => setActiveImg(null)}
          >
            ✕
          </button>
        </div>
      )}

    </div>
  );
}