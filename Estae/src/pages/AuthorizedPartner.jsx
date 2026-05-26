import PolicyLayout from "../Components/PolicyLayout";

export default function AuthorizedPartner() {
  return (
    <PolicyLayout title="Authorized Channel Partner">
      <section>
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-6 space-y-2">
          <p className="text-xs text-yellow-800 font-semibold uppercase tracking-widest">Official Authorization</p>
          <p className="text-2xl font-bold text-gray-900">Truelite Estates LLP</p>
          <p className="text-sm text-gray-700">Authorized Channel Partner of <strong>AU Real Estate Pvt. Ltd.</strong></p>
          <p className="text-sm text-gray-600">RERA Project No.: <strong>UPRERAPRJ466336</strong></p>

          <p className="text-sm text-gray-600">Written authorization: Held from developer</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Our Authorization from AU Real Estate Pvt. Ltd.</h2>
        <p className="text-gray-600 leading-relaxed">
          Truelite Estates LLP holds an official written authorization from <strong>AU Real Estate Pvt. Ltd.</strong> granting us full rights to market, advertise, and facilitate sales for their RERA-registered residential project — AU Cosmos Corner (RERA No. UPRERAPRJ466336). This authorization expressly covers all digital marketing activities including advertising on Google and Meta platforms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">What is a RERA Authorized Channel Partner?</h2>
        <p className="text-gray-600 leading-relaxed">
          Under the Real Estate (Regulation and Development) Act, 2016, all real estate agents and channel partners must be registered with the respective state RERA authority. A RERA-registered Channel Partner is legally authorized to market and sell RERA-registered projects and is bound by a strict code of conduct to protect buyer interests.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Our Commitments</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
          <li>We represent only RERA-registered projects with valid registrations</li>
          <li>All project information shared is verified with and approved by the developer</li>
          <li>We do not charge any brokerage or hidden fees from buyers</li>
          <li>All transactions are fully transparent and properly documented</li>
          <li>We conduct advertising only with explicit written authorization from the developer</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Verify on UP RERA</h2>
        <p className="text-gray-600 mb-3">
          You can independently verify the project and our channel partner registration on the UP RERA portal.
        </p>
        <a
          href="https://www.up-rera.in"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-5 py-2.5 bg-gray-900 text-white text-sm font-bold hover:bg-gray-700 transition-colors rounded"
        >
          Visit UP RERA Portal →
        </a>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
        <p className="text-gray-600">
          <strong>Truelite Estates LLP</strong><br />
          Golden I, Tower T3, Unit 314, Greater Noida West – 201309<br />
          <a href="mailto:omvir.shishodia@truelitestates.com" className="text-yellow-600 hover:underline">omvir.shishodia@truelitestates.com</a><br />
          <a href="tel:+919711557670" className="text-yellow-600 hover:underline">+91 97115 57670</a>
        </p>
      </section>
    </PolicyLayout>
  );
}
