import PolicyLayout from "../Components/PolicyLayout";

export default function TermsAndConditions() {
  return (
    <PolicyLayout title="Terms & Conditions">
      <section>
        <p className="text-gray-600 leading-relaxed">
          By accessing or using this website, you agree to be bound by the following Terms and Conditions. This website is operated by <strong>True Elite Estate</strong>, an officially authorized channel partner of <strong>AU Real Estate Pvt. Ltd.</strong> Please read these terms carefully before proceeding.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">1. Nature of This Website</h2>
        <p className="text-gray-600 leading-relaxed">
          This website is a marketing platform operated by True Elite Estate on behalf of AU Real Estate Pvt. Ltd., for the purpose of providing information about the residential project AU Cosmos Corner (RERA No. UPRERAPRJ466336). It is intended solely for individuals seeking information about purchasing a residential unit in the project.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">2. No Contractual Obligation</h2>
        <p className="text-gray-600 leading-relaxed">
          Submitting an enquiry, downloading a brochure, or requesting a callback does not constitute a booking, allotment, or any legal or financial obligation on either party. A formal booking is valid only upon execution of a registered agreement for sale and receipt of booking amount by AU Real Estate Pvt. Ltd.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">3. Accuracy of Information</h2>
        <p className="text-gray-600 leading-relaxed">
          While all information displayed is reviewed and approved by the developer, it is indicative in nature. Prices, specifications, floor plans, and availability are subject to change without prior notice. The final details shall be governed by the registered agreement for sale.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">4. Authorized Advertising</h2>
        <p className="text-gray-600 leading-relaxed">
          True Elite Estate is expressly authorized in writing by AU Real Estate Pvt. Ltd. to conduct marketing and advertising activities for RERA project no. UPRERAPRJ466336. All advertisements are truthful, non-misleading, and in compliance with Google Ads policies and applicable Indian laws.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">5. Intellectual Property</h2>
        <p className="text-gray-600 leading-relaxed">
          All content on this website — including text, images, brochures, and logos — is the property of AU Real Estate Pvt. Ltd. or True Elite Estate. Reproduction or redistribution without written consent is prohibited.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">6. Limitation of Liability</h2>
        <p className="text-gray-600 leading-relaxed">
          True Elite Estate shall not be liable for any loss or damage arising from your reliance on information provided on this website. Buyers are advised to verify all details independently before making any purchase decision.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">7. Governing Law</h2>
        <p className="text-gray-600 leading-relaxed">
          These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Uttar Pradesh.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">8. Contact</h2>
        <p className="text-gray-600">
          <strong>True Elite Estate</strong> · Golden I, Tower T3, Unit 314, Greater Noida West – 201309<br />
          <a href="mailto:omvir.shishodia@truelitestates.com" className="text-yellow-600 hover:underline">omvir.shishodia@truelitestates.com</a> · <a href="tel:+919711557670" className="text-yellow-600 hover:underline">+91 97115 57670</a>
        </p>
      </section>
    </PolicyLayout>
  );
}
