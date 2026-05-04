import { useState } from "react";
import img from "../assets/image.png";

const HeroSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

 const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://real-state-udkw.vercel.app/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          full_name: form.name,
          phone: form.phone,
          email: form.email,
          interested_in: form.interest,
          message: ''
        })
      });

      const data = await response.json();
      console.log('Response:', data); // debug ke liye
      
      if(data.success) {
        setSubmitted(true);
      } else {
        alert('Error: ' + JSON.stringify(data));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong: ' + error.message);
    }
};

  return (
    <>
      {/* Google Fonts */}
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
        }
        .hero-submit:hover {
          background: #333;
          letter-spacing: 0.38em;
        }
      `}</style>

      <section className="relative w-full h-screen overflow-hidden">

        {/* Background Image — NO dark overlay */}
        <img
          src={img}
          alt="AU Realestate"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Subtle left gradient only — to make left text readable */}
        {/* <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0) 100%)",
          }}
        /> */}

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-8 md:px-14 lg:px-20 py-20 gap-10">

          {/* ── LEFT: Text ── */}
          <div className="flex flex-col gap-4 flex-1">

           
            <span
                style={{
                  fontFamily: "'lato', sans-serif",
                  fontSize: "30px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
               Siddharth Vihar, Ghaziabad
              </span>

            {/* <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
              }}
            >
              AU REAL <br />
              <span style={{ color: "#f5e6c0", fontStyle: "italic", fontWeight: 300 }}>
                Estate
              </span>
            </h1> */}

            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "20px",
                fontWeight: 400,
                letterSpacing: "0.25em",
                color: "rgba(255,255,255,0.65)",
                textTransform: "uppercase",
              }}
            >
          
            </p>

            {/* Tag */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "8px",
                borderLeft: "3px solid #f5e6c0",
                paddingLeft: "14px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "20px",
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
               3 BHK, 3 BHK + Servant, 5 BHK + Servant luxury apartments
              </span>
            </div>
          </div>

          {/* ── RIGHT: Form Card ── */}
          <div
            className="w-full lg:w-[360px] flex-shrink-0"
            style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.45)" }}
          >
            {/* Card Header */}
            <div
              style={{
                background: "#fff",
                borderBottom: "1px solid #eee",
                padding: "20px 24px 16px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#111",
                  letterSpacing: "0.06em",
                }}
              >
                AU Realestate
              </p>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "10px",
                  fontWeight: 400,
                  letterSpacing: "0.25em",
                  color: "#999",
                  textTransform: "uppercase",
                  marginTop: "3px",
                }}
              >
               Siddharth Vihar, Ghaziabad
              </p>
            </div>

            {/* Card Body */}
            <div style={{ background: "#fff", padding: "20px 24px 24px" }}>

              {submitted ? (
                <div style={{ textAlign: "center", padding: "28px 0" }}>
                  <p style={{ fontSize: "28px", marginBottom: "10px" }}>✓</p>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#111",
                    }}
                  >
                    Thank You
                  </p>
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "12px",
                      color: "#888",
                      marginTop: "6px",
                      lineHeight: 1.6,
                    }}
                  >
                    Our team will contact you shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", interest: "" }); }}
                    style={{
                      marginTop: "14px",
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "11px",
                      color: "#888",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textDecoration: "underline",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Submit another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

                  {/* Call strip */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "#f8f8f8",
                      border: "1px solid #eee",
                      padding: "10px 14px",
                      marginBottom: "4px",
                    }}
                  >
                    <span style={{ fontSize: "14px" }}>📞</span>
                    <span
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "#333",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Call us: 9711557670
                    </span>
                  </div>

                  <input className="hero-input" type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
                  <input className="hero-input" type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                  <input className="hero-input" type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
            <select className="hero-input" name="interest" value={form.interest} onChange={handleChange} required>
  <option value="" disabled>I am Interested in...</option>
  <option value="3 BHK + 3 Toilet (1780 Sq.Ft.)">3 BHK + 3 Toilet (1780 Sq.Ft.)</option>
  <option value="3 BHK + Servant (1972 Sq.Ft.)">3 BHK + Servant (1972 Sq.Ft.)</option>
  <option value="5 BHK + Servant (3175 Sq.Ft.)">5 BHK + Servant (3175 Sq.Ft.)</option>
  <option value="Free Site Visit">Free Site Visit</option>
  <option value="Investment / Rental">Investment / Rental</option>
</select>

                  <button className="hero-submit" type="submit" style={{ marginTop: "4px" }}>
                    Submit
                  </button>

                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "10px",
                      color: "#bbb",
                      textAlign: "center",
                      marginTop: "2px",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Your details are 100% secure with us.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default HeroSection;