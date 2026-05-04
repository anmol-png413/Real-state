// import React from "react";

// const amenities = [
//   "Grand Clubhouse",
//   "Swimming Pool",
//   "Equipped Gym",
//   "Landscaped Gardens",
//   "Jogging Track",
//   "Kids' Play Area",
//   "Indoor Games",
//   "Open Green Spaces",
// ];

// export default function ProjectHighlights() {
//   return (
//     <div id="highlights" className="max-w-5xl mx-auto px-3 md:px-6 py-12 bg-white">

//       <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-1">
//         Siddharth Vihar, Ghaziabad
//       </p>
//       <h2 className="text-2xl md:text-3xl font-medium text-center text-gray-900 mb-8">
//         Project Highlights
//       </h2>

//       <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-5">
//         The apartments at{" "}
//         <span className="text-yellow-600 font-medium">AU Realestate</span>{" "}
//         are thoughtfully designed with smart layouts and modern architecture. Spacious rooms,
//         wide balconies, and large windows ensure proper ventilation and natural light.
//       </p>
//       <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
//         With approx.{" "}
//         <span className="text-gray-900 font-medium">1780 sq. ft.</span> of space and{" "}
//         <span className="text-gray-900 font-medium">11 ft ceiling height</span>, the homes feel
//         more open and luxurious. Premium finishes and elegant design add to the overall appeal.
//       </p>

//       {/* ── Stats Row ── */}
//       <div className="grid grid-cols-2 gap-4 mb-10">
//         <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4">
//           <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600 text-xl">🏢</div>
//           <div>
//             <p className="text-2xl font-bold text-gray-900">7</p>
//             <p className="text-xs text-gray-500 uppercase tracking-wide">Apartments Per Floor</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4">
//           <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600 text-xl">🛗</div>
//           <div>
//             <p className="text-2xl font-bold text-gray-900">7</p>
//             <p className="text-xs text-gray-500 uppercase tracking-wide">High-Speed Lifts</p>
//           </div>
//         </div>
//       </div>

//       <h3 className="text-xl font-medium text-gray-900 mb-4">Amenities &amp; Lifestyle</h3>
//       <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
//         Residents can enjoy a wide range of modern amenities within the project. A grand
//         clubhouse, swimming pool, and fully equipped gym provide a perfect lifestyle upgrade.
//       </p>
//       <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
//         Landscaped gardens, jogging tracks, and open green spaces offer relaxation and a healthy
//         living environment. Kids' play areas and indoor games ensure entertainment for all age groups.
//       </p>

//       <div className="flex flex-wrap gap-3 mb-12">
//         {amenities.map((item) => (
//           <span
//             key={item}
//             className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5"
//           >
//             <span className="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0" />
//             {item}
//           </span>
//         ))}
//       </div>

//       <hr className="border-gray-200 mb-12" />

//       {/* ── Price List ── */}
//       <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-1">
//         Investment Overview
//       </p>
//       <h2 className="text-2xl md:text-3xl font-medium text-center text-gray-900 mb-10">
//         AU Realestate — Price List
//       </h2>

//       <div className="border border-gray-200 rounded-xl overflow-hidden">
//         <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-200">
//           <span className="text-sm font-medium text-gray-800">Available Units</span>
//           <span className="text-xs text-gray-500 bg-white border border-gray-200 rounded-full px-3 py-1">
//             Ready to Book
//           </span>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full text-sm md:text-base">
//             <thead>
//               <tr className="bg-white">
//                 <th className="text-left text-xs uppercase tracking-widest text-gray-400 font-medium px-6 py-4 border-b border-gray-200">
//                   Unit Type
//                 </th>
//                 <th className="text-left text-xs uppercase tracking-widest text-gray-400 font-medium px-6 py-4 border-b border-gray-200">
//                   Unit Area
//                 </th>
//                 <th className="text-left text-xs uppercase tracking-widest text-gray-400 font-medium px-6 py-4 border-b border-gray-200">
//                   Unit Price
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Row 1 */}
//               <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
//                 <td className="px-6 py-5">
//                   <p className="font-medium text-gray-900">3BHK + 3 Toilet</p>
//                   <p className="text-xs text-gray-400 mt-0.5">Premium Configuration</p>
//                 </td>
//                 <td className="px-6 py-5">
//                   <p className="font-medium text-gray-900">1780 Sq.Ft.</p>
//                   <p className="text-xs text-gray-400 mt-0.5">11 ft ceiling</p>
//                 </td>
//                 <td className="px-6 py-5">
//                   <p className="font-medium text-yellow-600">₹ CTA</p>
//                   <p className="text-xs text-gray-400 mt-0.5">Contact for pricing</p>
//                 </td>
//               </tr>
//               {/* Row 2 */}
//               <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
//                 <td className="px-6 py-5">
//                   <p className="font-medium text-gray-900">2.3 BHK + 3 Toilet+ Servant</p>
//                   <p className="text-xs text-gray-400 mt-0.5">Premium Configuration</p>
//                 </td>
//                 <td className="px-6 py-5">
//                   <p className="font-medium text-gray-900">1972 Sq.Ft.</p>
//                   <p className="text-xs text-gray-400 mt-0.5">11 ft ceiling</p>
//                 </td>
//                 <td className="px-6 py-5">
//                   <p className="font-medium text-yellow-600">₹ CTA</p>
//                   <p className="text-xs text-gray-400 mt-0.5">Contact for pricing</p>
//                 </td>
//               </tr>
//               {/* Row 3 */}
//               <tr className="hover:bg-gray-50 transition-colors">
//                 <td className="px-6 py-5">
//                   <p className="font-medium text-gray-900">3.5 BHK + 3 Toilet + Servant</p>
//                   <p className="text-xs text-gray-400 mt-0.5">Ultra Luxury Configuration</p>
//                 </td>
//                 <td className="px-6 py-5">
//                   <p className="font-medium text-gray-900">3175 Sq.Ft.</p>
//                   <p className="text-xs text-gray-400 mt-0.5">11 ft ceiling</p>
//                 </td>
//                 <td className="px-6 py-5">
//                   <p className="font-medium text-yellow-600">₹ CTA</p>
//                   <p className="text-xs text-gray-400 mt-0.5">Contact for pricing</p>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//     </div>
//   );
// }

import React from "react";

const amenities = [
  "Grand Clubhouse",
  "Swimming Pool",
  "Equipped Gym",
  "Landscaped Gardens",
  "Jogging Track",
  "Kids' Play Area",
  "Indoor Games",
  "Open Green Spaces",
];

export default function ProjectHighlights({ onBookVisit }) {  {/* ← prop add kiya */}
  return (
    <div id="highlights" className="max-w-5xl mx-auto px-3 md:px-6 py-12 bg-white">

      <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-1">
        Siddharth Vihar, Ghaziabad
      </p>
      <h2 className="text-2xl md:text-3xl font-medium text-center text-gray-900 mb-8">
        Project Highlights
      </h2>

      <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-5">
        The apartments at{" "}
        <span className="text-yellow-600 font-medium">AU Realestate</span>{" "}
        are thoughtfully designed with smart layouts and modern architecture. Spacious rooms,
        wide balconies, and large windows ensure proper ventilation and natural light.
      </p>
      <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
        With approx.{" "}
        <span className="text-gray-900 font-medium">1780 sq. ft.</span> of space and{" "}
        <span className="text-gray-900 font-medium">11 ft ceiling height</span>, the homes feel
        more open and luxurious. Premium finishes and elegant design add to the overall appeal.
      </p>

      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4">
          <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600 text-xl">🏢</div>
          <div>
            <p className="text-2xl font-bold text-gray-900">7</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Apartments Per Floor</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4">
          <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600 text-xl">🛗</div>
          <div>
            <p className="text-2xl font-bold text-gray-900">7</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">High-Speed Lifts</p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-medium text-gray-900 mb-4">Amenities &amp; Lifestyle</h3>
      <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
        Residents can enjoy a wide range of modern amenities within the project. A grand
        clubhouse, swimming pool, and fully equipped gym provide a perfect lifestyle upgrade.
      </p>
      <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
        Landscaped gardens, jogging tracks, and open green spaces offer relaxation and a healthy
        living environment. Kids' play areas and indoor games ensure entertainment for all age groups.
      </p>

      <div className="flex flex-wrap gap-3 mb-12">
        {amenities.map((item) => (
          <span
            key={item}
            className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>

      <hr className="border-gray-200 mb-12" />

      {/* Price List */}
      <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-1">
        Investment Overview
      </p>
      <h2 className="text-2xl md:text-3xl font-medium text-center text-gray-900 mb-10">
        AU Realestate — Price List
      </h2>

      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-200">
          <span className="text-sm font-medium text-gray-800">Available Units</span>
          <span className="text-xs text-gray-500 bg-white border border-gray-200 rounded-full px-3 py-1">
            Ready to Book
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="bg-white">
                <th className="text-left text-xs uppercase tracking-widest text-gray-400 font-medium px-6 py-4 border-b border-gray-200">Unit Type</th>
                <th className="text-left text-xs uppercase tracking-widest text-gray-400 font-medium px-6 py-4 border-b border-gray-200">Unit Area</th>
                <th className="text-left text-xs uppercase tracking-widest text-gray-400 font-medium px-6 py-4 border-b border-gray-200">Unit Price</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                <td className="px-6 py-5">
                  <p className="font-medium text-gray-900">3 BHK + 3 Toilet</p>
                  <p className="text-xs text-gray-400 mt-0.5">Premium Configuration</p>
                </td>
                <td className="px-6 py-5">
                  <p className="font-medium text-gray-900">1780 Sq.Ft.</p>
                  <p className="text-xs text-gray-400 mt-0.5">11 ft ceiling</p>
                </td>
                <td className="px-6 py-5">
                  {/* ← CTA button */}
                  <button
                    onClick={onBookVisit}
                    className="font-medium text-yellow-600 hover:text-yellow-700 hover:underline cursor-pointer"
                  >
                    ₹ Get Price
                  </button>
                  <p className="text-xs text-gray-400 mt-0.5">Contact for pricing</p>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                <td className="px-6 py-5">
                  <p className="font-medium text-gray-900">3 BHK + Servant</p>
                  <p className="text-xs text-gray-400 mt-0.5">Premium Configuration</p>
                </td>
                <td className="px-6 py-5">
                  <p className="font-medium text-gray-900">1972 Sq.Ft.</p>
                  <p className="text-xs text-gray-400 mt-0.5">11 ft ceiling</p>
                </td>
                <td className="px-6 py-5">
                  <button
                    onClick={onBookVisit}
                    className="font-medium text-yellow-600 hover:text-yellow-700 hover:underline cursor-pointer"
                  >
                    ₹ Get Price
                  </button>
                  <p className="text-xs text-gray-400 mt-0.5">Contact for pricing</p>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-5">
                  <p className="font-medium text-gray-900">5 BHK + Servant</p>
                  <p className="text-xs text-gray-400 mt-0.5">Ultra Luxury Configuration</p>
                </td>
                <td className="px-6 py-5">
                  <p className="font-medium text-gray-900">3175 Sq.Ft.</p>
                  <p className="text-xs text-gray-400 mt-0.5">11 ft ceiling</p>
                </td>
                <td className="px-6 py-5">
                  <button
                    onClick={onBookVisit}
                    className="font-medium text-yellow-600 hover:text-yellow-700 hover:underline cursor-pointer"
                  >
                    ₹ Get Price
                  </button>
                  <p className="text-xs text-gray-400 mt-0.5">Contact for pricing</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}