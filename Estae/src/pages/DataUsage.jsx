import PolicyLayout from "../Components/PolicyLayout";

export default function DataUsage() {
  return (
    <PolicyLayout title="Data Usage Disclosure">
      <section>
        <p className="text-gray-600 leading-relaxed">
          True Elite Estate is committed to being fully transparent about how we collect and use your data. This disclosure explains exactly what data we collect, why, how it is used, and your rights.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Data We Collect</h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 font-semibold">
              <tr>
                <th className="px-4 py-3">Data Type</th>
                <th className="px-4 py-3">How Collected</th>
                <th className="px-4 py-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-600">
              <tr>
                <td className="px-4 py-3">Name, Phone, Email</td>
                <td className="px-4 py-3">Enquiry / Contact Form</td>
                <td className="px-4 py-3">To respond to your property enquiry</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Property Preference</td>
                <td className="px-4 py-3">Contact Form</td>
                <td className="px-4 py-3">To match you with the right unit type</td>
              </tr>
              <tr>
                <td className="px-4 py-3">IP Address, Browser Info</td>
                <td className="px-4 py-3">Automatic (Google Analytics)</td>
                <td className="px-4 py-3">Website performance and traffic analysis</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Ad Interaction Data</td>
                <td className="px-4 py-3">Google Ads</td>
                <td className="px-4 py-3">To measure advertising effectiveness</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">How We Use Your Data</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
          <li>To contact you regarding your property enquiry via phone, email, or WhatsApp</li>
          <li>To share relevant project information, pricing, and brochures</li>
          <li>To schedule site visits to AU Cosmos Corner</li>
          <li>To pass your enquiry to AU Real Estate Pvt. Ltd. for processing (no other sharing)</li>
          <li>To improve our website experience and advertising campaigns</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">We Do Not</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
          <li>Sell or rent your personal data to any third party</li>
          <li>Share your data with unrelated businesses or advertisers</li>
          <li>Store payment or financial information</li>
          <li>Send unsolicited marketing emails without your consent</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Data Retention</h2>
        <p className="text-gray-600 leading-relaxed">
          We retain your personal data for up to 2 years from the date of collection, or until you request deletion — whichever is earlier.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Your Rights</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
          <li>Right to access the personal data we hold about you</li>
          <li>Right to correct inaccurate or outdated data</li>
          <li>Right to request deletion of your data</li>
          <li>Right to withdraw consent for marketing communications at any time</li>
        </ul>
        <p className="text-gray-600 mt-3">
          To exercise any of these rights, email us at{" "}
          <a href="mailto:omvir.shishodia@truelitestates.com" className="text-yellow-600 hover:underline">omvir.shishodia@truelitestates.com</a>.
        </p>
      </section>
    </PolicyLayout>
  );
}
