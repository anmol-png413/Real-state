# Backend Separation — Design Spec

**Date:** 2026-06-10  
**Project:** AU Cosmos Corner Landing Page  
**Goal:** Separate backend API from frontend into its own Vercel project with subdomain `api.aurealestateprojects.in`

---

## Current State (Problem)

```
Real-state/ (one repo)
├── Estae/          → Frontend deployed to aurealestateprojects.in (Vercel project A)
├── api/            → Serverless fn bundled with frontend ← messy, tightly coupled
├── backend/        → Unused Express server (partially commented out)
└── package.json    → Root package.json added just for supabase dep ← hack
```

**Problems:**
- Frontend and backend deploy together — one broken build kills both
- API logic mixed into frontend Vercel project
- No versioning or independent scaling of backend
- `backend/` folder is dead code

---

## Target State

```
Real-state/ (one repo, two Vercel projects)
├── Estae/          → Frontend → aurealestateprojects.in     (Vercel project A)
└── backend/        → Backend API → api.aurealestateprojects.in (Vercel project B)
```

---

## Backend Tech Stack

- **Runtime:** Node.js 22
- **Framework:** Express (already in `backend/package.json`)
- **Database:** Supabase (existing project `zmpjoxnsavmeeoabsskb`)
- **Deploy:** Vercel serverless (existing `backend/vercel.json`)
- **Domain:** `api.aurealestateprojects.in`

---

## Implementation Plan

### Task 1: Fix `backend/api/enquiry.js`

Update to include all current fields (`purpose`, `timeline`, `source`):

```js
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ success: false });

  const { full_name, phone, email, interested_in, purpose, timeline, message, source } = req.body;

  const { error } = await supabase
    .from('enquiries')
    .insert([{ full_name, phone, email, interested_in, purpose, timeline, message, source }]);

  if (error) return res.status(500).json({ success: false, error: error.message });

  return res.status(200).json({ success: true, message: 'Enquiry saved!' });
};
```

### Task 2: Update `backend/vercel.json`

```json
{
  "version": 2,
  "routes": [
    {
      "src": "/api/enquiry",
      "dest": "/api/enquiry.js"
    }
  ],
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "https://aurealestateprojects.in" },
        { "key": "Access-Control-Allow-Methods", "value": "POST, OPTIONS" },
        { "key": "Access-Control-Allow-Headers", "value": "Content-Type" }
      ]
    }
  ]
}
```

### Task 3: Deploy backend as separate Vercel project

**Vercel Dashboard → Add New Project:**
- Import repo: `anmol-png413/Real-state`
- Root Directory: `backend`
- Framework: Other
- Add env vars:
  - `SUPABASE_URL` = `https://zmpjoxnsavmeeoabsskb.supabase.co`
  - `SUPABASE_ANON_KEY` = (full JWT key)
  - `ALLOWED_ORIGIN` = `https://aurealestateprojects.in`
- Assign domain: `api.aurealestateprojects.in`

### Task 4: Update frontend to call backend subdomain

**Files to update:**
- `Estae/src/Components/Contactform.jsx` — change fetch URL
- `Estae/src/Components/HeroSection.jsx` — change fetch URL

```js
// Change from:
fetch('/api/enquiry', ...)

// Change to:
fetch('https://api.aurealestateprojects.in/api/enquiry', ...)
```

Also update `Estae/local-api.mjs` for local dev — keep using `localhost:3001` via Vite proxy (no change needed locally).

### Task 5: Clean up root-level API artifacts

Remove from repo root:
- `api/enquiry.js` — no longer needed
- `package.json` — was a hack for supabase dep

Update `vercel.json` (root) — remove API routing, restore clean SPA rewrite:

```json
{
  "buildCommand": "cd Estae && npm install && VERCEL=1 npm run build",
  "outputDirectory": "Estae/dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/(sitemap.xml|robots.txt|og-image.jpg|brochure.pdf)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=86400" }
      ]
    }
  ]
}
```

### Task 6: Pre-deploy test (mandatory before going live)

```bash
# Test backend directly
curl -s -X POST https://api.aurealestateprojects.in/api/enquiry \
  -H "Content-Type: application/json" \
  -d '{"full_name":"Separation Test","phone":"9111111111","email":"","interested_in":"3bhk-1780","purpose":"self-use","timeline":"0-3months","message":"","source":"Backend Separation Test"}'

# Expected: {"success":true,"message":"Enquiry saved!"}

# Verify in Supabase — source, purpose, timeline must be non-null
```

---

## Files Changed

| File | Action |
|------|--------|
| `backend/api/enquiry.js` | Update — add purpose, timeline, source, CORS from env |
| `backend/vercel.json` | Update — add CORS headers |
| `api/enquiry.js` | Delete — no longer needed |
| `package.json` (root) | Delete — was a hack |
| `vercel.json` (root) | Update — restore clean SPA rewrite |
| `Estae/src/Components/Contactform.jsx` | Update — new API URL |
| `Estae/src/Components/HeroSection.jsx` | Update — new API URL |

---

## DNS Change Required

At domain registrar, add:
```
CNAME  api  cname.vercel-dns.com
```

This points `api.aurealestateprojects.in` to the backend Vercel project.

---

## Rollback Plan

If backend subdomain fails after deployment:
1. Revert `Contactform.jsx` and `HeroSection.jsx` to use `/api/enquiry`
2. Restore `api/enquiry.js` and root `package.json`
3. Push to main — frontend API is back in 2 minutes
