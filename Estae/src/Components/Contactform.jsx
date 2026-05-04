// import React, { useState } from "react";

// export default function ContactForm() {
// const [form, setForm] = useState({
//   name: "", phone: "", email: "", interest: "", message: "",  
// });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//  const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await fetch('https://real-state-udkw.vercel.app/api/enquiry', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//   full_name: form.name,
//   phone: form.phone,
//   email: form.email,
//   interested_in: form.config,  
//   message: form.message         
// })
//       });

//       const data = await response.json();
//       console.log('Response:', data); 
      
//       if(data.success) {
//         setSubmitted(true);
//       } else {
//         alert('Error: ' + JSON.stringify(data));
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Something went wrong: ' + error.message);
//     }
// };
//   return (
//     <section className="w-full bg-gray-50 px-4 md:px-10 py-8">

//       {/* Heading */}
//       <p className="text-center text-xs uppercase tracking-widest text-yellow-600 mb-1 font-medium">
//         Get In Touch
//       </p>
//       <h2 className="text-xl md:text-3xl font-bold text-center text-gray-900 mb-1">
//         Book a Free Site Visit
//       </h2>
//       <p className="text-center text-gray-500 text-xs md:text-sm max-w-lg mx-auto mb-6">
//         Fill in your details form and our team will get back to you within 24 hours only.
//       </p>

//       {/* Card */}
//       <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
//         <div className="flex flex-col md:flex-row">

//           {/* Left Yellow Panel */}
//           <div className="bg-yellow-500 md:w-2/5 px-6 py-6 flex flex-col justify-between gap-4">
//             <div>
//               <h3 className="text-white text-lg font-bold mb-1">AU Realestate</h3>
//               <p className="text-yellow-100 text-xs leading-relaxed">
//                 Experience luxury living at Siddharth Vihar, Ghaziabad. Premium 3 BHK homes
//                 designed for  modern lifestyle.
//               </p>
//             </div>

//             <div className="flex flex-col gap-3">
//               {[
//                 { icon: "📍", label: "ADDRESS", value: "Siddharth Vihar, Ghaziabad, UP" },
//                 { icon: "📞", label: "PHONE", value: "9711557670" },
//                 { icon: "🕐", label: "WORKING HOURS", value: "Mon – Sun: 9:00 AM – 7:00 PM" },
//               ].map((item) => (
//                 <div key={item.label} className="flex items-center gap-3">
//                   <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center text-sm flex-shrink-0">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <p className="text-white text-xs font-semibold uppercase tracking-wide leading-none mb-0.5">
//                       {item.label}
//                     </p>
//                     <p className="text-yellow-100 text-xs">{item.value}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="border-t border-yellow-400 pt-3">
//               <p className="text-yellow-100 text-xs leading-relaxed">
//                 ✅ RERA Approved &nbsp;|&nbsp; ✅ No Hidden Charges &nbsp;|&nbsp; ✅ Free Site Visit
//               </p>
//             </div>
//           </div>

//           {/* Right Form Panel */}
//           <div className="md:w-3/5 px-6 py-6">
//             {submitted ? (
//               <div className="flex flex-col items-center justify-center h-full gap-3 py-8">
//                 <div className="w-14 h-14 rounded-full bg-yellow-50 flex items-center justify-center text-3xl">🎉</div>
//                 <h3 className="text-lg font-bold text-gray-900">Thank You!</h3>
//                 <p className="text-gray-500 text-sm text-center max-w-xs">
//                   We've received your enquiry. Our team will contact you within 24 hours.
//                 </p>
//                 <button
//                   onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", config: "", message: "" }); }}
//                   className="mt-1 text-yellow-600 text-sm font-medium hover:underline"
//                 >
//                   Submit another enquiry →
//                 </button>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//                 <h3 className="text-base font-semibold text-gray-900 mb-1">Enquiry Details</h3>

//                 {/* Name + Phone */}
//                 <div className="flex flex-col sm:flex-row gap-3">
//                   <div className="flex-1 flex flex-col gap-1">
//                     <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
//                       Full Name <span className="text-red-400">*</span>
//                     </label>
//                     <input
//                       type="text" name="name" value={form.name}
//                       onChange={handleChange} required placeholder="Rahul Sharma"
//                       className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
//                     />
//                   </div>
//                   <div className="flex-1 flex flex-col gap-1">
//                     <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
//                       Phone <span className="text-red-400">*</span>
//                     </label>
//                     <input
//                       type="tel" name="phone" value={form.phone}
//                       onChange={handleChange} required placeholder="+91 98765 43210"
//                       className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
//                     />
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div className="flex flex-col gap-1">
//                   <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
//                     Email Address
//                   </label>
//                   <input
//                     type="email" name="email" value={form.email}
//                     onChange={handleChange} placeholder="rahul@email.com"
//                     className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
//                   />
//                 </div>

//                 {/* Interested In */}
//                 <div className="flex flex-col gap-1">
//                   <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
//                     Interested In
//                   </label>
//                   <select name="interest" value={form.interest} onChange={handleChange}
//                     className="border border-gray-200 rconst [form, setForm] = useState({ounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition bg-white"
//                   >
//                     <option value="">Select configuration</option>
//                     <option value="3bhk">3 BHK + 3 Toilet (1760 Sq.Ft.)</option>
//                     <option value="site-visit">Free Site Visit</option>
//                     <option value="investment">Investment / Rental</option>
//                      <option value="3bhk">3 BHK + 3 Toilet (1760 Sq.Ft.)</option>
                    
//                   </select>
//                 </div>

//                 {/* Message */}
//                 <div className="flex flex-col gap-1">
//                   <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
//                     Message (Optional)
//                   </label>
//                   <textarea
//                     name="message" value={form.message} onChange={handleChange}
//                     rows={2} placeholder="Any specific questions or requirements..."
//                     className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition resize-none"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-sm"
//                 >
//                   Send Enquiry →
//                 </button>

//                 <p className="text-center text-gray-400 text-xs">
//                   By submitting, you agree to be contacted by our sales team.
//                 </p>
//               </form>
//             )}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", interest: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://real-state-udkw.vercel.app/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: form.name,
          phone: form.phone,
          email: form.email,
          interested_in: form.interest,  // ✅ form.config → form.interest
          message: form.message           // ✅ '' → form.message
        })
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert('Error: ' + JSON.stringify(data));
      }
    } catch (error) {
      alert('Something went wrong: ' + error.message);
    }
  };

  return (
    <section className="w-full bg-gray-50 px-4 md:px-10 py-8">
      <p className="text-center text-xs uppercase tracking-widest text-yellow-600 mb-1 font-medium">Get In Touch</p>
      <h2 className="text-xl md:text-3xl font-bold text-center text-gray-900 mb-1">Book a Free Site Visit</h2>
      <p className="text-center text-gray-500 text-xs md:text-sm max-w-lg mx-auto mb-6">
        Fill in your details and our team will get back to you within 24 hours.
      </p>

      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="flex flex-col md:flex-row">

          {/* Left Yellow Panel */}
          <div className="bg-yellow-500 md:w-2/5 px-6 py-6 flex flex-col justify-between gap-4">
            <div>
              <h3 className="text-white text-lg font-bold mb-1">AU Realestate</h3>
              <p className="text-yellow-100 text-xs leading-relaxed">
                Experience luxury living at Siddharth Vihar, Ghaziabad. Premium 3 BHK homes designed for modern lifestyle.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { icon: "📍", label: "ADDRESS", value: "Siddharth Vihar, Ghaziabad, UP" },
                { icon: "📞", label: "PHONE", value: "9711557670" },
                { icon: "🕐", label: "WORKING HOURS", value: "Mon – Sun: 9:00 AM – 7:00 PM" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center text-sm flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold uppercase tracking-wide leading-none mb-0.5">{item.label}</p>
                    <p className="text-yellow-100 text-xs">{item.value}</p>
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
          <div className="md:w-3/5 px-6 py-6">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-3 py-8">
                <div className="w-14 h-14 rounded-full bg-yellow-50 flex items-center justify-center text-3xl">🎉</div>
                <h3 className="text-lg font-bold text-gray-900">Thank You!</h3>
                <p className="text-gray-500 text-sm text-center max-w-xs">
                  We've received your enquiry. Our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", interest: "", message: "" }); }}
                  className="mt-1 text-yellow-600 text-sm font-medium hover:underline"
                >
                  Submit another enquiry →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <h3 className="text-base font-semibold text-gray-900 mb-1">Enquiry Details</h3>

                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text" name="name" value={form.name}
                      onChange={handleChange} required placeholder="Rahul Sharma"
                      className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Phone <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel" name="phone" value={form.phone}
                      onChange={handleChange} required placeholder="+91 98765 43210"
                      className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Email Address</label>
                  <input
                    type="email" name="email" value={form.email}
                    onChange={handleChange} placeholder="rahul@email.com"
                    className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Interested In</label>
                  {/* ✅ className fix kiya */}
                  <select name="interest" value={form.interest} onChange={handleChange}
                    className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition bg-white"
                  >
                    <option value="">Select configuration</option>
                    <option value="3bhk">3 BHK + 3 Toilet (1780 Sq.Ft.)</option>
                    <option value="site-visit">Free Site Visit</option>
                    <option value="investment">Investment / Rental</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Message (Optional)</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    rows={2} placeholder="Any specific questions or requirements..."
                    className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition resize-none"
                  />
                </div>

                <button type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-sm"
                >
                  Send Enquiry →
                </button>
                <p className="text-center text-gray-400 text-xs">
                  By submitting, you agree to be contacted by our sales team.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}