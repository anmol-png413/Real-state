import { useState } from "react";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    q: "What is AU Cosmos Corner?",
    a: "AU Cosmos Corner is a premium residential project by AU Real Estate Pvt. Ltd. located in Siddharth Vihar, Ghaziabad, Uttar Pradesh. It offers 3 BHK, 3 BHK+Servant, and 5 BHK+Servant luxury apartments across 3 high-rise towers (G+40 floors) on approximately 5.6 acres of land.",
  },
  {
    q: "What is the price of flats in Siddharth Vihar Ghaziabad?",
    a: "At AU Cosmos Corner in Siddharth Vihar, the pre-launch price is ₹6,900 per sq ft — one of the best value propositions in Ghaziabad's luxury segment. The 3 BHK (1780 Sq.Ft.) starts at approximately ₹1.22 Crore, the 3 BHK + Servant (1972 Sq.Ft.) at approximately ₹1.36 Crore, and the 5 BHK + Servant (3175 Sq.Ft.) at approximately ₹2.19 Crore. Call 9711557670 for the latest pricing.",
  },
  {
    q: "Are there 5 BHK flats available in Siddharth Vihar?",
    a: "Yes. AU Cosmos Corner is one of the very few projects in Siddharth Vihar, Ghaziabad offering 5 BHK + Servant Room luxury apartments. The 5 BHK unit is 3175 Sq.Ft. and comes with premium fittings, modular kitchen, split AC in all rooms, and wardrobes — priced at approximately ₹2.19 Crore at pre-launch. This makes it a rare and highly sought-after offering in the entire Ghaziabad market.",
  },
  {
    q: "Which is the best new launch in Siddharth Vihar in 2026?",
    a: "AU Cosmos Corner by AU Real Estate Pvt. Ltd. is the most talked-about new launch in Siddharth Vihar in 2026. With G+40 high-rise towers on 5.6 acres, RERA-approved (UPRERAPRJ466336), pre-launch pricing of ₹6,900/sq ft, and world-class amenities including swimming pool, gym, and clubhouse — it stands out as the premium choice for homebuyers looking for luxury flats in Siddharth Vihar.",
  },
  {
    q: "Is Siddharth Vihar a good location to buy a flat?",
    a: "Yes, Siddharth Vihar in Ghaziabad is an excellent location for real estate investment. It offers seamless connectivity to NH-24 (NH-9), Delhi-Meerut Expressway, and proximity to Noida, Greater Noida, and Delhi employment hubs. With rapid infrastructure development, growing metro connectivity, reputed schools, hospitals, and malls nearby, Siddharth Vihar has become one of the fastest-appreciating residential corridors in Delhi NCR.",
  },
  {
    q: "How far is AU Cosmos Corner from the nearest metro station?",
    a: "AU Cosmos Corner in Siddharth Vihar is well-connected to Delhi NCR's metro network. The proposed metro corridor along NH-24 is expected to significantly boost connectivity. Currently, the project offers easy road access to Anand Vihar (Delhi) and Noida metro stations within 30–40 minutes. The upcoming metro expansion will make Siddharth Vihar even more accessible from all parts of Delhi NCR.",
  },
  {
    q: "Is AU Cosmos Corner RERA approved?",
    a: "Yes, AU Cosmos Corner is RERA approved under Uttar Pradesh Real Estate Regulatory Authority. The RERA Registration Number is UPRERAPRJ466336. Buyers can verify project details, construction progress, and legal documents directly on the UP RERA portal for complete transparency.",
  },
  {
    q: "What is the possession date for AU Cosmos Corner?",
    a: "AU Cosmos Corner is currently in the pre-launch phase. The project has an estimated construction timeline of December 2029. For the exact RERA-registered possession date and construction schedule, please contact Truelite Estates at 9711557670 or check the UP RERA portal under registration number UPRERAPRJ466336.",
  },
  {
    q: "What configurations are available in AU Cosmos Corner?",
    a: "AU Cosmos Corner offers three configurations: 3 BHK + 3 Toilet (1780 Sq.Ft.), 3 BHK + Servant Room + 4 Toilet (1972 Sq.Ft.), and 5 BHK + Servant Room + 6 Toilet (3175 Sq.Ft.). All units come with a modular kitchen, 1.5-ton split AC in all bedrooms, wardrobes in all bedrooms, and high-quality vitrified tile flooring.",
  },
  {
    q: "What floor plans are available and how can I get them?",
    a: "Detailed floor plans for 3 BHK and 5 BHK units at AU Cosmos Corner are available on request. You can fill the enquiry form on this page or call 9711557670 to receive the floor plan brochure directly on WhatsApp or email. Our site plan section on this page also shows the overall layout of the 5.6-acre project.",
  },
  {
    q: "What is the payment plan for AU Cosmos Corner?",
    a: "AU Cosmos Corner offers a flexible payment plan: 10% booking amount, 30% within 60 days of booking, 40% on possession, and 20% flexi payment plan. Home loans are available from leading banks including SBI, HDFC, ICICI, and Axis Bank. Contact Truelite Estates LLP at 9711557670 for a detailed payment schedule.",
  },
  {
    q: "Which banks offer home loans for AU Cosmos Corner?",
    a: "AU Cosmos Corner is approved for home loans by major national banks including SBI, HDFC Bank, ICICI Bank, Axis Bank, and Bank of Baroda. The RERA approval facilitates faster loan processing. Our team at Truelite Estates LLP can assist you with the entire loan documentation and pre-approval process at no extra charge.",
  },
  {
    q: "What amenities does AU Cosmos Corner offer?",
    a: "AU Cosmos Corner offers world-class amenities including a swimming pool, fully-equipped gymnasium, grand clubhouse, children's play area, landscaped gardens, jogging track, multi-purpose sports court, 24/7 security with CCTV surveillance, power backup, and covered car parking. The project is designed for a complete luxury lifestyle within a gated community.",
  },
  {
    q: "Where is AU Cosmos Corner located and how to reach?",
    a: "AU Cosmos Corner is located in Siddharth Vihar, Ghaziabad, Uttar Pradesh — PIN 201013. It has excellent road access: 5 minutes from NH-24, 10 minutes from Delhi-Meerut Expressway, and 20 minutes from Noida Sector 62. From Delhi's Anand Vihar bus terminal it is approximately 15–20 km. Google Maps: search 'AU Cosmos Corner Siddharth Vihar'.",
  },
  {
    q: "Is AU Cosmos Corner a good investment in Ghaziabad?",
    a: "Yes, AU Cosmos Corner is an attractive investment for both end-users and investors. Siddharth Vihar has seen 15–20% price appreciation over the last 3 years. Pre-launch pricing of ₹6,900/sq ft offers significant upside potential as the project nears completion. The G+40 high-rises, premium brand, RERA compliance, and infrastructure growth on the NH-24 corridor make this a strong long-term investment.",
  },
  {
    q: "What is the property price trend in Siddharth Vihar Ghaziabad?",
    a: "Siddharth Vihar property prices have been on a consistent upward trajectory. Average rates have grown from approximately ₹4,500/sq ft in 2021 to ₹6,000–7,000/sq ft in 2025–26. Key drivers include improved connectivity via Delhi-Meerut Expressway, proximity to Noida's IT corridors, and growing demand for quality housing. AU Cosmos Corner's pre-launch rate of ₹6,900/sq ft positions it well ahead of the appreciation curve.",
  },
  {
    q: "Who is marketing AU Cosmos Corner?",
    a: "AU Cosmos Corner is marketed by Truelite Estates LLP, an authorized channel partner of AU Real Estate Pvt. Ltd. Truelite Estates LLP is registered at Golden I Tower T3, Unit 314, Greater Noida West – 201309. You can reach the team at 9711557670 or omvir.shishodia@truelitestates.com for all booking, pricing, and site visit queries.",
  },
  {
    q: "What is the maintenance charge at AU Cosmos Corner?",
    a: "Maintenance charges for AU Cosmos Corner will be decided closer to possession. Typically for luxury gated communities in Ghaziabad, maintenance is charged at ₹2–4 per sq ft per month to cover security, housekeeping, pool, gym, power backup, and common area upkeep. For the most current maintenance estimate, please contact 9711557670.",
  },
  {
    q: "What schools and hospitals are near Siddharth Vihar?",
    a: "Siddharth Vihar is well-served by reputed institutions. Nearby schools include Delhi Public School (Ghaziabad), Ryan International School, and Sapphire International. For healthcare, Yashoda Hospital, Columbia Asia Hospital, and Sharda Hospital (Greater Noida) are within easy reach. Several shopping malls, markets, and multiplex cinemas are also accessible within 10–15 minutes.",
  },
  {
    q: "Can I buy a flat in AU Cosmos Corner as an NRI?",
    a: "Yes, NRIs (Non-Resident Indians) can purchase residential property in AU Cosmos Corner under FEMA guidelines. Truelite Estates LLP's team can guide you through the NRI buying process including power of attorney, NRE/NRO account fund transfer, home loan options from NRI-friendly banks, and RERA compliance. Call or WhatsApp +91-9711557670 for NRI-specific assistance.",
  },
  {
    q: "Should I buy at AU Cosmos Corner for self-use or investment?",
    a: "AU Cosmos Corner works well for both. For self-use: the G+40 towers, luxury amenities, 3–5 BHK spacious units, and prime Siddharth Vihar location offer an excellent quality of life close to Delhi NCR employment hubs. For investment: pre-launch pricing, RERA compliance, and Siddharth Vihar's strong appreciation history make it a compelling asset. Our advisors can help you evaluate based on your specific goals — call 9711557670.",
  },
  {
    q: "How many towers are in AU Cosmos Corner and on how much land?",
    a: "AU Cosmos Corner comprises 3 high-rise residential towers of G+40 floors spread across approximately 5.6 acres of land in Siddharth Vihar, Ghaziabad. The large land parcel ensures abundant open spaces, landscaping, and amenities rather than a congested layout — a key differentiator from smaller plots in the same area.",
  },
  {
    q: "What makes AU Cosmos Corner different from other projects in Siddharth Vihar?",
    a: "AU Cosmos Corner stands apart with: G+40 high-rise towers (rare in Siddharth Vihar), 5.6-acre campus with extensive green open spaces, 5 BHK + Servant luxury configuration (almost exclusive in this micro-market), RERA-approved project (UPRERAPRJ466336), pre-launch pricing of ₹6,900/sq ft which is highly competitive for this specification, and trusted developer AU Real Estate backed by decades of NCR delivery experience.",
  },
  {
    q: "How do I book a flat at AU Cosmos Corner?",
    a: "Booking is simple: (1) Fill the enquiry form on this page or call 9711557670; (2) Our advisor will schedule a free site visit; (3) Choose your unit and configuration; (4) Pay 10% booking amount via cheque, NEFT, or bank transfer; (5) Sign the builder-buyer agreement; (6) Apply for home loan if needed. Truelite Estates LLP manages the entire process from enquiry to registration.",
  },
  {
    q: "Can I book a free site visit for AU Cosmos Corner?",
    a: "Yes, Truelite Estates LLP offers a completely free site visit to AU Cosmos Corner in Siddharth Vihar, Ghaziabad — including pickup and drop from your location within NCR on request. Call 9711557670 or WhatsApp us or fill the enquiry form on this page to schedule your visit. Our team will arrange a guided tour of the project site at your convenience.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

export default function FAQSection({ onBookVisit }) {
  const [open, setOpen] = useState(null);

  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20" id="faq">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Section Title */}
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[4px] text-yellow-600 font-semibold mb-2">Know More</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-gray-500 mt-2">AU Cosmos Corner — Siddharth Vihar, Ghaziabad</p>
        <div className="w-20 h-[3px] bg-yellow-500 mx-auto mt-4" />
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {faqs.map(({ q, a }, i) => (
          <div
            key={i}
            className="border border-gray-200 bg-white overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left bg-transparent border-none cursor-pointer"
            >
              <h3 className="text-sm md:text-base font-semibold text-gray-800 pr-4">{q}</h3>
              <span
                className="text-yellow-500 text-xl font-light flex-shrink-0 transition-transform duration-300"
                style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </button>

            <div
              className="overflow-hidden transition-all duration-400"
              style={{ maxHeight: open === i ? "400px" : "0px" }}
            >
              <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                {a}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA below FAQ */}
      <div className="text-center mt-10">
        <p className="text-gray-500 text-sm mb-4">Still have questions? Talk to our property advisor.</p>
        <button
          onClick={onBookVisit}
          className="inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-700 text-white font-bold text-xs tracking-[3px] uppercase py-4 px-10 transition-colors duration-300"
        >
          📞 Call 9711557670
        </button>
      </div>
    </section>
  );
}
