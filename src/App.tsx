import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import StickyMobileCTA from "./components/StickyMobileCTA";

// Page Views
import Home from "./pages/Home";
import AdvancedMakeupCourse from "./pages/AdvancedMakeupCourse";
import BeauticianCourse from "./pages/BeauticianCourse";
import MakeupServices from "./pages/MakeupServices";
import SalonServices from "./pages/SalonServices";
import GalleryPage from "./pages/GalleryPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Scroll to Top on page change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-black text-brand-ivory">
      {/* Scroll listener */}
      <ScrollToTop />

      {/* Header Block */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advanced-makeup-course" element={<AdvancedMakeupCourse />} />
          <Route path="/beautician-course" element={<BeauticianCourse />} />
          <Route path="/makeup-services" element={<MakeupServices />} />
          <Route path="/salon-services" element={<SalonServices />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer Block */}
      <Footer />

      {/* Call & WhatsApp Floating CTA Widgets */}
      <WhatsAppButton />
      <StickyMobileCTA />
    </div>
  );
}
