import { useState } from "react";
import { useNavigate } from "react-router-dom";

const nameRegex = /^[a-zA-Z\s]{2,50}$/;
const phoneRegex = /^[6-9]\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// export default function ContactForm({ onPhoneClick }) {
export default function ContactForm({ onPhoneClick, source = "Contact Form", downloadBrochure = false, isModal = false }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // ✅ Loading state
  const [form, setForm] = useState({
    name: "", phone: "", email: "", interest: "", purpose: "", timeline: "", message: "",
  });
  const [errors, setErrors] = useState({ name: "", phone: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = { name: "", phone: "", email: "" };
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(form.name.trim())) {
      newErrors.name = "Only letters and spaces allowed";
    }
    const cleanPhone = form.phone.replace(/[\s\-()+ ]/g, "").replace(/^91/, "");
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = "Enter valid 10-digit mobile number";
    }
    if (form.email && !emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    setErrors(newErrors);
    return !newErrors.name && !newErrors.phone && !newErrors.email;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true); // ✅ Loading start

    try {
      const response = await fetch('https://real-state-udkw.vercel.app/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: form.name,
          phone: form.phone,
          email: form.email,
          interested_in: form.interest,
          purpose: form.purpose,
          timeline: form.timeline,
          message: form.message,
          source: source
        })
      });

      const data = await response.json();
    if (data.success) {
  if (downloadBrochure) {
    const link = document.createElement("a");
    link.href = "/brochure.pdf";
    link.download = "AU-Cosmos-Corner-Brochure.pdf";
    link.click();
  }
  navigate("/thank-you");
      } else {
        alert('Error: ' + JSON.stringify(data));
      }
    } catch (error) {
      alert('Something went wrong: ' + error.message);
    } finally {
      setLoading(false); // ✅ Loading end
    }
  };

  return (
    <section className={`w-full bg-gray-50 px-3 rounded-3xl ${isModal ? 'md:px-6 py-3 md:py-4' : 'md:px-10 py-4 md:py-8'}`}>
      <h2 className={`font-bold text-center text-gray-900 mb-0.5 ${isModal ? 'text-lg md:text-2xl' : 'text-lg md:text-3xl'}`}>Book a Free Site Visit</h2>
      <p className={`text-center text-gray-500 text-xs md:text-sm max-w-lg mx-auto ${isModal ? 'mb-2 md:mb-3' : 'mb-3 md:mb-6'}`}>
        Fill in your details and our team will get back to you within 24 hours.
      </p>

      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="flex flex-col md:flex-row">

          {/* Left Yellow Panel */}
          <div className={`bg-yellow-500 md:w-2/5 hidden md:flex flex-col justify-between ${isModal ? 'px-4 py-4 gap-3' : 'px-6 py-6 gap-4'}`}>
            <div>
              <h3 className="text-white text-lg font-bold mb-1">AU Cosmos Corner</h3>
              <p className="text-yellow-100 text-xs mb-1">by AU Real Estate Pvt. Ltd.</p>
              <p className="text-yellow-100 text-xs leading-relaxed">
                Experience luxury living at Siddharth Vihar, Ghaziabad. Premium 3 BHK homes designed for modern lifestyle.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { icon: "📍", label: "ADDRESS", value: "Siddharth Vihar, Ghaziabad, UP", clickable: false },
                { icon: "📞", label: "PHONE", value: "9711557670", clickable: true },
                { icon: "🕐", label: "WORKING HOURS", value: "Mon – Sun: 9:00 AM – 7:00 PM", clickable: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3"
                  style={item.clickable ? { cursor: "pointer" } : {}}
                  onClick={item.clickable && onPhoneClick ? onPhoneClick : undefined}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                    style={{ background: item.clickable ? "#f59e0b" : "#facc15" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold uppercase tracking-wide leading-none mb-0.5">{item.label}</p>
                    <p
                      className="text-xs"
                      style={item.clickable ? { color: "#fff", fontWeight: 800, fontSize: "14px", letterSpacing: "0.04em" } : { color: "#fef9c3" }}
                    >
                      {item.value}
                      {item.clickable && <span style={{ marginLeft: "6px", fontSize: "11px", opacity: 0.8 }}>→ Get Callback</span>}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-yellow-400 pt-3">
              <p className="text-yellow-100 text-xs leading-relaxed">
                ✅ RERA Approved &nbsp;|&nbsp; ✅ No Hidden Charges &nbsp;|&nbsp; ✅ Free Site Visit
              </p>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className={`md:w-3/5 px-4 py-4 ${isModal ? 'md:px-5 md:py-4' : 'md:px-6 md:py-6'}`}>
            <form onSubmit={handleSubmit} className={`flex flex-col ${isModal ? 'gap-2 md:gap-2' : 'gap-2 md:gap-3'}`}>
              <h3 className="text-sm md:text-base font-semibold text-gray-900 md:mb-1">Enquiry Details</h3>

              <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                <div className="flex-1 flex flex-col gap-0.5 md:gap-1">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text" name="name" value={form.name}
                    onChange={handleChange} required placeholder="Rahul Sharma"
                    className={`border rounded-lg md:rounded-xl px-3 py-2 md:py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 transition ${errors.name ? "border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-yellow-400 focus:ring-yellow-100"}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>
                <div className="flex-1 flex flex-col gap-0.5 md:gap-1">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Phone <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel" name="phone" value={form.phone}
                    onChange={handleChange} required placeholder="+91 98765 43210"
                    className={`border rounded-lg md:rounded-xl px-3 py-2 md:py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 transition ${errors.phone ? "border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-yellow-400 focus:ring-yellow-100"}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                </div>
              </div>

              <div className="flex flex-col gap-0.5 md:gap-1">
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Interested In</label>
                <select name="interest" value={form.interest} onChange={handleChange}
                  className="border border-gray-200 rounded-lg md:rounded-xl px-3 py-2 md:py-2.5 text-sm text-gray-700 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition bg-white"
                >
                  <option value="">Select configuration</option>
                  <option value="3bhk-1780">3 BHK + 3 Toilet (1780 Sq.Ft.)</option>
                  <option value="3bhk-1972">3 BHK + Servant (1972 Sq.Ft.)</option>
                  <option value="5bhk-3175">5 BHK + Servant (3175 Sq.Ft.)</option>
                  <option value="site-visit">Free Site Visit</option>
                  <option value="investment">Investment / Rental</option>
                </select>
              </div>

              <div className="flex flex-col gap-0.5 md:gap-1">
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Purpose</label>
                <select name="purpose" value={form.purpose} onChange={handleChange}
                  className="border border-gray-200 rounded-lg md:rounded-xl px-3 py-2 md:py-2.5 text-sm text-gray-700 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition bg-white"
                >
                  <option value="">Self-use or Investment?</option>
                  <option value="self-use">Self Use</option>
                  <option value="investment">Investment</option>
                  <option value="both">Both</option>
                </select>
              </div>

              <div className="flex flex-col gap-0.5 md:gap-1">
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Timeline to Buy</label>
                <select name="timeline" value={form.timeline} onChange={handleChange}
                  className="border border-gray-200 rounded-lg md:rounded-xl px-3 py-2 md:py-2.5 text-sm text-gray-700 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition bg-white"
                >
                  <option value="">When are you planning to buy?</option>
                  <option value="0-3months">Within 3 Months</option>
                  <option value="3-6months">3–6 Months</option>
                  <option value="exploring">Just Exploring</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-300 disabled:cursor-not-allowed text-white font-bold py-2.5 rounded-xl transition-colors text-sm shadow-sm"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Send Enquiry →"
                )}
              </button>

              <p className="text-center text-gray-400 text-xs">
                By submitting, you agree to be contacted by our team and accept our{" "}
                <a href="/privacy-policy" className="text-yellow-600 underline hover:text-yellow-700">Privacy Policy</a>.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}