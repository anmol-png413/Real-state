const testimonials = [
  {
    name: "Rajesh Kumar",
    city: "Indirapuram, Ghaziabad",
    unit: "3 BHK — 1780 Sq.Ft.",
    stars: 5,
    text: "Visited the AU Cosmos Corner site in March 2026. The G+40 tower scale is genuinely impressive — very few projects in Siddharth Vihar offer this kind of open space across 5.6 acres. The pre-launch pricing of ₹6,900/sq ft felt right given the specifications. Booked a 3 BHK unit. Truelite Estates team was transparent throughout.",
  },
  {
    name: "Priya Sharma",
    city: "Vasundhara, Ghaziabad",
    unit: "3 BHK + Servant — 1972 Sq.Ft.",
    stars: 5,
    text: "We were looking for a spacious 3 BHK near Noida for my husband's office commute. Siddharth Vihar connectivity to NH-24 was the deciding factor. AU Cosmos Corner had the best price-to-size ratio we found after comparing 6 projects. The modular kitchen and split AC inclusions made it a clear choice. Highly recommend Truelite Estates for honest guidance.",
  },
  {
    name: "Amit Agarwal",
    city: "NRI — Dubai",
    unit: "5 BHK + Servant — 3175 Sq.Ft.",
    stars: 5,
    text: "I was looking for a premium 5 BHK investment in Delhi NCR and AU Cosmos Corner stood out. It's one of the very few RERA-approved 5 BHK projects in Siddharth Vihar at this price point. The Truelite Estates team managed my entire NRI booking process remotely — KYC, agreement, and loan coordination — without me needing to visit India. Excellent service.",
  },
  {
    name: "Sunita & Vinod Mehta",
    city: "Vaishali, Ghaziabad",
    unit: "3 BHK — 1780 Sq.Ft.",
    stars: 5,
    text: "We are a family of 4 and wanted a quality home near good schools. DPS Ghaziabad is just 10 minutes from AU Cosmos Corner and Yashoda Hospital is nearby too. The project's RERA number gave us confidence. We booked during the pre-launch phase and are very happy with the process. The site visit was arranged within 24 hours of our enquiry.",
  },
  {
    name: "Deepak Bhatnagar",
    city: "Noida Sector 62",
    unit: "Investor — 3 BHK + Servant",
    stars: 5,
    text: "I have been investing in Ghaziabad real estate for 8 years. The Siddharth Vihar corridor has appreciated 18% in the last 3 years. AU Cosmos Corner's pre-launch price of ₹6,900/sq ft on a G+40 tower by a reputed developer is exactly the kind of entry point that generates strong returns. The RERA registration gave me legal confidence. Already recommended to two colleagues.",
  },
];

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "AU Cosmos Corner — Luxury Apartments Siddharth Vihar",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "5",
    "reviewCount": "5",
  },
  "review": testimonials.map(t => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": t.name },
    "reviewRating": { "@type": "Rating", "ratingValue": t.stars, "bestRating": "5" },
    "reviewBody": t.text,
  })),
};

export default function Testimonials() {
  return (
    <section className="w-full bg-gray-950 py-16 px-6 md:px-12 lg:px-20" id="testimonials">
      <script type="application/ld+json">{JSON.stringify(aggregateRatingSchema)}</script>

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[4px] text-yellow-500 font-semibold mb-2">What Buyers Say</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">
          Site Visit Reviews
        </h2>
        <p className="text-gray-500 text-sm mt-2">AU Cosmos Corner — Siddharth Vihar, Ghaziabad</p>
        <div className="w-20 h-[3px] bg-yellow-500 mx-auto mt-4" />
        <div className="flex items-center justify-center gap-1 mt-4">
          {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-xl">★</span>)}
          <span className="text-gray-400 text-sm ml-2">5.0 · 5 Reviews</span>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-900 border border-gray-800 p-6 flex flex-col gap-4 hover:border-yellow-500/40 transition-colors">
            <div className="flex gap-0.5">
              {[...Array(t.stars)].map((_, s) => <span key={s} className="text-yellow-400 text-sm">★</span>)}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed flex-1">"{t.text}"</p>
            <div className="border-t border-gray-800 pt-4">
              <p className="text-white font-bold text-sm">{t.name}</p>
              <p className="text-gray-500 text-xs mt-0.5">{t.city}</p>
              <p className="text-yellow-500 text-xs mt-1 font-medium">{t.unit}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
