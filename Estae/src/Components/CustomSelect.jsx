import { useState, useRef, useEffect } from "react";

export default function CustomSelect({ name, value, onChange, options, placeholder, error, dark = false, className = "" }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = options.find(o => o.value === value);

  const triggerStyle = {
    width: "100%",
    padding: "10px 36px 10px 12px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: dark ? "13px" : "12px",
    background: dark ? "rgba(255,255,255,0.18)" : "#fff",
    border: `1px solid ${error ? "#ef4444" : dark ? "rgba(255,255,255,0.3)" : "#d1d5db"}`,
    borderRadius: "4px",
    color: value ? (dark ? "#fff" : "#111") : (dark ? "rgba(255,255,255,0.5)" : "#9ca3af"),
    cursor: "pointer",
    textAlign: "left",
    position: "relative",
    boxSizing: "border-box",
    outline: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "border-color 0.15s",
  };

  return (
    <div ref={ref} className={className} style={{ position: "relative", width: "100%" }}>
      {/* Trigger */}
      <button
        type="button"
        data-testid={`select-trigger-${name}`}
        onClick={() => setOpen(o => !o)}
        style={{
          ...triggerStyle,
          borderColor: open ? "#f5c842" : (error ? "#ef4444" : dark ? "rgba(255,255,255,0.3)" : "#d1d5db"),
        }}
      >
        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {selected ? selected.label : placeholder}
        </span>
        <span style={{
          position: "absolute", right: "12px", top: "50%", transform: `translateY(-50%) rotate(${open ? "180deg" : "0deg"})`,
          transition: "transform 0.2s", color: dark ? "rgba(255,255,255,0.5)" : "#9ca3af", fontSize: "11px",
          pointerEvents: "none",
        }}>▼</span>
      </button>

      {/* Dropdown list */}
      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0,
          background: "#fff", border: "1px solid #f5c842",
          borderRadius: "4px", boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          zIndex: 999, overflow: "hidden",
        }}>
          {options.map(opt => (
            <button
              key={opt.value}
              type="button"
              data-testid={`select-option-${opt.value.replace(/\s+/g, "-").toLowerCase()}`}
              onMouseEnter={() => setHovered(opt.value)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => {
                onChange({ target: { name, value: opt.value } });
                setOpen(false);
                setHovered(null);
              }}
              style={{
                display: "block", width: "100%", textAlign: "left",
                padding: "10px 14px",
                fontFamily: "'DM Sans', sans-serif", fontSize: "13px",
                background: hovered === opt.value ? "#fef9c3" : value === opt.value ? "#fef08a" : "#fff",
                color: "#111",
                border: "none", cursor: "pointer",
                borderBottom: "1px solid #f9fafb",
                fontWeight: value === opt.value ? 700 : 400,
                transition: "background 0.12s",
              }}
            >
              {hovered === opt.value || value === opt.value ? "› " : ""}{opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
