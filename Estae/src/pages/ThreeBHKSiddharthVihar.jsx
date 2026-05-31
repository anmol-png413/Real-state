import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../Components/SEO";
import ContactForm from "../Components/Contactform";
import logo from "../assets/au-logo-black.webp";

const faqs = [
  {
    q: "What is the size of 3 BHK flats in AU Cosmos Corner?",
    a: "AU Cosmos Corner offers two 3 BHK configurations: 3 BHK (1780 Sq.Ft.) and 3 BHK + Servant Room (1972 Sq.Ft.). Both come with modular kitchen, 1.5-ton split AC in all bedrooms, wardrobes, and 3–4 bathrooms.",
  },
  {
    q: "What is the price of 3 BHK flats in Siddharth Vihar?",
    a: "At AU Cosmos Corner, the 3 BHK (1780 Sq.Ft.) is priced at approximately ₹1.22 Crore and the 3 BHK + Servant (1972 Sq.Ft.) at approximately ₹1.36 Crore at the pre-launch rate of ₹6,900/sq ft. This is among the best value 3 BHK pricing in Siddharth Vihar, Ghaziabad.",
  },
  {
    q: "Are 3 BHK flats in Siddharth Vihar a good investment?",
    a: "Yes. Siddharth Vihar has seen consistent 15–20% price appreciation. With RERA approval, reputed developer, and NH-24 expressway connectivity, AU Cosmos Corner's 3 BHK units offer strong rental and resale potential in the growing Ghaziabad real estate market.",
  },
  {
    q: "Is AU Cosmos Corner 3 BHK RERA approved?",
    a: "Yes. AU Cosmos Corner is registered with UP RERA under number UPRERAPRJ466336. All project details, construction timeline, and legal documents are verifiable on the UP RERA portal.",
  },
  {
    q: "How do I book a 3 BHK flat in Siddharth Vihar?",
    a: "Call 9711557670 or fill the form above to register your interest. Our advisor will schedule a free site visit to AU Cosmos Corner. Booking starts at 10% of the unit price. Home loans available from SBI, HDFC, ICICI, and other leading banks.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["RealEstateListing", "ApartmentComplex"],
      "name": "3 BHK Flats in Siddharth Vihar Ghaziabad — AU Cosmos Corner",
      "numberOfBedrooms": 3,
      "description": "3 BHK luxury apartments in Siddharth Vihar, Ghaziabad by AU Real Estate. Size: 1780–1972 Sq.Ft. Pre-launch ₹6900/sq ft. RERA: UPRERAPRJ466336.",
      "url": "https://aucosmos.truelitestates.com/3-bhk-flats-siddharth-vihar",
      "numberOfRooms": "3",
      "floorSize": { "@type": "QuantitativeValue", "minValue": 1780, "maxValue": 1972, "unitCode": "FTK" },
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
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aucosmos.truelitestates.com" },
        { "@type": "ListItem", "position": 2, "name": "3 BHK Flats in Siddharth Vihar", "item": "https://aucosmos.truelitestates.com/3-bhk-flats-siddharth-vihar" },
      ],
    },
  ],
};

export default function ThreeBHKSiddharthVihar() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <SEO
        title="3 BHK Flats in Siddharth Vihar Ghaziabad | AU Cosmos Corner | ₹1.22 Cr Onwards"
        description="Buy 3 BHK luxury flats in Siddharth Vihar, Ghaziabad at AU Cosmos Corner. 1780–1972 Sq.Ft. Pre-launch ₹6900/sq ft. RERA: UPRERAPRJ466336. Free site visit. Call 9711557670."
        url="https://aucosmos.truelitestates.com/3-bhk-flats-siddharth-vihar"
        schema={schema}
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
      <div className="w-full bg-gray-900 text-white px-6 md:px-16 py-16">
        <p className="text-yellow-500 text-xs font-bold tracking-[5px] uppercase mb-3">Siddharth Vihar, Ghaziabad</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">3 BHK Flats in Siddharth Vihar</h1>
        <p className="text-gray-300 text-lg max-w-2xl mb-6">
          AU Cosmos Corner — Premium 3 BHK luxury apartments starting at <span className="text-yellow-400 font-bold">₹1.22 Crore</span>. Pre-launch price ₹6,900/sq ft. RERA Approved.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          {["1780 Sq.Ft. | 3 BHK", "1972 Sq.Ft. | 3 BHK + Servant", "G+40 Tower", "5.6 Acres", "RERA: UPRERAPRJ466336"].map(tag => (
            <span key={tag} className="bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 text-xs px-3 py-1 font-medium">{tag}</span>
          ))}
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors"
        >
          Book Free Site Visit
        </button>
      </div>

      {/* Key Features */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">3 BHK Features & Specifications</h2>
        <div className="w-16 h-[3px] bg-yellow-500 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Unit Sizes", value: "1780 Sq.Ft. & 1972 Sq.Ft." },
            { label: "Pre-launch Price", value: "₹6,900 per Sq.Ft." },
            { label: "Starting Price", value: "₹1.22 Crore onwards" },
            { label: "Floors", value: "G+40 High-Rise Towers" },
            { label: "Modular Kitchen", value: "Fully Fitted Modular Kitchen" },
            { label: "Air Conditioning", value: "1.5 Ton Split AC in All Bedrooms" },
            { label: "Wardrobes", value: "In All Bedrooms" },
            { label: "RERA No.", value: "UPRERAPRJ466336" },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-start gap-4 p-4 border border-gray-100 bg-gray-50">
              <div className="w-1 h-full bg-yellow-500 flex-shrink-0 mt-1" style={{ minHeight: "20px" }} />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{label}</p>
                <p className="text-gray-800 font-bold mt-1">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Siddharth Vihar */}
      <div className="bg-gray-50 px-6 md:px-16 py-14">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">Why Buy 3 BHK in Siddharth Vihar?</h2>
          <div className="w-16 h-[3px] bg-yellow-500 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "NH-24 Connectivity", desc: "5 minutes from NH-24 (NH-9) providing direct access to Delhi, Noida, and Meerut." },
              { title: "Employment Hubs", desc: "20–30 minutes to Noida's IT sector (Sector 62, 125, 132) and Delhi's business districts." },
              { title: "Price Appreciation", desc: "Siddharth Vihar has seen 15–20% price appreciation in the last 3 years — strong investment returns." },
              { title: "Schools & Hospitals", desc: "DPS Ghaziabad, Ryan International, Yashoda Hospital, Columbia Asia within easy reach." },
              { title: "RERA Compliance", desc: "Fully RERA-approved project ensuring legal protection and construction accountability." },
              { title: "Luxury Lifestyle", desc: "Swimming pool, gymnasium, clubhouse, and landscaped greens within a secure gated community." },
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">FAQs — 3 BHK Flats in Siddharth Vihar</h2>
        <div className="w-16 h-[3px] bg-yellow-500 mb-8" />
        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="border border-gray-200 bg-white overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-transparent border-none cursor-pointer"
              >
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
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Book Your 3 BHK in Siddharth Vihar Today</h2>
        <p className="text-gray-400 mb-6">Pre-launch prices valid for limited period. Secure your unit at ₹6,900/sq ft.</p>
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} className="absolute top-3 right-4 text-white hover:text-yellow-400 text-3xl font-light z-10 bg-black/40 rounded-full w-9 h-9 flex items-center justify-center">✕</button>
            <ContactForm source="3 BHK Siddharth Vihar Page" />
          </div>
        </div>
      )}
    </div>
  );
}
