import { Link } from "react-router-dom";
import { Phone, MapPin, Globe } from "lucide-react";

function InstagramIcon({ className = "h-5 w-5 text-white" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}
import { BUSINESS } from "../data/business";
import logo from "../assets/logo/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-[#B0B0B0] border-t border-brand-gold/20 pt-16 pb-28 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Block */}
        <div className="space-y-6">
          <Link to="/" className="inline-block">
            {/* Filter to invert logo text for black background */}
            <img 
              src={logo} 
              alt={BUSINESS.name} 
              className="h-14 w-auto object-contain brightness-0 invert" 
            />
          </Link>
          <p className="text-sm leading-relaxed text-[#8E8E8E]">
            {BUSINESS.tagline}. Leading beauty and makeup training center in Rajajinagar, Bengaluru. Learn beauty skills under professional mentorship.
          </p>
          <div className="flex space-x-4">
            <a 
              href={BUSINESS.instagramPrimary.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-brand-charcoal hover:bg-brand-gold hover:text-brand-black transition-colors duration-200"
              aria-label="Instagram Academy"
            >
              <InstagramIcon className="h-5 w-5 text-brand-ivory hover:text-brand-black" />
            </a>
            <a 
              href={BUSINESS.instagramSecondary.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-brand-charcoal hover:bg-brand-gold hover:text-brand-black transition-colors duration-200"
              aria-label="Instagram Artistry"
            >
              <InstagramIcon className="h-5 w-5 text-brand-ivory hover:text-brand-black" />
            </a>
          </div>
        </div>

        {/* Links Column 1: Academy & Courses */}
        <div>
          <h3 className="font-serif text-white text-lg font-semibold tracking-wider uppercase mb-6 border-b border-brand-gold/10 pb-2">Academy</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/advanced-makeup-course" className="hover:text-brand-gold transition-colors duration-200">
                Advanced Makeup &amp; Beautician Course
              </Link>
            </li>
            <li>
              <Link to="/beautician-course" className="hover:text-brand-gold transition-colors duration-200">
                Beautician Training Course
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-brand-gold transition-colors duration-200">
                Student Portfolios
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-brand-gold transition-colors duration-200">
                About our Academy
              </Link>
            </li>
          </ul>
        </div>

        {/* Links Column 2: Salon Services */}
        <div>
          <h3 className="font-serif text-white text-lg font-semibold tracking-wider uppercase mb-6 border-b border-brand-gold/10 pb-2">Salon Services</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/makeup-services" className="hover:text-brand-gold transition-colors duration-200">
                Bridal &amp; HD Makeup Studio
              </Link>
            </li>
            <li>
              <Link to="/salon-services" className="hover:text-brand-gold transition-colors duration-200">
                Hair Treatments &amp; Color
              </Link>
            </li>
            <li>
              <Link to="/salon-services" className="hover:text-brand-gold transition-colors duration-200">
                Skin Facials &amp; Beauty Spa
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-brand-gold transition-colors duration-200">
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Block */}
        <div>
          <h3 className="font-serif text-white text-lg font-semibold tracking-wider uppercase mb-6 border-b border-brand-gold/10 pb-2">Contact Us</h3>
          <ul className="space-y-4 text-sm text-[#8E8E8E]">
            <li className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
              <span>{BUSINESS.address}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-brand-gold shrink-0" />
              <a href={`tel:${BUSINESS.phone}`} className="hover:text-brand-gold transition-colors text-white">
                {BUSINESS.displayPhone}
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Globe className="h-5 w-5 text-brand-gold shrink-0" />
              <a href={BUSINESS.website} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                rcrown.in
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Local SEO Citations and Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-brand-charcoal/40 text-center text-xs space-y-4">
        <p className="text-[#6E6E6E] font-medium tracking-wide">
          R Crown Salon &amp; Makeup Studio | Professional Makeup &amp; Beautician Training Academy in Rajajinagar, Bangalore
        </p>
        <p className="text-[#555555]">
          &copy; {new Date().getFullYear()} R Crown. All Rights Reserved. Designed for Aspiring Artists in Bengaluru.
        </p>
      </div>
    </footer>
  );
}
