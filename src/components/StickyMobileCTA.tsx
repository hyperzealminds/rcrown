import { Phone, MessageSquare, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { BUSINESS } from "../data/business";
import { getCourseEnquiryUrl } from "../utils/whatsapp";

export default function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-brand-gold/15 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] flex items-center justify-around h-16">
      
      {/* Call Button */}
      <a
        href={`tel:${BUSINESS.phone}`}
        className="flex flex-col items-center justify-center flex-1 h-full text-brand-charcoal active:text-brand-gold hover:text-brand-gold transition-colors"
      >
        <Phone className="h-5 w-5 text-brand-gold" />
        <span className="text-[10px] font-bold tracking-wider uppercase mt-1">Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={getCourseEnquiryUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center flex-1 h-full bg-brand-gold text-white active:bg-brand-goldDark transition-colors"
      >
        <MessageSquare className="h-5 w-5" />
        <span className="text-[10px] font-bold tracking-wider uppercase mt-1">WhatsApp</span>
      </a>

      {/* Course Details Redirect */}
      <Link
        to="/advanced-makeup-course"
        className="flex flex-col items-center justify-center flex-1 h-full text-brand-charcoal active:text-brand-gold hover:text-brand-gold transition-colors"
      >
        <GraduationCap className="h-5 w-5 text-brand-gold" />
        <span className="text-[10px] font-bold tracking-wider uppercase mt-1">Course</span>
      </Link>

    </div>
  );
}
