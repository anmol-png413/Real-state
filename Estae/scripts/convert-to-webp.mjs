/**
 * Convert all project images to WebP
 * Saves ~60-80% file size — critical for Core Web Vitals / LCP score
 * Original files are kept alongside; imports in JSX are updated to .webp
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS = path.join(__dirname, '../src/assets');

const targets = [
  { input: 'image.png',        quality: 80 },  // Hero — 2.7MB, biggest win
  { input: 'hero.png',         quality: 80 },
  { input: 'au-logo-black.png',quality: 90 },
  { input: 'WhatsApp Image 2026-05-04 at 12.30.51.jpeg', quality: 82 },
  { input: 'corner/Screenshot 2026-05-24 115934.png', quality: 78 },
  { input: 'corner/Screenshot 2026-05-24 115953.png', quality: 78 },
  { input: 'corner/Screenshot 2026-05-24 120007.png', quality: 78 },
  { input: 'corner/Screenshot 2026-05-24 120020.png', quality: 78 },
  { input: 'corner/Screenshot 2026-05-24 120045.png', quality: 78 },
  { input: 'corner/Screenshot 2026-05-24 120102.png', quality: 78 },
  { input: 'corner/Screenshot 2026-05-24 120136.png', quality: 78 },
  { input: 'corner/Screenshot 2026-05-24 120149.png', quality: 78 },
];

let totalBefore = 0;
let totalAfter = 0;

for (const { input, quality } of targets) {
  const inputPath = path.join(ASSETS, input);
  const ext = path.extname(input);
  const outputPath = inputPath.replace(ext, '.webp');

  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Skipped (not found): ${input}`);
    continue;
  }

  try {
    await sharp(inputPath).webp({ quality }).toFile(outputPath);

    const before = fs.statSync(inputPath).size;
    const after = fs.statSync(outputPath).size;
    const saving = (((before - after) / before) * 100).toFixed(0);

    totalBefore += before;
    totalAfter += after;

    console.log(
      `✅ ${path.basename(input).padEnd(45)} ${(before/1024).toFixed(0).padStart(6)} KB  →  ${(after/1024).toFixed(0).padStart(5)} KB  (${saving}% smaller)`
    );
  } catch (err) {
    console.error(`❌ Failed: ${input} — ${err.message}`);
  }
}

const totalSaving = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0);
console.log('\n─────────────────────────────────────────────────────────────');
console.log(`📦 Total before : ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
console.log(`📦 Total after  : ${(totalAfter  / 1024 / 1024).toFixed(2)} MB`);
console.log(`🎉 Total savings: ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(2)} MB  (${totalSaving}% reduction)\n`);
console.log('Next step: update JSX imports from .png/.jpeg → .webp');
