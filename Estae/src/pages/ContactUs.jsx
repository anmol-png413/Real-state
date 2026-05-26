import PolicyLayout from "../Components/PolicyLayout";

export default function ContactUs() {
  return (
    <PolicyLayout title="Contact Us">
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Get in Touch</h2>
        <p className="text-gray-600 leading-relaxed">
          We are available Monday to Saturday, 10:00 AM – 7:00 PM IST. Reach out via any of the channels below and our team will respond within 24 hours.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-xl p-6 space-y-2">
          <h3 className="font-bold text-gray-900">Business Email</h3>
          <a href="mailto:info@trueeliteestate.com" className="text-yellow-600 hover:underline text-sm">
            info@trueeliteestate.com
          </a>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 space-y-2">
          <h3 className="font-bold text-gray-900">Phone</h3>
          <a href="tel:+919711557670" className="text-yellow-600 hover:underline text-sm">
            +91 97115 57670
          </a>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 space-y-2">
          <h3 className="font-bold text-gray-900">Office Address</h3>
          <p className="text-gray-600 text-sm">
            AU RealEstate LLP<br />
            Golden I, Unit 314<br />
            Greater Noida West, Uttar Pradesh, India
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 space-y-2">
          <h3 className="font-bold text-gray-900">WhatsApp</h3>
          <a
            href="https://wa.me/9711557670"
            target="_blank"
            rel="noreferrer"
            className="text-yellow-600 hover:underline text-sm"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">RERA Registration</h2>
        <p className="text-gray-600 text-sm">
          RERA Project No.: <strong>UPRERAPRJ466336</strong><br />
          Authorized Channel Partner: Under Processing — RERA UP
        </p>
      </section>
    </PolicyLayout>
  );
}
