import { useState } from "react";
import logo from "../assets/au-logo-black.webp";

const Navbar = ({ onBookVisit }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Overview", href: "#overview" },
    { name: "Amenities", href: "#amenities" },
    { name: "Highlights", href: "#highlights" },
    { name: "Price List", href: "#pricelist" },
    { name: "Location Map", href: "#location" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="w-full bg-white z-50 sticky top-0 shadow-sm">

      {/* ── Disclosure Bar ── */}
      <div className="w-full bg-gray-900 text-center py-1.5 px-4">
        <p className="text-xs text-gray-300" style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.04em" }}>
          Marketed by <span className="text-yellow-400 font-semibold">Truelite Estates LLP</span> — Authorized Channel Partner of AU Real Estate Pvt. Ltd. | RERA: UPRERAPRJ466336
        </p>
      </div>

      {/* ── Top Bar ── */}
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-4 border-b border-yellow-500/40">

        {/* Logo */}
        <div className="flex items-center">
          <div style={{
            background: "#fff",
            padding: "4px 10px",
            borderRadius: "4px",
            display: "inline-flex",
            alignItems: "center",
          }}>
            <img
              src={logo}
              alt="AU Cosmos Corner - Truelite Estates LLP Authorized Channel Partner"
              style={{ height: "60px", width: "auto", objectFit: "contain", display: "block" }}
            />
          </div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                style={{ textDecoration: "none" }}
                className={`text-[13px] font-bold tracking-[2px] uppercase transition-all duration-300 pb-1
                  ${link.name === "Home"
                    ? "text-yellow-500 border-b-2 border-yellow-500"
                    : "text-gray-800 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-400"}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop: Phone CTA + Book Site Visit */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onBookVisit}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px 10px",
              borderRadius: "4px",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#fef9c3"}
            onMouseLeave={e => e.currentTarget.style.background = "none"}
          >
            <span style={{ fontSize: "16px" }}>📞</span>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              color: "#111",
              letterSpacing: "0.04em",
            }}>
              9711557670
            </span>
          </button>

          <button
            onClick={onBookVisit}
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding: "12px 28px",
              background: "#111",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              transition: "background 0.25s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#333"}
            onMouseLeave={e => e.currentTarget.style.background = "#111"}
          >
            Book Site Visit
          </button>
        </div>

        {/* Mobile: Book Site Visit */}
        <button
          className="lg:hidden"
          onClick={onBookVisit}
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            padding: "9px 14px",
            background: "#111",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Book Site Visit
        </button>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[6px] p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block w-7 h-[2px] bg-yellow-500 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-7 h-[2px] bg-yellow-500 transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block w-7 h-[2px] bg-yellow-500 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      <div className={`lg:hidden bg-zinc-950 border-t border-yellow-600/20 overflow-hidden transition-all duration-500
        ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>

        <ul className="flex flex-col gap-5 px-8 py-6 list-none m-0">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[15px] font-bold tracking-[2px] uppercase text-white no-underline transition-colors duration-300 hover:text-yellow-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="px-8 pb-6 flex flex-col gap-3">
          <button
            onClick={() => { setMenuOpen(false); onBookVisit(); }}
            className="flex items-center gap-2 text-yellow-400 font-bold text-sm bg-transparent border-none cursor-pointer"
          >
            <span>📞</span> 9711557670
          </button>
          <button
            onClick={() => { setMenuOpen(false); onBookVisit(); }}
            style={{
              display: "inline-block",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding: "12px 28px",
              background: "#111",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Book Site Visit
          </button>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;