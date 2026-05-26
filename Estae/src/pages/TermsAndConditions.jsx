import PolicyLayout from "../Components/PolicyLayout";

export default function TermsAndConditions() {
  return (
    <PolicyLayout title="Terms & Conditions">
      <section>
        <p className="text-gray-600 leading-relaxed">
          By accessing or using this website, you agree to be bound by these Terms and Conditions. Please read them carefully before using our services.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">1. Use of Website</h2>
        <p className="text-gray-600 leading-relaxed">
          This website is intended for individuals who are interested in purchasing residential property in India. You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">2. No Contractual Obligation</h2>
        <p className="text-gray-600 leading-relaxed">
          Submitting an enquiry or downloading a brochure from this website does not constitute a booking, reservation, or any legal obligation on either party. A formal booking is only valid upon execution of a registered agreement for sale and receipt of booking amount.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">3. Accuracy of Information</h2>
        <p className="text-gray-600 leading-relaxed">
          While we strive to keep information current and accurate, AU RealEstate LLP does not guarantee the accuracy, completeness, or timeliness of any information on this website. Prices, availability, and specifications are subject to change without notice.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">4. Intellectual Property</h2>
        <p className="text-gray-600 leading-relaxed">
          All content on this website including text, images, graphics, and logos is the property of AU RealEstate LLP or its licensors. You may not reproduce, distribute, or use any content without prior written permission.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">5. Limitation of Liability</h2>
        <p className="text-gray-600 leading-relaxed">
          AU RealEstate LLP shall not be liable for any direct, indirect, incidental, or consequential loss or damage arising from your use of this website or reliance on the information provided herein.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">6. Governing Law</h2>
        <p className="text-gray-600 leading-relaxed">
          These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Uttar Pradesh.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">7. Contact</h2>
        <p className="text-gray-600">
          For questions regarding these Terms, contact us at <a href="mailto:info@trueeliteestate.com" className="text-yellow-600 hover:underline">info@trueeliteestate.com</a>.
        </p>
      </section>
    </PolicyLayout>
  );
}
