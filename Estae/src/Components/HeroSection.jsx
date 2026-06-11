import { useState, useEffect } from "react";

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileSlide, setMobileSlide] = useState(0);

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

  return (
    <>
      {/* ── MOBILE HERO ── */}
      <section className="md:hidden relative w-full overflow-hidden" style={{ minHeight: "70vh", background: "#0f0f0f" }}>

        {/* Carousel images */}
        {mobileSlides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.alt}
            fetchpriority={i === 0 ? "high" : "low"}
            loading={i === 0 ? "eager" : "lazy"}
            style={{
              position: "absolute", inset: 0, width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center",
              opacity: mobileSlide === i ? 0.7 : 0,
              transition: "opacity 0.8s ease-in-out",
            }}
          />
        ))}

        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.05) 100%)" }} />

        <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "flex-end", minHeight: "70vh", padding: "0 20px 28px" }}>
          {/* RERA badge */}
          <span style={{
            display: "inline-block",
            background: "rgba(245,200,66,0.15)",
            border: "1px solid rgba(245,200,66,0.5)",
            color: "#f5c842",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            padding: "4px 10px",
            borderRadius: "20px",
            marginBottom: "12px",
            width: "fit-content",
          }}>RERA: UPRERAPRJ466336</span>

          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.8rem, 8vw, 2.6rem)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.2,
            margin: "0 0 6px",
          }}>
            AU Cosmos Corner
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.08em",
            margin: "0 0 18px",
          }}>
            Siddharth Vihar, Ghaziabad · G+40 · 5.6 Acres
          </p>

          {/* Price pills */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
            {["3 BHK from ₹1.22 Cr*", "5 BHK from ₹2.19 Cr*"].map(tag => (
              <span key={tag} style={{
                background: "#f5c842", color: "#111",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px", fontWeight: 800, letterSpacing: "0.5px",
                padding: "5px 12px", borderRadius: "2px",
              }}>{tag}</span>
            ))}
          </div>

          <button
            onClick={onBookVisit}
            style={{
              background: "#fff", color: "#111",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px", fontWeight: 800,
              letterSpacing: "2px", textTransform: "uppercase",
              padding: "14px 0", border: "none", cursor: "pointer",
              width: "100%", borderRadius: "2px", marginBottom: "16px",
            }}
          >
            Book Free Site Visit
          </button>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
            {mobileSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setMobileSlide(i)}
                style={{
                  width: mobileSlide === i ? "20px" : "7px",
                  height: "7px",
                  borderRadius: "4px",
                  background: mobileSlide === i ? "#f5c842" : "rgba(255,255,255,0.35)",
                  border: "none", cursor: "pointer", padding: 0,
                  transition: "all 0.35s ease",
                }}
              />
            ))}
          </div>
        </div>
      </section>

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