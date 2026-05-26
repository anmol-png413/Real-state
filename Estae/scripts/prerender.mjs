/**
 * Pre-render script for AU Cosmos Corner SPA
 * Runs after `vite build` — spins up vite preview, visits each route with Chromium,
 * saves fully-rendered HTML so Googlebot sees real content without executing JS.
 *
 * Usage: node scripts/prerender.mjs
 * Auto-run via: npm run build (postbuild hook)
 */

import puppeteer from 'puppeteer-core';
import { execSync, spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, '../dist');
const PORT = 4175;
const BASE = `http://localhost:${PORT}`;

const ROUTES = [
  '/',
  '/about',
  '/contact',
  '/privacy-policy',
  '/disclaimer',
  '/rera-disclaimer',
  '/terms',
  '/data-usage',
  '/authorized-partner',
];

// Find system Chrome
function findChrome() {
  const candidates = [
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  throw new Error('No Chrome/Chromium found. Install google-chrome.');
}

async function prerender() {
  console.log('🚀 Starting prerender...\n');

  // Start vite preview server
  const server = spawn('npx', ['vite', 'preview', '--port', PORT, '--strictPort'], {
    stdio: 'pipe',
    cwd: path.join(__dirname, '..'),
  });

  // Wait for server to be ready
  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('Server start timeout')), 15000);
    server.stdout.on('data', (d) => {
      if (d.toString().includes(PORT)) { clearTimeout(timeout); resolve(); }
    });
    server.stderr.on('data', (d) => {
      if (d.toString().includes(PORT)) { clearTimeout(timeout); resolve(); }
    });
  });

  console.log(`✅ Preview server running on port ${PORT}\n`);

  const browser = await puppeteer.launch({
    executablePath: findChrome(),
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    headless: true,
  });

  let success = 0;

  for (const route of ROUTES) {
    try {
      const page = await browser.newPage();
      await page.setUserAgent('Googlebot/2.1 (+http://www.google.com/bot.html)');

      await page.goto(`${BASE}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 20000,
      });

      // Wait a bit extra for React to fully render
      await new Promise(r => setTimeout(r, 800));

      const html = await page.content();
      await page.close();

      // Write to correct dist path
      const outDir = route === '/'
        ? DIST
        : path.join(DIST, route);

      fs.mkdirSync(outDir, { recursive: true });
      const outFile = path.join(outDir, 'index.html');
      fs.writeFileSync(outFile, html, 'utf-8');

      const size = (Buffer.byteLength(html) / 1024).toFixed(1);
      console.log(`✅ Pre-rendered ${route.padEnd(25)} → ${size} KB`);
      success++;
    } catch (err) {
      console.error(`❌ Failed ${route}: ${err.message}`);
    }
  }

  await browser.close();
  server.kill();

  console.log(`\n🎉 Done — ${success}/${ROUTES.length} routes pre-rendered successfully.`);
  console.log('📁 Check dist/ folder for pre-rendered HTML files.\n');

  if (success < ROUTES.length) process.exit(1);
}

prerender().catch((err) => {
  console.error('💥 Prerender failed:', err.message);
  process.exit(1);
});
