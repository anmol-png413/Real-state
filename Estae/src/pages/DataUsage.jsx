import PolicyLayout from "../Components/PolicyLayout";

export default function DataUsage() {
  return (
    <PolicyLayout title="Data Usage Disclosure">
      <section>
        <p className="text-gray-600 leading-relaxed">
          This page explains clearly what data we collect from you, why we collect it, how it is used, and your rights regarding that data.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Data We Collect</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
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
                <td className="px-4 py-3">To match you with suitable properties</td>
              </tr>
              <tr>
                <td className="px-4 py-3">IP Address, Browser Info</td>
                <td className="px-4 py-3">Automatic (analytics)</td>
                <td className="px-4 py-3">Website performance and analytics</td>
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">How We Store Your Data</h2>
        <p className="text-gray-600 leading-relaxed">
          Your personal data submitted via forms is stored securely in our database (Supabase). Access is restricted to authorised team members only. We do not store payment information on our servers.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Who We Share Data With</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
          <li><strong>No third-party sale:</strong> We do not sell your data to any third party.</li>
          <li><strong>Developer:</strong> We may share your enquiry details with the project developer solely to process your request.</li>
          <li><strong>Google:</strong> Anonymised analytics and ad performance data is shared with Google as per their privacy policy.</li>
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
          <li>Right to access the data we hold about you</li>
          <li>Right to correct inaccurate data</li>
          <li>Right to request deletion of your data</li>
          <li>Right to withdraw consent for marketing communications</li>
        </ul>
        <p className="text-gray-600 mt-3">
          To exercise any of these rights, email us at <a href="mailto:info@trueeliteestate.com" className="text-yellow-600 hover:underline">info@trueeliteestate.com</a>.
        </p>
      </section>
    </PolicyLayout>
  );
}
