import PolicyLayout from "../Components/PolicyLayout";

export default function Disclaimer() {
  return (
    <PolicyLayout title="Disclaimer">
      <section>
        <p className="text-gray-600 leading-relaxed">
          The information provided on this website is for general informational purposes only. AU RealEstate LLP makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information displayed.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Property Information</h2>
        <p className="text-gray-600 leading-relaxed">
          All project details, floor plans, specifications, pricing, and images displayed on this website are indicative and subject to change without notice. The developer reserves the right to modify specifications and amenities. Final details will be as per the registered sale agreement.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">No Guarantee of Availability</h2>
        <p className="text-gray-600 leading-relaxed">
          Listing of any property on this website does not constitute an offer or guarantee of availability. Prices and inventory are subject to change at any time without prior notice.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Investment Advice</h2>
        <p className="text-gray-600 leading-relaxed">
          Nothing on this website constitutes financial, legal, or investment advice. Prospective buyers are advised to conduct their own due diligence and consult independent legal and financial advisors before making any investment decision.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">External Links</h2>
        <p className="text-gray-600 leading-relaxed">
          This website may contain links to external websites. AU RealEstate LLP has no control over the content of those sites and accepts no responsibility for them.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
        <p className="text-gray-600">
          For any queries regarding the information on this website, please contact us at <a href="mailto:info@trueeliteestate.com" className="text-yellow-600 hover:underline">info@trueeliteestate.com</a>.
        </p>
      </section>
    </PolicyLayout>
  );
}
