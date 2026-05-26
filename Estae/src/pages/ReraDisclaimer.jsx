import PolicyLayout from "../Components/PolicyLayout";

export default function ReraDisclaimer() {
  return (
    <PolicyLayout title="RERA Disclaimer">
      <section>
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
          <p className="text-sm text-yellow-900 font-semibold">RERA Project Registration</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">UPRERAPRJ466336</p>
          <p className="text-sm text-gray-600 mt-1">Registered under Uttar Pradesh Real Estate Regulatory Authority (UP RERA)</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">About RERA</h2>
        <p className="text-gray-600 leading-relaxed">
          The Real Estate (Regulation and Development) Act, 2016 (RERA) was enacted to protect the interest of homebuyers and promote transparency and accountability in the real estate sector. This project is duly registered under UP RERA.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">RERA Compliance Statement</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
          <li>This project is registered with UP RERA under registration number <strong>UPRERAPRJ466336</strong>.</li>
          <li>All project details are available on the UP RERA website: <a href="https://www.up-rera.in" target="_blank" rel="noreferrer" className="text-yellow-600 hover:underline">www.up-rera.in</a></li>
          <li>Buyers are advised to verify all project details independently on the RERA portal before making any purchase decision.</li>
          <li>Any booking or purchase of a unit will be governed by the terms of the registered agreement for sale.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Channel Partner</h2>
        <p className="text-gray-600 leading-relaxed">
          AU RealEstate LLP is an Authorized Channel Partner for this project. Our channel partner RERA registration is currently under processing with UP RERA.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Important Notice</h2>
        <p className="text-gray-600 leading-relaxed">
          The content on this website is for informational purposes only. All images, floor plans, specifications, and pricing are indicative and subject to change. The final details will be as per the registered agreement for sale executed between the buyer and the developer.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Contact for RERA Queries</h2>
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
