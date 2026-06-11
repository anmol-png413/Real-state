import React, { useState } from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    alt: "Luxury Living Room",
    label: "Living Area",
  },
  {
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    alt: "Premium Bedroom",
    label: "Master Bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "Elegant Interior",
    label: "Premium Interiors",
  },
];

export default function ProjectGallery() {
  const [activeImg, setActiveImg] = useState(null);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? galleryImages.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === galleryImages.length - 1 ? 0 : c + 1));

  return (
    <section className="hidden md:block w-full bg-gray-50 px-4 md:px-10 py-14">

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-3 tracking-tight">
        Project Gallery
      </h2>

      {/* Decorative underline */}
      <div className="flex items-center justify-center mb-8 md:mb-12">
        <div className="h-px w-16 bg-gray-400" />
        <div className="h-0.5 w-10 bg-red-500 mx-1 rounded" />
        <div className="h-px w-16 bg-gray-400" />
      </div>

      {/* ── MOBILE: Horizontal Slider ── */}
      <div className="md:hidden relative">
        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 border border-gray-200 shadow flex items-center justify-center text-gray-700 text-xl font-bold"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 border border-gray-200 shadow flex items-center justify-center text-gray-700 text-xl font-bold"
        >
          ›
        </button>

        {/* Image */}
        <div
          className="relative overflow-hidden rounded-2xl cursor-pointer shadow-sm"
          onClick={() => setActiveImg(galleryImages[current])}
        >
          <img
            src={galleryImages[current].src}
            alt={galleryImages[current].alt}
            loading="lazy"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end">
            <div className="px-5 py-4">
              <span className="text-white font-semibold text-sm bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                {galleryImages[current].label}
              </span>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {galleryImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-yellow-500 scale-125" : "bg-gray-300"}`}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="text-center text-xs text-gray-400 mt-2 tracking-widest">
          {current + 1} / {galleryImages.length}
        </p>
      </div>

      {/* ── DESKTOP: 3-Column Grid (unchanged) ── */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-5">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            onClick={() => setActiveImg(img)}
            className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 rounded-2xl flex items-end">
              <div className="w-full px-5 py-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white font-semibold text-sm bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                  {img.label}
                </span>
              </div>
            </div>
            <div className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-700 text-sm">
              ⤢
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {activeImg && (
        <div
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveImg(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImg.src}
              alt={activeImg.alt}
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            <p className="text-white text-center mt-3 text-sm font-medium">
              {activeImg.label}
            </p>
            <button
              className="absolute -top-4 -right-4 w-9 h-9 bg-white rounded-full text-gray-800 font-bold text-base hover:bg-yellow-400 hover:text-white transition flex items-center justify-center shadow-lg"
              onClick={() => setActiveImg(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
