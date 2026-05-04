 import { useState } from "react";

// const Navbar = () => { 
  const Navbar = ({ onBookVisit }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Overview", href: "#overview" },
    { name: "Amenities", href: "#amenities" },
    { name: "Highlights", href: "#highlights" },
 
    { name: "Location Map", href: "#location" },
  ];

  return (
   <nav className="w-full bg-black z-50 sticky top-0 border-b border-yellow-600/30">

      {/* ── Top Bar ── */}
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-4">

        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <span className="text-2xl md:text-3xl font-bold tracking-[4px] uppercase text-yellow-300"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      AU Realestate
          </span>
         
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`text-[13px] font-medium tracking-[2px] uppercase no-underline transition-colors duration-300 hover:text-yellow-400
                  ${link.name === "Home" ? "text-yellow-500" : "text-white"}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
      <button onClick={onBookVisit} className="hidden lg:block text-[12px] font-semibold tracking-[2px] uppercase px-7 py-3 border border-yellow-500 text-yellow-500 transition-all duration-300 hover:bg-yellow-500 hover:text-black">
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
                className="text-[15px] font-normal tracking-[2px] uppercase text-white no-underline transition-colors duration-300 hover:text-yellow-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="px-8 pb-8">
      <button onClick={() => { setMenuOpen(false); onBookVisit(); }} className="inline-block text-[12px] font-semibold tracking-[2px] uppercase px-7 py-3 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300">
  Book Site Visit
</button>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;