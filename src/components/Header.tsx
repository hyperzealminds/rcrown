import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, MessageSquare, ChevronDown } from "lucide-react";
import { BUSINESS } from "../data/business";
import { getCourseEnquiryUrl } from "../utils/whatsapp";
import MobileMenu from "./MobileMenu";
import logo from "../assets/logo/logo.svg";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  {
    label: "Academy",
    dropdown: [
      { to: "/about", label: "About Academy" },
      { to: "/gallery", label: "Student Portfolios" }
    ]
  },
  {
    label: "Courses",
    dropdown: [
      { to: "/advanced-makeup-course", label: "Advanced Makeup & Beautician" },
      { to: "/beautician-course", label: "Professional Beautician" }
    ]
  },
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
        ? "glass-nav shadow-lg py-2 border-b border-brand-gold/15" 
        : "bg-brand-black/90 py-4 border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo and Brand Title */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img 
            src={logo} 
            alt={BUSINESS.name} 
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-0 invert" 
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-6">
          {NAV_LINKS.map((link, index) => {
            if (link.dropdown) {
              const hasActiveChild = link.dropdown.some(child => location.pathname === child.to);
              return (
                <div key={index} className="relative group py-2">
                  <button
                    className={`flex items-center space-x-1 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 ${
                      hasActiveChild ? "text-brand-gold" : "text-brand-ivory/90 hover:text-brand-gold"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="h-3 w-3 text-brand-gold" />
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-56 bg-brand-charcoal border border-brand-gold/15 shadow-2xl rounded-sm py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                    {link.dropdown.map((child, cIdx) => (
                      <Link
                        key={cIdx}
                        to={child.to}
                        className={`block px-4 py-2.5 text-[11px] font-semibold tracking-wider uppercase hover:bg-brand-gold hover:text-brand-black transition-colors ${
                          location.pathname === child.to ? "text-brand-gold font-bold" : "text-brand-ivory/80"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to || index}
                to={link.to!}
                className={`text-xs font-semibold tracking-widest uppercase transition-all duration-200 py-1 ${
                  isActive 
                    ? "text-brand-gold font-bold border-b border-brand-gold" 
                    : "text-brand-ivory/90 hover:text-brand-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Call & WhatsApp CTAs */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-brand-ivory/90 hover:text-brand-gold transition-colors duration-200"
          >
            <Phone className="h-4 w-4 text-brand-gold" />
            <span>{BUSINESS.displayPhone}</span>
          </a>
          <a
            href={getCourseEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-5 py-3 bg-brand-gold hover:bg-brand-goldDark text-brand-black font-semibold text-xs tracking-widest uppercase transition-all duration-200 shadow-md rounded-sm"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Enquire Now</span>
          </a>
        </div>

        {/* Mobile Toggle Menu */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="xl:hidden p-2 text-brand-ivory hover:text-brand-gold transition-colors focus:outline-none"
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
