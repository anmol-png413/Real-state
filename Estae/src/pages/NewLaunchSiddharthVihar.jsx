import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../Components/SEO";
import ContactForm from "../Components/Contactform";
import logo from "../assets/au-logo-black.webp";

const faqs = [
  {
    q: "Which is the best new launch in Siddharth Vihar in 2026?",
    a: "AU Cosmos Corner by AU Real Estate Pvt. Ltd. is the most prominent new launch in Siddharth Vihar in 2026. With G+40 high-rise towers, 5.6-acre campus, RERA approval (UPRERAPRJ466336), and pre-launch pricing at ₹6,900/sq ft, it is the standout new residential project in the area.",
  },
  {
    q: "What is the pre-launch price at AU Cosmos Corner Siddharth Vihar?",
    a: "The pre-launch price at AU Cosmos Corner is ₹6,900 per sq ft. This pricing is available for a limited period. 3 BHK units start at approximately ₹1.22 Crore and 5 BHK units at approximately ₹2.19 Crore.",
  },
  {
    q: "Is AU Cosmos Corner a new launch project?",
    a: "Yes, AU Cosmos Corner is currently in the pre-launch / early launch phase. This is the best time to book as prices are at their lowest. RERA registration number UPRERAPRJ466336 is already active, confirming the project's legal standing.",
  },
  {
    q: "What are the advantages of buying a new launch flat in Siddharth Vihar?",
    a: "Buying at new launch stage offers the lowest pricing before market appreciation, flexible payment plans (10-30-40% staggered), ability to choose preferred floors and units, and maximum return on investment as the project progresses toward completion.",
  },
  {
    q: "How to verify a new launch project in Siddharth Vihar is genuine?",
    a: "Always verify RERA registration on the UP RERA portal. AU Cosmos Corner's RERA number UPRERAPRJ466336 is verifiable at uprera.up.nic.in. Check the developer's track record, land title clearance, and ensure you buy through an authorized channel partner like Truelite Estates LLP.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["RealEstateListing", "ApartmentComplex"],
      "name": "New Launch in Siddharth Vihar 2026 — AU Cosmos Corner",
      "description": "AU Cosmos Corner is the top new launch residential project in Siddharth Vihar, Ghaziabad 2026. Pre-launch ₹6900/sq ft. RERA: UPRERAPRJ466336.",
      "url": "https://aurealestateprojects.in/new-launch-siddharth-vihar",
      "offers": { "@type": "Offer", "price": "6900", "priceCurrency": "INR", "availability": "https://schema.org/PreOrder" },
      "address": { "@type": "PostalAddress", "streetAddress": "Siddharth Vihar", "addressLocality": "Ghaziabad", "addressRegion": "Uttar Pradesh", "postalCode": "201013", "addressCountry": "IN" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map(({ q, a }) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aurealestateprojects.in" },
        { "@type": "ListItem", "position": 2, "name": "New Launch in Siddharth Vihar", "item": "https://aurealestateprojects.in/new-launch-siddharth-vihar" },
      ],
    },
  ],
};

export default function NewLaunchSiddharthVihar() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <SEO
        title="New Launch in Siddharth Vihar 2026 | AU Cosmos Corner | Pre-launch ₹6900/sq ft"
        description="AU Cosmos Corner — best new launch residential project in Siddharth Vihar, Ghaziabad 2026. 3 & 5 BHK luxury flats. Pre-launch ₹6900/sq ft. RERA approved. Call 9711557670."
        url="https://aurealestateprojects.in/new-launch-siddharth-vihar"
        schema={schema}
      />

      {/* Header */}
      <div className="w-full bg-white border-b border-yellow-500/40 shadow-sm px-6 md:px-16 py-4 flex items-center justify-between sticky top-0 z-50">
        <button onClick={() => navigate("/")} className="flex items-center bg-transparent border-none cursor-pointer p-0">
          <img src={logo} alt="AU Cosmos Corner - Truelite Estates LLP" style={{ height: "50px", width: "auto" }} />
        </button>
        <button onClick={() => navigate("/")} className="text-xs font-bold tracking-widest uppercase px-5 py-2.5 bg-gray-900 text-white hover:bg-gray-700 transition-colors">
          ← Back to Home
        </button>
      </div>

      {/* Hero */}
      <div className="w-full bg-gray-900 text-white px-6 md:px-16 py-16">
        <p className="text-yellow-500 text-xs font-bold tracking-[5px] uppercase mb-3">New Launch 2026 · Siddharth Vihar, Ghaziabad</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">New Launch in Siddharth Vihar — AU Cosmos Corner</h1>
        <p className="text-gray-300 text-lg max-w-2xl mb-6">
          Ghaziabad's most awaited new launch. <span className="text-yellow-400 font-bold">Pre-launch ₹6,900/sq ft</span>. 3 & 5 BHK luxury apartments. G+40 towers on 5.6 acres. RERA Approved.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          {["Pre-launch Phase", "₹6,900/sq ft", "3 & 5 BHK", "G+40 Towers", "5.6 Acres", "RERA: UPRERAPRJ466336"].map(tag => (
            <span key={tag} className="bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 text-xs px-3 py-1 font-medium">{tag}</span>
          ))}
        </div>
        <button onClick={() => setShowModal(true)} className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors">
          Register Interest — Pre-launch Price
        </button>
      </div>

      {/* Why Book at Pre-launch */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">Why Book at Pre-launch Stage?</h2>
        <div className="w-16 h-[3px] bg-yellow-500 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Lowest Pricing", desc: "Pre-launch prices of ₹6,900/sq ft are at the floor. Prices typically increase 10–15% after the launch phase ends." },
            { title: "Best Unit Selection", desc: "Choose your preferred floor, facing, and unit at this stage. Higher floors and east-facing units go first." },
            { title: "Flexible Payment", desc: "Pre-launch offers the most flexible payment schedule — 10% booking, staggered installments, and bank loan support." },
            { title: "Maximum ROI", desc: "Early buyers gain the highest appreciation as the project moves from pre-launch to under-construction to possession." },
            { title: "RERA Protection", desc: "UPRERAPRJ466336 ensures legal accountability. Pre-launch buyers are protected under UP RERA from day one." },
            { title: "NRI & Investor Friendly", desc: "Pre-launch stage is ideal for investors and NRIs looking to lock in at the lowest price before public launch." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-gray-50 p-5 border border-gray-200">
              <p className="font-bold text-gray-900 mb-2">{title}</p>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Project Highlights */}
      <div className="bg-gray-900 text-white px-6 md:px-16 py-14">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 uppercase tracking-wide">AU Cosmos Corner — Project Highlights</h2>
          <div className="w-16 h-[3px] bg-yellow-500 mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Developer", value: "AU Real Estate Pvt. Ltd." },
              { label: "Location", value: "Siddharth Vihar, Ghaziabad" },
              { label: "Configurations", value: "3 BHK & 5 BHK" },
              { label: "Total Area", value: "5.6 Acres" },
              { label: "Tower Height", value: "G+40 Floors" },
              { label: "Pre-launch Price", value: "₹6,900/sq ft" },
              { label: "RERA No.", value: "UPRERAPRJ466336" },
              { label: "Channel Partner", value: "Truelite Estates LLP" },
            ].map(({ label, value }) => (
              <div key={label} className="border border-gray-700 p-4">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{label}</p>
                <p className="text-yellow-400 font-bold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">FAQs — New Launch in Siddharth Vihar</h2>
        <div className="w-16 h-[3px] bg-yellow-500 mb-8" />
        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="border border-gray-200 bg-white overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left bg-transparent border-none cursor-pointer">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 pr-4">{q}</h3>
                <span className="text-yellow-500 text-xl font-light flex-shrink-0 transition-transform duration-300" style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
              </button>
              <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? "300px" : "0px" }}>
                <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 border-t border-gray-200 px-6 md:px-16 py-14 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Book at Pre-launch Price Today</h2>
        <p className="text-gray-500 mb-6">Limited units at ₹6,900/sq ft. Prices increase after the launch phase.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => setShowModal(true)} className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors">
            Register Now — Free Site Visit
          </button>
          <a href="tel:9711557670" className="border border-gray-400 hover:border-gray-900 text-gray-900 font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors">
            Call 9711557670
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 px-6 md:px-16 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Truelite Estates LLP. All rights reserved. · Golden I, Tower T3, Unit 314, Greater Noida West – 201309 · omvir.shishodia@truelitestates.com
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} className="absolute top-3 right-4 text-white hover:text-yellow-400 text-3xl font-light z-10 bg-black/40 rounded-full w-9 h-9 flex items-center justify-center">✕</button>
            <ContactForm source="New Launch Siddharth Vihar Page" />
          </div>
        </div>
      )}
    </div>
  );
}
