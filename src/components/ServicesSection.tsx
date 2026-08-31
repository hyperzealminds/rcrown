import { Link } from "react-router-dom";
import { Sparkles, Scissors, MessageSquare, ArrowRight } from "lucide-react";
import { MAKEUP_SERVICES, SALON_SERVICES } from "../data/services";
import { getSalonEnquiryUrl } from "../utils/whatsapp";

export default function ServicesSection() {
  // Show a preview of 3 makeup services and 3 salon services on home page
  const makeupPreview = MAKEUP_SERVICES.slice(0, 3);
  const salonPreview = SALON_SERVICES.slice(0, 3);

  return (
    <section className="bg-brand-black border-y border-brand-gold/15 py-20 sm:py-28 space-y-20 text-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* SECTION 1: MAKEUP SERVICES */}
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-brand-gold/15 pb-6">
            <div className="text-center md:text-left space-y-2">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-brand-gold">
                <Sparkles className="h-4 w-4" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase">Signature Makeovers</span>
              </div>
              <h2 className="text-3xl font-serif text-brand-ivory uppercase tracking-wider">
                PROFESSIONAL MAKEUP SERVICES
              </h2>
            </div>
            <Link
              to="/makeup-services"
              className="text-xs font-bold tracking-widest text-brand-gold hover:text-brand-goldDark uppercase flex items-center space-x-1.5 border-b border-brand-gold/10 pb-0.5 hover:border-brand-gold"
            >
              <span>View All Makeup Studio Services</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {makeupPreview.map((service) => (
              <div key={service.id} className="border border-brand-gold/15 bg-brand-charcoal hover:border-brand-gold/45 hover:shadow-2xl transition duration-300 flex flex-col justify-between rounded-sm group">
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-black">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105 brightness-95"
                  />
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2 text-left">
                    <h3 className="font-serif text-lg text-brand-gold font-semibold uppercase tracking-wider">{service.name}</h3>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed font-light font-sans">{service.description}</p>
                  </div>
                  <a
                    href={getSalonEnquiryUrl(service.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-3 bg-brand-gold hover:bg-brand-goldDark text-brand-black text-xs font-bold tracking-widest uppercase transition shadow-md rounded-sm"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: SALON SERVICES */}
        <div className="space-y-10 pt-10 border-t border-brand-gold/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-brand-gold/15 pb-6">
            <div className="text-center md:text-left space-y-2">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-brand-gold">
                <Scissors className="h-4 w-4" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase">Essential Hair &amp; Skin Care</span>
              </div>
              <h2 className="text-3xl font-serif text-brand-ivory uppercase tracking-wider">
                R CROWN SALON &amp; SKIN
              </h2>
            </div>
            <Link
              to="/salon-services"
              className="text-xs font-bold tracking-widest text-brand-gold hover:text-brand-goldDark uppercase flex items-center space-x-1.5 border-b border-brand-gold/10 pb-0.5 hover:border-brand-gold"
            >
              <span>View All Salon Treatments</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {salonPreview.map((service) => (
              <div key={service.id} className="border border-brand-gold/15 bg-brand-charcoal hover:border-brand-gold/45 hover:shadow-2xl transition duration-300 flex flex-col justify-between rounded-sm group">
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-black">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105 brightness-95"
                  />
                  <span className="absolute top-3 left-3 bg-brand-black border border-brand-gold/25 text-brand-gold text-[8px] font-bold tracking-widest uppercase px-2.5 py-1">
                    {service.category}
                  </span>
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2 text-left">
                    <h3 className="font-serif text-lg text-brand-gold font-semibold uppercase tracking-wider">{service.name}</h3>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed font-light font-sans">{service.description}</p>
                  </div>
                  <a
                    href={getSalonEnquiryUrl(service.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-3 bg-brand-gold hover:bg-brand-goldDark text-brand-black text-xs font-bold tracking-widest uppercase transition shadow-md rounded-sm"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
