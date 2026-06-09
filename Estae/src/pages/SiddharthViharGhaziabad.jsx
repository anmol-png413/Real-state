import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../Components/SEO";
import ContactForm from "../Components/Contactform";
import logo from "../assets/au-logo-black.webp";

const faqs = [
  {
    q: "Is Siddharth Vihar a good place to live in Ghaziabad?",
    a: "Yes, Siddharth Vihar is one of the most sought-after residential areas in Ghaziabad. It offers excellent connectivity to Delhi, Noida, and Greater Noida via NH-24 (NH-9) and Delhi-Meerut Expressway, proximity to reputed schools and hospitals, growing social infrastructure, and strong property price appreciation — making it a top choice for both end-users and investors.",
  },
  {
    q: "What is the connectivity of Siddharth Vihar Ghaziabad?",
    a: "Siddharth Vihar has excellent connectivity: 5 min from NH-24, 10 min from Delhi-Meerut Expressway, 15 min from Anand Vihar (Delhi) by road, 20 min from Noida Sector 62, 30 min from Connaught Place Delhi, and future metro expansion along the NH-24 corridor will further boost accessibility.",
  },
  {
    q: "What are property prices in Siddharth Vihar Ghaziabad?",
    a: "Property prices in Siddharth Vihar range from approximately ₹5,000 to ₹7,500 per sq ft depending on the project and configuration. AU Cosmos Corner offers a pre-launch rate of ₹6,900/sq ft for luxury 3 BHK and 5 BHK apartments, positioning it at the premium end of the Siddharth Vihar market.",
  },
  {
    q: "Which are the best schools near Siddharth Vihar?",
    a: "Top schools near Siddharth Vihar include Delhi Public School (Ghaziabad), Ryan International School (Vasundhara), Sapphire International School, St. Xavier's High School, and Lotus Valley International School. Several CBSE and ICSE-affiliated schools are within 5–10 km.",
  },
  {
    q: "Which hospitals are near Siddharth Vihar Ghaziabad?",
    a: "Reputed hospitals near Siddharth Vihar include Yashoda Hospital (Kaushambi), Columbia Asia Hospital (Ghaziabad), Sharda Hospital (Greater Noida), Max Hospital (Vaishali), and Fortis Hospital (Noida) — all within 10–25 km, ensuring quality healthcare access.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Place",
      "name": "Siddharth Vihar, Ghaziabad",
      "description": "Siddharth Vihar is a prime residential locality in Ghaziabad, Uttar Pradesh with excellent connectivity to Delhi NCR via NH-24 and Delhi-Meerut Expressway.",
      "url": "https://aurealestateprojects.in/siddharth-vihar-ghaziabad",
      "address": { "@type": "PostalAddress", "streetAddress": "Siddharth Vihar", "addressLocality": "Ghaziabad", "addressRegion": "Uttar Pradesh", "postalCode": "201013", "addressCountry": "IN" },
      "geo": { "@type": "GeoCoordinates", "latitude": "28.6692", "longitude": "77.4538" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map(({ q, a }) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aurealestateprojects.in" },
        { "@type": "ListItem", "position": 2, "name": "Siddharth Vihar Ghaziabad", "item": "https://aurealestateprojects.in/siddharth-vihar-ghaziabad" },
      ],
    },
  ],
};

export default function SiddharthViharGhaziabad() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <SEO
        title="Siddharth Vihar Ghaziabad — Location Guide, Property Prices & Projects 2026"
        description="Complete guide to Siddharth Vihar, Ghaziabad: connectivity, property prices, schools, hospitals, and new launch projects. AU Cosmos Corner — luxury 3 & 5 BHK at ₹6900/sq ft."
        url="https://aurealestateprojects.in/siddharth-vihar-ghaziabad"
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
        <p className="text-yellow-500 text-xs font-bold tracking-[5px] uppercase mb-3">Location Guide · Ghaziabad, UP</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Siddharth Vihar, Ghaziabad</h1>
        <p className="text-gray-300 text-lg max-w-2xl mb-6">
          One of Delhi NCR's fastest-growing residential corridors. Excellent connectivity, strong price appreciation, and premium new launches make Siddharth Vihar the top choice for homebuyers in Ghaziabad.
        </p>
        <button onClick={() => setShowModal(true)} className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors">
          Explore Flats in Siddharth Vihar
        </button>
      </div>

      {/* Location Overview */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">About Siddharth Vihar</h2>
        <div className="w-16 h-[3px] bg-yellow-500 mb-6" />
        <p className="text-gray-600 leading-relaxed mb-4">
          Siddharth Vihar is a well-established and rapidly developing residential locality in <strong>Ghaziabad, Uttar Pradesh</strong>. Situated along the <strong>NH-24 (NH-9) corridor</strong>, it offers seamless access to Delhi, Noida, Greater Noida, and Meerut — making it one of the most strategically located addresses in Delhi NCR.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          The area has seen significant infrastructure investment: the <strong>Delhi-Meerut Expressway</strong> passes close by, and the proposed <strong>metro expansion on NH-24</strong> will further enhance connectivity. This has made Siddharth Vihar a hotspot for both end-users seeking quality housing and investors looking for strong capital appreciation.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Property prices in Siddharth Vihar have appreciated <strong>15–20% over the last 3 years</strong>, and the trend is expected to continue driven by infrastructure growth and increasing demand from NCR professionals.
        </p>
      </div>

      {/* Connectivity */}
      <div className="bg-gray-50 px-6 md:px-16 py-14">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">Connectivity from Siddharth Vihar</h2>
          <div className="w-16 h-[3px] bg-yellow-500 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { dest: "NH-24 (NH-9)", time: "5 min" },
              { dest: "Delhi-Meerut Expressway", time: "10 min" },
              { dest: "Anand Vihar, Delhi", time: "15–20 min" },
              { dest: "Noida Sector 62 (IT Hub)", time: "20–25 min" },
              { dest: "Connaught Place, Delhi", time: "30–35 min" },
              { dest: "Greater Noida", time: "30–40 min" },
              { dest: "Indira Gandhi Airport", time: "60–70 min" },
              { dest: "Ghaziabad Railway Station", time: "10–15 min" },
            ].map(({ dest, time }) => (
              <div key={dest} className="flex items-center justify-between p-4 bg-white border border-gray-200">
                <span className="text-gray-800 font-medium text-sm">{dest}</span>
                <span className="text-yellow-600 font-bold text-sm bg-yellow-50 px-3 py-1">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Infrastructure */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">Social Infrastructure</h2>
        <div className="w-16 h-[3px] bg-yellow-500 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              category: "Schools",
              items: ["Delhi Public School, Ghaziabad", "Ryan International School", "Sapphire International", "St. Xavier's High School"],
            },
            {
              category: "Hospitals",
              items: ["Yashoda Hospital, Kaushambi", "Columbia Asia Hospital", "Max Hospital, Vaishali", "Sharda Hospital, Gr. Noida"],
            },
            {
              category: "Shopping & Malls",
              items: ["Shipra Mall, Indirapuram", "Pacific Mall, Ghaziabad", "Gaur Central Mall", "Wave City Centre"],
            },
          ].map(({ category, items }) => (
            <div key={category} className="bg-gray-50 p-5 border border-gray-200">
              <p className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-4 border-b border-yellow-500 pb-2">{category}</p>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-yellow-500 mt-0.5">›</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Project */}
      <div className="bg-gray-900 text-white px-6 md:px-16 py-14">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-yellow-500 text-xs font-bold tracking-[4px] uppercase mb-2">Featured New Launch</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AU Cosmos Corner</h2>
            <p className="text-gray-300 mb-6">The most premium new residential project in Siddharth Vihar. G+40 towers · 5.6 Acres · 3 & 5 BHK luxury apartments · Pre-launch ₹6,900/sq ft · RERA: UPRERAPRJ466336</p>
            <div className="flex flex-wrap gap-3">
              {["3 BHK from ₹1.22 Cr", "5 BHK from ₹2.19 Cr", "Free Site Visit", "Home Loan Assistance"].map(tag => (
                <span key={tag} className="bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 text-xs px-3 py-1">{tag}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button onClick={() => setShowModal(true)} className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors whitespace-nowrap">
              Book Site Visit
            </button>
            <a href="tel:9711557670" className="border border-gray-600 hover:border-yellow-500 text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors text-center">
              Call 9711557670
            </a>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">FAQs — Siddharth Vihar Ghaziabad</h2>
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

      {/* Footer */}
      <div className="border-t border-gray-200 px-6 md:px-16 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Truelite Estates LLP. All rights reserved. · Golden I, Tower T3, Unit 314, Greater Noida West – 201309 · omvir.shishodia@truelitestates.com
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} className="absolute top-3 right-4 text-white hover:text-yellow-400 text-3xl font-light z-10 bg-black/40 rounded-full w-9 h-9 flex items-center justify-center">✕</button>
            <ContactForm source="Siddharth Vihar Location Page" />
          </div>
        </div>
      )}
    </div>
  );
}
