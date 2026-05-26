import PolicyLayout from "../Components/PolicyLayout";

export default function AboutUs() {
  return (
    <PolicyLayout title="About Us">
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed">
          Truelite Estates LLP is an officially authorized channel partner of <strong>AU Real Estate Pvt. Ltd.</strong>, one of the leading real estate developers in the National Capital Region (NCR). We are officially authorized by AU Real Estate Pvt. Ltd. to market, promote, and assist buyers with their flagship residential project — <strong>AU Cosmos Corner</strong>, RERA registration no. <strong>UPRERAPRJ466336</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Our Authorization</h2>
        <p className="text-gray-600 leading-relaxed">
          We hold a written authorization from AU Real Estate Pvt. Ltd. granting us full rights to conduct marketing and advertising activities — including Google Ads and Meta Ads campaigns — for their registered projects. Our RERA channel partner registration is active and in compliance with the Real Estate (Regulation and Development) Act, 2016.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">What We Do</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
          <li>Officially authorized to market RERA-registered projects of AU Real Estate Pvt. Ltd.</li>
          <li>Assist homebuyers with site visits, pricing guidance, and project walkthroughs</li>
          <li>Provide transparent, accurate, and verified project information</li>
          <li>Support buyers through documentation, home loan coordination, and registration</li>
          <li>Offer post-sale assistance and buyer support</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Our Office</h2>
        <p className="text-gray-600 leading-relaxed">
          <strong>Truelite Estates LLP</strong><br />
          Golden I, Tower T3, Unit 314<br />
          Greater Noida West, Uttar Pradesh – 201309
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
        <p className="text-gray-600">Business Email: <a href="mailto:omvir.shishodia@truelitestates.com" className="text-yellow-600 hover:underline">omvir.shishodia@truelitestates.com</a></p>
        <p className="text-gray-600 mt-1">Phone: <a href="tel:+919711557670" className="text-yellow-600 hover:underline">+91 97115 57670</a></p>
      </section>
    </PolicyLayout>
  );
}
