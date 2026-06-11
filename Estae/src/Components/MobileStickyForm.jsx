import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const phoneRegex = /^[6-9]\d{9}$/;

export default function MobileStickyForm() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [pillVisible, setPillVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", interest: "" });
  const [errors, setErrors] = useState({});

  // Show pill after 4s
  useEffect(() => {
    const t = setTimeout(() => setPillVisible(true), 4000);
    return () => clearTimeout(t);
  }, []);

  // Lock body scroll when sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Enter your name";
    const clean = form.phone.replace(/\D/g, "").replace(/^91/, "");
    if (!phoneRegex.test(clean)) e.phone = "Valid 10-digit number";
    if (!form.interest) e.interest = "Please select";
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.name.trim(),
          phone: form.phone.replace(/\D/g, "").replace(/^91/, ""),
          email: "",
          interested_in: form.interest,
          purpose: "",
          timeline: "",
          message: "",
          source: "Mobile Sticky Form",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setTimeout(() => navigate("/thank-you"), 1200);
      }
    } catch {
      // silent fail
    } finally {
      setLoading(false);
    }
  };

  return (
    // Mobile only
    <div className="lg:hidden">

      {/* Floating pill button — sits above the bottom bar */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          bottom: "72px",     // above the 3-button bottom bar
          left: "50%",
          transform: `translateX(-50%) translateY(${pillVisible ? "0" : "80px"})`,
          opacity: pillVisible && !open ? 1 : 0,
          pointerEvents: pillVisible && !open ? "auto" : "none",
          transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s ease",
          zIndex: 48,
          background: "#f5c842",
          color: "#111",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "12px",
          fontWeight: 800,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          padding: "10px 22px",
          border: "none",
          borderRadius: "30px",
          boxShadow: "0 4px 20px rgba(245,200,66,0.5)",
          display: "flex",
          alignItems: "center",
          gap: "7px",
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      >
        <span style={{ fontSize: "14px" }}>🏷️</span>
        Get Best Price
      </button>

      {/* Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 49,
            animation: "msf-fade 0.25s ease",
          }}
        />
      )}

      {/* Bottom Sheet */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transform: open ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.4s cubic-bezier(0.32,0.72,0,1)",
          background: "#fff",
          borderRadius: "20px 20px 0 0",
          boxShadow: "0 -8px 40px rgba(0,0,0,0.2)",
          borderTop: "3px solid #f5c842",
          paddingBottom: "80px", // space above bottom bar
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Drag Handle */}
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "12px", paddingBottom: "4px" }}>
          <div style={{ width: "36px", height: "4px", borderRadius: "2px", background: "#e5e7eb" }} />
        </div>

        {/* Header */}
        <div style={{
          background: "#111",
          margin: "10px 16px 0",
          borderRadius: "10px",
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div>
            <p style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "16px", fontWeight: 700, color: "#fff", margin: "0 0 2px",
            }}>Get Best Price</p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "10px", fontWeight: 800, color: "#f5c842",
              letterSpacing: "1.5px", textTransform: "uppercase", margin: 0,
            }}>AU Cosmos Corner · Free Callback</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{
              background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%",
              width: "32px", height: "32px", color: "#fff", fontSize: "16px",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}
          >✕</button>
        </div>

        {/* Form */}
        <div style={{ padding: "16px" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "24px 0" }}>
              <div style={{ fontSize: "40px", marginBottom: "12px" }}>✅</div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "16px", fontWeight: 700, color: "#111", margin: "0 0 6px",
              }}>Thank You!</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#6b7280" }}>
                We'll call you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <style>{`
                .msf-input::placeholder { color: #9ca3af; }
                .msf-input:focus { border-color: #f5c842 !important; outline: none; }
                @keyframes msf-fade { from { opacity: 0 } to { opacity: 1 } }
                @keyframes msf-spin { to { transform: rotate(360deg); } }
              `}</style>

              {/* Name */}
              <div>
                <label style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 700,
                  color: "#111", letterSpacing: "1px", textTransform: "uppercase", display: "block", marginBottom: "5px",
                }}>Your Name *</label>
                <input
                  className="msf-input"
                  type="text" name="name" placeholder="e.g. Rahul Sharma"
                  value={form.name} onChange={handleChange}
                  style={{
                    width: "100%", padding: "11px 14px", boxSizing: "border-box",
                    fontFamily: "'DM Sans', sans-serif", fontSize: "14px",
                    background: "#f9fafb", border: `1px solid ${errors.name ? "#ef4444" : "#e5e7eb"}`,
                    borderRadius: "8px", color: "#111",
                  }}
                />
                {errors.name && <p style={{ color: "#ef4444", fontSize: "11px", margin: "4px 0 0" }}>{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 700,
                  color: "#111", letterSpacing: "1px", textTransform: "uppercase", display: "block", marginBottom: "5px",
                }}>Phone Number *</label>
                <input
                  className="msf-input"
                  type="tel" name="phone" placeholder="10-digit mobile number"
                  value={form.phone} onChange={handleChange}
                  style={{
                    width: "100%", padding: "11px 14px", boxSizing: "border-box",
                    fontFamily: "'DM Sans', sans-serif", fontSize: "14px",
                    background: "#f9fafb", border: `1px solid ${errors.phone ? "#ef4444" : "#e5e7eb"}`,
                    borderRadius: "8px", color: "#111",
                  }}
                />
                {errors.phone && <p style={{ color: "#ef4444", fontSize: "11px", margin: "4px 0 0" }}>{errors.phone}</p>}
              </div>

              {/* Interest */}
              <div>
                <label style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 700,
                  color: "#111", letterSpacing: "1px", textTransform: "uppercase", display: "block", marginBottom: "5px",
                }}>I'm Interested In *</label>
                <select
                  className="msf-input"
                  name="interest" value={form.interest} onChange={handleChange}
                  style={{
                    width: "100%", padding: "11px 14px", boxSizing: "border-box",
                    fontFamily: "'DM Sans', sans-serif", fontSize: "14px",
                    background: "#f9fafb", border: `1px solid ${errors.interest ? "#ef4444" : "#e5e7eb"}`,
                    borderRadius: "8px", color: form.interest ? "#111" : "#9ca3af",
                    appearance: "auto",
                  }}
                >
                  <option value="" disabled>Select configuration</option>
                  <option value="3 BHK + 3 Toilet (1780 Sq.Ft.)">3 BHK · 1780 Sq.Ft.</option>
                  <option value="3 BHK + Servant (1972 Sq.Ft.)">3 BHK+S · 1972 Sq.Ft.</option>
                  <option value="5 BHK + Servant (3175 Sq.Ft.)">5 BHK+S · 3175 Sq.Ft.</option>
                  <option value="Free Site Visit">Free Site Visit</option>
                  <option value="Investment / Rental">Investment / Rental</option>
                </select>
                {errors.interest && <p style={{ color: "#ef4444", fontSize: "11px", margin: "4px 0 0" }}>{errors.interest}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: loading ? "#555" : "#111",
                  color: "#f5c842",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px", fontWeight: 800,
                  letterSpacing: "2px", textTransform: "uppercase",
                  padding: "14px", border: "2px solid #f5c842",
                  borderRadius: "8px", cursor: loading ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  marginTop: "4px",
                }}
              >
                {loading ? (
                  <>
                    <span style={{
                      width: "14px", height: "14px",
                      border: "2px solid rgba(245,200,66,0.3)", borderTopColor: "#f5c842",
                      borderRadius: "50%", animation: "msf-spin 0.7s linear infinite", display: "inline-block",
                    }} />
                    Sending...
                  </>
                ) : "Get Best Price →"}
              </button>

              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: "10px",
                color: "#9ca3af", textAlign: "center", margin: 0,
              }}>🔒 100% secure · No spam</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
