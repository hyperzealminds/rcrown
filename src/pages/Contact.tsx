import { Phone, MapPin, MessageSquare, Clock } from "lucide-react";
import { BUSINESS } from "../data/business";
import { getCourseEnquiryUrl } from "../utils/whatsapp";
import EnquiryForm from "../components/EnquiryForm";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <SEO
        title="Contact R Crown Salon | Rajajinagar, Bangalore"
        description="Contact R Crown Salon & Makeup Studio. Call or WhatsApp +91 97393 33768. Find our address and register for makeup & beautician academy courses."
        canonicalUrl="https://rcrown.in/contact"
      />

      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-serif text-brand-black tracking-wide uppercase">
          CONTACT R CROWN
        </h1>
        <p className="text-sm font-semibold tracking-widest text-brand-gold uppercase">
          Get in Touch for Admissions &amp; Services
        </p>
        <p className="text-sm text-brand-charcoal/70 max-w-xl mx-auto leading-relaxed">
          Have questions about the Advanced Makeup &amp; Beautician Course, fees, or kit inclusions? Fill out our form or reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact details */}
        <div className="space-y-8">
          <h2 className="text-2xl font-serif text-brand-black uppercase border-b border-brand-gold/10 pb-3">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone Card */}
            <div className="p-5 border border-brand-gold/15 bg-white space-y-3 shadow-sm">
              <Phone className="h-6 w-6 text-brand-gold" />
              <h4 className="font-semibold text-sm uppercase text-brand-charcoal tracking-wide">Call Directly</h4>
              <a href={`tel:${BUSINESS.phone}`} className="text-sm text-brand-gold hover:text-brand-goldDark font-medium">
                {BUSINESS.displayPhone}
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="p-5 border border-brand-gold/15 bg-white space-y-3 shadow-sm">
              <MessageSquare className="h-6 w-6 text-brand-gold" />
              <h4 className="font-semibold text-sm uppercase text-brand-charcoal tracking-wide">WhatsApp Chat</h4>
              <a
                href={getCourseEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-gold hover:text-brand-goldDark font-medium"
              >
                Start Chat
              </a>
            </div>

            {/* Location Card */}
            <div className="p-5 border border-brand-gold/15 bg-white space-y-3 shadow-sm sm:col-span-2">
              <MapPin className="h-6 w-6 text-brand-gold" />
              <h4 className="font-semibold text-sm uppercase text-brand-charcoal tracking-wide">Academy Location</h4>
              <p className="text-xs text-brand-charcoal/80 leading-relaxed">
                {BUSINESS.address}
              </p>
            </div>
          </div>

          {/* Simple Static Map Info or Hours */}
          <div className="p-6 bg-brand-cream border border-brand-gold/10 space-y-4">
            <div className="flex items-center space-x-2 text-brand-charcoal">
              <Clock className="h-5 w-5 text-brand-gold" />
              <h4 className="font-bold text-sm uppercase tracking-wider">Business Hours</h4>
            </div>
            <ul className="text-xs space-y-2 text-brand-charcoal/80 font-medium">
              <li className="flex justify-between">
                <span>Academy Batches:</span>
                <span>10:00 AM - 05:00 PM (Mon-Sat)</span>
              </li>
              <li className="flex justify-between">
                <span>Salon Appointments:</span>
                <span>10:00 AM - 07:00 PM (All Days)</span>
              </li>
            </ul>
            <div className="pt-2 border-t border-brand-gold/10 text-[10px] text-brand-charcoal/60">
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
