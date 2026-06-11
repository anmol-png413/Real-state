# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: lead-forms.spec.js >> Group 1 · Modal ContactForm CTAs >> TC-03 · Desktop Hero CTA 'Book Site Visit' → source = 'Hero Section'
- Location: tests/lead-forms.spec.js:78:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.fixed.inset-0').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.fixed.inset-0').first()

```

```yaml
- navigation:
  - img "AU Cosmos Corner - Truelite Estates LLP Authorized Channel Partner"
  - list:
    - listitem:
      - link "Home":
        - /url: "#"
    - listitem:
      - link "Overview":
        - /url: "#overview"
    - listitem:
      - link "Amenities":
        - /url: "#amenities"
    - listitem:
      - link "Highlights":
        - /url: "#highlights"
    - listitem:
      - link "Price List":
        - /url: "#pricelist"
    - listitem:
      - link "Location Map":
        - /url: "#location"
    - listitem:
      - link "FAQ":
        - /url: "#faq"
  - button "📞 9711557670"
  - button "Book Site Visit"
- text: ★ Luxury 3 BHK Flats | Starting at ₹1.22 Cr* | ★ Siddharth Vihar, Ghaziabad | 🏠 Attractive 40:20:20:20 Payment Plan |
- img "AU Cosmos Corner luxury 3 BHK apartment Siddharth Vihar Ghaziabad view 1"
- img "AU Cosmos Corner luxury 3 BHK apartment Siddharth Vihar Ghaziabad view 2"
- img "AU Cosmos Corner luxury 3 BHK apartment Siddharth Vihar Ghaziabad view 3"
- img "AU Cosmos Corner luxury 3 BHK apartment Siddharth Vihar Ghaziabad view 4"
- img "AU Cosmos Corner luxury 3 BHK apartment Siddharth Vihar Ghaziabad view 5"
- img "AU Cosmos Corner luxury 3 BHK apartment Siddharth Vihar Ghaziabad view 6"
- img "AU Cosmos Corner luxury 3 BHK apartment Siddharth Vihar Ghaziabad view 7"
- img "AU Cosmos Corner luxury 3 BHK apartment Siddharth Vihar Ghaziabad view 8"
- img "AU Cosmos Corner luxury 3 BHK apartment Siddharth Vihar Ghaziabad view 9"
- img "AU Cosmos Corner luxury 3 BHK apartment Siddharth Vihar Ghaziabad view 10"
- img "AU Cosmos Corner luxury 3 BHK apartment Siddharth Vihar Ghaziabad view 11"
- paragraph: Visual Tour
- heading "Project Gallery" [level=2]
- img
- img
- img "AU Real Estate"
- img "Cosmos Corner"
- img "Sunday Times Ad"
- img "Cosmos Corner Office"
- img "Project View 1"
- img "Project View 2"
- img "Project View 3"
- img "Project View 4"
- img "Project View 5"
- img "Project View 6"
- img "Project View 7"
- img "Project View 8"
- heading "AU Cosmos Corner" [level=2]
- paragraph: Siddharth Vihar, Ghaziabad
- text: Highlights Project Name AU Cosmos Corner Configuration 3 BHK, 3 BHK + Servant, 5 BHK + Servant luxury apartments Total Land Area 5.60 Acres (Approx.) Total Towers Only 3 Exclusive Towers Development Time Year 2029 Size 1780 | 1972 | 3175 Sq.Ft Height G+40 Floors Location Siddharth Vihar , Ghaziabad.
- paragraph: AU Cosmos Corner is an upcoming premium residential project by AU Real Estate Pvt. Ltd., offering thoughtfully designed "3 BHK, 3 BHK + Servant, 5 BHK + Servant luxury apartments" in the prime location of Siddharth Vihar, Ghaziabad. Crafted for modern families, this project blends contemporary architecture with world-class amenities and excellent connectivity to deliver a complete lifestyle experience.
- paragraph: Spread across approx. 5.6 acres of prime land, the project features 3 iconic high-rise towers (G+40) with spacious residences, ensuring comfort, privacy, and elegance in every corner.
- heading "Special Payment Plan — AU Cosmos Corner" [level=4]
- list:
  - listitem: 10% Booking Amount
  - listitem: 30% in 60 Days
  - listitem: 20% on 20th Floor
  - listitem: 20% on Top Floor
  - listitem: 20% on Possession
- button "Call 9711557670"
- text: "Explore:"
- link "3 BHK Flats":
  - /url: /3-bhk-flats-siddharth-vihar
- text: ·
- link "5 BHK Flats":
  - /url: /5-bhk-flats-siddharth-vihar
- text: ·
- link "New Launch":
  - /url: /new-launch-siddharth-vihar
- text: ·
- link "Siddharth Vihar Guide":
  - /url: /siddharth-vihar-ghaziabad
- img "Luxury Bedroom Interior — AU Cosmos Corner 3 BHK Siddharth Vihar"
- text: MASTER BEDROOM · 3 BHK ✦ Our Story
- heading "About AU Realestate" [level=2]
- paragraph:
  - strong: AU Cosmos Corner
  - text: is a premium residential project by
  - strong: AU Real Estate Pvt. Ltd.
  - text: ", one of Delhi NCR's trusted real estate developers. Located in Siddharth Vihar, Ghaziabad, it offers thoughtfully designed 3 BHK luxury apartments that blend quality construction, strategic location, and lifestyle-focused design."
- paragraph:
  - text: This website is operated by
  - strong: Truelite Estates LLP
  - text: — an officially authorized channel partner of AU Real Estate Pvt. Ltd. (RERA No. UPRERAPRJ466336). We are not the developer. We are your trusted advisor, helping you make the right home-buying decision with complete transparency and zero brokerage.
- paragraph: Our developments are nestled in well-connected corridors such as Siddharth Vihar, Ghaziabad West and Ghaziabad — offering seamless access to expressways, metro stations, schools, hospitals, and commercial hubs. Ideal for discerning families and forward-thinking investors like.
- text: RERA Approved Premium Construction NCR's Finest On-Time Delivery
- paragraph: Layout Overview
- heading "Master Site Plan" [level=2]
- heading "Thoughtfully Planned Community" [level=3]
- paragraph: AU Siddharth Vihar is designed for low-density luxury living. The master plan ensures maximum green cover, privacy, and seamless connectivity across all towers.
- text: 🏊
- paragraph: 2 Swimming Pools
- paragraph: Centrally located within the complex
- text: 🏛️
- paragraph: Grand Clubhouse
- paragraph: Premium club with modern facilities
- text: 🛒
- paragraph: Retail Shops & Anchor Store
- paragraph: Ground-level commercial convenience
- text: 🌿
- paragraph: Landscaped Green Spaces
- paragraph: Open gardens between all towers
- text: 🚗
- paragraph: Dual Entry / Exit
- paragraph: 18 Meter & 24 Meter wide roads
- text: 🏢
- paragraph: Multiple Tower Wings
- paragraph: Units of 1780, 1972, 1981 & 3175 Sq.Ft.
- img "AU Cosmos Corner Siddharth Vihar Master Site Plan — 3 BHK 5 BHK layout"
- paragraph: Project Details
- heading "Specifications & Residence Options" [level=2]
- text: 🏗️ Specification
- paragraph: 1.5 Ton Split AC in All Bedrooms
- paragraph: Modular Kitchen
- paragraph: Wardrobes in Bedrooms
- paragraph: 10.5 ft Ceiling Height
- paragraph: All Doors are of 8 ft Height
- paragraph: Luxurious Club House G+2 Floors of approx 40,000 Sq.ft
- text: 🏠 Residence Option 3 BHK + 3T 1780 Sq.ft 3 BHK + S 1972 Sq.ft 5 BHK + S 3175 Sq.ft
- paragraph: Pre-Launch Price
- paragraph: "@ ₹ 6900 BSP / Sq.ft"
- paragraph: Starting ₹1.22 Cr*
- paragraph: 1780 Sq.Ft. | 3 BHK
- paragraph: "*Other Charges Applicable"
- paragraph: Exclusive Collection
- heading "Cosmos Corner" [level=2]
- button "Previous": ‹
- img "Cosmos Corner 1"
- button "Next": ›
- paragraph: 1 / 8
- button "📄 Download Brochure"
- heading "AMENITIES" [level=2]
- img "Gymnasium"
- paragraph: Gymnasium
- img "Swimming Pool"
- paragraph: Swimming Pool
- img "Jogging Track"
- paragraph: Jogging Track
- img "Yoga & Meditation Center"
- paragraph: Yoga & Meditation Center
- img "Clubhouse"
- paragraph: Clubhouse
- img "Banquet Hall"
- paragraph: Banquet Hall
- img "Covered Parking"
- paragraph: Covered Parking
- img "Landscaped Garden"
- paragraph: Landscaped Garden
- paragraph: AU Realestate
- paragraph: HIGHLIGHTS
- img
- paragraph: Siddharth Vihar, Ghaziabad
- img
- paragraph: 3 Exclusive Towers
- img
- paragraph: 3 BHK, 3 BHK + Servant, 5 BHK + Servant
- img
- paragraph: 5.60 Acres of Green Living
- img
- paragraph: 1780 | 1972 | 3175 Sq.Ft.
- img
- paragraph: G+40 Floors
- img
- paragraph: 7 Apartments Per Floor
- img
- paragraph: 7 High-Speed Lifts
- separator
- paragraph: INVESTMENT OVERVIEW
- heading "AU Realestate — Price List" [level=2]
- text: Available Units Ready to Book
- table:
  - rowgroup:
    - row "Unit Type Unit Area Unit Price":
      - columnheader "Unit Type"
      - columnheader "Unit Area"
      - columnheader "Unit Price"
  - rowgroup:
    - row "3 BHK + 3 Toilet Premium Configuration 1780 Sq.Ft. 11 ft ceiling ₹ 1.22 Cr* @ ₹6900 BSP/sq.ft":
      - cell "3 BHK + 3 Toilet Premium Configuration":
        - paragraph: 3 BHK + 3 Toilet
        - paragraph: Premium Configuration
      - cell "1780 Sq.Ft. 11 ft ceiling":
        - paragraph: 1780 Sq.Ft.
        - paragraph: 11 ft ceiling
      - cell "₹ 1.22 Cr* @ ₹6900 BSP/sq.ft":
        - button "₹ 1.22 Cr*"
        - paragraph: "@ ₹6900 BSP/sq.ft"
    - row "3 BHK + 3 Toilet + Servant Premium Configuration 1972 Sq.Ft. 11 ft ceiling ₹ Get Price Contact for pricing":
      - cell "3 BHK + 3 Toilet + Servant Premium Configuration":
        - paragraph: 3 BHK + 3 Toilet + Servant
        - paragraph: Premium Configuration
      - cell "1972 Sq.Ft. 11 ft ceiling":
        - paragraph: 1972 Sq.Ft.
        - paragraph: 11 ft ceiling
      - cell "₹ Get Price Contact for pricing":
        - button "₹ Get Price"
        - paragraph: Contact for pricing
    - row "5 BHK + 3 Toilet + Servant Ultra Luxury Configuration 3175 Sq.Ft. 11 ft ceiling ₹ Get Price Contact for pricing":
      - cell "5 BHK + 3 Toilet + Servant Ultra Luxury Configuration":
        - paragraph: 5 BHK + 3 Toilet + Servant
        - paragraph: Ultra Luxury Configuration
      - cell "3175 Sq.Ft. 11 ft ceiling":
        - paragraph: 3175 Sq.Ft.
        - paragraph: 11 ft ceiling
      - cell "₹ Get Price Contact for pricing":
        - button "₹ Get Price"
        - paragraph: Contact for pricing
- heading "Prime Location Advantage" [level=2]
- iframe
- paragraph: AU Realestate is strategically located near NH-24 (Delhi-Meerut Expressway), making daily travel easy and convenient. It offers seamless connectivity to Noida, Delhi, and other NCR locations.
- paragraph: Key areas like Noida Sector 62, Electronic City Metro Station, and Ghaziabad Railway Station are just a few minutes away, ensuring smooth commuting.
- text: "1"
- paragraph: City Centre – 20 Min.
- text: "2"
- paragraph: Amity University – 16 Min.
- text: "3"
- paragraph: Fortis Hospital – 15 Min.
- text: "4"
- paragraph: Mall Of India – 18 Min.
- text: "5"
- paragraph: Akshardham Temple – 25 Min.
- text: "6"
- paragraph: NH-24 / Delhi-Meerut Expressway – 2 Min.
- text: "7"
- paragraph: Noida Sector 62 – 10 Min.
- text: "8"
- paragraph: IGI Airport – 60 Min.
- heading "Project Gallery" [level=2]
- img "Luxury Living Room"
- text: Living Area ⤢
- img "Premium Bedroom"
- text: Master Bedroom ⤢
- img "Elegant Interior"
- text: Premium Interiors ⤢
- paragraph: What Buyers Say
- heading "Site Visit Reviews" [level=2]
- paragraph: AU Cosmos Corner — Siddharth Vihar, Ghaziabad
- text: ★ ★ ★ ★ ★ 5.0 · 5 Reviews ★ ★ ★ ★ ★
- paragraph: "\"Visited the AU Cosmos Corner site in March 2026. The G+40 tower scale is genuinely impressive — very few projects in Siddharth Vihar offer this kind of open space across 5.6 acres. The pre-launch pricing of ₹6,900/sq ft felt right given the specifications. Booked a 3 BHK unit. Truelite Estates team was transparent throughout.\""
- paragraph: Rajesh Kumar
- paragraph: Indirapuram, Ghaziabad
- paragraph: 3 BHK — 1780 Sq.Ft.
- text: ★ ★ ★ ★ ★
- paragraph: "\"We were looking for a spacious 3 BHK near Noida for my husband's office commute. Siddharth Vihar connectivity to NH-24 was the deciding factor. AU Cosmos Corner had the best price-to-size ratio we found after comparing 6 projects. The modular kitchen and split AC inclusions made it a clear choice. Highly recommend Truelite Estates for honest guidance.\""
- paragraph: Priya Sharma
- paragraph: Vasundhara, Ghaziabad
- paragraph: 3 BHK + Servant — 1972 Sq.Ft.
- text: ★ ★ ★ ★ ★
- paragraph: "\"I was looking for a premium 5 BHK investment in Delhi NCR and AU Cosmos Corner stood out. It's one of the very few RERA-approved 5 BHK projects in Siddharth Vihar at this price point. The Truelite Estates team managed my entire NRI booking process remotely — KYC, agreement, and loan coordination — without me needing to visit India. Excellent service.\""
- paragraph: Amit Agarwal
- paragraph: NRI — Dubai
- paragraph: 5 BHK + Servant — 3175 Sq.Ft.
- text: ★ ★ ★ ★ ★
- paragraph: "\"We are a family of 4 and wanted a quality home near good schools. DPS Ghaziabad is just 10 minutes from AU Cosmos Corner and Yashoda Hospital is nearby too. The project's RERA number gave us confidence. We booked during the pre-launch phase and are very happy with the process. The site visit was arranged within 24 hours of our enquiry.\""
- paragraph: Sunita & Vinod Mehta
- paragraph: Vaishali, Ghaziabad
- paragraph: 3 BHK — 1780 Sq.Ft.
- text: ★ ★ ★ ★ ★
- paragraph: "\"I have been investing in Ghaziabad real estate for 8 years. The Siddharth Vihar corridor has appreciated 18% in the last 3 years. AU Cosmos Corner's pre-launch price of ₹6,900/sq ft on a G+40 tower by a reputed developer is exactly the kind of entry point that generates strong returns. The RERA registration gave me legal confidence. Already recommended to two colleagues.\""
- paragraph: Deepak Bhatnagar
- paragraph: Noida Sector 62
- paragraph: Investor — 3 BHK + Servant
- paragraph: Know More
- heading "Frequently Asked Questions" [level=2]
- paragraph: AU Cosmos Corner — Siddharth Vihar, Ghaziabad
- button "What is AU Cosmos Corner? +":
  - heading "What is AU Cosmos Corner?" [level=3]
  - text: +
- paragraph: AU Cosmos Corner is a premium residential project by AU Real Estate Pvt. Ltd. located in Siddharth Vihar, Ghaziabad, Uttar Pradesh. It offers 3 BHK, 3 BHK+Servant, and 5 BHK+Servant luxury apartments across 3 high-rise towers (G+40 floors) on approximately 5.6 acres of land.
- button "What is the price of flats in Siddharth Vihar Ghaziabad? +":
  - heading "What is the price of flats in Siddharth Vihar Ghaziabad?" [level=3]
  - text: +
- paragraph: At AU Cosmos Corner in Siddharth Vihar, the pre-launch price is ₹6,900 per sq ft — one of the best value propositions in Ghaziabad's luxury segment. The 3 BHK (1780 Sq.Ft.) starts at approximately ₹1.22 Crore, the 3 BHK + Servant (1972 Sq.Ft.) at approximately ₹1.36 Crore, and the 5 BHK + Servant (3175 Sq.Ft.) at approximately ₹2.19 Crore. Call 9711557670 for the latest pricing.
- button "Are there 5 BHK flats available in Siddharth Vihar? +":
  - heading "Are there 5 BHK flats available in Siddharth Vihar?" [level=3]
  - text: +
- paragraph: Yes. AU Cosmos Corner is one of the very few projects in Siddharth Vihar, Ghaziabad offering 5 BHK + Servant Room luxury apartments. The 5 BHK unit is 3175 Sq.Ft. and comes with premium fittings, modular kitchen, split AC in all rooms, and wardrobes — priced at approximately ₹2.19 Crore at pre-launch. This makes it a rare and highly sought-after offering in the entire Ghaziabad market.
- button "Which is the best new launch in Siddharth Vihar in 2026? +":
  - heading "Which is the best new launch in Siddharth Vihar in 2026?" [level=3]
  - text: +
- paragraph: AU Cosmos Corner by AU Real Estate Pvt. Ltd. is the most talked-about new launch in Siddharth Vihar in 2026. With G+40 high-rise towers on 5.6 acres, RERA-approved (UPRERAPRJ466336), pre-launch pricing of ₹6,900/sq ft, and world-class amenities including swimming pool, gym, and clubhouse — it stands out as the premium choice for homebuyers looking for luxury flats in Siddharth Vihar.
- button "Is Siddharth Vihar a good location to buy a flat? +":
  - heading "Is Siddharth Vihar a good location to buy a flat?" [level=3]
  - text: +
- paragraph: Yes, Siddharth Vihar in Ghaziabad is an excellent location for real estate investment. It offers seamless connectivity to NH-24 (NH-9), Delhi-Meerut Expressway, and proximity to Noida, Greater Noida, and Delhi employment hubs. With rapid infrastructure development, growing metro connectivity, reputed schools, hospitals, and malls nearby, Siddharth Vihar has become one of the fastest-appreciating residential corridors in Delhi NCR.
- button "How far is AU Cosmos Corner from the nearest metro station? +":
  - heading "How far is AU Cosmos Corner from the nearest metro station?" [level=3]
  - text: +
- paragraph: AU Cosmos Corner in Siddharth Vihar is well-connected to Delhi NCR's metro network. The proposed metro corridor along NH-24 is expected to significantly boost connectivity. Currently, the project offers easy road access to Anand Vihar (Delhi) and Noida metro stations within 30–40 minutes. The upcoming metro expansion will make Siddharth Vihar even more accessible from all parts of Delhi NCR.
- button "Is AU Cosmos Corner RERA approved? +":
  - heading "Is AU Cosmos Corner RERA approved?" [level=3]
  - text: +
- paragraph: Yes, AU Cosmos Corner is RERA approved under Uttar Pradesh Real Estate Regulatory Authority. The RERA Registration Number is UPRERAPRJ466336. Buyers can verify project details, construction progress, and legal documents directly on the UP RERA portal for complete transparency.
- button "What is the possession date for AU Cosmos Corner? +":
  - heading "What is the possession date for AU Cosmos Corner?" [level=3]
  - text: +
- paragraph: AU Cosmos Corner is currently in the pre-launch phase. The project has an estimated construction timeline of December 2029. For the exact RERA-registered possession date and construction schedule, please contact Truelite Estates at 9711557670 or check the UP RERA portal under registration number UPRERAPRJ466336.
- button "What configurations are available in AU Cosmos Corner? +":
  - heading "What configurations are available in AU Cosmos Corner?" [level=3]
  - text: +
- paragraph: "AU Cosmos Corner offers three configurations: 3 BHK + 3 Toilet (1780 Sq.Ft.), 3 BHK + Servant Room + 4 Toilet (1972 Sq.Ft.), and 5 BHK + Servant Room + 6 Toilet (3175 Sq.Ft.). All units come with a modular kitchen, 1.5-ton split AC in all bedrooms, wardrobes in all bedrooms, and high-quality vitrified tile flooring."
- button "What floor plans are available and how can I get them? +":
  - heading "What floor plans are available and how can I get them?" [level=3]
  - text: +
- paragraph: Detailed floor plans for 3 BHK and 5 BHK units at AU Cosmos Corner are available on request. You can fill the enquiry form on this page or call 9711557670 to receive the floor plan brochure directly on WhatsApp or email. Our site plan section on this page also shows the overall layout of the 5.6-acre project.
- button "What is the payment plan for AU Cosmos Corner? +":
  - heading "What is the payment plan for AU Cosmos Corner?" [level=3]
  - text: +
- paragraph: "AU Cosmos Corner offers a flexible payment plan: 10% booking amount, 30% within 60 days of booking, 40% on possession, and 20% flexi payment plan. Home loans are available from leading banks including SBI, HDFC, ICICI, and Axis Bank. Contact Truelite Estates LLP at 9711557670 for a detailed payment schedule."
- button "Which banks offer home loans for AU Cosmos Corner? +":
  - heading "Which banks offer home loans for AU Cosmos Corner?" [level=3]
  - text: +
- paragraph: AU Cosmos Corner is approved for home loans by major national banks including SBI, HDFC Bank, ICICI Bank, Axis Bank, and Bank of Baroda. The RERA approval facilitates faster loan processing. Our team at Truelite Estates LLP can assist you with the entire loan documentation and pre-approval process at no extra charge.
- button "What amenities does AU Cosmos Corner offer? +":
  - heading "What amenities does AU Cosmos Corner offer?" [level=3]
  - text: +
- paragraph: AU Cosmos Corner offers world-class amenities including a swimming pool, fully-equipped gymnasium, grand clubhouse, children's play area, landscaped gardens, jogging track, multi-purpose sports court, 24/7 security with CCTV surveillance, power backup, and covered car parking. The project is designed for a complete luxury lifestyle within a gated community.
- button "Where is AU Cosmos Corner located and how to reach? +":
  - heading "Where is AU Cosmos Corner located and how to reach?" [level=3]
  - text: +
- paragraph: "AU Cosmos Corner is located in Siddharth Vihar, Ghaziabad, Uttar Pradesh — PIN 201013. It has excellent road access: 5 minutes from NH-24, 10 minutes from Delhi-Meerut Expressway, and 20 minutes from Noida Sector 62. From Delhi's Anand Vihar bus terminal it is approximately 15–20 km. Google Maps: search 'AU Cosmos Corner Siddharth Vihar'."
- button "Is AU Cosmos Corner a good investment in Ghaziabad? +":
  - heading "Is AU Cosmos Corner a good investment in Ghaziabad?" [level=3]
  - text: +
- paragraph: Yes, AU Cosmos Corner is an attractive investment for both end-users and investors. Siddharth Vihar has seen 15–20% price appreciation over the last 3 years. Pre-launch pricing of ₹6,900/sq ft offers significant upside potential as the project nears completion. The G+40 high-rises, premium brand, RERA compliance, and infrastructure growth on the NH-24 corridor make this a strong long-term investment.
- button "What is the property price trend in Siddharth Vihar Ghaziabad? +":
  - heading "What is the property price trend in Siddharth Vihar Ghaziabad?" [level=3]
  - text: +
- paragraph: Siddharth Vihar property prices have been on a consistent upward trajectory. Average rates have grown from approximately ₹4,500/sq ft in 2021 to ₹6,000–7,000/sq ft in 2025–26. Key drivers include improved connectivity via Delhi-Meerut Expressway, proximity to Noida's IT corridors, and growing demand for quality housing. AU Cosmos Corner's pre-launch rate of ₹6,900/sq ft positions it well ahead of the appreciation curve.
- button "Who is marketing AU Cosmos Corner? +":
  - heading "Who is marketing AU Cosmos Corner?" [level=3]
  - text: +
- paragraph: AU Cosmos Corner is marketed by Truelite Estates LLP, an authorized channel partner of AU Real Estate Pvt. Ltd. Truelite Estates LLP is registered at Golden I Tower T3, Unit 314, Greater Noida West – 201309. You can reach the team at 9711557670 or omvir.shishodia@truelitestates.com for all booking, pricing, and site visit queries.
- button "What is the maintenance charge at AU Cosmos Corner? +":
  - heading "What is the maintenance charge at AU Cosmos Corner?" [level=3]
  - text: +
- paragraph: Maintenance charges for AU Cosmos Corner will be decided closer to possession. Typically for luxury gated communities in Ghaziabad, maintenance is charged at ₹2–4 per sq ft per month to cover security, housekeeping, pool, gym, power backup, and common area upkeep. For the most current maintenance estimate, please contact 9711557670.
- button "What schools and hospitals are near Siddharth Vihar? +":
  - heading "What schools and hospitals are near Siddharth Vihar?" [level=3]
  - text: +
- paragraph: Siddharth Vihar is well-served by reputed institutions. Nearby schools include Delhi Public School (Ghaziabad), Ryan International School, and Sapphire International. For healthcare, Yashoda Hospital, Columbia Asia Hospital, and Sharda Hospital (Greater Noida) are within easy reach. Several shopping malls, markets, and multiplex cinemas are also accessible within 10–15 minutes.
- button "Can I buy a flat in AU Cosmos Corner as an NRI? +":
  - heading "Can I buy a flat in AU Cosmos Corner as an NRI?" [level=3]
  - text: +
- paragraph: Yes, NRIs (Non-Resident Indians) can purchase residential property in AU Cosmos Corner under FEMA guidelines. Truelite Estates LLP's team can guide you through the NRI buying process including power of attorney, NRE/NRO account fund transfer, home loan options from NRI-friendly banks, and RERA compliance. Call or WhatsApp +91-9711557670 for NRI-specific assistance.
- button "Should I buy at AU Cosmos Corner for self-use or investment? +":
  - heading "Should I buy at AU Cosmos Corner for self-use or investment?" [level=3]
  - text: +
- paragraph: "AU Cosmos Corner works well for both. For self-use: the G+40 towers, luxury amenities, 3–5 BHK spacious units, and prime Siddharth Vihar location offer an excellent quality of life close to Delhi NCR employment hubs. For investment: pre-launch pricing, RERA compliance, and Siddharth Vihar's strong appreciation history make it a compelling asset. Our advisors can help you evaluate based on your specific goals — call 9711557670."
- button "How many towers are in AU Cosmos Corner and on how much land? +":
  - heading "How many towers are in AU Cosmos Corner and on how much land?" [level=3]
  - text: +
- paragraph: AU Cosmos Corner comprises 3 high-rise residential towers of G+40 floors spread across approximately 5.6 acres of land in Siddharth Vihar, Ghaziabad. The large land parcel ensures abundant open spaces, landscaping, and amenities rather than a congested layout — a key differentiator from smaller plots in the same area.
- button "What makes AU Cosmos Corner different from other projects in Siddharth Vihar? +":
  - heading "What makes AU Cosmos Corner different from other projects in Siddharth Vihar?" [level=3]
  - text: +
- paragraph: "AU Cosmos Corner stands apart with: G+40 high-rise towers (rare in Siddharth Vihar), 5.6-acre campus with extensive green open spaces, 5 BHK + Servant luxury configuration (almost exclusive in this micro-market), RERA-approved project (UPRERAPRJ466336), pre-launch pricing of ₹6,900/sq ft which is highly competitive for this specification, and trusted developer AU Real Estate backed by decades of NCR delivery experience."
- button "How do I book a flat at AU Cosmos Corner? +":
  - heading "How do I book a flat at AU Cosmos Corner?" [level=3]
  - text: +
- paragraph: "Booking is simple: (1) Fill the enquiry form on this page or call 9711557670; (2) Our advisor will schedule a free site visit; (3) Choose your unit and configuration; (4) Pay 10% booking amount via cheque, NEFT, or bank transfer; (5) Sign the builder-buyer agreement; (6) Apply for home loan if needed. Truelite Estates LLP manages the entire process from enquiry to registration."
- button "Can I book a free site visit for AU Cosmos Corner? +":
  - heading "Can I book a free site visit for AU Cosmos Corner?" [level=3]
  - text: +
- paragraph: Yes, Truelite Estates LLP offers a completely free site visit to AU Cosmos Corner in Siddharth Vihar, Ghaziabad — including pickup and drop from your location within NCR on request. Call 9711557670 or WhatsApp us or fill the enquiry form on this page to schedule your visit. Our team will arrange a guided tour of the project site at your convenience.
- paragraph: Still have questions? Talk to our property advisor.
- button "📞 Call 9711557670"
- heading "Book a Free Site Visit" [level=2]
- paragraph: Fill in your details and our team will get back to you within 24 hours.
- heading "AU Cosmos Corner" [level=3]
- paragraph: by AU Real Estate Pvt. Ltd.
- paragraph: Experience luxury living at Siddharth Vihar, Ghaziabad. Premium 3 BHK homes designed for modern lifestyle.
- text: 📍
- paragraph: ADDRESS
- paragraph: Siddharth Vihar, Ghaziabad, UP
- text: 📞
- paragraph: PHONE
- paragraph: 9711557670→ Get Callback
- text: 🕐
- paragraph: WORKING HOURS
- paragraph: "Mon – Sun: 9:00 AM – 7:00 PM"
- paragraph: ✅ RERA Approved | ✅ No Hidden Charges | ✅ Free Site Visit
- heading "Enquiry Details" [level=3]
- text: Full Name *
- textbox "Rahul Sharma"
- text: Phone *
- textbox "+91 98765 43210"
- text: Interested In
- button "Select configuration ▼"
- text: Purpose
- button "Self-use or Investment? ▼"
- text: Timeline to Buy
- button "When are you planning to buy? ▼"
- button "Send Enquiry →"
- paragraph:
  - text: By submitting, you agree to be contacted by our team and accept our
  - link "Privacy Policy":
    - /url: /privacy-policy
  - text: .
- contentinfo:
  - text: TE
  - paragraph: Truelite Estates LLP
  - paragraph: Authorized Channel Partner
  - paragraph: Premium 3 BHK residences at Siddharth Vihar, Ghaziabad. Thoughtfully designed for modern families seeking comfort, style, and convenience.
  - link "f":
    - /url: https://www.facebook.com/profile.php?id=61587504266755
  - heading "Quick Links" [level=4]
  - link "› Overview":
    - /url: "#overview"
  - link "› Amenities":
    - /url: "#amenities"
  - link "› Highlights":
    - /url: "#highlights"
  - link "› Price List":
    - /url: "#price"
  - link "› Floor Plan":
    - /url: "#floor"
  - link "› Location Map":
    - /url: "#location"
  - heading "Explore" [level=4]
  - link "› 3 BHK Flats in Siddharth Vihar":
    - /url: /3-bhk-flats-siddharth-vihar
  - link "› 5 BHK Luxury Flats":
    - /url: /5-bhk-flats-siddharth-vihar
  - link "› New Launch Siddharth Vihar":
    - /url: /new-launch-siddharth-vihar
  - link "› Siddharth Vihar Guide":
    - /url: /siddharth-vihar-ghaziabad
  - heading "Key Features" [level=4]
  - paragraph: ✓ 3 BHK + 3 Toilet
  - paragraph: ✓ 1780 Sq.Ft. Area
  - paragraph: ✓ 11 Ft Ceiling Height
  - paragraph: ✓ Grand Clubhouse
  - paragraph: ✓ Swimming Pool
  - paragraph: ✓ 24/7 Security
  - heading "Contact Us" [level=4]
  - paragraph: 📍 Siddharth Vihar, Ghaziabad, Uttar Pradesh
  - button "📞 9711557670"
  - paragraph: ✉️ omvir.shishodia@truelitestates.com
  - heading "Nearby Places" [level=4]
  - paragraph: • City Centre — 20 Min.
  - paragraph: • Amity University — 19 Min.
  - paragraph: • Fortis Hospital — 23 Min.
  - paragraph: • Mall Of India — 24 Min.
  - paragraph: • Akshardham Temple — 33 Min.
  - paragraph: • IGI Airport — 63 Min.
  - link "About Us":
    - /url: /about
  - link "Contact Us":
    - /url: /contact
  - link "Privacy Policy":
    - /url: /privacy-policy
  - link "Disclaimer":
    - /url: /disclaimer
  - link "RERA Disclaimer":
    - /url: /rera-disclaimer
  - link "Terms & Conditions":
    - /url: /terms
  - link "Data Usage":
    - /url: /data-usage
  - link "Authorized Channel Partner":
    - /url: /authorized-partner
  - paragraph:
    - text: AU Cosmos Corner offers premium
    - strong: 3 BHK apartments in Siddharth Vihar Ghaziabad
    - text: ","
    - strong: 3 BHK+Servant luxury flats Ghaziabad
    - text: ", and"
    - strong: 5 BHK apartments Ghaziabad
    - text: at a pre-launch price of ₹6,900/sq ft. This
    - strong: RERA approved residential project in Ghaziabad
    - text: (UPRERAPRJ466336) by AU Real Estate Pvt. Ltd. features G+40 towers on 5.6 acres in
    - strong: Siddharth Vihar, Ghaziabad, Uttar Pradesh
    - text: . Marketed by Truelite Estates LLP, Authorized Channel Partner — Golden I Tower T3, Unit 314, Greater Noida West 201309. For
    - strong: 3 BHK flat booking in Ghaziabad
    - text: or
    - strong: luxury apartment investment near Delhi NCR
    - text: ", call 9711557670."
  - paragraph: "Marketed by Truelite Estates LLP — Authorized Channel Partner of AU Real Estate Pvt. Ltd. | RERA: UPRERAPRJ466336"
  - paragraph: © 2026 Truelite Estates LLP. Authorized Channel Partner of AU Real Estate Pvt. Ltd.
  - paragraph: "RERA: UPRERAPRJ466336 · omvir.shishodia@truelitestates.com"
- button "Download Brochure"
- button "Download Prices"
- link "WhatsApp":
  - /url: https://wa.me/9711557670?text=Hello%2C%20I%20am%20interested%20in%20buying%20a%20property%20at%20AU%20Real%20Estate.%20Please%20share%20details.
  - img "WhatsApp"
- button "Collapse lead form": ▼ Close
- paragraph: Get Best Price
- paragraph: AU Cosmos Corner · Free Callback
- textbox "Your Name"
- textbox "Phone Number"
- button "I'm Interested In... ▼"
- button "Get Best Price →"
- paragraph: 🔒 Your details are 100% secure
```

```
Error: page.waitForResponse: Test ended.
```

# Test source

```ts
  1  | /**
  2  |  * Shared test helpers — AU Cosmos Corner lead form E2E suite
  3  |  *
  4  |  * All test submissions use TEST_NAME_PREFIX in full_name so they can be
  5  |  * identified and deleted after the run without touching real leads.
  6  |  */
  7  | 
  8  | export const TEST_NAME_PREFIX = "[TEST]";
  9  | export const TEST_PHONE       = "9000000001";  // dummy 10-digit, unlikely to be real
  10 | export const TEST_EMAIL       = "e2e-test@test.invalid";
  11 | 
  12 | /** Name sent in every test submission */
  13 | export const testName = (label) => `${TEST_NAME_PREFIX} ${label}`;
  14 | 
  15 | /**
  16 |  * Supabase credentials (same as local-api.mjs).
  17 |  * Used only in the cleanup script — tests go through the real API endpoint.
  18 |  */
  19 | export const SUPABASE_URL     = "https://zmpjoxnsavmeeoabsskb.supabase.co";
  20 | export const SUPABASE_ANON_KEY =
  21 |   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptcGpveG5zYXZtZWVvYWJzc2tiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2OTg3NjgsImV4cCI6MjA5MzI3NDc2OH0.zvAhdB8VdRoTikWI763_GdhtJhiMcKMYRgRC2hmkylU";
  22 | 
  23 | /**
  24 |  * Wait for the next POST to /api/enquiry and return { status, body }.
  25 |  * Uses page.waitForResponse() which has a built-in timeout and handles
  26 |  * network failures gracefully (won't hang if the API is down).
  27 |  * Set this up BEFORE the action that triggers the submit.
  28 |  */
  29 | export async function captureEnquiry(page, timeout = 20_000) {
> 30 |   const response = await page.waitForResponse(
     |                               ^ Error: page.waitForResponse: Test ended.
  31 |     (res) => res.url().includes("/api/enquiry") && res.request().method() === "POST",
  32 |     { timeout }
  33 |   );
  34 |   const body = await response.json().catch(() => ({}));
  35 |   return { status: response.status(), body };
  36 | }
  37 | 
  38 | /**
  39 |  * Fill name + phone in the currently-visible form, pick interest via CustomSelect,
  40 |  * then submit. Uses page.evaluate() for both the option click and the submit
  41 |  * button click to bypass the modal backdrop's pointer-event interception.
  42 |  */
  43 | export async function fillAndSubmit(scope, { name, interestText = "3 BHK" } = {}) {
  44 |   await scope.locator('input[name="name"]').fill(name ?? testName("Auto"));
  45 |   await scope.locator('input[name="phone"]').fill(TEST_PHONE);
  46 | 
  47 |   const page = scope.page();
  48 |   const trigger = scope.locator('[data-testid="select-trigger-interest"]').first();
  49 | 
  50 |   if (await trigger.count() > 0) {
  51 |     // Open the dropdown via a real click on the trigger (trigger is not blocked by backdrop)
  52 |     await trigger.click();
  53 | 
  54 |     // Wait for options to appear in DOM
  55 |     await page.locator('[data-testid^="select-option-"]').first()
  56 |       .waitFor({ state: "attached", timeout: 5_000 });
  57 | 
  58 |     // Click the matching option via dispatchEvent (bypasses modal backdrop interception)
  59 |     await page.evaluate((text) => {
  60 |       const options = document.querySelectorAll('[data-testid^="select-option-"]');
  61 |       for (const opt of options) {
  62 |         if (opt.textContent?.includes(text)) {
  63 |           opt.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
  64 |           break;
  65 |         }
  66 |       }
  67 |     }, interestText);
  68 | 
  69 |     // Wait for React to process the click and close the dropdown
  70 |     await page.locator('[data-testid^="select-option-"]').first()
  71 |       .waitFor({ state: "detached", timeout: 3_000 })
  72 |       .catch(() => {});
  73 | 
  74 |     // Allow React to flush the async setForm() state update before submitting
  75 |     await page.waitForTimeout(300);
  76 |   }
  77 | 
  78 |   // Submit via requestSubmit() — programmatically submits the form, triggering React's
  79 |   // onSubmit handler. This bypasses the modal backdrop pointer-event interception.
  80 |   const submitted = await page.evaluate(() => {
  81 |     // Modal form takes priority; fall back to any form with a submit button
  82 |     const form = document.querySelector('.fixed.inset-0 form')
  83 |       || document.querySelector('form:has(button[type="submit"])');
  84 |     if (!form) return false;
  85 |     // requestSubmit() fires validation + submit event (React onSubmit)
  86 |     if (typeof form.requestSubmit === "function") {
  87 |       form.requestSubmit();
  88 |     } else {
  89 |       form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  90 |     }
  91 |     return true;
  92 |   });
  93 | 
  94 |   if (!submitted) {
  95 |     await scope.locator('button[type="submit"]').first().click({ force: true });
  96 |   }
  97 | }
  98 | 
```