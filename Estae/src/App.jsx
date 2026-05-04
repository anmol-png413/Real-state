import { useState } from 'react'
import './App.css'
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

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">

      {/* Fixed Navbar */}
      <Navbar onBookVisit={() => setShowModal(true)} />

      {/* pt-20 — navbar ke neeche content overlap na ho */}
      <div>
        <HeroSection />

    <OverviewSection onBookVisit={() => setShowModal(true)} />
        <About />
        <SitePlan />
        <AmenitiesSection />

        <Projecthighlights  onBookVisit={() => setShowModal(true)}/>
        <LocationGallery />
     <Whychoosefaq onBookVisit={() => setShowModal(true)} />
        <ProjectGallery />
        <ContactForm />
        <Footer />
      </div>

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
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-white hover:text-yellow-400 text-3xl font-light z-10 bg-black/40 rounded-full w-9 h-9 flex items-center justify-center"
            >
              ✕
            </button>
            <ContactForm />
          </div>
        </div>
      )}

    </div>
  );
}

export default App;