import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CustomSelect from "./CustomSelect";

import heroMain from "../assets/Heroimages/image.webp";
import hero1 from "../assets/Heroimages/1.webp";
import hero2 from "../assets/Heroimages/2.webp";
import hero3 from "../assets/Heroimages/3.webp";
import hero4 from "../assets/Heroimages/4.webp";
import hero5 from "../assets/Heroimages/5.webp";
import hero6 from "../assets/Heroimages/6.webp";
import hero7 from "../assets/Heroimages/7.webp";
import hero8 from "../assets/Heroimages/8.webp";
import hero9 from "../assets/Heroimages/9.webp";
import hero10 from "../assets/Heroimages/10.webp";

import mobileImg0 from "../assets/Images_mobile/Outer.png";
import mobileImg1 from "../assets/Images_mobile/Flat.png";
import mobileImg2 from "../assets/Images_mobile/Amenities.png";

const mobileSlides = [
  { src: mobileImg0, alt: "AU Cosmos Corner exterior view Siddharth Vihar Ghaziabad" },
  { src: mobileImg1, alt: "AU Cosmos Corner 3 BHK flat interior Ghaziabad" },
  { src: mobileImg2, alt: "AU Cosmos Corner amenities clubhouse Ghaziabad" },
];

const heroImages = [heroMain, hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9, hero10];

const HeroSection = ({ onBookVisit }) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileSlide, setMobileSlide] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", interest: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [shakeFields, setShakeFields] = useState(false);
  const [pulseCta, setPulseCta] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setShakeFields(true);
      setTimeout(() => setShakeFields(false), 600);
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  // Pulse the CTA button every 3s while the form is in viewport
  useEffect(() => {
    let interval = null;
    const trigger = () => {
      setPulseCta(true);
      setTimeout(() => setPulseCta(false), 700);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trigger();
          interval = setInterval(trigger, 3000);
        } else {
          clearInterval(interval);
        }
      },
      { threshold: 0.5 }
    );
    if (formRef.current) observer.observe(formRef.current);
    return () => { observer.disconnect(); clearInterval(interval); };
  }, []);

  // Desktop carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Mobile carousel — 3.5s auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setMobileSlide((prev) => (prev + 1) % mobileSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim() || form.name.trim().length < 2) errs.name = "Enter your name";
    const clean = form.phone.replace(/\D/g, "").replace(/^91/, "");
    if (!/^[6-9]\d{9}$/.test(clean)) errs.phone = "Valid 10-digit number";
    if (!form.interest) errs.interest = "Please select";
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.name.trim(), phone: clean,
          email: "", interested_in: form.interest,
          purpose: "", timeline: "", message: "",
          source: "Mobile Hero Form",
        }),
      });
      const data = await res.json();
      if (data.success) navigate("/thank-you");
    } catch { /* silent */ }
    finally { setLoading(false); }
  };

  return (
    <>
      {/* ── MOBILE HERO ── */}
      <div className="md:hidden w-full" style={{ background: "#fff" }}>

        {/* ── 1. LEAD FORM ── */}
        <div ref={formRef} style={{ background: "#fffef8", padding: "20px 16px 24px", borderBottom: "1px solid #f0ead8" }}>

          {/* Project identity */}
          <div style={{ marginBottom: "16px" }}>
            <span style={{
              display: "inline-block",
              background: "rgba(180,140,0,0.08)",
              border: "1px solid rgba(180,140,0,0.3)",
              color: "#8a6800",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "9px", fontWeight: 700,
              letterSpacing: "2px", textTransform: "uppercase",
              padding: "3px 10px", borderRadius: "20px", marginBottom: "8px",
            }}>RERA: UPRERAPRJ466336</span>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "22px", fontWeight: 700, color: "#111",
              margin: "0 0 3px", lineHeight: 1.2,
            }}>AU Cosmos Corner</h1>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px", color: "#888",
              letterSpacing: "0.5px", margin: 0,
            }}>Siddharth Vihar, Ghaziabad · G+40 · 5.6 Acres</p>
          </div>

          {/* Price pills — clickable, opens lead form */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
            {[
              { label: "3 BHK from ₹1.22 Cr*" },
              { label: "5 BHK from ₹2.19 Cr*" },
            ].map(({ label }) => (
              <button key={label} onClick={onBookVisit} style={{
                background: "#f5c842", color: "#111",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "10px", fontWeight: 800,
                padding: "4px 10px", borderRadius: "2px",
                border: "none", cursor: "pointer",
                textDecoration: "underline", textDecorationStyle: "dotted",
                textUnderlineOffset: "2px",
              }}>{label}</button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <style>{`
              .mhf::placeholder { color: #aaa; }
              .mhf:focus { border-color: #c9a800 !important; outline: none; }
              @keyframes mhf-shake {
                0%,100% { transform: translateX(0); }
                20%      { transform: translateX(-5px); }
                40%      { transform: translateX(5px); }
                60%      { transform: translateX(-4px); }
                80%      { transform: translateX(4px); }
              }
              .mhf-shake { animation: mhf-shake 0.55s ease; }
              @keyframes cta-bounce {
                0%,100% { transform: translateY(0) scale(1); }
                25%      { transform: translateY(-4px) scale(1.03); }
                50%      { transform: translateY(0) scale(1); }
                75%      { transform: translateY(-2px) scale(1.015); }
              }
              .cta-bounce { animation: cta-bounce 0.65s ease; }
            `}</style>

            <input
              className={`mhf${shakeFields ? " mhf-shake" : ""}`}
              type="text" name="name" placeholder="Your Name"
              value={form.name} onChange={handleChange}
              style={{
                width: "100%", padding: "10px 12px", boxSizing: "border-box",
                fontFamily: "'DM Sans', sans-serif", fontSize: "13px",
                background: "#fff",
                border: `1px solid ${errors.name ? "#ef4444" : "#ddd"}`,
                borderRadius: "4px", color: "#111",
              }}
            />
            {errors.name && <p style={{ color: "#ef4444", fontSize: "10px", margin: "-4px 0 0" }}>{errors.name}</p>}

            <input
              className={`mhf${shakeFields ? " mhf-shake" : ""}`}
              type="tel" name="phone" placeholder="Phone Number"
              value={form.phone} onChange={handleChange}
              style={{
                width: "100%", padding: "10px 12px", boxSizing: "border-box",
                fontFamily: "'DM Sans', sans-serif", fontSize: "13px",
                background: "#fff",
                border: `1px solid ${errors.phone ? "#ef4444" : "#ddd"}`,
                borderRadius: "4px", color: "#111",
              }}
            />
            {errors.phone && <p style={{ color: "#ef4444", fontSize: "10px", margin: "-4px 0 0" }}>{errors.phone}</p>}

            <CustomSelect
              name="interest" value={form.interest} onChange={handleChange}
              placeholder="I'm Interested In..." error={errors.interest} dark={false}
              className={shakeFields ? "mhf-shake" : ""}
              options={[
                { value: "3 BHK + 3 Toilet (1780 Sq.Ft.)", label: "3 BHK · 1780 Sq.Ft." },
                { value: "3 BHK + Servant (1972 Sq.Ft.)", label: "3 BHK+S · 1972 Sq.Ft." },
                { value: "5 BHK + Servant (3175 Sq.Ft.)", label: "5 BHK+S · 3175 Sq.Ft." },
                { value: "Free Site Visit", label: "Free Site Visit" },
                { value: "Investment / Rental", label: "Investment / Rental" },
              ]}
            />
            {errors.interest && <p style={{ color: "#ef4444", fontSize: "10px", margin: "-4px 0 0" }}>{errors.interest}</p>}

            <button
              type="submit" disabled={loading}
              className={pulseCta && !loading ? "cta-bounce" : ""}
              style={{
                background: loading ? "#555" : "#f5c842",
                color: "#111", border: "none", borderRadius: "4px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px", fontWeight: 800,
                letterSpacing: "2px", textTransform: "uppercase",
                padding: "12px", cursor: loading ? "not-allowed" : "pointer",
                marginTop: "2px",
              }}
            >
              {loading ? "Sending..." : "Book Free Site Visit →"}
            </button>

            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "9px",
              color: "#bbb", textAlign: "center", margin: 0,
            }}>🔒 100% secure · No spam</p>
          </form>
        </div>

        {/* ── 2. IMAGE CAROUSEL ── */}
        <div style={{ position: "relative", background: "#000" }}>
          {/* Images */}
          <div style={{ position: "relative", width: "100%", paddingTop: "62%", overflow: "hidden" }}>
            {mobileSlides.map((slide, i) => (
              <img
                key={i}
                src={slide.src}
                alt={slide.alt}
                fetchpriority={i === 0 ? "high" : "low"}
                loading={i === 0 ? "eager" : "lazy"}
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%",
                  objectFit: "cover", objectPosition: "center",
                  opacity: mobileSlide === i ? 1 : 0,
                  transition: "opacity 0.7s ease-in-out",
                }}
              />
            ))}
          </div>

          {/* Prev / Next arrows */}
          <button onClick={() => setMobileSlide(i => (i - 1 + mobileSlides.length) % mobileSlides.length)}
            style={{
              position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.45)", border: "none", borderRadius: "50%",
              width: "32px", height: "32px", color: "#fff", fontSize: "18px",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            }}>‹</button>
          <button onClick={() => setMobileSlide(i => (i + 1) % mobileSlides.length)}
            style={{
              position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.45)", border: "none", borderRadius: "50%",
              width: "32px", height: "32px", color: "#fff", fontSize: "18px",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            }}>›</button>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: "7px", padding: "10px 0" }}>
            {mobileSlides.map((_, i) => (
              <button key={i} onClick={() => setMobileSlide(i)}
                style={{
                  width: mobileSlide === i ? "20px" : "7px", height: "7px",
                  borderRadius: "4px",
                  background: mobileSlide === i ? "#f5c842" : "rgba(255,255,255,0.4)",
                  border: "none", cursor: "pointer", padding: 0,
                  transition: "all 0.35s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP HERO (carousel) ── */}
      <section className="hidden md:block">
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
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          pointer-events: none;
          display: block;
        }
        .hero-slide.active {
          opacity: 1;
        }
        .hero-slide img {
          object-position: center;
        }
        @media (max-width: 767px) {
          .hero-slide img {
            object-position: center 30%;
          }
        }
      `}</style>

      <section className="relative w-full min-h-[55vh] md:min-h-screen overflow-hidden">

        {/* Background Carousel */}
        {heroImages.map((src, i) => (
          <picture
            key={i}
            className={`hero-slide${currentSlide === i ? " active" : ""}`}
          >
            <img
              src={src}
              alt={`AU Cosmos Corner luxury 3 BHK apartment Siddharth Vihar Ghaziabad view ${i + 1}`}
              fetchpriority={i === 0 ? "high" : "low"}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
            />
          </picture>
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
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-[55vh] md:min-h-screen px-10 md:px-20 lg:px-28 pt-16 xl:pt-10 pb-20 gap-10">

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
      </section>
    </>
  );
};

export default HeroSection;