import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, MessageSquare } from "lucide-react";
import { BUSINESS } from "../data/business";
import { getCourseEnquiryUrl } from "../utils/whatsapp";
import MobileMenu from "./MobileMenu";
import logo from "../assets/logo/logo.svg";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/advanced-makeup-course", label: "Academy Course" },
  { to: "/beautician-course", label: "Beautician Course" },
  { to: "/makeup-services", label: "Makeup Services" },
  { to: "/salon-services", label: "Salon Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "glass-nav shadow-md py-2 border-b border-brand-gold/10" 
        : "bg-brand-ivory py-4 border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo and Brand Title */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img 
            src={logo} 
            alt={BUSINESS.name} 
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-6">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
                  isActive 
                    ? "text-brand-gold font-semibold border-b-2 border-brand-gold" 
                    : "text-brand-charcoal hover:text-brand-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Call & WhatsApp CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center space-x-2 text-sm font-medium text-brand-charcoal hover:text-brand-gold transition-colors duration-200"
          >
            <Phone className="h-4 w-4 text-brand-gold" />
            <span>{BUSINESS.displayPhone}</span>
          </a>
          <a
            href={getCourseEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-5 py-2.5 bg-brand-gold text-white font-medium text-xs tracking-widest uppercase hover:bg-brand-goldDark transition-all duration-200 shadow-sm"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Enquire Now</span>
          </a>
        </div>

        {/* Mobile Toggle Menu */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="xl:hidden p-2 text-brand-charcoal hover:text-brand-gold transition-colors focus:outline-none"
          aria-label="Open mobile menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
