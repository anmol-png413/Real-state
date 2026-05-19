// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const nameRegex = /^[a-zA-Z\s]{2,50}$/;
// const phoneRegex = /^[6-9]\d{9}$/;
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// export default function ContactForm({ onPhoneClick }) {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     name: "", phone: "", email: "", interest: "", message: "",
//   });
//   const [errors, setErrors] = useState({ name: "", phone: "", email: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const validate = () => {
//     const newErrors = { name: "", phone: "", email: "" };
//     if (!form.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (!nameRegex.test(form.name.trim())) {
//       newErrors.name = "Only letters and spaces allowed";
//     }
//     const cleanPhone = form.phone.replace(/[\s\-()+ ]/g, "").replace(/^91/, "");
//     if (!form.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!phoneRegex.test(cleanPhone)) {
//       newErrors.phone = "Enter valid 10-digit mobile number";
//     }
//     if (form.email && !emailRegex.test(form.email)) {
//       newErrors.email = "Enter a valid email address";
//     }
//     setErrors(newErrors);
//     return !newErrors.name && !newErrors.phone && !newErrors.email;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;
//     try {
//       const response = await fetch('https://real-state-udkw.vercel.app/api/enquiry', {
//       // const response = await fetch('http://localhost:3000/api/enquiry', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           full_name: form.name,
//           phone: form.phone,
//           email: form.email,
//           interested_in: form.interest,  // ✅ form.config → form.interest
//           message: form.message           // ✅ '' → form.message
//         })
//       });

//       const data = await response.json();
//       if (data.success) {
//         navigate("/thank-you");
//       } else {
//         alert('Error: ' + JSON.stringify(data));
//       }
//     } catch (error) {
//       alert('Something went wrong: ' + error.message);
//     }
//   };

//   return (
//     <section className="w-full bg-gray-50 px-4 md:px-10 py-8">
//       <p className="text-center text-xs uppercase tracking-widest text-yellow-600 mb-1 font-medium">Get In Touch</p>
//       <h2 className="text-xl md:text-3xl font-bold text-center text-gray-900 mb-1">Book a Free Site Visit</h2>
//       <p className="text-center text-gray-500 text-xs md:text-sm max-w-lg mx-auto mb-6">
//         Fill in your details and our team will get back to you within 24 hours.
//       </p>



//       <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
//         <div className="flex flex-col md:flex-row">

//           {/* Left Yellow Panel */}
//           <div className="bg-yellow-500 md:w-2/5 px-6 py-6 hidden md:flex flex-col justify-between gap-4">
//             <div>
//               <h3 className="text-white text-lg font-bold mb-1">AU Realestate</h3>
//               <p className="text-yellow-100 text-xs leading-relaxed">
//                 Experience luxury living at Siddharth Vihar, Ghaziabad. Premium 3 BHK homes designed for modern lifestyle.
//               </p>
//             </div>
//             <div className="flex flex-col gap-3">
//               {[
//                 { icon: "📍", label: "ADDRESS", value: "Siddharth Vihar, Ghaziabad, UP", clickable: false },
//                 { icon: "📞", label: "PHONE", value: "9711557670", clickable: true },
//                 { icon: "🕐", label: "WORKING HOURS", value: "Mon – Sun: 9:00 AM – 7:00 PM", clickable: false },
//               ].map((item) => (
//                 <div
//                   key={item.label}
//                   className="flex items-center gap-3"
//                   style={item.clickable ? { cursor: "pointer" } : {}}
//                   onClick={item.clickable && onPhoneClick ? onPhoneClick : undefined}
//                 >
//                   <div
//                     className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
//                     style={{ background: item.clickable ? "#f59e0b" : "#facc15" }}
//                   >
//                     {item.icon}
//                   </div>
//                   <div>
//                     <p className="text-white text-xs font-semibold uppercase tracking-wide leading-none mb-0.5">{item.label}</p>
//                     <p
//                       className="text-xs"
//                       style={item.clickable ? { color: "#fff", fontWeight: 800, fontSize: "14px", letterSpacing: "0.04em" } : { color: "#fef9c3" }}
//                     >
//                       {item.value}
//                       {item.clickable && <span style={{ marginLeft: "6px", fontSize: "11px", opacity: 0.8 }}>→ Get Callback</span>}
//                     </p>
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
//             <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//                 <h3 className="text-base font-semibold text-gray-900 mb-1">Enquiry Details</h3>

//                 <div className="flex flex-col sm:flex-row gap-3">
//                   <div className="flex-1 flex flex-col gap-1">
//                     <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
//                       Full Name <span className="text-red-400">*</span>
//                     </label>
//                     <input
//                       type="text" name="name" value={form.name}
//                       onChange={handleChange} required placeholder="Rahul Sharma"
//                       className={`border rounded-xl px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 transition ${errors.name ? "border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-yellow-400 focus:ring-yellow-100"}`}
//                     />
//                     {errors.name && <p className="text-red-500 text-xs mt-0.5">{errors.name}</p>}
//                   </div>
//                   <div className="flex-1 flex flex-col gap-1">
//                     <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
//                       Phone <span className="text-red-400">*</span>
//                     </label>
//                     <input
//                       type="tel" name="phone" value={form.phone}
//                       onChange={handleChange} required placeholder="+91 98765 43210"
//                       className={`border rounded-xl px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 transition ${errors.phone ? "border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-yellow-400 focus:ring-yellow-100"}`}
//                     />
//                     {errors.phone && <p className="text-red-500 text-xs mt-0.5">{errors.phone}</p>}
//                   </div>
//                 </div>

//                 <div className="flex flex-col gap-1">
//                   <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
//                     Email Address{" "}
//                     <span className="text-gray-400 normal-case text-xs font-normal">(optional)</span>
//                   </label>
//                   <input
//                     type="email" name="email" value={form.email}
//                     onChange={handleChange} placeholder="rahul@email.com"
//                     className={`border rounded-xl px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 transition ${errors.email ? "border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-yellow-400 focus:ring-yellow-100"}`}
//                   />
//                   {errors.email && <p className="text-red-500 text-xs mt-0.5">{errors.email}</p>}
//                 </div>

//                 <div className="flex flex-col gap-1">
//                   <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Interested In</label>
//                   {/* ✅ className fix kiya */}
//                   <select name="interest" value={form.interest} onChange={handleChange}
//                     className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition bg-white"
//                   >
//                     <option value="">Select configuration</option>
//                     <option value="3bhk">3 BHK + 3 Toilet (1780 Sq.Ft.)</option>
//                       <option value="3bhk">3 BHK + Servant (1972 Sq.Ft.)</option>
//                       <option value="3bhk">5 BHK + Servant (3175 Sq.Ft.)</option>


//                     <option value="site-visit">Free Site Visit</option>
//                     <option value="investment">Investment / Rental</option>
//                   </select>
//                 </div>

//                 <div className="flex flex-col gap-1">
//                   <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Message (Optional)</label>
//                   <textarea
//                     name="message" value={form.message} onChange={handleChange}
//                     rows={2} placeholder="Any specific questions or requirements..."
//                     className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition resize-none"
//                   />
//                 </div>

//                 <button type="submit"
//                   className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-sm"
//                 >
//                   Send Enquiry →
//                 </button>
//                 <p className="text-center text-gray-400 text-xs">
//                   By submitting, you agree to be contacted by our sales team.
//                 </p>
//               </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const nameRegex = /^[a-zA-Z\s]{2,50}$/;
const phoneRegex = /^[6-9]\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ onPhoneClick }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // ✅ Loading state
  const [form, setForm] = useState({
    name: "", phone: "", email: "", interest: "", message: "",
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
          message: form.message
        })
      });

      const data = await response.json();
      if (data.success) {
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
    <section className="w-full bg-gray-50 px-4 md:px-10 py-8">
      <p className="text-center text-xs uppercase tracking-widest text-yellow-600 mb-1 font-medium">Get In Touch</p>
      <h2 className="text-xl md:text-3xl font-bold text-center text-gray-900 mb-1">Book a Free Site Visit</h2>
      <p className="text-center text-gray-500 text-xs md:text-sm max-w-lg mx-auto mb-6">
        Fill in your details and our team will get back to you within 24 hours.
      </p>

      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="flex flex-col md:flex-row">

          {/* Left Yellow Panel */}
          <div className="bg-yellow-500 md:w-2/5 px-6 py-6 hidden md:flex flex-col justify-between gap-4">
            <div>
              <h3 className="text-white text-lg font-bold mb-1">AU Realestate</h3>
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
          <div className="md:w-3/5 px-6 py-6">
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
                    className={`border rounded-xl px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 transition ${errors.name ? "border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-yellow-400 focus:ring-yellow-100"}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-0.5">{errors.name}</p>}
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Phone <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel" name="phone" value={form.phone}
                    onChange={handleChange} required placeholder="+91 98765 43210"
                    className={`border rounded-xl px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 transition ${errors.phone ? "border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-yellow-400 focus:ring-yellow-100"}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-0.5">{errors.phone}</p>}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Email Address{" "}
                  <span className="text-gray-400 normal-case text-xs font-normal">(optional)</span>
                </label>
                <input
                  type="email" name="email" value={form.email}
                  onChange={handleChange} placeholder="rahul@email.com"
                  className={`border rounded-xl px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 transition ${errors.email ? "border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-yellow-400 focus:ring-yellow-100"}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-0.5">{errors.email}</p>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Interested In</label>
                <select name="interest" value={form.interest} onChange={handleChange}
                  className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition bg-white"
                >
                  <option value="">Select configuration</option>
                  <option value="3bhk-1780">3 BHK + 3 Toilet (1780 Sq.Ft.)</option>
                  <option value="3bhk-1972">3 BHK + Servant (1972 Sq.Ft.)</option>
                  <option value="5bhk-3175">5 BHK + Servant (3175 Sq.Ft.)</option>
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

              {/* ✅ Fixed Submit Button with Spinner */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-300 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-sm"
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
                By submitting, you agree to be contacted by our sales team.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}