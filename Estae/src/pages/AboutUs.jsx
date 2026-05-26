import PolicyLayout from "../Components/PolicyLayout";

export default function AboutUs() {
  return (
    <PolicyLayout title="About Us">
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed">
          AU RealEstate LLP is a trusted real estate channel partner based in Greater Noida West, Uttar Pradesh. We specialise in connecting homebuyers with premium residential projects that match their lifestyle and investment goals.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          Our mission is to simplify the home-buying journey by providing transparent information, expert guidance, and end-to-end assistance — from site visits to final registration.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">What We Do</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
          <li>Represent RERA-registered residential projects</li>
          <li>Provide unbiased project comparisons and pricing guidance</li>
          <li>Assist buyers through documentation and home loan coordination</li>
          <li>Facilitate site visits and post-sale support</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Our Office</h2>
        <p className="text-gray-600 leading-relaxed">
          Golden I, Unit 314, Greater Noida West, Uttar Pradesh, India
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
        <p className="text-gray-600">Email: <a href="mailto:info@trueeliteestate.com" className="text-yellow-600 hover:underline">info@trueeliteestate.com</a></p>
        <p className="text-gray-600 mt-1">Phone: <a href="tel:+919711557670" className="text-yellow-600 hover:underline">+91 97115 57670</a></p>
      </section>
    </PolicyLayout>
  );
}
