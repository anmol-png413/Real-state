import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../Components/SEO";
import ContactForm from "../Components/Contactform";
import logo from "../assets/au-logo-black.webp";

const faqs = [
  {
    q: "Are there 5 BHK luxury flats in Siddharth Vihar Ghaziabad?",
    a: "Yes, AU Cosmos Corner offers one of the very few 5 BHK + Servant Room luxury apartments in Siddharth Vihar, Ghaziabad. The unit is 3175 Sq.Ft. — ideal for large families seeking premium living in Delhi NCR.",
  },
  {
    q: "What is the price of 5 BHK flat in Siddharth Vihar?",
    a: "The 5 BHK + Servant Room (3175 Sq.Ft.) at AU Cosmos Corner is priced at approximately ₹2.19 Crore at the pre-launch rate of ₹6,900 per sq ft. This is highly competitive for a luxury 5 BHK unit in the Delhi NCR market.",
  },
  {
    q: "What does the 5 BHK + Servant Room include at AU Cosmos Corner?",
    a: "The 5 BHK unit (3175 Sq.Ft.) includes 5 bedrooms, a servant room, 6 bathrooms, a large living + dining space, a modular kitchen, 1.5-ton split AC in all rooms, wardrobes in all bedrooms, and a premium balcony view. It is situated in a G+40 high-rise tower on a 5.6-acre gated campus.",
  },
  {
    q: "Is the 5 BHK in AU Cosmos Corner RERA registered?",
    a: "Yes. AU Cosmos Corner is RERA registered under UPRERAPRJ466336 with UP Real Estate Regulatory Authority. The 5 BHK units, along with all project details, are verifiable on the UP RERA portal for complete buyer protection.",
  },
  {
    q: "How do I book a 5 BHK flat in AU Cosmos Corner?",
    a: "Fill the enquiry form or call 9711557670. Our Truelite Estates LLP advisor will schedule a free site visit. Booking starts with 10% of the unit value. Home loans are available from SBI, HDFC, ICICI, Axis Bank, and other lenders.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["RealEstateListing", "ApartmentComplex"],
      "name": "5 BHK Luxury Flats in Siddharth Vihar Ghaziabad — AU Cosmos Corner",
      "numberOfBedrooms": 5,
      "description": "5 BHK + Servant Room luxury apartments in Siddharth Vihar, Ghaziabad. 3175 Sq.Ft. Pre-launch ₹6900/sq ft. Starting ₹2.19 Cr. RERA: UPRERAPRJ466336.",
      "url": "https://aurealestateprojects.in/5-bhk-flats-siddharth-vihar",
      "numberOfRooms": "5",
      "floorSize": { "@type": "QuantitativeValue", "value": 3175, "unitCode": "FTK" },
      "offers": { "@type": "Offer", "price": "6900", "priceCurrency": "INR" },
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
        { "@type": "ListItem", "position": 2, "name": "5 BHK Flats in Siddharth Vihar", "item": "https://aurealestateprojects.in/5-bhk-flats-siddharth-vihar" },
      ],
    },
  ],
};

export default function FiveBHKSiddharthVihar() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <SEO
        title="5 BHK Luxury Flats in Siddharth Vihar Ghaziabad | AU Cosmos Corner | ₹2.19 Cr"
        description="Rare 5 BHK + Servant Room luxury flats in Siddharth Vihar, Ghaziabad at AU Cosmos Corner. 3175 Sq.Ft. Pre-launch ₹6900/sq ft. RERA: UPRERAPRJ466336. Call 9711557670."
        url="https://aurealestateprojects.in/5-bhk-flats-siddharth-vihar"
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
        <p className="text-yellow-500 text-xs font-bold tracking-[5px] uppercase mb-3">Siddharth Vihar, Ghaziabad</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">5 BHK Luxury Flats in Siddharth Vihar</h1>
        <p className="text-gray-300 text-lg max-w-2xl mb-6">
          AU Cosmos Corner — One of Siddharth Vihar's only 5 BHK + Servant Room luxury apartments. <span className="text-yellow-400 font-bold">3175 Sq.Ft.</span> at ₹6,900/sq ft. RERA Approved.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          {["3175 Sq.Ft.", "5 BHK + Servant Room", "6 Bathrooms", "G+40 Tower", "₹2.19 Cr Approx.", "RERA: UPRERAPRJ466336"].map(tag => (
            <span key={tag} className="bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 text-xs px-3 py-1 font-medium">{tag}</span>
          ))}
        </div>
        <button onClick={() => setShowModal(true)} className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors">
          Book Free Site Visit
        </button>
      </div>

      {/* Specifications */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">5 BHK Specifications</h2>
        <div className="w-16 h-[3px] bg-yellow-500 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Unit Size", value: "3175 Sq.Ft. (Super Area)" },
            { label: "Configuration", value: "5 BHK + Servant Room" },
            { label: "Bathrooms", value: "6 Toilets" },
            { label: "Pre-launch Price", value: "₹6,900 per Sq.Ft." },
            { label: "Approx. Total Price", value: "₹2.19 Crore" },
            { label: "Modular Kitchen", value: "Fully Fitted" },
            { label: "Air Conditioning", value: "1.5 Ton Split AC in All Bedrooms" },
            { label: "Wardrobes", value: "In All Bedrooms" },
            { label: "Tower Height", value: "G+40 High-Rise" },
            { label: "RERA No.", value: "UPRERAPRJ466336" },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-start gap-4 p-4 border border-gray-100 bg-gray-50">
              <div className="w-1 bg-yellow-500 flex-shrink-0 mt-1" style={{ minHeight: "20px" }} />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{label}</p>
                <p className="text-gray-800 font-bold mt-1">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why 5 BHK */}
      <div className="bg-gray-50 px-6 md:px-16 py-14">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">Why Choose a 5 BHK in Siddharth Vihar?</h2>
          <div className="w-16 h-[3px] bg-yellow-500 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Rare in Siddharth Vihar", desc: "Very few projects in Siddharth Vihar offer 5 BHK luxury units. AU Cosmos Corner fills this premium gap in the market." },
              { title: "Investment Upside", desc: "Large-format luxury units in high-rise towers on 5.6 acres appreciate faster and have stronger resale value." },
              { title: "Multi-Generational Living", desc: "Ideal for joint families — 5 bedrooms + servant room with ample common areas and premium amenities." },
              { title: "High Rental Yield", desc: "5 BHK premium units command premium rentals from senior corporate professionals and HNI tenants in NCR." },
              { title: "Prestigious Address", desc: "A G+40 high-rise at AU Cosmos Corner gives the family a distinguished address in the growing Siddharth Vihar corridor." },
              { title: "Complete Lifestyle", desc: "Swimming pool, gym, clubhouse, children's play area and landscaped gardens within a fully gated, secured campus." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white p-5 border border-gray-200">
                <p className="font-bold text-gray-900 mb-2">{title}</p>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">FAQs — 5 BHK Flats Siddharth Vihar</h2>
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
      <div className="bg-gray-900 text-white px-6 md:px-16 py-14 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Reserve Your 5 BHK Flat in Siddharth Vihar</h2>
        <p className="text-gray-400 mb-6">Very limited 5 BHK units available. Pre-launch pricing ends soon.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => setShowModal(true)} className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors">
            Book Free Site Visit
          </button>
          <a href="tel:9711557670" className="border border-gray-600 hover:border-yellow-500 text-white font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors">
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
            <ContactForm source="5 BHK Siddharth Vihar Page" />
          </div>
        </div>
      )}
    </div>
  );
}
