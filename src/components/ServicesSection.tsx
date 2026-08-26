import { Link } from "react-router-dom";
import { Sparkles, Scissors, MessageSquare, ArrowRight } from "lucide-react";
import { MAKEUP_SERVICES, SALON_SERVICES } from "../data/services";
import { getSalonEnquiryUrl } from "../utils/whatsapp";

export default function ServicesSection() {
  // Show a preview of 3 makeup services and 3 salon services on home page
  const makeupPreview = MAKEUP_SERVICES.slice(0, 3);
  const salonPreview = SALON_SERVICES.slice(0, 3);

  return (
    <section className="bg-white border-y border-brand-gold/10 py-16 sm:py-24 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* SECTION 1: MAKEUP SERVICES (70% Focus Vertical) */}
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-brand-gold/15 pb-4">
            <div className="text-center md:text-left space-y-2">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-brand-gold">
                <Sparkles className="h-5 w-5" />
                <span className="text-xs font-semibold tracking-widest uppercase">70% Focus Vertical</span>
              </div>
              <h2 className="text-3xl font-serif text-brand-black uppercase">
                PROFESSIONAL MAKEUP SERVICES
              </h2>
            </div>
            <Link
              to="/makeup-services"
              className="text-xs font-bold tracking-widest text-brand-gold hover:text-brand-goldDark uppercase flex items-center space-x-1"
            >
              <span>View All Makeup Studio Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {makeupPreview.map((service) => (
              <div key={service.id} className="border border-brand-gold/10 bg-brand-ivory/20 flex flex-col justify-between">
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-cream">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-1 text-left">
                    <h3 className="font-serif text-lg text-brand-black font-semibold uppercase">{service.name}</h3>
                    <p className="text-xs text-brand-charcoal/85 leading-relaxed">{service.description}</p>
                  </div>
                  <a
                    href={getSalonEnquiryUrl(service.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-2.5 bg-brand-charcoal hover:bg-brand-black text-white text-xs font-semibold tracking-wider uppercase transition shadow-sm"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: SALON SERVICES (30% Focus Vertical) */}
        <div className="space-y-10 pt-10 border-t border-brand-gold/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-brand-gold/15 pb-4">
            <div className="text-center md:text-left space-y-2">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-brand-gold">
                <Scissors className="h-5 w-5" />
                <span className="text-xs font-semibold tracking-widest uppercase">Secondary Vertical</span>
              </div>
              <h2 className="text-3xl font-serif text-brand-black uppercase">
                R CROWN SALON &amp; SKIN
              </h2>
            </div>
            <Link
              to="/salon-services"
              className="text-xs font-bold tracking-widest text-brand-gold hover:text-brand-goldDark uppercase flex items-center space-x-1"
            >
              <span>View All Salon Treatments</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {salonPreview.map((service) => (
              <div key={service.id} className="border border-brand-gold/10 bg-brand-ivory/20 flex flex-col justify-between">
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-cream">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover transition duration-300 hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-brand-black/85 text-white text-[8px] font-bold tracking-widest uppercase px-2 py-0.5 border border-brand-gold/25">
                    {service.category}
                  </span>
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-1 text-left">
                    <h3 className="font-serif text-lg text-brand-black font-semibold uppercase">{service.name}</h3>
                    <p className="text-xs text-brand-charcoal/85 leading-relaxed">{service.description}</p>
                  </div>
                  <a
                    href={getSalonEnquiryUrl(service.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-2.5 bg-brand-charcoal hover:bg-brand-black text-white text-xs font-semibold tracking-wider uppercase transition shadow-sm"
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
