import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomSelect from "./CustomSelect";

const phoneRegex = /^[6-9]\d{9}$/;

const inputStyle = (hasError) => ({
  width: "100%",
  padding: "9px 12px",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "12px",
  background: "#fff",
  border: `1px solid ${hasError ? "#ef4444" : "#d1d5db"}`,
  outline: "none",
  borderRadius: "2px",
  color: "#111",
  boxSizing: "border-box",
});

export default function StickyLeadForm() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", interest: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

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
          source: "Sticky Form",
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
    <div
      className="hidden lg:flex"
      style={{
        position: "fixed",
        right: 0,
        top: "50%",
        transform: `translateY(-50%) translateX(${visible ? "0" : "100%"})`,
        transition: "transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)",
        zIndex: 45,
        flexDirection: "row",
        alignItems: "stretch",
      }}
    >
      {/* Toggle Tab */}
      <button
        onClick={() => setCollapsed(c => !c)}
        style={{
          writingMode: "vertical-rl",
          background: "#f5c842",
          color: "#111",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px",
          fontWeight: 800,
          letterSpacing: "2.5px",
          textTransform: "uppercase",
          padding: "20px 10px",
          border: "none",
          cursor: "pointer",
          borderRadius: "6px 0 0 6px",
          boxShadow: "-4px 0 20px rgba(0,0,0,0.35)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          flexShrink: 0,
          transition: "background 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.background = "#e6b800"}
        onMouseLeave={e => e.currentTarget.style.background = "#f5c842"}
        aria-label={collapsed ? "Open lead form" : "Collapse lead form"}
      >
        <span style={{ fontSize: "13px", writingMode: "horizontal-tb" }}>
          {collapsed ? "▶" : "▼"}
        </span>
        {collapsed ? "Get Price" : "Close"}
      </button>

      {/* Form Panel */}
      <div
        style={{
          width: collapsed ? "0" : "260px",
          overflow: "hidden",
          transition: "width 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div style={{
          width: "260px",
          background: "#fff",
          boxShadow: "-6px 0 32px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          borderLeft: "3px solid #f5c842",
          borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb",
        }}>

          {/* Header */}
          <div style={{ padding: "16px 18px 14px", borderBottom: "1px solid rgba(245,200,66,0.2)" }}>
            <p style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "16px",
              fontWeight: 700,
              color: "#fff",
              margin: "0 0 3px",
              letterSpacing: "0.03em",
            }}>Get Best Price</p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "10px",
              color: "#111",
              fontWeight: 800,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              margin: 0,
            }}>AU Cosmos Corner · Free Callback</p>
          </div>

          {submitted ? (
            <div style={{ padding: "32px 18px", textAlign: "center" }}>
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>✅</div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                fontWeight: 700,
                color: "#111",
                margin: "0 0 6px",
              }}>Thank You!</p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                color: "#6b7280",
              }}>We'll call you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: "10px" }}>

              <style>{`
                .slf-input::placeholder { color: #9ca3af; }
                .slf-input:focus { border-color: #f5c842 !important; }
                .slf-select option { background: #fff; color: #111; }
                @keyframes slf-spin { to { transform: rotate(360deg); } }
              `}</style>

              {/* Name */}
              <div>
                <input
                  className="slf-input"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  style={inputStyle(errors.name)}
                />
                {errors.name && <p style={{ color: "#ef4444", fontSize: "10px", margin: "3px 0 0" }}>{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <input
                  className="slf-input"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  style={inputStyle(errors.phone)}
                />
                {errors.phone && <p style={{ color: "#ef4444", fontSize: "10px", margin: "3px 0 0" }}>{errors.phone}</p>}
              </div>

              {/* Interest */}
              <div>
                <CustomSelect
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  placeholder="I'm Interested In..."
                  error={errors.interest}
                  options={[
                    { value: "3 BHK + 3 Toilet (1780 Sq.Ft.)", label: "3 BHK · 1780 Sq.Ft." },
                    { value: "3 BHK + Servant (1972 Sq.Ft.)", label: "3 BHK+S · 1972 Sq.Ft." },
                    { value: "5 BHK + Servant (3175 Sq.Ft.)", label: "5 BHK+S · 3175 Sq.Ft." },
                    { value: "Free Site Visit", label: "Free Site Visit" },
                    { value: "Investment / Rental", label: "Investment / Rental" },
                  ]}
                />
                {errors.interest && <p style={{ color: "#ef4444", fontSize: "10px", margin: "3px 0 0" }}>{errors.interest}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: loading ? "#555" : "#f5c842",
                  color: "#111",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "11px",
                  border: "none",
                  borderRadius: "2px",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "background 0.2s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  marginTop: "2px",
                }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.background = "#e6b800"; }}
                onMouseLeave={e => { if (!loading) e.currentTarget.style.background = "#f5c842"; }}
              >
                {loading ? (
                  <>
                    <span style={{
                      width: "12px", height: "12px",
                      border: "2px solid rgba(0,0,0,0.2)",
                      borderTopColor: "#111",
                      borderRadius: "50%",
                      animation: "slf-spin 0.7s linear infinite",
                      display: "inline-block",
                    }} />
                    Sending...
                  </>
                ) : "Get Best Price →"}
              </button>

              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "9px",
                color: "#9ca3af",
                textAlign: "center",
                margin: 0,
              }}>
                🔒 Your details are 100% secure
              </p>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
