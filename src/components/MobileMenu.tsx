import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Phone, MessageSquare } from "lucide-react";

function InstagramIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}
import { BUSINESS } from "../data/business";
import { getCourseEnquiryUrl } from "../utils/whatsapp";
import { NAV_LINKS } from "./Header";
import logo from "../assets/logo/logo.svg";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();

  // Close drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Close menu when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 xl:hidden">
      {/* Semi-transparent Backdrop Overlay */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-brand-black/60 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Drawer Drawer Body */}
      <div className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-brand-ivory shadow-2xl flex flex-col justify-between border-l border-brand-gold/10 z-10 transition-transform duration-300 ease-out translate-x-0">
        
        {/* Header Block */}
        <div>
          <div className="p-4 flex items-center justify-between border-b border-brand-gold/10 bg-white">
            <img src={logo} alt="R Crown" className="h-10 w-auto object-contain" />
            <button 
              onClick={onClose}
              className="p-2 text-brand-charcoal hover:text-brand-gold focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-6 flex flex-col space-y-4">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-base font-medium uppercase tracking-wider py-2 transition-colors ${
                    isActive 
                      ? "text-brand-gold font-bold border-b border-brand-gold/30" 
                      : "text-brand-charcoal hover:text-brand-gold"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Block with Contacts & Socials */}
        <div className="p-6 border-t border-brand-gold/10 bg-white space-y-6">
          <div className="flex flex-col space-y-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center justify-center space-x-3 w-full py-3 border border-brand-charcoal/20 text-brand-charcoal text-sm font-semibold uppercase tracking-wider hover:bg-brand-charcoal hover:text-white transition-all duration-200"
            >
              <Phone className="h-4 w-4" />
              <span>Call Us</span>
            </a>
            <a
              href={getCourseEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 w-full py-3 bg-brand-gold text-white text-sm font-semibold uppercase tracking-wider hover:bg-brand-goldDark transition-all duration-200 shadow-sm"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          {/* Instagram links */}
          <div className="flex justify-center space-x-6 text-brand-charcoal">
            <a 
              href={BUSINESS.instagramPrimary.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-brand-gold transition-colors"
              aria-label="Instagram Academy"
            >
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a 
              href={BUSINESS.instagramSecondary.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-brand-gold transition-colors"
              aria-label="Instagram Artistry"
            >
              <InstagramIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
