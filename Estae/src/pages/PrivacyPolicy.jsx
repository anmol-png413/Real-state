import PolicyLayout from "../Components/PolicyLayout";

export default function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy">
      <section>
        <p className="text-gray-600 leading-relaxed">
          AU RealEstate LLP ("we", "us", "our") operates the website <strong>trueeliteestate.com</strong>. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or submit an enquiry.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
          <li>Full name, phone number, and email address (via enquiry/contact forms)</li>
          <li>Your interest in specific property types</li>
          <li>IP address, browser type, and pages visited (via analytics tools)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
          <li>To respond to your property enquiries</li>
          <li>To schedule site visits and share project details</li>
          <li>To send you relevant property updates (only if you opt in)</li>
          <li>To improve our website and services</li>
          <li>To comply with legal and regulatory obligations</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">3. Data Storage</h2>
        <p className="text-gray-600 leading-relaxed">
          Your data is stored securely on Supabase cloud servers. We do not sell, trade, or rent your personal data to third parties. Data is retained only as long as necessary to fulfil the purpose for which it was collected.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">4. Cookies</h2>
        <p className="text-gray-600 leading-relaxed">
          Our website may use cookies to enhance user experience and gather anonymous traffic data. You can disable cookies in your browser settings at any time.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">5. Third-Party Services</h2>
        <p className="text-gray-600 leading-relaxed">
          We use Google Ads and Google Analytics to measure advertising performance. These services may collect anonymised data as per their own privacy policies.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">6. Your Rights</h2>
        <p className="text-gray-600 leading-relaxed">
          You may request access to, correction of, or deletion of your personal data at any time by emailing us at <a href="mailto:info@trueeliteestate.com" className="text-yellow-600 hover:underline">info@trueeliteestate.com</a>.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">7. Contact</h2>
        <p className="text-gray-600">
          For privacy-related queries, contact:<br />
          <strong>AU RealEstate LLP</strong><br />
          Golden I, Unit 314, Greater Noida West, UP<br />
          <a href="mailto:info@trueeliteestate.com" className="text-yellow-600 hover:underline">info@trueeliteestate.com</a>
        </p>
      </section>
    </PolicyLayout>
  );
}
