import PolicyLayout from "../Components/PolicyLayout";

export default function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy">
      <section>
        <p className="text-gray-600 leading-relaxed">
          Truelite Estates LLP ("we", "us", "our"), an authorized channel partner of AU Real Estate Pvt. Ltd., operates this website. This Privacy Policy describes how we collect, use, store, and protect your personal information when you visit our site or submit an enquiry.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
          <li>Full name, phone number, and email address (submitted via enquiry or contact forms)</li>
          <li>Property interest and budget range (if provided)</li>
          <li>IP address, browser type, device info, and pages visited (collected automatically via analytics)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
          <li>To respond to your property enquiry and schedule site visits</li>
          <li>To share verified project details, pricing, and brochures</li>
          <li>To send follow-up communications related to your expressed interest</li>
          <li>To comply with legal and regulatory obligations under RERA</li>
          <li>To measure and improve the performance of our advertising campaigns</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">3. Data Storage & Security</h2>
        <p className="text-gray-600 leading-relaxed">
          Your data is stored securely on encrypted cloud servers. We do not sell, rent, or trade your personal data to any third party. Only authorised team members have access to submitted enquiry data.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">4. Sharing of Information</h2>
        <p className="text-gray-600 leading-relaxed">
          We may share your enquiry details with <strong>AU Real Estate Pvt. Ltd.</strong> solely for the purpose of processing your property enquiry. No data is shared with unrelated third parties.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">5. Cookies & Analytics</h2>
        <p className="text-gray-600 leading-relaxed">
          We use Google Analytics and Google Ads to understand website traffic and measure ad performance. These tools may place cookies on your device. You can manage cookie preferences in your browser settings.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">6. Your Rights</h2>
        <p className="text-gray-600 leading-relaxed">
          You have the right to access, correct, or request deletion of your personal data at any time. To exercise these rights, email us at{" "}
          <a href="mailto:omvir.shishodia@truelitestates.com" className="text-yellow-600 hover:underline">omvir.shishodia@truelitestates.com</a>.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">7. Contact for Privacy Queries</h2>
        <p className="text-gray-600">
          <strong>Truelite Estates LLP</strong><br />
          Golden I, Tower T3, Unit 314, Greater Noida West – 201309<br />
          <a href="mailto:omvir.shishodia@truelitestates.com" className="text-yellow-600 hover:underline">omvir.shishodia@truelitestates.com</a><br />
          +91 97115 57670
        </p>
      </section>
    </PolicyLayout>
  );
}
