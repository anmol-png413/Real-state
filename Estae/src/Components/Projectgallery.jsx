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

  return (
    <section className="w-full bg-gray-50 px-4 md:px-10 py-14">

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-3 tracking-tight">
        Project Gallery
      </h2>

      {/* Decorative underline — dark + red like screenshot */}
      <div className="flex items-center justify-center mb-12">
        <div className="h-px w-16 bg-gray-400" />
        <div className="h-0.5 w-10 bg-red-500 mx-1 rounded" />
        <div className="h-px w-16 bg-gray-400" />
      </div>

      {/* 3-Column Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            onClick={() => setActiveImg(img)}
            className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 rounded-2xl flex items-end">
              <div className="w-full px-5 py-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white font-semibold text-sm bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                  {img.label}
                </span>
              </div>
            </div>

            {/* Zoom icon */}
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