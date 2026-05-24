import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/image.png";

const HeroSection = ({ onBookVisit }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // ✅ Loading state
  const [form, setForm] = useState({
    name: "",
    phone: "",
    interest: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!nameRegex.test(form.name)) {
      newErrors.name = "Only letters, minimum 3 characters";
    }
    if (!phoneRegex.test(form.phone)) {
      newErrors.phone = "Valid 10 digit Indian number";
    }
    if (!form.interest) {
      newErrors.interest = "Interest select required";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    setLoading(true); // ✅ Loading start

    try {
      const response = await fetch('https://real-state-udkw.vercel.app/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: form.name,
          phone: form.phone,
          email: '',
          interested_in: form.interest,
          message: ''
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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Jost:wght@300;400;500;600&display=swap');

        .hero-input {
          width: 100%;
          padding: 11px 16px;
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 300;
          letter-spacing: 0.04em;
          color: #111;
          background: #fff;
          border: 1px solid #ddd;
          outline: none;
          transition: border-color 0.2s;
        }
        .hero-input::placeholder { color: #aaa; }
        .hero-input:focus { border-color: #111; }

        .hero-submit {
          width: 100%;
          padding: 13px;
          background: #111;
          color: #fff;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: background 0.25s, letter-spacing 0.25s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .hero-submit:hover:not(:disabled) {
          background: #333;
          letter-spacing: 0.38em;
        }
        .hero-submit:disabled {
          background: #555;
          cursor: not-allowed;
          letter-spacing: 0.3em;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .spinner {
          width: 14px;
          height: 14px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }
      `}</style>

      <section className="relative w-full min-h-screen overflow-hidden">

        {/* Background Image */}
        <img
          src={img}
          alt="AU Realestate"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.05) 100%)",
            zIndex: 1
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen px-8 md:px-14 lg:px-20 py-20 gap-10">

          {/* ── LEFT: Text ── */}
          <div className="flex flex-col gap-4 flex-1">

{/* RERA Badge */}
<div className="flex flex-col items-start w-full mb-1">
  <span className="text-yellow-400 text-4xl font-extrabold tracking-widest uppercase px-4 py-1.5 rounded">
    RERA Approved
  </span>
  <span className="text-white/80 text-3xl font-medium tracking-wider mt-1 px-4">
   UPRERAPRJ466336/05/2026
  </span>
</div>

            <span style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "25px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#fff",
              textTransform: "uppercase",
            }}>
              Siddharth Vihar, Ghaziabad
            </span>

            <span style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "40px",
              fontWeight: 800,
              letterSpacing: "0.15em",
              color: "#fff",
              textTransform: "uppercase",
            }}>
              Pre-launch at <br /> ₹6900/sq ft
            </span>

            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "20px",
              fontWeight: 400,
              letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.65)",
              textTransform: "uppercase",
            }}>
            </p>

            {/* Tag */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "8px",
              borderLeft: "3px solid #f5e6c0",
              paddingLeft: "14px",
            }}>
              <span style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "20px",
                fontWeight: 400,
                letterSpacing: "0.15em",
                color: "#fff",
                textTransform: "uppercase",
              }}>
                3 BHK, 3 BHK + Servant, 5 BHK + Servant luxury apartments
              </span>
            </div>

            {/* Specifications */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "16px",
            }}>
              {[
                " 1.5 Ton Split AC in All Bedrooms",
                " Modular Kitchen",
                " Wardrobes in  Bedrooms",
              ].map((spec) => (
                <div key={spec} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  padding: "7px 14px",
                  borderRadius: "50px",
                  backdropFilter: "blur(6px)",
                }}>
                  <span style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#fff",
                    letterSpacing: "0.08em",
                  }}>
                    {spec}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Form Card ── */}
          <div
            className="w-full lg:w-[360px] flex-shrink-0"
            style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.45)" }}
          >
            {/* Card Header */}
            <div style={{
              background: "#fff",
              borderBottom: "1px solid #eee",
              padding: "20px 24px 16px",
              textAlign: "center",
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "20px",
                fontWeight: 600,
                color: "#111",
                letterSpacing: "0.06em",
              }}>
                AU Realestate
              </p>
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.25em",
                color: "#999",
                textTransform: "uppercase",
                marginTop: "3px",
              }}>
                Siddharth Vihar, Ghaziabad
              </p>
            </div>

            {/* Card Body */}
            <div style={{ background: "#fff", padding: "20px 24px 24px" }}>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

                {/* Call strip */}
                <button
                  type="button"
                  onClick={onBookVisit}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#fbbf24",
                    border: "none",
                    padding: "11px 14px",
                    marginBottom: "4px",
                    borderRadius: "2px",
                    boxShadow: "0 2px 8px rgba(251,191,36,0.4)",
                    width: "100%",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "#f59e0b"}
                  onMouseLeave={e => e.currentTarget.style.background = "#fbbf24"}
                >
                  <span style={{ fontSize: "16px" }}>📞</span>
                  <span style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "13px",
                    fontWeight: 800,
                    color: "#111",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                  }}>
                    Call us: 9711557670
                  </span>
                  <span style={{ marginLeft: "auto", fontSize: "11px", color: "#444", fontWeight: 500 }}>
                    Tap →
                  </span>
                </button>

                <input className="hero-input" type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
                {errors.name && <p style={{ color: "red", fontSize: "11px", margin: "-4px 0" }}>{errors.name}</p>}

                <input className="hero-input" type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
                {errors.phone && <p style={{ color: "red", fontSize: "11px", margin: "-4px 0" }}>{errors.phone}</p>}

                <select className="hero-input" name="interest" value={form.interest} onChange={handleChange} required>
                  <option value="" disabled>I am Interested in...</option>
                  <option value="3 BHK + 3 Toilet (1780 Sq.Ft.)">3 BHK + 3 Toilet (1780 Sq.Ft.)</option>
                  <option value="3 BHK + Servant (1972 Sq.Ft.)">3 BHK + Servant (1972 Sq.Ft.)</option>
                  <option value="5 BHK + Servant (3175 Sq.Ft.)">5 BHK + Servant (3175 Sq.Ft.)</option>
                  <option value="Free Site Visit">Free Site Visit</option>
                  <option value="Investment / Rental">Investment / Rental</option>
                </select>
                {errors.interest && <p style={{ color: "red", fontSize: "11px", margin: "-4px 0" }}>{errors.interest}</p>}

                {/* ✅ Fixed Submit Button with Spinner */}
                <button
                  className="hero-submit"
                  type="submit"
                  disabled={loading}
                  style={{ marginTop: "4px" }}
                >
                  {loading ? (
                    <>
                      <span className="spinner"></span>
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>

                <p style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "10px",
                  color: "#bbb",
                  textAlign: "center",
                  marginTop: "2px",
                  letterSpacing: "0.04em",
                }}>
                  Your details are 100% secure with us.
                </p>
              </form>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default HeroSection;