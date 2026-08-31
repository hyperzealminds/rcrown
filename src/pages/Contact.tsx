import { Phone, MapPin, MessageSquare, Clock } from "lucide-react";
import { BUSINESS } from "../data/business";
import { getCourseEnquiryUrl } from "../utils/whatsapp";
import EnquiryForm from "../components/EnquiryForm";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 text-brand-ivory bg-brand-black">
      <SEO
        title="Contact R Crown Salon | Rajajinagar, Bangalore"
        description="Contact R Crown Salon & Makeup Studio. Call or WhatsApp +91 97393 33768. Find our address and register for makeup & beautician academy courses."
        canonicalUrl="https://rcrown.in/contact"
      />

      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-serif text-brand-ivory tracking-wide uppercase">
          CONTACT R CROWN
        </h1>
        <div className="w-12 h-[1.5px] bg-brand-gold mx-auto mt-4" />
        <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-brand-gold uppercase block">
          Get in Touch for Admissions &amp; Services
        </span>
        <p className="text-xs sm:text-sm text-[#A0A0A0] max-w-xl mx-auto leading-relaxed font-light">
          Have questions about the Advanced Makeup &amp; Beautician Course, fees, or kit inclusions? Fill out our form or reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-4">
        {/* Contact details */}
        <div className="space-y-8 text-left">
          <h2 className="text-2xl font-serif text-brand-gold uppercase border-b border-brand-gold/15 pb-4">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone Card */}
            <div className="p-6 border border-brand-gold/15 bg-brand-charcoal space-y-3 shadow-2xl rounded-sm">
              <Phone className="h-6 w-6 text-brand-gold" />
              <h4 className="font-bold text-xs uppercase text-brand-ivory tracking-wider">Call Directly</h4>
              <a href={`tel:${BUSINESS.phone}`} className="text-xs text-brand-gold hover:text-brand-goldDark font-bold block">
                {BUSINESS.displayPhone}
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 border border-brand-gold/15 bg-brand-charcoal space-y-3 shadow-2xl rounded-sm">
              <MessageSquare className="h-6 w-6 text-brand-gold" />
              <h4 className="font-bold text-xs uppercase text-brand-ivory tracking-wider">WhatsApp Chat</h4>
              <a
                href={getCourseEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand-gold hover:text-brand-goldDark font-bold block"
              >
                Start Chat Now
              </a>
            </div>

            {/* Location Card */}
            <div className="p-6 border border-brand-gold/15 bg-brand-charcoal space-y-3 shadow-2xl rounded-sm sm:col-span-2">
              <MapPin className="h-6 w-6 text-brand-gold" />
              <h4 className="font-bold text-xs uppercase text-brand-ivory tracking-wider">Academy Location</h4>
              <p className="text-xs text-[#A0A0A0] leading-relaxed font-light font-sans">
                {BUSINESS.address}
              </p>
            </div>
          </div>

          {/* Simple Static Map Info or Hours */}
          <div className="p-6 bg-[#151515] border border-brand-gold/15 space-y-4 rounded-sm">
            <div className="flex items-center space-x-2 text-brand-gold">
              <Clock className="h-5 w-5 text-brand-gold" />
              <h4 className="font-bold text-xs uppercase tracking-widest">Business Hours</h4>
            </div>
            <ul className="text-xs space-y-3.5 text-brand-ivory/80 font-medium">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="font-light text-[#A0A0A0]">Academy Batches:</span>
                <span className="font-bold text-brand-gold">10:00 AM - 05:00 PM (Mon-Sat)</span>
              </li>
              <li className="flex justify-between">
                <span className="font-light text-[#A0A0A0]">Salon Appointments:</span>
                <span className="font-bold text-brand-gold">10:00 AM - 07:00 PM (All Days)</span>
              </li>
            </ul>
            <div className="pt-3 border-t border-brand-gold/10 text-[9px] text-[#808080] uppercase tracking-wider">
              *Appointments are subject to slot confirmations. Academy batch admissions are prioritized.
            </div>
          </div>
        </div>

        {/* Enquiry form wrapper */}
        <div>
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
}
