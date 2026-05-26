import { useState } from "react";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    q: "What is AU Cosmos Corner?",
    a: "AU Cosmos Corner is a premium residential project by AU Real Estate Pvt. Ltd. located in Siddharth Vihar, Ghaziabad, Uttar Pradesh. It offers 3 BHK, 3 BHK+Servant, and 5 BHK+Servant luxury apartments across 3 high-rise towers (G+36 floors) on approximately 5.6 acres of land.",
  },
  {
    q: "What is the price of 3 BHK in AU Cosmos Corner?",
    a: "AU Cosmos Corner is available at a pre-launch price of ₹6,900 per sq ft. The 3 BHK (1780 Sq.Ft.) starts at approximately ₹1.22 Crore, the 3 BHK + Servant (1972 Sq.Ft.) at approximately ₹1.36 Crore, and the 5 BHK + Servant (3175 Sq.Ft.) at approximately ₹2.19 Crore. Call 9711557670 for exact pricing.",
  },
  {
    q: "Is AU Cosmos Corner RERA approved?",
    a: "Yes, AU Cosmos Corner is RERA approved under Uttar Pradesh Real Estate Regulatory Authority. The RERA Registration Number is UPRERAPRJ466336, valid until May 2026. All project details are as per the RERA registered documents.",
  },
  {
    q: "Where is AU Cosmos Corner located?",
    a: "AU Cosmos Corner is located in Siddharth Vihar, Ghaziabad, Uttar Pradesh. It offers excellent connectivity to NH-24, NH-58, Delhi-Meerut Expressway, and is close to major employment hubs in Delhi NCR.",
  },
  {
    q: "What configurations are available in AU Cosmos Corner?",
    a: "AU Cosmos Corner offers three configurations: 3 BHK + 3 Toilet (1780 Sq.Ft.), 3 BHK + Servant Room (1972 Sq.Ft.), and 5 BHK + Servant Room (3175 Sq.Ft.). All units come with modular kitchen, 1.5-ton split AC in all bedrooms, and wardrobes in all bedrooms.",
  },
  {
    q: "What is the payment plan for AU Cosmos Corner?",
    a: "AU Cosmos Corner offers a flexible payment plan: 10% booking amount, 30% within 60 days of booking, 40% on possession, and 20% flexi payment plan. Contact Truelite Estates LLP at 9711557670 for detailed payment schedule.",
  },
  {
    q: "What amenities does AU Cosmos Corner offer?",
    a: "AU Cosmos Corner offers world-class amenities including a swimming pool, fully-equipped gymnasium, clubhouse, children's play area, landscaped gardens, jogging track, multi-purpose court, 24/7 security with CCTV surveillance, power backup, and covered parking.",
  },
  {
    q: "Who is marketing AU Cosmos Corner?",
    a: "AU Cosmos Corner is marketed by Truelite Estates LLP, an authorized channel partner of AU Real Estate Pvt. Ltd. Truelite Estates LLP is registered at Golden I Tower T3, Unit 314, Greater Noida West – 201309. Contact: 9711557670 or omvir.shishodia@truelitestates.com.",
  },
  {
    q: "What is the possession timeline for AU Cosmos Corner?",
    a: "AU Cosmos Corner is currently in the pre-launch phase. The project is under development with an estimated construction timeline of approximately 4 years. For the exact possession date and construction updates, please contact the sales team at 9711557670.",
  },
  {
    q: "Can I book a free site visit for AU Cosmos Corner?",
    a: "Yes, Truelite Estates LLP offers a completely free site visit to AU Cosmos Corner in Siddharth Vihar, Ghaziabad. Call 9711557670 or fill the enquiry form on this page to schedule your visit. Our team will arrange a guided tour of the project site.",
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
