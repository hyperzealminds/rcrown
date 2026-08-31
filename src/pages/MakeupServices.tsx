import { MessageSquare } from "lucide-react";
import { MAKEUP_SERVICES } from "../data/services";
import { getSalonEnquiryUrl } from "../utils/whatsapp";
import SEO from "../components/SEO";

export default function MakeupServices() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 text-brand-ivory bg-brand-black">
      <SEO
        title="Makeup Artist & Makeup Studio in Rajajinagar | R Crown"
        description="Book professional makeup services in Rajajinagar, Bangalore at R Crown. Elegant bridal, HD, party makeup, and hair styling services."
        canonicalUrl="https://rcrown.in/makeup-services"
      />

      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-brand-gold uppercase block">
          Studio Artistry
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-brand-ivory tracking-wide uppercase">
          Makeup Services
        </h1>
        <div className="w-12 h-[1.5px] bg-brand-gold mx-auto mt-4" />
        <p className="text-xs sm:text-sm text-[#A0A0A0] max-w-xl mx-auto font-light leading-relaxed">
          Flawless, camera-ready looks styled by our expert makeup artists using premium cosmetic brands.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        {MAKEUP_SERVICES.map((service) => (
          <div
            key={service.id}
            className="bg-brand-charcoal border border-brand-gold/15 shadow-2xl hover:border-brand-gold/45 transition duration-300 flex flex-col justify-between rounded-sm group"
          >
            {/* Service Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-black">
              <img
                src={service.imageUrl}
                alt={service.name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105 brightness-95"
              />
            </div>

            {/* Content block */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between text-left">
              <div className="space-y-3">
                <h3 className="text-xl font-serif text-brand-gold font-semibold uppercase tracking-wider">
                  {service.name}
                </h3>
                <p className="text-xs text-[#A0A0A0] leading-relaxed font-light font-sans">
                  {service.description}
                </p>
                {service.features && (
                  <ul className="space-y-2 pt-2 border-t border-brand-gold/10">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-[10px] text-brand-ivory/80 flex items-center space-x-2 font-medium">
                        <span className="text-brand-gold font-bold">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* CTA Button */}
              <a
                href={getSalonEnquiryUrl(service.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3.5 bg-brand-gold hover:bg-brand-goldDark text-brand-black font-bold text-xs tracking-widest uppercase transition shadow-md rounded-sm"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
