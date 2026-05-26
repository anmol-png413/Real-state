# AU Realestate — Event Tracking & Source Tracking Documentation

## Overview

Do features implement kiye gaye hain:
1. **Source Tracking** — Har form submission ke saath yeh record hota hai ki user ne kahan se form bhara
2. **Event Tracking** — Har button click pe — chahe form fill kare ya na kare — Supabase mein ek event record save hota hai

---

## Feature 1: Source Tracking

### Kya hota hai?
Jab bhi koi user form submit karta hai, database ki `enquiries` table mein `source` column mein yeh save hota hai ki usne kahan se form bhara — Navbar se, Hero Section se, ya Download Brochure button se.

### Database Change

Supabase ke SQL Editor mein yeh command run ki gayi:

```sql
ALTER TABLE enquiries ADD COLUMN source text;
```

### Backend Change — `backend/api/enquiry.js`

`source` field request body se leke Supabase mein insert kiya:

```js
// BEFORE
const { full_name, phone, email, interested_in, message } = req.body;
.insert([{ full_name, phone, email, interested_in, message }]);

// AFTER
const { full_name, phone, email, interested_in, message, source } = req.body;
.insert([{ full_name, phone, email, interested_in, message, source }]);
```

### Frontend Change 1 — `Estae/src/Components/HeroSection.jsx`

Hero Section ke form ke fetch call mein `source` field add kiya:

```jsx
body: JSON.stringify({
  full_name: form.name,
  phone: form.phone,
  email: '',
  interested_in: form.interest,
  message: '',
  source: 'Hero Section'   // ADD KIYA
})
```

### Frontend Change 2 — `Estae/src/Components/Contactform.jsx`

ContactForm component mein `source` prop receive kiya aur API call mein bheja:

```jsx
// Component signature
export default function ContactForm({
  onPhoneClick,
  source = "Contact Form",      // prop receive kiya
  downloadBrochure = false
}) { ... }

// API call mein
body: JSON.stringify({
  full_name: form.name,
  phone: form.phone,
  email: form.email,
  interested_in: form.interest,
  message: form.message,
  source: source               // prop se value bheja
})
```

### Frontend Change 3 — `Estae/src/App.jsx`

Har button ke `onClick` mein `setModalSource()` call ki — jab bhi modal khulta hai, source set hota hai:

```jsx
// Navbar button
<Navbar onBookVisit={() => { setModalSource("Navbar"); setShowModal(true); }} />

// Hero Section button
<HeroSection onBookVisit={() => { setModalSource("Hero Section"); setShowModal(true); }} />

// Overview button
<OverviewSection onBookVisit={() => { setModalSource("Overview"); setShowModal(true); }} />

// Cosmos Corner button
<CosmosCorner onBookVisit={() => { setModalSource("Cosmos Corner"); setDownloadBrochure(true); setShowModal(true); }} />

// Project Highlights button
<Projecthighlights onBookVisit={() => { setModalSource("Project Highlights"); setShowModal(true); }} />

// Footer button
<Footer onBookVisit={() => { setModalSource("Footer"); setShowModal(true); }} />

// Download Brochure floating button
onClick={() => { setModalSource("Download Brochure"); setDownloadBrochure(true); setShowModal(true); }}

// Download Prices floating button
onClick={() => { setModalSource("Download Prices"); setShowModal(true); }}

// Contact Form Phone click
onPhoneClick={() => { setModalSource("Contact Form Phone"); setShowModal(true); }}
```

Modal mein ContactForm ko source pass hota hai:

```jsx
<ContactForm source={modalSource} downloadBrochure={downloadBrochure} />
```

### Saare Source Values

| source Value | Kahan se aata hai |
|---|---|
| `Hero Section` | Hero banner ka form |
| `Navbar` | Navbar ka Book Site Visit button |
| `Download Brochure` | Left floating button |
| `Download Prices` | Right floating button |
| `Overview` | Overview section ka button |
| `Cosmos Corner` | Cosmos Corner ka Download Brochure button |
| `Project Highlights` | Highlights section ka button |
| `Footer` | Footer ka button |
| `Contact Form` | Page ke neeche wala contact form |
| `Contact Form Phone` | Contact form mein phone number click |

---

## Feature 2: Event Tracking

### Kya hota hai?
Har button click pe — form submit kare ya na kare — ek event Supabase ki `events` table mein save hota hai. Isse pata chalta hai ki kitne logon ne button click kiya vs kitne logon ne actually form submit kiya.

### Database — Nayi Table Banayi

```sql
CREATE TABLE events (
  id BIGSERIAL PRIMARY KEY,
  source TEXT NOT NULL,
  event_type TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Columns:**
- `id` — auto increment primary key
- `source` — kaunse button/section se click hua
- `event_type` — click ka type kya tha
- `created_at` — kab click hua (automatic timestamp)

### Nayi Backend File — `backend/api/event.js`

Yeh nayi Vercel serverless function file hai jo `/api/event` endpoint handle karti hai:

```js
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ success: false });

  const { source, event_type } = req.body;

  if (!source || !event_type) {
    return res.status(400).json({ success: false, error: 'source and event_type are required' });
  }

  const { error } = await supabase
    .from('events')
    .insert([{ source, event_type }]);

  if (error) return res.status(500).json({ success: false, error: error.message });

  return res.status(200).json({ success: true });
};
```

### Frontend Change — `Estae/src/App.jsx`

`trackEvent()` helper function banaya gaya jo har click pe `/api/event` call karta hai:

```js
const trackEvent = (source, event_type) => {
  fetch('https://real-state-udkw.vercel.app/api/event', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ source, event_type })
  }).catch(() => {});  // silently fail — user experience affect na ho
};
```

Har button ke onClick mein `trackEvent()` call:

```jsx
// Navbar
trackEvent("Navbar", "book_visit_click")

// Hero Section
trackEvent("Hero Section", "book_visit_click")

// Overview
trackEvent("Overview", "book_visit_click")

// Cosmos Corner
trackEvent("Cosmos Corner", "brochure_download_click")

// Project Highlights
trackEvent("Project Highlights", "book_visit_click")

// Footer
trackEvent("Footer", "book_visit_click")

// Download Brochure floating button
trackEvent("Download Brochure", "brochure_download_click")

// Download Prices floating button
trackEvent("Download Prices", "price_list_click")

// Phone click in Contact Form
trackEvent("Contact Form Phone", "phone_click")
```

### Saare Event Types

| event_type | Matlab |
|---|---|
| `book_visit_click` | Book Site Visit button click hua |
| `brochure_download_click` | Download Brochure button click hua |
| `price_list_click` | Download Prices button click hua |
| `phone_click` | Phone number pe click hua |

---

## Deployment Status

| Item | Status |
|---|---|
| Supabase `enquiries` table — `source` column | ✅ Done |
| Supabase `events` table | ✅ Done (0 rows — backend deploy hone ke baad data aayega) |
| Backend `enquiry.js` — source field | ✅ Deployed |
| Backend `event.js` — new file | ⏳ Code ready, Vercel deploy pending |
| Frontend — source tracking | ⏳ Code ready, Vercel deploy pending |
| Frontend — event tracking (trackEvent) | ⏳ Code ready, Vercel deploy pending |

---

## Database Queries — Useful

```sql
-- Saari enquiries source ke saath dekho
SELECT full_name, phone, source, created_at
FROM enquiries
ORDER BY created_at DESC;

-- Section-wise lead count
SELECT source, COUNT(*) as total_leads
FROM enquiries
WHERE source IS NOT NULL
GROUP BY source
ORDER BY total_leads DESC;

-- Saare button click events
SELECT source, event_type, created_at
FROM events
ORDER BY created_at DESC;

-- Event type wise count
SELECT event_type, source, COUNT(*) as total_clicks
FROM events
GROUP BY event_type, source
ORDER BY total_clicks DESC;
```
