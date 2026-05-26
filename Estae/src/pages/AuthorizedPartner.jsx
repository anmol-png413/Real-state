import PolicyLayout from "../Components/PolicyLayout";

export default function AuthorizedPartner() {
  return (
    <PolicyLayout title="Authorized Channel Partner">
      <section>
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
          <p className="text-sm text-yellow-900 font-semibold">Channel Partner Status</p>
          <p className="text-xl font-bold text-gray-900 mt-1">AU RealEstate LLP</p>
          <p className="text-sm text-gray-600 mt-1">RERA Channel Partner Registration: <strong>Under Processing — UP RERA</strong></p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">What is an Authorized Channel Partner?</h2>
        <p className="text-gray-600 leading-relaxed">
          An Authorized Channel Partner (ACP) is a RERA-registered real estate agent or firm legally authorized to market and sell RERA-registered projects on behalf of the developer. Under the Real Estate (Regulation and Development) Act, 2016, all channel partners must be registered with the respective state RERA authority.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Our Authorization</h2>
        <p className="text-gray-600 leading-relaxed">
          AU RealEstate LLP is an authorized channel partner for <strong>UPRERAPRJ466336</strong>. We operate under the guidelines set by UP RERA and are committed to ethical, transparent, and compliant real estate practices.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed mt-3">
          <li>We represent only RERA-registered projects</li>
          <li>All pricing and project information shared is verified with the developer</li>
          <li>We do not charge any brokerage from buyers</li>
          <li>All transactions are transparent and fully documented</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Verify on UP RERA</h2>
        <p className="text-gray-600 leading-relaxed">
          You can verify the project registration independently on the UP RERA portal:
        </p>
        <a
          href="https://www.up-rera.in"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-3 px-5 py-2.5 bg-gray-900 text-white text-sm font-bold hover:bg-gray-700 transition-colors rounded"
        >
          Visit UP RERA Portal →
        </a>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
        <p className="text-gray-600">
          <strong>AU RealEstate LLP</strong><br />
          Golden I, Unit 314, Greater Noida West, Uttar Pradesh<br />
          Email: <a href="mailto:info@trueeliteestate.com" className="text-yellow-600 hover:underline">info@trueeliteestate.com</a><br />
          Phone: <a href="tel:+919711557670" className="text-yellow-600 hover:underline">+91 97115 57670</a>
        </p>
      </section>
    </PolicyLayout>
  );
}
