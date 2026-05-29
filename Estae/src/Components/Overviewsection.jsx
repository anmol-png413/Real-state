const OverviewSection = ({ onBookVisit }) => {

  const highlights = [
    { label: "Project Name", value: "AU Cosmos Corner" },
    { label: "Configuration", value: "3 BHK, 3 BHK + Servant, 5 BHK + Servant  luxury apartments" },
    { label: "Total Land Area", value: "5.60 Acres (Approx.)" },
    { label: "Total Towers", value: "Only 3 Exclusive Towers" },
    { label: "Development Time", value: "Year 2029" },
    { label: "Size", value: "1780 | 1972 | 3175 Sq.Ft" },
    { label: "Height", value: "G+40 Floors" },
    { label: "Location", value: "Siddharth Vihar , Ghaziabad." },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20" id="overview">

      {/* ── Section Title ── */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 uppercase tracking-wide">
          AU Cosmos Corner
        </h2>
        <p className="text-sm text-gray-500 uppercase tracking-[3px] mt-1">Siddharth Vihar, Ghaziabad</p>
        <div className="w-32 h-[3px] bg-yellow-500 mx-auto mt-4" />
      </div>

      {/* ── Two Column Layout ── */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

        {/* LEFT: Table */}
        <div className="w-full lg:w-1/2 border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 py-4 px-6 text-center">
            <span className="text-gray-700 font-semibold text-base tracking-widest uppercase">
              Highlights
            </span>
          </div>
          {highlights.map(({ label, value }, i) => (
            <div
              key={i}
              className={`flex border-b border-gray-200 last:border-b-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
            >
              <div className="w-1/2 px-6 py-4 border-r border-gray-200">
                <span className="text-gray-600 text-sm font-medium">{label}</span>
              </div>
              <div className="w-1/2 px-6 py-4">
                <span className="text-gray-800 text-sm font-semibold">{value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Description */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <p className="text-gray-700 text-base leading-relaxed text-justify">
      AU Cosmos Corner is an upcoming premium residential project by AU Real Estate Pvt. Ltd., offering thoughtfully
            designed <span className="font-semibold text-gray-900">"3 BHK, 3 BHK + Servant, 5 BHK + Servant luxury apartments"</span> in
            the prime location of <span className="font-semibold text-gray-900">Siddharth Vihar, Ghaziabad</span>.
            Crafted for modern families, this project blends contemporary architecture with
            world-class amenities and excellent connectivity to deliver a complete lifestyle experience.
          </p>

          <p className="text-gray-700 text-base leading-relaxed text-justify">
            Spread across approx. <span className="font-semibold text-gray-900">5.6 acres</span> of
            prime land, the project features{" "}
            <span className="font-semibold text-gray-900">3 iconic high-rise towers (G+40)</span> with
            spacious residences, ensuring comfort, privacy, and elegance in every corner.
          </p>

          {/* Payment Plan */}
          <div className="border border-yellow-400 bg-yellow-50 px-6 py-5">
            <h4 className="text-gray-900 font-bold text-sm uppercase tracking-wide mb-4">
              Special Payment Plan — AU Cosmos Corner
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                "10% Booking Amount",
                "30% in 60 Days",
                "40% on Possession",
                "20% Flexi Payment Plan",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
         <button
  onClick={onBookVisit}
  className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 py-4 px-8 w-full text-white font-bold text-sm tracking-[3px] uppercase"
>
  <span></span>
  Call  9711557670
</button>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;