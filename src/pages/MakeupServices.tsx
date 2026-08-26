import { MessageSquare } from "lucide-react";
import { MAKEUP_SERVICES } from "../data/services";
import { getSalonEnquiryUrl } from "../utils/whatsapp";
import SEO from "../components/SEO";

export default function MakeupServices() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <SEO
        title="Makeup Artist & Makeup Studio in Rajajinagar | R Crown"
        description="Book professional makeup services in Rajajinagar, Bangalore at R Crown. Elegant bridal, HD, party makeup, and hair styling services."
        canonicalUrl="https://rcrown.in/makeup-services"
      />

      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
          Studio Artistry
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-brand-black tracking-wide uppercase">
          Makeup Services
        </h1>
        <p className="text-sm text-brand-charcoal/70 max-w-xl mx-auto leading-relaxed">
          Flawless, camera-ready look styled by our expert makeup artists using premium cosmetic brands.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MAKEUP_SERVICES.map((service) => (
          <div
            key={service.id}
            className="bg-white border border-brand-gold/15 shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            {/* Service Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-cream">
              <img
                src={service.imageUrl}
                alt={service.name}
                className="w-full h-full object-cover transition duration-300 hover:scale-105"
              />
            </div>

            {/* Content block */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-serif text-brand-black font-semibold uppercase">
                  {service.name}
                </h3>
                <p className="text-xs text-brand-charcoal/80 leading-relaxed">
                  {service.description}
                </p>
                {service.features && (
                  <ul className="space-y-1 pt-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-[10px] text-brand-charcoal/60 flex items-center space-x-2 font-medium">
                        <span className="text-brand-gold">•</span>
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
                className="w-full flex items-center justify-center space-x-2 py-3 bg-brand-charcoal hover:bg-brand-black text-white font-semibold text-xs tracking-widest uppercase transition shadow-sm"
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
