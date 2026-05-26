import PolicyLayout from "../Components/PolicyLayout";

export default function Disclaimer() {
  return (
    <PolicyLayout title="Disclaimer">
      <section>
        <p className="text-gray-600 leading-relaxed">
          This website is operated by <strong>Truelite Estates LLP</strong>, an officially authorized channel partner of <strong>AU Real Estate Pvt. Ltd.</strong> (RERA No. UPRERAPRJ466336). The information provided here is for general informational purposes and intended for prospective homebuyers interested in AU Cosmos Corner, Greater Noida West.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Indicative Information</h2>
        <p className="text-gray-600 leading-relaxed">
          All project details including floor plans, specifications, amenities, pricing, renders, and images displayed on this website are indicative and for representation purposes only. Final specifications, pricing, and terms are subject to change without prior notice and shall be governed solely by the registered agreement for sale executed between the buyer and AU Real Estate Pvt. Ltd.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">No Guarantee of Availability</h2>
        <p className="text-gray-600 leading-relaxed">
          Listing or display of any unit, pricing, or floor plan does not constitute an offer, allotment, or guarantee of availability. Prices and inventory are subject to revision at the developer's discretion.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Not Financial or Legal Advice</h2>
        <p className="text-gray-600 leading-relaxed">
          Nothing on this website constitutes financial, investment, or legal advice. Prospective buyers are encouraged to conduct independent due diligence and seek advice from qualified legal and financial professionals before making any purchase decision.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Authorized Marketing Partner</h2>
        <p className="text-gray-600 leading-relaxed">
          Truelite Estates LLP is officially authorized in writing by AU Real Estate Pvt. Ltd. to conduct all marketing and advertising activities, including digital advertising on platforms such as Google and Meta, for RERA project no. UPRERAPRJ466336.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
        <p className="text-gray-600">
          For any queries, contact us at{" "}
          <a href="mailto:omvir.shishodia@truelitestates.com" className="text-yellow-600 hover:underline">omvir.shishodia@truelitestates.com</a>{" "}
          or call <a href="tel:+919711557670" className="text-yellow-600 hover:underline">+91 97115 57670</a>.
        </p>
      </section>
    </PolicyLayout>
  );
}
