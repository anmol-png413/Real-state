import PolicyLayout from "../Components/PolicyLayout";

export default function ReraDisclaimer() {
  return (
    <PolicyLayout title="RERA Disclaimer">
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
            <p className="text-xs text-yellow-800 font-semibold uppercase tracking-widest">RERA Project Registration</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">UPRERAPRJ466336</p>
            <p className="text-sm text-gray-600 mt-1">Developer: AU Real Estate Pvt. Ltd.</p>
            <p className="text-sm text-gray-600">Registered with: UP RERA</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">Authorized Channel Partner</p>
            <p className="text-xl font-bold text-gray-900 mt-1">Truelite Estates LLP</p>
            
            <p className="text-sm text-gray-600">Written authorization held from developer</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">About UP RERA</h2>
        <p className="text-gray-600 leading-relaxed">
          The Real Estate (Regulation and Development) Act, 2016 (RERA) was enacted to protect homebuyers' interests and ensure transparency in the real estate sector. Under RERA, all real estate projects and agents must be registered with the respective state authority before any marketing or sale activity.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">RERA Compliance Statement</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
          <li>This project is duly registered with UP RERA under registration number <strong>UPRERAPRJ466336</strong>.</li>
          <li>Truelite Estates LLP is an authorized channel partner of AU Real Estate Pvt. Ltd. and is registered under UP RERA.</li>
          <li>All marketing and advertising activities are conducted with written authorization from the developer.</li>
          <li>Project details are verifiable on the UP RERA portal: <a href="https://www.up-rera.in" target="_blank" rel="noreferrer" className="text-yellow-600 hover:underline">www.up-rera.in</a></li>
          <li>Any booking or purchase shall be governed by the terms of the registered agreement for sale between the buyer and AU Real Estate Pvt. Ltd.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Important Notice</h2>
        <p className="text-gray-600 leading-relaxed">
          All images, renders, floor plans, and pricing displayed on this website are indicative and subject to change. Final details will be as per the registered agreement for sale. Buyers are advised to verify all project information on the UP RERA portal before making any purchase decision.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Verify on UP RERA</h2>
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
        <p className="text-gray-600">
          <strong>Truelite Estates LLP</strong><br />
          Golden I, Tower T3, Unit 314, Greater Noida West – 201309<br />
          <a href="mailto:omvir.shishodia@truelitestates.com" className="text-yellow-600 hover:underline">omvir.shishodia@truelitestates.com</a> · <a href="tel:+919711557670" className="text-yellow-600 hover:underline">+91 97115 57670</a>
        </p>
      </section>
    </PolicyLayout>
  );
}
