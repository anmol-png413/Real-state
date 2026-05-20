import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Google Ads Conversion Tracking — apna conversion ID yahan lagao
  //   // if (typeof window.gtag === "function") {
  //   //   window.gtag("event", "conversion", {
  //   //     send_to: "AW-XXXXXXXXX/YYYYYYYYYYY", // <-- apna Google Ads conversion ID
  //   //   });
  //   // }

  //   // Google Analytics Event
  //   // if (typeof window.gtag === "function") {
  //   //   window.gtag("event", "form_submit", {
  //   //     event_category: "Lead",
  //   //     event_label: "Enquiry Form",
  //   //   });
  //   // }
  // }, []); 
  useEffect(() => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "thank_you_page",
      eventCategory: "Lead",
      eventLabel: "Enquiry Form Submitted",
    });
  }
}, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-md p-10 max-w-md w-full text-center">

        <div className="w-16 h-16 rounded-full bg-yellow-50 flex items-center justify-center text-4xl mx-auto mb-4">
          🎉
        </div>

        <p className="text-xs uppercase tracking-widest text-yellow-600 font-semibold mb-2">
          AU Realestate
        </p>

        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Thank You!
        </h1>

        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          We've received your enquiry. Our team will contact you within <strong>24 hours</strong>.
        </p>

        <div className="bg-yellow-50 border border-yellow-100 rounded-xl px-4 py-3 mb-6 text-left">
          <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">Project Details</p>
          <p className="text-sm text-gray-700 font-medium">Siddharth Vihar, Ghaziabad</p>
          <p className="text-xs text-gray-400 mt-0.5">3 BHK, 3 BHK + Servant, 5 BHK + Servant</p>
          <p className="text-xs text-gray-400 mt-0.5">Pre-launch: ₹6900/sq ft</p>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href="https://wa.me/9711557670?text=Hello%2C%20I%20am%20interested%20in%20buying%20a%20property%20at%20AU%20Real%20Estate."
            target="_blank"
            rel="noreferrer"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors text-sm"
          >
            Chat on WhatsApp
          </a>

          <button
            onClick={() => navigate("/")}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-xl transition-colors text-sm"
          >
            Back to Home
          </button>
        </div>

        <p className="text-gray-400 text-xs mt-5">
          ✅ RERA Approved &nbsp;|&nbsp; ✅ No Hidden Charges &nbsp;|&nbsp; ✅ Free Site Visit
        </p>
      </div>
    </div>
  );
}
