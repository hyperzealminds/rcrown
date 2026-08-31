import { Phone, MessageSquare, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { BUSINESS } from "../data/business";

export default function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around h-16 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      
      {/* Call Button */}
      <a
        href={`tel:${BUSINESS.phone}`}
        className="flex flex-col items-center justify-center flex-1 h-full bg-brand-maroon text-[#F5F0E6] active:bg-brand-maroonDark transition-colors"
      >
        <Phone className="h-4 w-4" />
        <span className="text-[10px] font-bold tracking-widest uppercase mt-1">Call Us</span>
        <span className="text-[8px] opacity-75">{BUSINESS.displayPhone}</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919739333768"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center flex-1 h-full bg-[#128C7E] text-white active:bg-[#0e6b60] transition-colors border-x border-[#000000]/10"
      >
        <MessageSquare className="h-4 w-4" />
        <span className="text-[10px] font-bold tracking-widest uppercase mt-1">WhatsApp Now</span>
        <span className="text-[8px] opacity-75">Chat with us</span>
      </a>

      {/* Course Details Redirect */}
      <Link
        to="/advanced-makeup-course"
        className="flex flex-col items-center justify-center flex-1 h-full bg-brand-gold text-brand-black active:bg-brand-goldDark transition-colors"
      >
        <GraduationCap className="h-4 w-4" />
        <span className="text-[10px] font-bold tracking-widest uppercase mt-1">Enquire Now</span>
        <span className="text-[8px] opacity-80 font-medium">Get Course Details</span>
      </Link>

    </div>
  );
}
