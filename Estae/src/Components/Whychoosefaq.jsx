import React, { useState } from "react";

// ── Why Choose Us Data ──────────────────────────────────────────
const reasons = [
  {
    icon: "🏛️",
    title: "Prime Location",
    desc: "Situated near NH-24, with seamless access to Noida, Delhi, and key NCR hubs. Metro, hospitals, and schools all within minutes.",
  },
  {
    icon: "📐",
    title: "Smart Architecture",
    desc: "Thoughtfully planned 1760 sq. ft. apartments with 11 ft ceilings, wide balconies, and large windows for natural light and ventilation.",
  },
  {
    icon: "✨",
    title: "Premium Finishes",
    desc: "Every surface crafted with high-end materials — from imported flooring to designer fittings — for a truly luxurious living experience.",
  },
  {
    icon: "🏊",
    title: "World-Class Amenities",
    desc: "Grand clubhouse, swimming pool, fully equipped gym, landscaped gardens, jogging tracks, and dedicated kids' play zones.",
  },
  {
    icon: "🔒",
    title: "Safe & Secure",
    desc: "24/7 CCTV surveillance, trained security personnel, and controlled entry points ensure complete peace of mind for your family.",
  },
  {
    icon: "📈",
    title: "High Investment Value",
    desc: "Located in one of NCR's fastest-growing corridors with strong appreciation potential and excellent rental yield prospects.",
  },
];

// ── FAQ Data ────────────────────────────────────────────────────
const faqs = [
  {
    q: "Where is AU Realestate located?",
    a: "AU Realestate is located in Siddharth Vihar, Ghaziabad, strategically positioned near NH-24 (Delhi-Meerut Expressway), offering seamless connectivity to Noida, Delhi, and other NCR locations.",
  },
  {
    q: "What configurations are available?",
    a: "Currently, we offer spacious 3 BHK + 3 Toilet, 3 BHK + 3 Toilet + Servant,  5 BHK + 5 Toilet + Servant luxury apartments with approximately 1750 sq. ft, 1972 sq ft, 3175 sq ft respectively of living space and an impressive 11 ft ceiling height.",
  },
  {
    q: "What amenities are provided?",
    a: "Residents enjoy a grand clubhouse, swimming pool, fully equipped gym, landscaped gardens, jogging tracks, open green spaces, kids' play areas, and indoor games facilities.",
  },
  {
    q: "How can I get the price details?",
    a: "Pricing is available on request. Please contact our sales team directly and we will share a detailed cost sheet, payment plan, and any ongoing offers tailored to your needs.",
  },
  {
    q: "Is the project RERA approved?",
    a: "Yes, the project is fully RERA registered and compliant. All documentation is transparent and available for review before you make any booking decision.",
  },
  {
    q: "What is the possession timeline?",
    a: "Our team will share the exact possession date at the time of booking. We are committed to on-time delivery with regular construction updates shared with all buyers.",
  },
];

// ── FAQ Item Component ───────────────────────────────────────────
function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen ? "border-yellow-400" : "border-gray-200"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm md:text-base font-medium text-gray-900 pr-4">{q}</span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
            isOpen
              ? "bg-yellow-500 text-white rotate-45"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 bg-white border-t border-gray-100">
          <p className="text-sm md:text-base text-gray-600 leading-relaxed pt-3">{a}</p>
        </div>
      )}
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────────
export default function WhyChooseFAQ({ onBookVisit }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="w-full bg-white">

      {/* ══════════════════════════════
          SECTION 1 — WHY CHOOSE US
      ══════════════════════════════ */}
      <section className="w-full px-4 md:px-10 py-16 bg-gray-50">

        {/* Heading */}
        <p className="text-center text-xs uppercase tracking-widest text-yellow-600 mb-2 font-medium">
          Our Promise
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-2">
          Why Choose AU Realestate?
        </h2>
        <p className="text-center text-gray-500 text-sm md:text-base max-w-xl mx-auto mb-12">
          We don't just build homes — we craft lifestyles. Here's what sets us apart.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-3 hover:border-yellow-400 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center text-2xl group-hover:bg-yellow-100 transition-colors">
                {r.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900">{r.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-12 bg-yellow-500 rounded-2xl px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg md:text-xl">
              Ready to find your dream home?
            </p>
            <p className="text-yellow-100 text-sm mt-1">
              Book a free site visit today — no obligation, just clarity.
            </p>
          </div>
        <button
  onClick={onBookVisit}
  className="flex-shrink-0 bg-white text-yellow-600 font-bold px-7 py-3 rounded-xl hover:bg-yellow-50 transition-colors text-sm md:text-base shadow"
>
  Schedule a Visit →
</button>
        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 2 — FAQ
      ══════════════════════════════ */}
      <section className="w-full px-4 md:px-10 py-16 bg-white">

        {/* Heading */}
        <p className="text-center text-xs uppercase tracking-widest text-yellow-600 mb-2 font-medium">
          Got Questions?
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-500 text-sm md:text-base max-w-xl mx-auto mb-12">
          Everything you need to know before making the most important decision of your life.
        </p>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openFaq === i}
              onToggle={() => setOpenFaq(openFaq === i ? null : i)}
            />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-400 text-sm mt-10">
          Still have questions?{" "}
          <button
            onClick={onBookVisit}
            className="text-yellow-600 font-bold cursor-pointer hover:underline bg-transparent border-none p-0"
            style={{ fontFamily: "inherit", fontSize: "inherit" }}
          >
            📞 Call us at 9711557670
          </button>
        </p>
      </section>

    </div>
  );
}