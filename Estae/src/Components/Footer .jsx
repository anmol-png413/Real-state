import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Overview", href: "#overview" },
  { name: "Amenities", href: "#amenities" },
  { name: "Highlights", href: "#highlights" },
  { name: "Price List", href: "#price" },
  { name: "Floor Plan", href: "#floor" },
  { name: "Location Map", href: "#location" },
];

const exploreLinks = [
  { name: "3 BHK Flats in Siddharth Vihar", to: "/3-bhk-flats-siddharth-vihar" },
  { name: "5 BHK Luxury Flats", to: "/5-bhk-flats-siddharth-vihar" },
  { name: "New Launch Siddharth Vihar", to: "/new-launch-siddharth-vihar" },
  { name: "Siddharth Vihar Guide", to: "/siddharth-vihar-ghaziabad" },
];

const features = [
  "3 BHK + 3 Toilet", "1780 Sq.Ft. Area", "11 Ft Ceiling Height",
  "Grand Clubhouse", "Swimming Pool", "24/7 Security",
];

const nearbyPlaces = [
  "City Centre — 20 Min.", "Amity University — 19 Min.",
  "Fortis Hospital — 23 Min.", "Mall Of India — 24 Min.",
  "Akshardham Temple — 33 Min.", "IGI Airport — 63 Min.",
];

export default function Footer({ onBookVisit }) {
  return (
    <>
    <footer className="w-full bg-gray-900 text-white">

      {/* Main Footer Grid */}
      <div className="w-full px-4 md:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Col 1 — Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-white text-sm flex-shrink-0">
              TE
            </div>
            <div>
              <p className="font-bold text-white text-base leading-tight">Truelite Estates LLP</p>
              <p className="text-gray-400 text-xs">Authorized Channel Partner</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium 3 BHK residences at Siddharth Vihar, Ghaziabad. Thoughtfully designed for
            modern families seeking comfort, style, and convenience.
          </p>

          {/* Social Icons */}
        {/* Social Icons */}
<div className="flex gap-3 mt-1">
  <a
    href="https://www.facebook.com/profile.php?id=61587504266755"
    target="_blank"
    rel="noreferrer"
    className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-yellow-500 flex items-center justify-center text-gray-400 hover:text-white text-xs cursor-pointer transition-colors"
  >
    f
  </a>
  
{/*   
  <a>
   
  </a> */}
</div>
        </div>

        {/* Col 2 — Quick Links */}
      <div className="flex flex-col gap-3">
  <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-1">
    Quick Links
  </h4>
  {quickLinks.map((link) => (
    <a key={link.name} href={link.href}
      className="text-gray-400 text-sm hover:text-yellow-400 transition-colors flex items-center gap-2"
    >
      <span className="text-yellow-500 text-xs">›</span>
      {link.name}
    </a>
  ))}
  <h4 className="text-white font-semibold text-sm uppercase tracking-widest mt-3 mb-1">
    Explore
  </h4>
  {exploreLinks.map((link) => (
    <Link key={link.name} to={link.to}
      className="text-gray-400 text-sm hover:text-yellow-400 transition-colors flex items-center gap-2"
    >
      <span className="text-yellow-500 text-xs">›</span>
      {link.name}
    </Link>
  ))}
</div>

        {/* Col 3 — Features */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-1">
            Key Features
          </h4>
          {features.map((f) => (
            <p key={f} className="text-gray-400 text-sm flex items-center gap-2">
              <span className="text-yellow-500 text-xs">✓</span>
              {f}
            </p>
          ))}
        </div>

        {/* Col 4 — Contact + Nearby */}
        <div className="flex flex-col gap-5">
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-3">
              Contact Us
            </h4>
            <div className="flex flex-col gap-2.5">
              <p className="text-gray-400 text-sm flex items-start gap-2">
                <span className="text-yellow-500 mt-0.5">📍</span>
                Siddharth Vihar, Ghaziabad, Uttar Pradesh
              </p>
              <button
                onClick={onBookVisit}
                className="text-yellow-400 text-sm flex items-center gap-2 bg-transparent border-none p-0 cursor-pointer font-bold hover:underline"
              >
                <span>📞</span>
                9711557670
              </button>
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <span className="text-yellow-500">✉️</span>
                omvir.shishodia@truelitestates.com
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-3">
              Nearby Places
            </h4>
            <div className="flex flex-col gap-1.5">
              {nearbyPlaces.map((p) => (
                <p key={p} className="text-gray-400 text-xs flex items-center gap-2">
                  <span className="text-yellow-500">•</span>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>  

      {/* Divider */}
      <div className="border-t border-gray-800 mx-4 md:mx-10" />

      {/* Policy Links */}
      <div className="w-full px-4 md:px-10 py-4 flex flex-wrap justify-center gap-x-5 gap-y-2 border-t border-gray-800">
        {[
          { label: "About Us", to: "/about" },
          { label: "Contact Us", to: "/contact" },
          { label: "Privacy Policy", to: "/privacy-policy" },
          { label: "Disclaimer", to: "/disclaimer" },
          { label: "RERA Disclaimer", to: "/rera-disclaimer" },
          { label: "Terms & Conditions", to: "/terms" },
          { label: "Data Usage", to: "/data-usage" },
          { label: "Authorized Channel Partner", to: "/authorized-partner" },
        ].map((link) => (
          <Link key={link.to} to={link.to}
            className="text-gray-500 text-xs hover:text-yellow-400 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* SEO keyword-rich text block — visible to crawlers */}
      <div className="w-full border-t border-gray-800 px-4 md:px-10 py-6">
        <p className="text-gray-600 text-xs leading-relaxed text-center max-w-4xl mx-auto">
          AU Cosmos Corner offers premium <strong className="text-gray-500">3 BHK apartments in Siddharth Vihar Ghaziabad</strong>, <strong className="text-gray-500">3 BHK+Servant luxury flats Ghaziabad</strong>, and <strong className="text-gray-500">5 BHK apartments Ghaziabad</strong> at a pre-launch price of ₹6,900/sq ft.
          This <strong className="text-gray-500">RERA approved residential project in Ghaziabad</strong> (UPRERAPRJ466336) by AU Real Estate Pvt. Ltd. features G+40 towers on 5.6 acres in <strong className="text-gray-500">Siddharth Vihar, Ghaziabad, Uttar Pradesh</strong>.
          Marketed by Truelite Estates LLP, Authorized Channel Partner — Golden I Tower T3, Unit 314, Greater Noida West 201309.
          For <strong className="text-gray-500">3 BHK flat booking in Ghaziabad</strong> or <strong className="text-gray-500">luxury apartment investment near Delhi NCR</strong>, call 9711557670.
        </p>
      </div>

      {/* Disclosure Strip */}
      <div className="w-full border-t border-gray-800 px-4 py-2.5 text-center" style={{ background: "#0a0a0a" }}>
        <p className="text-xs text-gray-500" style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.04em" }}>
          Marketed by <span className="text-yellow-500 font-semibold">Truelite Estates LLP</span> — Authorized Channel Partner of AU Real Estate Pvt. Ltd. | RERA: UPRERAPRJ466336
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-4 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-gray-800">
        <p className="text-gray-500 text-xs text-center sm:text-left">
          © {new Date().getFullYear()} Truelite Estates LLP. Authorized Channel Partner of AU Real Estate Pvt. Ltd.
        </p>
        <p className="text-gray-500 text-xs">
          RERA: UPRERAPRJ466336 · omvir.shishodia@truelitestates.com
        </p>
      </div>

    </footer>

    {/* ── Mobile Fixed Bottom Action Bar ── */}
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex"
      style={{ boxShadow: "0 -3px 12px rgba(0,0,0,0.2)" }}
    >
      {/* Book Visit — Yellow */}
      <button
        onClick={onBookVisit}
        className="flex-1 flex items-center justify-center gap-1.5 py-3"
        style={{ background: "#f5c842", border: "none", cursor: "pointer" }}
      >
        <span style={{ fontSize: "14px" }}>📅</span>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px",
          fontWeight: 800,
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          color: "#111",
        }}>Book Visit</span>
      </button>

      {/* Call — Light Blue */}
      <a
        href="tel:9711557670"
        className="flex-1 flex items-center justify-center gap-1.5 py-3"
        style={{ background: "#3b82f6", textDecoration: "none" }}
      >
        <span style={{ fontSize: "14px" }}>📞</span>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px",
          fontWeight: 800,
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          color: "#fff",
        }}>Call Now</span>
      </a>

      {/* WhatsApp — Green */}
      <a
        href="https://wa.me/9711557670?text=Hello%2C%20I%20am%20interested%20in%20buying%20a%20property%20at%20AU%20Real%20Estate.%20Please%20share%20details."
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-3"
        style={{ background: "#25d366", textDecoration: "none" }}
      >
        <span style={{ fontSize: "14px" }}>💬</span>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px",
          fontWeight: 800,
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          color: "#fff",
        }}>WhatsApp</span>
      </a>
    </div>
    </>
  );
}