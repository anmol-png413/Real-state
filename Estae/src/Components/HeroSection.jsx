import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import heroMain from "../assets/image.png";
import hero1 from "../assets/Heroimages/1.png";
import hero2 from "../assets/Heroimages/2.png";
import hero3 from "../assets/Heroimages/3.png";
import hero4 from "../assets/Heroimages/4.png";
import hero5 from "../assets/Heroimages/5.png";
import hero6 from "../assets/Heroimages/6.png";
import hero7 from "../assets/Heroimages/7.png";
import hero8 from "../assets/Heroimages/8.png";
import hero9 from "../assets/Heroimages/9.png";
import hero10 from "../assets/Heroimages/10.png";

const heroImages = [heroMain, hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9, hero10];

const HeroSection = ({ onBookVisit }) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    interest: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

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
          message: '',
          source: 'Hero Section'
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

        .hero-input {
          width: 100%;
          padding: 11px 16px;
          font-family: 'DM Sans', sans-serif;
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
          font-family: 'DM Sans', sans-serif;
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
        .hero-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          pointer-events: none;
        }
        .hero-slide.active {
          opacity: 1;
        }
      `}</style>

      <section className="relative w-full min-h-screen overflow-hidden">

        {/* Background Carousel */}
        {heroImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`AU Cosmos Corner luxury 3 BHK apartment Siddharth Vihar Ghaziabad view ${i + 1}`}
            className={`hero-slide${currentSlide === i ? " active" : ""}`}
            fetchpriority={i === 0 ? "high" : "low"}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}

        {/* Dark Overlay */}
        {/* <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.05) 100%)",
            zIndex: 1
          }}
        /> */}

        {/* RERA — Circular stamp on desktop, inline strip on mobile */}


        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen px-10 md:px-20 lg:px-28 pt-16 xl:pt-10 pb-20 gap-10">

          {/* ── LEFT: Text ── */}
          <div className="flex flex-col gap-4 flex-1">

{/* 
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "25px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#fff",
              textTransform: "uppercase",
              margin: 0,
            }}>
              Siddharth Vihar, Ghaziabad
            </span> */}
{/* 
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              fontWeight: 800,
              letterSpacing: "0.08em",
              color: "#fff",
              textTransform: "uppercase",
              lineHeight: 1.25,
            }}>
              Luxury 3 BHK Flats <br />
              <span style={{ color: "#f5d98b" }}>Starting at ₹1.22 Cr*</span>
            </span> */}


          </div>

          {/* ── RIGHT: Form Card ── */}
          {/* <div
            className="w-full lg:w-[360px] flex-shrink-0"
            style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.45)" }}
          >
            <div style={{
              background: "#fff",
              borderBottom: "1px solid #eee",
              padding: "20px 24px 16px",
              textAlign: "center",
            }}>
              <p style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "20px",
                fontWeight: 600,
                color: "#111",
                letterSpacing: "0.06em",
              }}>
                AU Cosmos Corner
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
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

            <div style={{ background: "#fff", padding: "20px 24px 24px" }}>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
                    fontFamily: "'DM Sans', sans-serif",
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
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "10px",
                  color: "#bbb",
                  textAlign: "center",
                  marginTop: "2px",
                  letterSpacing: "0.04em",
                }}>
                  By submitting, you agree to our{" "}
                  <a href="/privacy-policy" style={{ color: "#f5c842", textDecoration: "underline" }}>Privacy Policy</a>.
                  Your details are secure with us.
                </p>
              </form>
            </div>
          </div> */}

        </div>
      </section>
    </>
  );
};

export default HeroSection;