import sharp from "sharp";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 1200x630 OG image as SVG
const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f0f0f;stop-opacity:1" />
      <stop offset="60%" style="stop-color:#1a1a1a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#111827;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#f5c842;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)" />

  <!-- Left gold accent bar -->
  <rect x="0" y="0" width="8" height="630" fill="url(#accent)" />

  <!-- Bottom gold strip -->
  <rect x="0" y="580" width="1200" height="50" fill="url(#accent)" opacity="0.12" />

  <!-- Gold horizontal rule -->
  <rect x="60" y="320" width="520" height="3" fill="url(#accent)" />

  <!-- RERA badge — top right circle -->
  <circle cx="1060" cy="160" r="110" fill="none" stroke="#f5c842" stroke-width="3" opacity="0.9" />
  <circle cx="1060" cy="160" r="95" fill="none" stroke="#f5c842" stroke-width="1" opacity="0.4" stroke-dasharray="6 4" />
  <text x="1060" y="128" font-family="Arial, sans-serif" font-size="13" font-weight="800" fill="#f5c842" text-anchor="middle" letter-spacing="3">★ RERA ★</text>
  <text x="1060" y="158" font-family="Arial, sans-serif" font-size="20" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="2">APPROVED</text>
  <line x1="1010" y1="170" x2="1110" y2="170" stroke="#f5c842" stroke-width="1" opacity="0.6" />
  <text x="1060" y="192" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="1">UPRERAPRJ466336</text>
  <text x="1060" y="210" font-family="Arial, sans-serif" font-size="11" font-weight="400" fill="rgba(255,255,255,0.7)" text-anchor="middle">05/2026</text>

  <!-- Top label -->
  <text x="60" y="160" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#f5c842" letter-spacing="6">SIDDHARTH VIHAR, GHAZIABAD</text>

  <!-- Main project name -->
  <text x="60" y="240" font-family="Georgia, serif" font-size="68" font-weight="700" fill="#ffffff" letter-spacing="2">AU Cosmos Corner</text>

  <!-- Tagline -->
  <text x="60" y="300" font-family="Arial, sans-serif" font-size="22" font-weight="300" fill="rgba(255,255,255,0.7)" letter-spacing="3">LUXURY RESIDENCES · GHAZIABAD, NCR</text>

  <!-- Price badge -->
  <rect x="60" y="345" width="280" height="56" rx="4" fill="#f5c842" />
  <text x="200" y="366" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#111" text-anchor="middle" letter-spacing="3">PRE-LAUNCH PRICE</text>
  <text x="200" y="392" font-family="Arial, sans-serif" font-size="24" font-weight="900" fill="#111" text-anchor="middle">₹6,900 / SQ FT</text>

  <!-- Config chips -->
  <rect x="360" y="345" width="145" height="56" rx="4" fill="none" stroke="rgba(245,200,66,0.5)" stroke-width="1.5" />
  <text x="432" y="367" font-family="Arial, sans-serif" font-size="10" font-weight="600" fill="#f5c842" text-anchor="middle" letter-spacing="2">CONFIGURATION</text>
  <text x="432" y="389" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">3 BHK · 5 BHK</text>

  <rect x="520" y="345" width="145" height="56" rx="4" fill="none" stroke="rgba(245,200,66,0.5)" stroke-width="1.5" />
  <text x="592" y="367" font-family="Arial, sans-serif" font-size="10" font-weight="600" fill="#f5c842" text-anchor="middle" letter-spacing="2">TOWERS</text>
  <text x="592" y="389" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">3 Towers · G+36</text>

  <!-- Amenity pills -->
  <rect x="60" y="430" width="140" height="30" rx="15" fill="rgba(255,255,255,0.08)" />
  <text x="130" y="450" font-family="Arial, sans-serif" font-size="11" font-weight="600" fill="rgba(255,255,255,0.8)" text-anchor="middle">🏊 Swimming Pool</text>

  <rect x="216" y="430" width="120" height="30" rx="15" fill="rgba(255,255,255,0.08)" />
  <text x="276" y="450" font-family="Arial, sans-serif" font-size="11" font-weight="600" fill="rgba(255,255,255,0.8)" text-anchor="middle">🏋 Gymnasium</text>

  <rect x="352" y="430" width="130" height="30" rx="15" fill="rgba(255,255,255,0.08)" />
  <text x="417" y="450" font-family="Arial, sans-serif" font-size="11" font-weight="600" fill="rgba(255,255,255,0.8)" text-anchor="middle">🏠 Clubhouse</text>

  <rect x="498" y="430" width="160" height="30" rx="15" fill="rgba(255,255,255,0.08)" />
  <text x="578" y="450" font-family="Arial, sans-serif" font-size="11" font-weight="600" fill="rgba(255,255,255,0.8)" text-anchor="middle">🔒 24/7 Security</text>

  <!-- Bottom bar text -->
  <text x="60" y="610" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="rgba(255,255,255,0.5)" letter-spacing="1">Marketed by Truelite Estates LLP — Authorized Channel Partner of AU Real Estate Pvt. Ltd.</text>
  <text x="1140" y="610" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="rgba(255,255,255,0.5)" text-anchor="end">📞 9711557670</text>

  <!-- Decorative dots grid top-right -->
  ${Array.from({ length: 5 }, (_, row) =>
    Array.from({ length: 8 }, (_, col) =>
      `<circle cx="${900 + col * 22}" cy="${320 + row * 22}" r="1.5" fill="rgba(245,200,66,0.25)" />`
    ).join("")
  ).join("")}
</svg>
`;

const outputPath = path.join(__dirname, "../public/og-image.jpg");

sharp(Buffer.from(svg))
  .jpeg({ quality: 92 })
  .toFile(outputPath)
  .then(() => console.log(`✅ OG image generated: ${outputPath}`))
  .catch((err) => console.error("❌ Error:", err));
