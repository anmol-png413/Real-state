import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/au-logo-black.webp";
import SEO from "./SEO";

export default function PolicyLayout({ title, description, canonicalPath, children }) {
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aurealestateprojects.in" },
      { "@type": "ListItem", "position": 2, "name": title, "item": `https://aurealestateprojects.in${canonicalPath || ""}` }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <SEO
        title={title}
        description={description}
        url={`https://aurealestateprojects.in${canonicalPath || ""}`}
        schema={breadcrumbSchema}
      />
      {/* Header */}
      <div className="w-full bg-white border-b border-yellow-500/40 shadow-sm px-6 md:px-16 py-4 flex items-center justify-between sticky top-0 z-50">
        <button onClick={() => navigate("/")} className="flex items-center bg-transparent border-none cursor-pointer p-0">
          <img src={logo} alt="AU Cosmos Corner - Truelite Estates LLP" style={{ height: "50px", width: "auto" }} />
        </button>
        <button
          onClick={() => navigate("/")}
          className="text-xs font-bold tracking-widest uppercase px-5 py-2.5 bg-gray-900 text-white hover:bg-gray-700 transition-colors"
        >
          ← Back to Home
        </button>
      </div>

      {/* Hero */}
      <div className="w-full bg-gray-900 text-white px-6 md:px-16 py-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
        <p className="text-gray-400 text-sm mt-2">AU RealEstate LLP · Last updated: May 2026</p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-12 space-y-8">
        {children}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 px-6 md:px-16 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Truelite Estates LLP. All rights reserved. · Golden I, Tower T3, Unit 314, Greater Noida West – 201309 · omvir.shishodia@truelitestates.com
      </div>
    </div>
  );
}
