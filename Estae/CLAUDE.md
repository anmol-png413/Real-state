# AU Realestate Landing Page — Developer Documentation



1. **RERA Approved Badge** — Displayed in the Hero Section to build buyer trust
2. **Brochure Download** — PDF auto-downloads after form submission
3. **Source Tracking** — Every lead in the database now records where the form was submitted from

---

## Feature 1: RERA Approved Badge

### Why It Was Needed
Displaying the RERA registration number is legally required for real estate projects in India. It builds trust with potential buyers and demonstrates government compliance.

### Where It Was Added

| File | Location |
|------|----------|
| `HeroSection.jsx` | Inside the left text column, just before the 'Siddharth Vihar' heading span |

### Code Added


```

---

## Feature 2: Brochure Download

### Why It Was Needed
Previously the Download Brochure button opened a generic form with no connection to the PDF. The goal was to capture leads first, then automatically deliver the brochure — so every download becomes a lead.

### How It Works

| Step | Action | What Happens |
|------|--------|--------------|
| 1 | Button Click | User clicks the 'Download Brochure' floating button on the left |
| 2 | Form Opens | A modal opens with ContactForm — `downloadBrochure` prop is set to `true` |
| 3 | Form Submit | User fills in name and phone number and submits |
| 4 | Lead Saved | Form data is sent to the backend API and saved in Supabase |
| 5 | PDF Download | `brochure.pdf` automatically downloads to the user's device |
| 6 | Redirect | User is redirected to the `/thank-you` page |

### Files Changed

#### 1. `public/brochure.pdf`
The brochure PDF was placed in the `public` folder of the React project. Vercel serves all files in `public/` as static assets accessible via a direct URL path.

#### 2. `App.jsx` — New State Variables

```jsx
const [showModal, setShowModal] = useState(false);
const [modalSource, setModalSource] = useState('General');    // NEW
const [downloadBrochure, setDownloadBrochure] = useState(false);  // NEW
```

Download Brochure button `onClick` handler:

```jsx
onClick={() => {
  setModalSource('Download Brochure');
  setDownloadBrochure(true);   // tells ContactForm to trigger PDF download
  setShowModal(true);
}}
```

Modal `ContactForm` now receives both props:

```jsx
<ContactForm source={modalSource} downloadBrochure={downloadBrochure} />
```

Close/backdrop handlers reset state:

```jsx
onClick={() => {
  setShowModal(false);
  setDownloadBrochure(false);
  setModalSource('General');
}}
```

#### 3. `ContactForm.jsx` — `downloadBrochure` Prop

Component signature updated to accept two new props:

```jsx
export default function ContactForm({
  onPhoneClick,
  source = 'Contact Form',      // default value
  downloadBrochure = false       // default: no download
}) {
```

PDF download logic added inside `handleSubmit` after successful API response:

```jsx
if (data.success) {
  if (downloadBrochure) {
    const link = document.createElement('a');
    link.href = '/brochure.pdf';
    link.download = 'AU-Cosmos-Corner-Brochure.pdf';
    link.click();
  }
  navigate('/thank-you');
}
```

---

## Feature 3: Source Tracking

### Why It Was Needed
With multiple forms across the page, it was impossible to know which section was generating the most leads. Source tracking adds a `source` field to every database record so the sales team can see exactly where each enquiry originated.

### Database Change — Supabase

A new text column was added to the `enquiries` table using the SQL Editor:

```sql
ALTER TABLE enquiries ADD COLUMN source text;
```

### All Possible Source Values

| `source` Value | Where It Comes From |
|----------------|---------------------|
| `Hero Section` | Book Site Visit button on the hero banner |
| `Navbar` | Book Site Visit button in the top navigation bar |
| `Download Brochure` | Left floating button — also triggers PDF download |
| `Download Prices` | Right floating button |
| `Overview` | Button in the Overview section |
| `Cosmos Corner` | Button in the image gallery section |
| `Project Highlights` | Button in the Highlights section |
| `Footer` | Button in the page footer |
| `Contact Form` | The bottom contact form on the page |
| `Contact Form Phone` | Phone number click inside the contact form panel |

### Backend Change — `enquiry.js`

```js
// BEFORE
const { full_name, phone, email, interested_in, message } = req.body;
.insert([{ full_name, phone, email, interested_in, message }]);

// AFTER
const { full_name, phone, email, interested_in, message, source } = req.body;
.insert([{ full_name, phone, email, interested_in, message, source }]);
```

### Frontend Change — `ContactForm.jsx`

```jsx
body: JSON.stringify({
  full_name: form.name,
  phone: form.phone,
  email: form.email,
  interested_in: form.interest,
  message: form.message,
  source: source      // passed via prop from App.jsx
})
```

### `App.jsx` — Source Passed to Every Button

```jsx
<Navbar onBookVisit={() => { setModalSource('Navbar'); setShowModal(true); }} />
<HeroSection onBookVisit={() => { setModalSource('Hero Section'); setShowModal(true); }} />
<OverviewSection onBookVisit={() => { setModalSource('Overview'); setShowModal(true); }} />
<CosmosCorner onBookVisit={() => { setModalSource('Cosmos Corner'); setShowModal(true); }} />
<Projecthighlights onBookVisit={() => { setModalSource('Project Highlights'); setShowModal(true); }} />
<Footer onBookVisit={() => { setModalSource('Footer'); setShowModal(true); }} />
```

---

## Cosmos Corner Section

### What It Is
A new image slider/carousel section added between `SitePlan` and `AmenitiesSection`.

### Images
Located in `src/assets/corner/` — 8 images total.

### Features
- Left (`‹`) and right (`›`) arrow navigation
- Dot indicators — click to jump to any image
- Image counter (e.g. `1 / 8`)
- Fade animation on image change
- **Download Brochure** button below slider — opens contact form modal
- Cream background (`#fffef8`) matching site theme






`
