import { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import SEO from './Components/SEO';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import OverviewSection from './Components/Overviewsection';
import AmenitiesSection from './Components/AmenitiesSection ';
import Projecthighlights from './Components/Projecthighlights';
import LocationGallery from './Components/Locationgallery ';
import Whychoosefaq from './Components/Whychoosefaq';
import ContactForm from './Components/Contactform';
import Footer from './Components/Footer ';
import ProjectGallery from './Components/Projectgallery';
import About from './Components/About ';
import SitePlan from './Components/SitePlan';
import CosmosCorner from './Components/CosmosCorner';
import ThankYou from './Components/ThankYou';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import ReraDisclaimer from './pages/ReraDisclaimer';
import TermsAndConditions from './pages/TermsAndConditions';
import DataUsage from './pages/DataUsage';
import AuthorizedPartner from './pages/AuthorizedPartner';
import FAQSection from './Components/FAQSection';

const floatingBtnBase = {
  position: "fixed",
  top: "50%",
  zIndex: 40,
  writingMode: "vertical-rl",
  fontSize: "11px",
  fontWeight: 800,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  padding: "18px 10px",
  border: "none",
  cursor: "pointer",
  fontFamily: "'Jost', sans-serif",
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateListing",
      "@id": "https://aucosmos.truelitestates.com/#listing",
      "name": "AU Cosmos Corner",
      "description": "Premium 3 BHK, 3 BHK+Servant and 5 BHK+Servant luxury apartments in Siddharth Vihar, Ghaziabad. G+36 towers on 5.6 acres. Pre-launch price ₹6900/sq ft. RERA: UPRERAPRJ466336.",
      "url": "https://aucosmos.truelitestates.com",
      "image": "https://aucosmos.truelitestates.com/og-image.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Siddharth Vihar",
        "addressLocality": "Ghaziabad",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201013",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.6692",
        "longitude": "77.4538"
      },
      "numberOfRooms": "3-5",
      "floorSize": {
        "@type": "QuantitativeValue",
        "minValue": 1780,
        "maxValue": 3175,
        "unitCode": "FTK"
      },
      "offers": {
        "@type": "Offer",
        "price": "6900",
        "priceCurrency": "INR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "6900",
          "priceCurrency": "INR",
          "referenceQuantity": { "@type": "QuantitativeValue", "value": 1, "unitCode": "FTK" }
        },
        "availability": "https://schema.org/PreOrder",
        "seller": {
          "@type": "RealEstateAgent",
          "name": "Truelite Estates LLP",
          "telephone": "+919711557670",
          "email": "omvir.shishodia@truelitestates.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Golden I Tower T3, Unit 314",
            "addressLocality": "Greater Noida West",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "201309",
            "addressCountry": "IN"
          }
        }
      },
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Swimming Pool", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Gymnasium", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Clubhouse", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Children Play Area", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "24/7 Security", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Modular Kitchen", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Split AC in All Bedrooms", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Wardrobes in All Bedrooms", "value": true }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://aucosmos.truelitestates.com/#business",
      "name": "Truelite Estates LLP",
      "description": "Authorized Channel Partner of AU Real Estate Pvt. Ltd. for AU Cosmos Corner, Ghaziabad.",
      "url": "https://aucosmos.truelitestates.com",
      "telephone": "+919711557670",
      "email": "omvir.shishodia@truelitestates.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Golden I Tower T3, Unit 314",
        "addressLocality": "Greater Noida West",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201309",
        "addressCountry": "IN"
      },
      "openingHours": "Mo-Su 09:00-19:00",
      "priceRange": "₹₹₹"
    },
    {
      "@type": "WebSite",
      "@id": "https://aucosmos.truelitestates.com/#website",
      "url": "https://aucosmos.truelitestates.com",
      "name": "AU Cosmos Corner — Truelite Estates LLP",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://aucosmos.truelitestates.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [modalSource, setModalSource] = useState("General");
  const [downloadBrochure, setDownloadBrochure] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const reopenTimerRef = useRef(null);
  const scrollTimerRef = useRef(null);
  const initialShownRef = useRef(false);

  // Auto-open popup after 3s on landing
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setModalSource("Auto Popup");
      setShowModal(true);
    }, 3000);
    return () => clearTimeout(initialTimer);
  }, []);

  // Show floating buttons after 4s, then toggle on scroll activity
  useEffect(() => {
    const btnTimer = setTimeout(() => {
      setButtonsVisible(true);
      initialShownRef.current = true;
    }, 4000);

    const handleScroll = () => {
      if (!initialShownRef.current) return;
      // Hide while scrolling
      setButtonsVisible(false);
      // Show again 1.5s after scroll stops
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = setTimeout(() => setButtonsVisible(true), 1500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(btnTimer);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Start 30s reopen timer when modal is closed
  const handleCloseModal = () => {
    setShowModal(false);
    setDownloadBrochure(false);
    setModalSource("General");
    if (reopenTimerRef.current) clearTimeout(reopenTimerRef.current);
    reopenTimerRef.current = setTimeout(() => {
      setModalSource("Auto Reopen");
      setShowModal(true);
    }, 30000);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => { if (reopenTimerRef.current) clearTimeout(reopenTimerRef.current); };
  }, []);

  return (
    <div className="App">
      <SEO
        title="3 BHK Luxury Apartments in Siddharth Vihar Ghaziabad | Pre-launch ₹6900/sq ft"
        description="Book 3 BHK, 3 BHK+Servant & 5 BHK+Servant luxury apartments at AU Cosmos Corner, Siddharth Vihar Ghaziabad. Pre-launch ₹6900/sq ft. G+36 towers, 5.6 acres. RERA: UPRERAPRJ466336. Call 9711557670."
        url="https://aucosmos.truelitestates.com"
        schema={homepageSchema}
      />

      {/* Fixed Navbar */}
      <Navbar onBookVisit={() => { setModalSource("Navbar"); setShowModal(true); }} />

      <div>
      <HeroSection onBookVisit={() => { setModalSource("Hero Section"); setShowModal(true); }} />


<OverviewSection onBookVisit={() => { setModalSource("Overview"); setShowModal(true); }} />
        <About />
        <SitePlan />
        <CosmosCorner onBookVisit={() => { setModalSource("Download Brochure from Collection"); setDownloadBrochure(true); setShowModal(true); }} />
        <AmenitiesSection />

        <Projecthighlights onBookVisit={() => { setModalSource("Project Highlights"); setShowModal(true); }} />
        <LocationGallery />
        {/* <Whychoosefaq onBookVisit={() => setShowModal(true)} /> */}
        <ProjectGallery />
        <FAQSection onBookVisit={() => { setModalSource("FAQ Section"); setShowModal(true); }} />
        <ContactForm onPhoneClick={() => { setModalSource("Contact Form Phone"); setShowModal(true); }} source="Contact Form" />
        <Footer onBookVisit={() => { setModalSource("Footer"); setShowModal(true); }} />
      </div>

      {/* Left Floating Button — Download Brochure */}
      <button
        onClick={() => { setModalSource("Download Brochure"); setDownloadBrochure(true); setShowModal(true); }}
        style={{
          ...floatingBtnBase,
          left: 0,
          transform: buttonsVisible ? "translateY(-50%) rotate(180deg) translateX(0)" : "translateY(-50%) rotate(180deg) translateX(-100%)",
          opacity: buttonsVisible ? 1 : 0,
          transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease",
          background: "#111",
          color: "#fff",
          boxShadow: "3px 0 12px rgba(0,0,0,0.25)",
        }}
        onMouseEnter={e => e.currentTarget.style.background = "#333"}
        onMouseLeave={e => e.currentTarget.style.background = "#111"}
      >
        Download Brochure
      </button>

      {/* Right Floating Button — Download Prices */}
      <button
        onClick={() => { setModalSource("Download Prices"); setDownloadBrochure(false); setShowModal(true); }}
        style={{
          ...floatingBtnBase,
          right: 0,
          transform: buttonsVisible ? "translateY(-50%) translateX(0)" : "translateY(-50%) translateX(100%)",
          opacity: buttonsVisible ? 1 : 0,
          transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease",
          background: "#eab308",
          color: "#111",
          boxShadow: "-3px 0 12px rgba(0,0,0,0.2)",
        }}
        onMouseEnter={e => e.currentTarget.style.background = "#ca8a04"}
        onMouseLeave={e => e.currentTarget.style.background = "#eab308"}
      >
        Download Prices
      </button>

      {/* WhatsApp Fixed Floating Button */}
      <a
        href="https://wa.me/9711557670?text=Hello%2C%20I%20am%20interested%20in%20buying%20a%20property%20at%20AU%20Real%20Estate.%20Please%20share%20details."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-5 z-50"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-14 h-14 drop-shadow-xl hover:scale-110 transition-transform duration-300"
        />
      </a>

      {/* Contact Form Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}

        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-4 text-white hover:text-yellow-400 text-3xl font-light z-10 bg-black/40 rounded-full w-9 h-9 flex items-center justify-center"
            >
              ✕
            </button>
         <ContactForm source={modalSource} downloadBrochure={downloadBrochure} />
          </div>
        </div>
      )}

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/rera-disclaimer" element={<ReraDisclaimer />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/data-usage" element={<DataUsage />} />
        <Route path="/authorized-partner" element={<AuthorizedPartner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
