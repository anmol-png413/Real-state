import sitePlanImg from "../assets/WhatsApp Image 2026-05-04 at 12.30.51.jpeg";

export default function SitePlan() {
  return (
    <section className="max-w-6xl mx-auto px-3 md:px-6 py-12 bg-white">
      
      <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-1">
        Layout Overview
      </p>
      <h2 className="text-2xl md:text-3xl font-medium text-center text-gray-900 mb-10">
        Master Site Plan
      </h2>

      <div className="flex flex-col md:flex-row gap-8 items-center">

        {/* Left — Text */}
        <div className="md:w-1/2 flex flex-col gap-5">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Thoughtfully Planned Community</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              AU Siddharth Vihar is designed for low-density luxury living. The master plan
              ensures maximum green cover, privacy, and seamless connectivity across all towers.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { icon: "🏊", label: "2 Swimming Pools", desc: "Centrally located within the complex" },
              { icon: "🏛️", label: "Grand Clubhouse", desc: "Premium club with modern facilities" },
              { icon: "🛒", label: "Retail Shops & Anchor Store", desc: "Ground-level commercial convenience" },
              { icon: "🌿", label: "Landscaped Green Spaces", desc: "Open gardens between all towers" },
              { icon: "🚗", label: "Dual Entry / Exit", desc: "18 Meter & 24 Meter wide roads" },
              { icon: "🏢", label: "Multiple Tower Wings", desc: "Units of 1780, 1972, 1981 & 3175 Sq.Ft." },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-yellow-50 border border-yellow-100 flex items-center justify-center text-base flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">{item.label}</p>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image */}
        <div className="md:w-1/2 w-full flex justify-end">
          <img
            src={sitePlanImg}
            alt="AU Siddharth Vihar Master Site Plan"
            className="w-full rounded-2xl shadow-md border border-gray-200 object-contain flex justify-end"
          />
        </div>

      </div>
    </section>
  );
}