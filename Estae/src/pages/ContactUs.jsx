import PolicyLayout from "../Components/PolicyLayout";

export default function ContactUs() {
  return (
    <PolicyLayout title="Contact Us">
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Reach Us</h2>
        <p className="text-gray-600 leading-relaxed">
          We are available Monday to Saturday, 10:00 AM – 7:00 PM IST. Our team typically responds within a few hours. You can contact us via email, phone, or WhatsApp.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-xl p-6 space-y-1">
          <h3 className="font-bold text-gray-900">Business Email</h3>
          <a href="mailto:info@trueeliteestate.com" className="text-yellow-600 hover:underline text-sm">
            info@trueeliteestate.com
          </a>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 space-y-1">
          <h3 className="font-bold text-gray-900">Phone</h3>
          <a href="tel:+919711557670" className="text-yellow-600 hover:underline text-sm">
            +91 97115 57670
          </a>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 space-y-1">
          <h3 className="font-bold text-gray-900">Office Address</h3>
          <p className="text-gray-600 text-sm">
            True Elite Estate<br />
            Golden I, Tower T3, Unit 314<br />
            Greater Noida West, Uttar Pradesh – 201309
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 space-y-1">
          <h3 className="font-bold text-gray-900">WhatsApp</h3>
          <a
            href="https://wa.me/9711557670"
            target="_blank"
            rel="noreferrer"
            className="text-yellow-600 hover:underline text-sm"
          >
            Chat with us on WhatsApp →
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">RERA & Authorization Details</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 text-sm text-gray-700 space-y-1">
          <p><strong>Developer:</strong> AU Real Estate Pvt. Ltd.</p>
          <p><strong>RERA Project No.:</strong> UPRERAPRJ466336</p>
          <p><strong>Channel Partner:</strong> True Elite Estate</p>
          <p><strong>CP RERA No.:</strong> [YOUR-CP-RERA-NO]</p>
          <p><strong>Authorization:</strong> Written authorization held from AU Real Estate Pvt. Ltd.</p>
        </div>
      </section>
    </PolicyLayout>
  );
}
